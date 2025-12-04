import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRightLeft } from 'lucide-react';


export default function FlightDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const offer = state?.offer;

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

  const outboundItinerary = offer.itineraries[0];
  const returnItinerary = offer.itineraries.length > 1 ? offer.itineraries[1] : null;
  
  const renderSegment = (segment: any, isLast: boolean) => {
    const layoverDuration = segment.duration.replace("PT", "").replace("H", "h ").replace("M", "m").toLowerCase();
    return (
      <div key={segment.id}>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center ring-2 ring-gray-200 overflow-hidden">
            <img 
              src={`https://logos.skyscnr.com/images/airlines/favicon/${segment.carrierCode}.png`} 
              alt={`${segment.carrierCode} logo`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://ui-avatars.com/api/?name=${segment.carrierCode}&background=random&size=128`;
              }}
            />
          </div>
          <div className="ml-4">
            <p className="font-bold text-gray-800">{segment.carrierCode} {segment.number}</p>
            <p className="text-sm text-gray-500">
              {new Date(segment.departure.at).toLocaleDateString()} | {new Date(segment.departure.at).toLocaleTimeString()} - {new Date(segment.arrival.at).toLocaleTimeString()}
            </p>
          </div>
        </div>
        {!isLast && (
          <div className="ml-5 my-2 pl-px border-l-2 border-dashed border-orange-300 h-12 flex items-center">
            <p className="text-xs text-gray-500 pl-4 bg-gray-50 rounded-r-lg py-1">Layover: {layoverDuration}</p>
          </div>
        )}
      </div>
    );
  }

  const renderItinerary = (itinerary: any, title: string) => (
    <div className="space-y-6">
       <h3 className="text-xl font-bold text-orange-800 bg-orange-50 p-3 rounded-lg">{title}</h3>
      {itinerary.segments.map((segment: any, index: number) =>
        renderSegment(segment, index === itinerary.segments.length - 1)
      )}
    </div>
  );

  const startIata = outboundItinerary.segments[0].departure.iataCode;
  const endIata = outboundItinerary.segments[outboundItinerary.segments.length - 1].arrival.iataCode;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div
            className="h-56 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://source.unsplash.com/1200x400/?${endIata},airport)`,
            }}
          >
            <div className="h-full bg-black bg-opacity-30 flex flex-col justify-end p-8">
              <h1 className="text-4xl font-extrabold text-white tracking-wide flex items-center gap-4">
                {startIata} {returnItinerary && <ArrowRightLeft size={36} />} {!returnItinerary && "→"} {endIata}
              </h1>
              <p className="text-orange-200 text-lg">
                {returnItinerary ? "Round Trip" : "One Way"}
              </p>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Itineraries */}
            <div className="lg:col-span-2 space-y-8">
              {renderItinerary(outboundItinerary, "Outbound Flight")}
              {returnItinerary && renderItinerary(returnItinerary, "Return Flight")}
            </div>

            {/* Right Column - Price & Booking */}
            <div className="space-y-6 bg-gray-50 p-6 rounded-lg self-start">
              <h2 className="text-2xl font-bold text-gray-800">Price Summary</h2>
              <div className="flex justify-between items-baseline">
                <span className="text-gray-600">Base Fare</span>
                <span className="font-semibold">{offer.price.base} {offer.price.currency}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-gray-600">Taxes & Fees</span>
                <span className="font-semibold">{ (parseFloat(offer.price.total) - parseFloat(offer.price.base)).toFixed(2) } {offer.price.currency}</span>
              </div>
              <div className="border-t my-2"></div>
              <div className="flex justify-between items-center text-2xl font-bold text-orange-600">
                <span>{returnItinerary ? "Total Round-Trip" : "Total"}</span>
                <span>{offer.price.total} {offer.price.currency}</span>
              </div>
              <button
                onClick={() => navigate("/review", { state: { offer } })}
                className="w-full mt-4 py-3 bg-orange-600 text-white rounded-xl text-lg font-bold hover:bg-orange-700 transition transform hover:scale-105"
              >
                Proceed to Review
              </button>
              <button
                onClick={() => navigate(-1)}
                className="w-full text-center mt-2 text-gray-600 hover:text-orange-600"
              >
                Back to Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}