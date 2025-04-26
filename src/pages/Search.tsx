import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchResultCard from "@/components/SearchResultCard";
import { Button } from "@/components/ui/button";
import { Plane, Train, Bus, ArrowUpDown, DollarSign, Star, Clock, Filter } from "lucide-react";

const mockResults = [
  {
    id: 1,
    type: 'flight' as const,
    from: 'Delhi (DEL)',
    to: 'Mumbai (BOM)',
    departureTime: '08:00 AM',
    arrivalTime: '10:30 AM',
    duration: '2h 30m',
    price: 3499,
    operator: 'Air India',
    rating: 4.5,
  },
  {
    id: 2,
    type: 'train' as const,
    from: 'Delhi (NDLS)',
    to: 'Mumbai (CSMT)',
    departureTime: '09:15 AM',
    arrivalTime: '09:45 AM',
    duration: '24h 30m',
    price: 899,
    operator: 'Indian Railways',
    rating: 4.2,
  },
  {
    id: 3,
    type: 'bus' as const,
    from: 'Delhi (ISBT)',
    to: 'Jaipur (CBS)',
    departureTime: '10:30 AM',
    arrivalTime: '02:45 PM',
    duration: '4h 15m',
    price: 499,
    operator: 'RSRTC',
    rating: 3.8,
  },
  {
    id: 4,
    type: 'metro' as const,
    from: 'Rajiv Chowk',
    to: 'Noida City Centre',
    departureTime: '12:00 PM',
    arrivalTime: '12:45 PM',
    duration: '45m',
    price: 45,
    operator: 'Delhi Metro',
    rating: 4.6,
  },
  {
    id: 5,
    type: 'ferry' as const,
    from: 'Gateway of India',
    to: 'Elephanta Caves',
    departureTime: '01:30 PM',
    arrivalTime: '02:15 PM',
    duration: '45m',
    price: 150,
    operator: 'Maharashtra Maritime Board',
    rating: 4.3,
  },
  {
    id: 6,
    type: 'metro' as const,
    from: 'Churchgate',
    to: 'Andheri',
    departureTime: '02:30 PM',
    arrivalTime: '03:15 PM',
    duration: '45m',
    price: 35,
    operator: 'Mumbai Metro',
    rating: 4.4,
  },
  {
    id: 7,
    type: 'flight' as const,
    from: 'Bangalore (BLR)',
    to: 'Hyderabad (HYD)',
    departureTime: '03:30 PM',
    arrivalTime: '04:45 PM',
    duration: '1h 15m',
    price: 2999,
    operator: 'IndiGo',
    rating: 4.3,
  },
  {
    id: 8,
    type: 'train' as const,
    from: 'Chennai (MAS)',
    to: 'Bangalore (SBC)',
    departureTime: '04:30 PM',
    arrivalTime: '10:45 PM',
    duration: '6h 15m',
    price: 750,
    operator: 'Indian Railways',
    rating: 4.1,
  }
];

const Search = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'flight' | 'train' | 'bus'>('all');
  const [results, setResults] = useState(mockResults);
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    // Get search parameters from URL if they exist
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from') || '';
    const to = params.get('to') || '';
    const city = params.get('city');
    
    if (city) {
      setSearchParams(prev => ({ ...prev, to: city }));
    } else if (from && to) {
      setSearchParams(prev => ({ ...prev, from, to }));
    }
  }, []);

  const handleSearch = () => {
    // Filter results based on search parameters
    let filteredResults = mockResults;
    
    if (searchParams.from) {
      filteredResults = filteredResults.filter(result => 
        result.from.toLowerCase().includes(searchParams.from.toLowerCase())
      );
    }
    
    if (searchParams.to) {
      filteredResults = filteredResults.filter(result => 
        result.to.toLowerCase().includes(searchParams.to.toLowerCase())
      );
    }
    
    // Apply transport type filter
    if (activeFilter !== 'all') {
      filteredResults = filteredResults.filter(result => result.type === activeFilter);
    }
    
    setResults(filteredResults);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleFilterChange = (filter: 'all' | 'flight' | 'train' | 'bus') => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setResults(mockResults);
    } else {
      setResults(mockResults.filter(result => result.type === filter));
    }
  };

  const sortByPrice = () => {
    const sorted = [...results].sort((a, b) => a.price - b.price);
    setResults(sorted);
  };

  const sortByDuration = () => {
    const sorted = [...results].sort((a, b) => {
      const durationA = parseInt(a.duration.split('h')[0]);
      const durationB = parseInt(b.duration.split('h')[0]);
      return durationA - durationB;
    });
    setResults(sorted);
  };

  const sortByRating = () => {
    const sorted = [...results].sort((a, b) => b.rating - a.rating);
    setResults(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Search for Trips</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <input 
                  type="text" 
                  name="from"
                  value={searchParams.from}
                  onChange={handleInputChange}
                  placeholder="Origin"
                  className="travel-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input 
                  type="text" 
                  name="to"
                  value={searchParams.to}
                  onChange={handleInputChange}
                  placeholder="Destination"
                  className="travel-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={searchParams.date}
                  onChange={handleInputChange}
                  className="travel-input"
                />
              </div>
              
              <div className="flex items-end">
                <Button 
                  className="w-full bg-travel-primary hover:bg-travel-dark text-white"
                  onClick={handleSearch}
                >
                  Search Again
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-64 bg-white shadow-sm rounded-lg p-6 h-fit">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Transport Type</h3>
                <div className="space-y-2">
                  <button 
                    className={`flex items-center w-full p-2 rounded-md ${activeFilter === 'all' ? 'bg-travel-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    onClick={() => handleFilterChange('all')}
                  >
                    <span>All Transport</span>
                  </button>
                  <button 
                    className={`flex items-center w-full p-2 rounded-md ${activeFilter === 'flight' ? 'bg-travel-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    onClick={() => handleFilterChange('flight')}
                  >
                    <Plane className="h-4 w-4 mr-2" />
                    <span>Flights</span>
                  </button>
                  <button 
                    className={`flex items-center w-full p-2 rounded-md ${activeFilter === 'train' ? 'bg-travel-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    onClick={() => handleFilterChange('train')}
                  >
                    <Train className="h-4 w-4 mr-2" />
                    <span>Trains</span>
                  </button>
                  <button 
                    className={`flex items-center w-full p-2 rounded-md ${activeFilter === 'bus' ? 'bg-travel-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    onClick={() => handleFilterChange('bus')}
                  >
                    <Bus className="h-4 w-4 mr-2" />
                    <span>Buses</span>
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  defaultValue="500"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$0</span>
                  <span>$500+</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Departure Time</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-travel-primary focus:ring-travel-primary mr-2" />
                    <span className="text-sm text-gray-700">Morning (6AM - 12PM)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-travel-primary focus:ring-travel-primary mr-2" />
                    <span className="text-sm text-gray-700">Afternoon (12PM - 6PM)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-travel-primary focus:ring-travel-primary mr-2" />
                    <span className="text-sm text-gray-700">Evening (6PM - 12AM)</span>
                  </label>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Reset Filters
              </Button>
            </div>
            
            <div className="flex-1">
              <div className="bg-white shadow-sm rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {results.length} trips found
                    </h2>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={sortByPrice}
                    >
                      <DollarSign className="h-4 w-4 mr-1" />
                      Price
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={sortByDuration}
                    >
                      <Clock className="h-4 w-4 mr-1" />
                      Duration
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={sortByRating}
                    >
                      <Star className="h-4 w-4 mr-1" />
                      Rating
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {results.map((result) => (
                  <SearchResultCard key={result.id} {...result} />
                ))}
                {results.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-600">No results found. Try adjusting your filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Search;
