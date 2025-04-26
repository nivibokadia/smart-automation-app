
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Train, Bus } from "lucide-react";

const Hero = () => {
  const [activeMode, setActiveMode] = useState<"all" | "flight" | "train" | "bus">("all");

  return (
    <div className="relative bg-gradient-to-br from-travel-primary via-travel-secondary to-travel-accent overflow-hidden">
      {/* Background Elements - Animated travel routes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full">
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index}
              className="absolute bg-white h-0.5 rounded-full animate-pulse-light"
              style={{
                width: `${Math.random() * 20 + 10}%`,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80 + 10}%`,
                opacity: Math.random() * 0.5 + 0.25,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              key={`dot-${index}`}
              className="absolute bg-white h-2 w-2 rounded-full animate-pulse-light"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 90 + 5}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="md:grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              <span className="block">One Platform.</span>
              <span className="block">Every Journey.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl md:max-w-none">
              Book buses, trains, and flights all in one place. Compare prices, schedules, and routes to find the perfect journey for you.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link to="/search">
                <Button size="lg" className="bg-white text-travel-primary hover:bg-travel-light hover:text-travel-dark w-full sm:w-auto">
                  Start Booking
                </Button>
              </Link>
              <Link to="/routes">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                  See Routes
                </Button>
              </Link>
              <Link to="/timetables">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                  Check Timetables
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex justify-between mb-6">
                <button 
                  className={`px-4 py-2 rounded-lg flex items-center ${activeMode === 'all' ? 'bg-travel-primary text-white' : 'bg-white/80 text-gray-700'}`}
                  onClick={() => setActiveMode('all')}
                >
                  <span>All</span>
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg flex items-center ${activeMode === 'flight' ? 'bg-travel-primary text-white' : 'bg-white/80 text-gray-700'}`}
                  onClick={() => setActiveMode('flight')}
                >
                  <Plane size={18} className="mr-1" />
                  <span>Flights</span>
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg flex items-center ${activeMode === 'train' ? 'bg-travel-primary text-white' : 'bg-white/80 text-gray-700'}`}
                  onClick={() => setActiveMode('train')}
                >
                  <Train size={18} className="mr-1" />
                  <span>Trains</span>
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg flex items-center ${activeMode === 'bus' ? 'bg-travel-primary text-white' : 'bg-white/80 text-gray-700'}`}
                  onClick={() => setActiveMode('bus')}
                >
                  <Bus size={18} className="mr-1" />
                  <span>Buses</span>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Origin</label>
                  <input 
                    type="text" 
                    placeholder="From where?"
                    className="w-full p-3 rounded-lg bg-white/90 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-travel-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Destination</label>
                  <input 
                    type="text" 
                    placeholder="To where?"
                    className="w-full p-3 rounded-lg bg-white/90 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-travel-primary"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white text-sm font-medium mb-1">Departure Date</label>
                    <input 
                      type="date" 
                      className="w-full p-3 rounded-lg bg-white/90 border-0 text-gray-900 focus:ring-2 focus:ring-travel-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-1">Return Date (Optional)</label>
                    <input 
                      type="date" 
                      className="w-full p-3 rounded-lg bg-white/90 border-0 text-gray-900 focus:ring-2 focus:ring-travel-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <Button size="lg" className="w-full bg-travel-primary hover:bg-travel-dark text-white">
                    Search Trips
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
