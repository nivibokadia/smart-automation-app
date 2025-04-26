import { Button } from "@/components/ui/button";
import { Plane, Train, Bus, TramFront, Ship, Clock, IndianRupee, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchResultCardProps {
  type: 'flight' | 'train' | 'bus' | 'metro' | 'ferry';
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  operator: string;
  rating: number;
}

const SearchResultCard = ({
  type,
  from,
  to,
  departureTime,
  arrivalTime,
  duration,
  price,
  operator,
  rating,
}: SearchResultCardProps) => {
  const navigate = useNavigate();

  const getIcon = () => {
    switch (type) {
      case 'flight':
        return <Plane className="h-5 w-5" />;
      case 'train':
        return <Train className="h-5 w-5" />;
      case 'bus':
        return <Bus className="h-5 w-5" />;
      case 'metro':
        return <TramFront className="h-5 w-5" />;
      case 'ferry':
        return <Ship className="h-5 w-5" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'flight':
        return 'bg-blue-100 text-blue-800';
      case 'train':
        return 'bg-indigo-100 text-indigo-800';
      case 'bus':
        return 'bg-amber-100 text-amber-800';
      case 'metro':
        return 'bg-emerald-100 text-emerald-800';
      case 'ferry':
        return 'bg-cyan-100 text-cyan-800';
    }
  };

  const handleBookNow = () => {
    navigate('/payment', { 
      state: { 
        type,
        from,
        to,
        departureTime,
        arrivalTime,
        duration,
        price,
        operator
      } 
    });
  };

  return (
    <div className="travel-card overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <div className={`p-2 rounded-lg ${getTypeColor()} mr-3`}>
              {getIcon()}
            </div>
            <div>
              <span className="capitalize font-medium text-lg">{type}</span>
              <p className="text-gray-600">{operator}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">Departure</p>
                <p className="text-xl font-bold">{departureTime}</p>
                <p className="text-gray-700">{from}</p>
              </div>
              <div className="mx-4 border-t border-dashed border-gray-300 w-16 md:w-32"></div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Arrival</p>
                <p className="text-xl font-bold">{arrivalTime}</p>
                <p className="text-gray-700">{to}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              <span>{duration}</span>
            </div>
          </div>
          
          <div className="md:ml-6 flex flex-col items-end w-full md:w-auto">
            <div className="flex items-center mb-2">
              <IndianRupee className="h-5 w-5 text-travel-primary" />
              <span className="text-2xl font-bold">{price.toFixed(2)}</span>
            </div>
            <Button 
              onClick={handleBookNow}
              className="w-full md:w-auto bg-travel-primary hover:bg-travel-dark text-white"
            >
              Book Now
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 flex flex-wrap gap-2">
          {type === 'metro' && (
            <>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">Smart card accepted</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">AC coaches</span>
            </>
          )}
          {type === 'flight' && (
            <>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">Baggage included</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">In-flight meals</span>
            </>
          )}
          {type === 'train' && (
            <>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">WiFi available</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">Power outlets</span>
            </>
          )}
          {type === 'bus' && (
            <>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">Air conditioned</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">Reclining seats</span>
            </>
          )}
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">Free cancellation</span>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
