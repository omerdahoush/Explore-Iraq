export async function searchFlights(params: Record<string, string>) {
  const url = `https://${import.meta.env.VITE_RAPID_HOST}/search`;

  const headers = {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPID_HOST
  };

  const fullUrl = url + "?" + new URLSearchParams(params);
  console.log("🔍 Fetching:", fullUrl);

  const response = await fetch(fullUrl, {
    method: "GET",
    headers
  });

  const text = await response.text();
  console.log("📡 Server reply:", text);

  if (!response.ok) {
    throw new Error("Server error: " + text);
  }

  return JSON.parse(text);
}
// src/services/flightsApi.ts
export type SearchParams = {
  origin: string;        // IATA code e.g. "BAG"
  destination: string;   // IATA code e.g. "IST"
  outboundDate: string;  // YYYY-MM-DD
  inboundDate?: string;  // YYYY-MM-DD (optional for one-way)
  adults?: number;
  currency?: string;
  locale?: string;
};

type RawResponse = any; // keep flexible; we'll normalize in the service

function headers() {
  return {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY as string,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST as string,
    // some RapidAPI wrappers want a JSON Accept header
    "Accept": "application/json"
  };
}

function buildQuery(params: Record<string, string | number | undefined>) {
  const q = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== "") q.set(k, String(v));
  });
  return q.toString();
}

/**
 * Try to do a roundtrip search. If the response lacks a clear inbound leg,
 * perform a second call swapping origin/destination for the return leg.
 *
 * Note: Different RapidAPI Skyscanner wrappers vary: some provide a single roundtrip result,
 * others return only outbound and require polling/extra calls. We try to be robust.
 */
export async function searchRoundtrip(params: SearchParams) {
  const host = import.meta.env.VITE_RAPIDAPI_HOST as string;
  if (!host) throw new Error("VITE_RAPIDAPI_HOST is not set in environment.");

  // Preferred endpoint (adjust if your RapidAPI listing uses a different route)
  const base = `https://${host}/flights/search-roundtrip`;
  const query = buildQuery({
    origin: params.origin,
    destination: params.destination,
    outboundDate: params.outboundDate,
    inboundDate: params.inboundDate,
    adults: params.adults ?? 1,
    currency: params.currency ?? "USD",
    locale: params.locale ?? "en-US"
  });

  const fullUrl = base + "?" + query;
  console.log("🔍 searchRoundtrip ->", fullUrl);

  const res = await fetch(fullUrl, { method: "GET", headers: headers() });
  const text = await res.text();
  console.log("📡 searchRoundtrip raw response:", res.status, text);

  if (!res.ok) {
    // throw server message to surface real error during development
    throw new Error(`Search failed: ${res.status} ${text}`);
  }

  let json: RawResponse;
  try {
    json = JSON.parse(text);
  } catch (e) {
    throw new Error("Invalid JSON from searchRoundtrip: " + e);
  }

  // Heuristic: detect if inbound/return results are missing
  const hasInbound = detectInbound(json);

  if (hasInbound) {
    return normalizeResults(json);
  }

  // If inbound not present, attempt separate return query (swap origin/destination)
  if (params.inboundDate) {
    console.log("↩️ inbound missing — doing separate return search by swapping origin/destination");
    const returnUrlBase = `https://${host}/flights/search-one-way`;
    const returnQuery = buildQuery({
      origin: params.destination,
      destination: params.origin,
      outboundDate: params.inboundDate,
      adults: params.adults ?? 1,
      currency: params.currency ?? "USD",
      locale: params.locale ?? "en-US"
    });
    const returnFull = returnUrlBase + "?" + returnQuery;
    console.log("🔁 return search ->", returnFull);

    const rres = await fetch(returnFull, { method: "GET", headers: headers() });
    const rtext = await rres.text();
    console.log("📡 return raw response:", rres.status, rtext);

    if (!rres.ok) {
      throw new Error(`Return search failed: ${rres.status} ${rtext}`);
    }

    let rjson: RawResponse;
    try {
      rjson = JSON.parse(rtext);
    } catch (e) {
      throw new Error("Invalid JSON from return search: " + e);
    }

    // Merge outbound + inbound (best-effort) into a combined normalized shape
    return combineOutboundInbound(normalizeResults(json), normalizeResults(rjson));
  }

  // If no inboundDate provided, simply return whatever outbound we have
  return normalizeResults(json);
}

/**
 * Very small heuristic to check whether the provider returned inbound flights.
 * The actual field names vary across wrappers; check common places.
 */
function detectInbound(raw: any): boolean {
  if (!raw) return false;
  // common patterns
  if (Array.isArray(raw.inbound) && raw.inbound.length > 0) return true;
  if (raw.data && Array.isArray(raw.data.inbound) && raw.data.inbound.length > 0) return true;
  // sometimes the response is an array where each item has legs
  if (Array.isArray(raw) && raw.some(r => r.inbound || r.return)) return true;
  return false;
}

/**
 * Normalize provider-specific shape to a friendly minimal structure we display in the UI.
 * Adjust mappings if your specific RapidAPI wrapper returns different field names.
 */
function normalizeResults(raw: any) {
  // Attempt to find results array in common places
  let hits: any[] = [];
  if (Array.isArray(raw)) hits = raw;
  else if (Array.isArray(raw.results)) hits = raw.results;
  else if (Array.isArray(raw.data)) hits = raw.data;
  else if (raw.outbound && Array.isArray(raw.outbound)) hits = raw.outbound;
  else if (raw.flights && Array.isArray(raw.flights)) hits = raw.flights;

  // fallback: wrap object
  if (hits.length === 0 && typeof raw === "object") hits = [raw];

  const mapped = hits.map((f: any) => ({
    id: f.id || f.flight_id || f.quote_id || Math.random().toString(36).slice(2, 9),
    airline: f.airline || f.carrier || f.airline_name || (f.segments && f.segments[0]?.airline) || "Unknown",
    price: f.price?.amount || f.price || f.price_total || f.fare || (f.price && f.price.total) || "N/A",
    origin: f.origin || f.from || f.departure_airport || f.departure?.iata || (f.segments && f.segments[0]?.from) || "",
    destination: f.destination || f.to || f.arrival_airport || f.arrival?.iata || (f.segments && f.segments[0]?.to) || "",
    departure: f.departure || f.departure_time || f.outbound?.departure || f.outbound?.datetime || "",
    arrival: f.arrival || f.arrival_time || f.outbound?.arrival || "",
    duration: f.duration || f.flight_time || "",
    deepLink: f.link || f.deeplink || f.booking_url || null
  }));

  return mapped;
}

/** Combine outbound results and inbound results into pairs (best-effort) */
function combineOutboundInbound(outbound: any[], inbound: any[]) {
  // naive combine: return object with outbound array and inbound array
  return { outbound, inbound };
}
