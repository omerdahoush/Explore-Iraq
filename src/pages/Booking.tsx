import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const offer = state?.offer;

  const [traveler, setTraveler] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isBooking, setIsBooking] = useState(false);

  if (!offer) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <p className="text-2xl font-semibold text-red-600">Session expired.</p>
          <p className="text-gray-500 mt-2">No flight data found to proceed with booking.</p>
          <button
            onClick={() => navigate('/flights')}
            className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition"
          >
            Start New Search
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTraveler(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);
    console.log("Booking Submitted:", {
      offerId: offer.id,
      travelerDetails: traveler,
    });

    // Simulate booking submission
    setTimeout(() => {
      setIsBooking(false);
      alert("Booking successful! (This is a simulation)");
      navigate("/");
    }, 2000);
  };
  
  const outboundItinerary = offer.itineraries[0];
  const returnItinerary = offer.itineraries.length > 1 ? offer.itineraries[1] : null;

  const ItinerarySummary = ({ itinerary, title }: { itinerary: any, title: string }) => {
    const startSegment = itinerary.segments[0];
    const endSegment = itinerary.segments[itinerary.segments.length - 1];
    return (
      <div className="bg-white p-4 rounded-lg border">
        <p className="font-bold text-orange-800">{title}</p>
        <p><strong>Route:</strong> {startSegment.departure.iataCode} → {endSegment.arrival.iataCode}</p>
        <p><strong>Duration:</strong> {itinerary.duration.replace("PT", "").replace("H", "h ").replace("M", "m").toLowerCase()}</p>
        <p><strong>Stops:</strong> {itinerary.segments.length - 1}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Enter Traveler Details</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" name="firstName" id="firstName" required onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" name="lastName" id="lastName" required onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" id="email" required onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" name="phone" id="phone" required onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
            </div>
            <div className="pt-6">
              <button type="submit" disabled={isBooking} className="w-full py-3 bg-orange-600 text-white rounded-xl text-lg font-bold hover:bg-orange-700 transition disabled:bg-gray-400">
                {isBooking ? "Submitting..." : "Submit Booking"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Summary */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-inner space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Booking Summary</h2>
          <ItinerarySummary itinerary={outboundItinerary} title="Outbound" />
          {returnItinerary && <ItinerarySummary itinerary={returnItinerary} title="Return" />}
          <div className="border-t pt-4">
            <p className="flex justify-between text-xl">
                <strong>{returnItinerary ? "Total Round-Trip:" : "Total Price:"}</strong> 
                <span className="font-bold text-orange-600">{offer.price.total} {offer.price.currency}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;