import { useNavigate } from "react-router-dom";

export default function FlightCard({ offer }: { offer: any }) {
  const navigate = useNavigate();

  const outboundItinerary = offer.itineraries[0];
  const returnItinerary = offer.itineraries.length > 1 ? offer.itineraries[1] : null;

  const outboundSegment = outboundItinerary.segments[0];
  
  const airline = outboundSegment.carrierCode;
  const logo = `https://logos.skyscnr.com/images/airlines/favicon/${airline}.png`;

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  const renderRoute = (itinerary: any, isReturn = false) => {
    const startSegment = itinerary.segments[0];
    const endSegment = itinerary.segments[itinerary.segments.length - 1];
    return (
      <div className="flex items-center justify-between text-lg">
        <div className="text-center">
          <p className="font-semibold text-xl text-gray-800">{startSegment.departure.iataCode}</p>
          <p className="text-gray-500 text-sm">{formatTime(startSegment.departure.at)}</p>
        </div>
        <div className="flex-grow flex items-center mx-4 relative">
          <div className="w-full h-px bg-gray-200"></div>
          <img 
            src="/icons/plane.svg" 
            className="w-6 h-6 mx-2 text-gray-400 absolute left-1/2"
            style={{ transform: `translateX(-50%) ${isReturn ? 'scaleX(-1)' : ''}` }} 
          />
        </div>
        <div className="text-center">
          <p className="font-semibold text-xl text-gray-800">{endSegment.arrival.iataCode}</p>
          <p className="text-gray-500 text-sm">{formatTime(endSegment.arrival.at)}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => navigate("/flight-details", { state: { offer } })}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4 items-center">
          <img
            src={logo}
            alt={`${airline} logo`}
            referrerPolicy="no-referrer"
            className="h-10 w-auto object-contain bg-gray-100 p-1 rounded-md"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://ui-avatars.com/api/?name=${airline}&background=random&size=128`;
            }}
          />
          <div>
            <p className="text-lg font-bold text-gray-900">{airline}</p>
            <p className="text-sm text-gray-500">
              {outboundItinerary.segments.length - 1} stops
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
            ${offer.price.total}
          </p>
          <p className="text-xs text-gray-500">{returnItinerary ? "Round Trip" : "One Way"}</p>
        </div>
      </div>

      {/* Routes */}
      <div className="space-y-4 my-6">
        {renderRoute(outboundItinerary, false)}
        {returnItinerary && renderRoute(returnItinerary, true)}
      </div>

      {/* Details */}
      <div className="flex justify-between items-center mt-4 text-gray-600 border-t border-gray-100 pt-4">
        <p className="flex items-center gap-2 text-sm">
          <img src="/icons/time.svg" width={16} alt="duration icon" />
          {outboundItinerary.duration.replace("PT", "").replace("H", "h ").replace("M", "m").toLowerCase()}
          {returnItinerary && ` / ${returnItinerary.duration.replace("PT", "").replace("H", "h ").replace("M", "m").toLowerCase()}`}
        </p>
        <button className="bg-orange-100 text-orange-800 font-semibold py-2 px-4 rounded-lg hover:bg-orange-200 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
}
