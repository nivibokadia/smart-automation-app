import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Plane, Train, Bus, Landmark, Building, Castle, Trees } from "lucide-react";

const popularRoutes = [
  {
    id: 1,
    from: 'Mumbai',
    to: 'Pune',
    transportModes: ['bus', 'train'],
    duration: {
      bus: '4h 15m',
      train: '3h 45m',
      flight: null,
    },
    averagePrice: {
      bus: 450,
      train: 790,
      flight: null,
    },
  },
  {
    id: 2,
    from: 'Delhi',
    to: 'Agra',
    transportModes: ['bus', 'train', 'metro'],
    duration: {
      bus: '4h 30m',
      train: '3h 15m',
      metro: '2h 25m',
    },
    averagePrice: {
      bus: 600,
      train: 950,
      metro: 290,
    },
  },
  {
    id: 3,
    from: 'Bangalore',
    to: 'Mysore',
    transportModes: ['bus', 'train'],
    duration: {
      bus: '3h 45m',
      train: '3h 30m',
      flight: null,
    },
    averagePrice: {
      bus: 350,
      train: 420,
      flight: null,
    },
  },
  {
    id: 4,
    from: 'Chennai',
    to: 'Pondicherry',
    transportModes: ['bus', 'train', 'metro'],
    duration: {
      bus: '3h 45m',
      train: '4h 15m',
      metro: '2h 05m',
    },
    averagePrice: {
      bus: 250,
      train: 390,
      metro: 190,
    },
  },
  {
    id: 5,
    from: 'Delhi',
    to: 'Jaipur',
    transportModes: ['bus', 'train', 'flight'],
    duration: {
      bus: '5h 15m',
      train: '4h 30m',
      flight: '1h 05m',
    },
    averagePrice: {
      bus: 590,
      train: 850,
      flight: 2990,
    },
  },
  {
    id: 6,
    from: 'Mumbai',
    to: 'Goa',
    transportModes: ['bus', 'train', 'flight'],
    duration: {
      bus: '12h 45m',
      train: '10h 15m',
      flight: '1h 10m',
    },
    averagePrice: {
      bus: 1200,
      train: 1490,
      flight: 3990,
    },
  },
  {
    id: 7,
    from: 'Delhi',
    to: 'Local',
    transportModes: ['metro', 'bus'],
    duration: {
      metro: '45m',
      bus: '1h 15m',
      flight: null,
    },
    averagePrice: {
      metro: 50,
      bus: 40,
      flight: null,
    },
    localPlaces: ['Red Fort', 'Qutub Minar', 'India Gate', 'Lotus Temple']
  },
  {
    id: 8,
    from: 'Mumbai',
    to: 'Local',
    transportModes: ['metro', 'bus'],
    duration: {
      metro: '40m',
      bus: '1h 10m',
      flight: null,
    },
    averagePrice: {
      metro: 45,
      bus: 35,
      flight: null,
    },
    localPlaces: ['Gateway of India', 'Marine Drive', 'Juhu Beach', 'Elephanta Caves']
  },
  {
    id: 9,
    from: 'Kolkata',
    to: 'Local',
    transportModes: ['metro', 'bus', 'ferry'],
    duration: {
      metro: '35m',
      bus: '1h 05m',
      ferry: '45m',
    },
    averagePrice: {
      metro: 40,
      bus: 30,
      ferry: 25,
    },
    localPlaces: ['Victoria Memorial', 'Howrah Bridge', 'Park Street', 'Dakshineswar Temple']
  }
];

const famousLocations = [
  {
    id: 1,
    city: 'Delhi',
    places: [
      { name: 'Red Fort', description: 'UNESCO World Heritage Site and historic fortress', type: 'monument' },
      { name: 'Qutub Minar', description: '73m-tall minaret built in 1193', type: 'monument' },
      { name: 'India Gate', description: 'Historic war memorial in central Delhi', type: 'monument' },
      { name: "Humayun's Tomb", description: 'Magnificent Mughal architecture from 1570', type: 'monument' }
    ]
  },
  {
    id: 2,
    city: 'Mumbai',
    places: [
      { name: 'Gateway of India', description: 'Historic arch monument built in 1924', type: 'monument' },
      { name: 'Marine Drive', description: '3.6-kilometer-long boulevard along the coastline', type: 'landmark' },
      { name: 'Elephanta Caves', description: 'Ancient cave temples dedicated to Lord Shiva', type: 'heritage' },
      { name: 'Chhatrapati Shivaji Terminus', description: 'Historic railway station and UNESCO site', type: 'landmark' }
    ]
  },
  {
    id: 3,
    city: 'Agra',
    places: [
      { name: 'Taj Mahal', description: 'Iconic ivory-white marble mausoleum', type: 'monument' },
      { name: 'Agra Fort', description: 'UNESCO World Heritage site and historical fort', type: 'monument' },
      { name: 'Fatehpur Sikri', description: 'Ancient city built by Mughal Emperor Akbar', type: 'heritage' },
      { name: 'Mehtab Bagh', description: 'Historical garden with Taj Mahal view', type: 'garden' }
    ]
  }
];

const RoutesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Popular Routes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most traveled routes and compare transportation options to find your ideal journey.
            </p>
          </header>
          
          <div className="mb-10 bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Find Any Route</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Origin</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="From where?"
                    className="travel-input pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="To where?"
                    className="travel-input pl-10"
                  />
                </div>
              </div>
              
              <div className="flex items-end">
                <button className="w-full bg-travel-primary hover:bg-travel-dark text-white py-2 px-4 rounded-md transition-colors">
                  Find Routes
                </button>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Routes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularRoutes.map((route) => (
              <div key={route.id} className="travel-card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {route.from} to {route.to}
                    </div>
                    <div className="text-gray-500">
                      Available transportation modes:
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {route.transportModes.includes('bus') && (
                      <div className="p-1.5 bg-amber-100 text-amber-800 rounded-full">
                        <Bus className="h-4 w-4" />
                      </div>
                    )}
                    {route.transportModes.includes('train') && (
                      <div className="p-1.5 bg-indigo-100 text-indigo-800 rounded-full">
                        <Train className="h-4 w-4" />
                      </div>
                    )}
                    {route.transportModes.includes('flight') && (
                      <div className="p-1.5 bg-blue-100 text-blue-800 rounded-full">
                        <Plane className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th className="pb-2 text-sm font-medium text-gray-500">Transport</th>
                        <th className="pb-2 text-sm font-medium text-gray-500">Duration</th>
                        <th className="pb-2 text-sm font-medium text-gray-500">Avg Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {route.transportModes.includes('bus') && (
                        <tr>
                          <td className="py-2 flex items-center">
                            <Bus className="h-4 w-4 mr-2 text-amber-600" />
                            <span>Bus</span>
                          </td>
                          <td className="py-2">{route.duration.bus}</td>
                          <td className="py-2">${route.averagePrice.bus}</td>
                        </tr>
                      )}
                      {route.transportModes.includes('train') && (
                        <tr>
                          <td className="py-2 flex items-center">
                            <Train className="h-4 w-4 mr-2 text-indigo-600" />
                            <span>Train</span>
                          </td>
                          <td className="py-2">{route.duration.train}</td>
                          <td className="py-2">${route.averagePrice.train}</td>
                        </tr>
                      )}
                      {route.transportModes.includes('flight') && (
                        <tr>
                          <td className="py-2 flex items-center">
                            <Plane className="h-4 w-4 mr-2 text-blue-600" />
                            <span>Flight</span>
                          </td>
                          <td className="py-2">{route.duration.flight}</td>
                          <td className="py-2">${route.averagePrice.flight}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4">
                  <a 
                    href={`/search?from=${route.from}&to=${route.to}`}
                    className="text-travel-primary hover:text-travel-dark hover:underline text-sm font-medium"
                  >
                    View available trips →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Famous Tourist Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {famousLocations.map((location) => (
                <div key={location.id} className="travel-card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{location.city}</h3>
                  <div className="space-y-3">
                    {location.places.map((place, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          {place.type === 'monument' && (
                            <Landmark className="h-5 w-5 text-amber-600" />
                          )}
                          {place.type === 'heritage' && (
                            <Castle className="h-5 w-5 text-indigo-600" />
                          )}
                          {place.type === 'landmark' && (
                            <Building className="h-5 w-5 text-blue-600" />
                          )}
                          {place.type === 'garden' && (
                            <Trees className="h-5 w-5 text-emerald-600" />
                          )}
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 font-medium">{place.name}</p>
                          <p className="text-sm text-gray-500">{place.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <a 
                      href={`/search?city=${location.city}`}
                      className="text-travel-primary hover:text-travel-dark hover:underline text-sm font-medium"
                    >
                      Find transport to {location.city} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/routes-map"
              className="inline-flex items-center text-travel-primary hover:text-travel-dark hover:underline text-lg font-medium"
            >
              View all routes on map
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RoutesPage;
