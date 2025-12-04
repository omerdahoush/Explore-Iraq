import { useOutletContext } from "react-router-dom";
import FlightCard from "../components/FlightCard";

interface FlightContext {
  origin: string;
  setOrigin: (value: string) => void;
  destination: string;
  setDestination: (value: string) => void;
  departureDate: string;
  setDepartureDate: (value: string) => void;
  returnDate: string;
  setReturnDate: (value: string) => void;
  isLoading: boolean;
  results: any[];
  error: string;
  searchFlights: (e?: React.FormEvent) => void;
}

export default function Flights() {
  const {
    origin, setOrigin,
    destination, setDestination,
    departureDate, setDepartureDate,
    returnDate, setReturnDate,
    isLoading,
    results,
    error,
    searchFlights
  } = useOutletContext<FlightContext>();

  return (
    <div className="mt-24 max-w-4xl mx-auto px-4 pb-12">
      <form
        onSubmit={searchFlights}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-5 rounded-2xl shadow"
      >
        <input
          type="text"
          placeholder="Origin (e.g., BGW)"
          className="border rounded-lg p-3"
          value={origin}
          onChange={(e) => setOrigin(e.target.value.toUpperCase())}
        />
        <input
          type="text"
          placeholder="Destination (e.g., IST)"
          className="border rounded-lg p-3"
          value={destination}
          onChange={(e) => setDestination(e.target.value.toUpperCase())}
        />
        <input
          type="date"
          className="border rounded-lg p-3"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        <div className="relative">
          <input
            type="date"
            className="border rounded-lg p-3 w-full"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
          {returnDate && (
            <button 
              type="button" 
              onClick={() => setReturnDate('')} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              &#x2715;
            </button>
          )}
        </div>
        <button
          type="submit"
          className="md:col-span-4 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 mt-2 font-semibold transition"
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search Flights"}
        </button>
      </form>

      {error && (
        <p className="text-red-600 font-medium mt-4 bg-red-50 p-3 rounded-lg">
          {error}
        </p>
      )}

      {/* Render results only if a search has been performed */}
      {!isLoading && results.length > 0 && (
        <div className="mt-8 space-y-5">
          {results.map((offer) => (
            <FlightCard key={offer.id} offer={offer} />
          ))}
        </div>
      )}

      {/* Initial state or no results message */}
      {!isLoading && results.length === 0 && !error && (
         <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600">Ready to find your next adventure?</h2>
            <p className="text-gray-400 mt-2">Use the form above to search for flights.</p>
         </div>
      )}
    </div>
  );
}