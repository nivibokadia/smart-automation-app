
import { Plane, Train, Bus, IndianRupee, Ship, TramFront } from "lucide-react";

const TransportModes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Travel Your Way
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from multiple transportation options across India for every journey. Compare and book the mode that suits your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="travel-card overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-sky-400 to-blue-500 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Plane className="h-24 w-24 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Flights</h3>
              <p className="text-gray-600 mb-4">
                Fast air travel across major Indian cities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-travel-primary">✓</span>
                  All major airlines
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-travel-primary">✓</span>
                  Direct flights
                </li>
              </ul>
            </div>
          </div>
          
          <div className="travel-card overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Train className="h-24 w-24 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Trains</h3>
              <p className="text-gray-600 mb-4">
                Indian Railways network connecting the nation.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-travel-primary">✓</span>
                  All train classes
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-travel-primary">✓</span>
                  Tatkal booking
                </li>
              </ul>
            </div>
          </div>
          
          <div className="travel-card overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Bus className="h-24 w-24 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Buses</h3>
              <p className="text-gray-600 mb-4">
                Inter and intra-state bus services.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-travel-primary">✓</span>
                  AC/Non-AC
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-travel-primary">✓</span>
                  Sleeper buses
                </li>
              </ul>
            </div>
          </div>

          <div className="travel-card overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <TramFront className="h-24 w-24 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Metro</h3>
              <p className="text-gray-600 mb-4">
                Rapid transit in major cities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-travel-primary">✓</span>
                  QR tickets
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-travel-primary">✓</span>
                  Smart cards
                </li>
              </ul>
            </div>
          </div>

          <div className="travel-card overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-cyan-400 to-cyan-600 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Ship className="h-24 w-24 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Ferry</h3>
              <p className="text-gray-600 mb-4">
                Waterway transport services.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-travel-primary">✓</span>
                  River cruises
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-travel-primary">✓</span>
                  Port services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportModes;
