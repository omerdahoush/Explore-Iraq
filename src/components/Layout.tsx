import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState("");

  const fetchToken = async () => {
    const apiKey = import.meta.env.VITE_AMADEUS_API_KEY;
    const apiSecret = import.meta.env.VITE_AMADEUS_API_SECRET;

    const response = await fetch(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
      }
    );

    const data = await response.json();
    return data.access_token;
  };

  const searchFlights = async (e: any) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const token = await fetchToken();
      let url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=1&currencyCode=USD&max=10`;

      if (returnDate) {
        url += `&returnDate=${returnDate}`;
      }

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (data.errors) {
        setError("Incorrect data or API limit reached.");
        setResults([]);
      } else {
        setResults(data.data || []);
      }
    } catch (err) {
      setError("Network error");
      setResults([]);
    }

    setIsLoading(false);
  };
  
  return (
    <>
      <Navigation />
      <main>
        <Outlet context={{
          origin, setOrigin,
          destination, setDestination,
          departureDate, setDepartureDate,
          returnDate, setReturnDate,
          isLoading,
          results,
          error,
          searchFlights
        }} />
      </main>
      <Footer />
    </>
  );
}