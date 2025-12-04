import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const offer = state?.offer;

  const [isPriceConfirmed, setIsPriceConfirmed] = useState(false);
  const [isCheckingPrice, setIsCheckingPrice] = useState(false);
  const [priceCheckError, setPriceCheckError] = useState<string | null>(null);

  useEffect(() => {
    // Reset state if offer changes
    setIsPriceConfirmed(false);
    setIsCheckingPrice(false);
    setPriceCheckError(null);
  }, [offer]);

  if (!offer) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <p className="text-2xl font-semibold text-red-600">No flight data found.</p>
          <p className="text-gray-500 mt-2">Please go back and select a flight.</p>
          <button
            onClick={() => navigate('/flights')}
            className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition"
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const handlePriceCheck = () => {
    setIsCheckingPrice(true);
    setPriceCheckError(null);
    // Simulate Amadeus Flight Offers Price API call
    setTimeout(() => {
      // Simulate a 5% chance of price change for demonstration
      if (Math.random() < 0.05) {
        setPriceCheckError("The price has changed. Please search again.");
        setIsCheckingPrice(false);
      } else {
        setIsPriceConfirmed(true);
        setIsCheckingPrice(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Review and Confirm</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 border-b pb-4">Order Summary</h2>

          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span className="text-gray-600">Flight Route:</span>
              <span className="font-semibold">
                {offer.itineraries[0].segments[0].departure.iataCode} → {offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.iataCode}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Price:</span>
              <span className="font-bold text-orange-600 text-2xl">{offer.price.total} {offer.price.currency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Offer ID:</span>
              <span className="font-mono text-sm bg-gray-100 p-1 rounded">{offer.id}</span>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            {!isPriceConfirmed ? (
              <div>
                <p className="text-center text-yellow-800 bg-yellow-50 p-3 rounded-lg">
                  Important: Please re-check the price before booking. Flight prices can change at any time.
                </p>
                <button
                  onClick={handlePriceCheck}
                  disabled={isCheckingPrice}
                  className="w-full mt-4 py-3 bg-green-600 text-white rounded-xl text-lg font-bold hover:bg-green-700 transition disabled:bg-gray-400"
                >
                  {isCheckingPrice ? "Checking..." : "Re-check Final Price"}
                </button>
                {priceCheckError && <p className="text-red-600 mt-2 text-center">{priceCheckError}</p>}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-green-700 font-semibold text-xl">✅ Price Confirmed!</p>
                <p className="text-gray-600">You can now proceed to booking.</p>
              </div>
            )}
          </div>
          
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-1/3 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition"
            >
              Back
            </button>
            <button
              onClick={() => navigate("/booking", { state: { offer } })}
              disabled={!isPriceConfirmed}
              className="w-2/3 py-3 bg-orange-600 text-white rounded-xl text-lg font-bold hover:bg-orange-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Confirm & Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;