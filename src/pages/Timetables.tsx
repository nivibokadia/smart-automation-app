
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Train, Bus, Calendar, Clock, MapPin } from "lucide-react";
import TransportMap from "@/components/transport/TransportMap";
import FamousSpots from "@/components/spots/FamousSpots";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const mockFlights = [
  { id: 1, flight: 'AI123', from: 'Delhi (DEL)', to: 'Mumbai (BOM)', departure: '06:00 AM', arrival: '08:30 AM', status: 'On Time' },
  { id: 2, flight: '6E456', from: 'Delhi (DEL)', to: 'Bangalore (BLR)', departure: '07:15 AM', arrival: '09:45 AM', status: 'Delayed 20m' },
  { id: 3, flight: 'SG789', from: 'Delhi (DEL)', to: 'Chennai (MAA)', departure: '08:30 AM', arrival: '11:45 AM', status: 'On Time' },
  { id: 4, flight: 'UK234', from: 'Delhi (DEL)', to: 'Kolkata (CCU)', departure: '09:45 AM', arrival: '11:50 AM', status: 'On Time' },
  { id: 5, flight: 'AI567', from: 'Delhi (DEL)', to: 'Hyderabad (HYD)', departure: '11:00 AM', arrival: '01:30 PM', status: 'On Time' },
  { id: 6, flight: '6E890', from: 'Delhi (DEL)', to: 'Pune (PNQ)', departure: '12:30 PM', arrival: '02:45 PM', status: 'Delayed 15m' },
  { id: 7, flight: 'UK345', from: 'Delhi (DEL)', to: 'Ahmedabad (AMD)', departure: '02:00 PM', arrival: '03:30 PM', status: 'On Time' },
  { id: 8, flight: 'SG678', from: 'Delhi (DEL)', to: 'Goa (GOI)', departure: '03:30 PM', arrival: '06:00 PM', status: 'On Time' }
];

const mockTrains = [
  { id: 1, train: 'Rajdhani 12951', from: 'Delhi (NDLS)', to: 'Mumbai (CSMT)', departure: '06:30 AM', arrival: '06:45 AM', status: 'On Time' },
  { id: 2, train: 'Shatabdi 12001', from: 'Delhi (NDLS)', to: 'Bhopal (BPL)', departure: '07:30 AM', arrival: '02:30 PM', status: 'On Time' },
  { id: 3, train: 'Duronto 12213', from: 'Delhi (NDLS)', to: 'Bangalore (SBC)', departure: '09:15 AM', arrival: '11:30 AM', status: 'Delayed 15m' },
  { id: 4, train: 'Gatimaan 12049', from: 'Delhi (NDLS)', to: 'Agra (AGC)', departure: '10:00 AM', arrival: '11:30 AM', status: 'On Time' },
  { id: 5, train: 'Rajdhani 12953', from: 'Delhi (NDLS)', to: 'Chennai (MAS)', departure: '11:30 AM', arrival: '02:15 PM', status: 'On Time' },
  { id: 6, train: 'Shatabdi 12005', from: 'Delhi (NDLS)', to: 'Kalka (KLK)', departure: '12:45 PM', arrival: '05:15 PM', status: 'On Time' },
  { id: 7, train: 'Duronto 12217', from: 'Delhi (NDLS)', to: 'Kolkata (KOAA)', departure: '02:00 PM', arrival: '06:30 AM', status: 'Delayed 25m' },
  { id: 8, train: 'Tejas 12021', from: 'Delhi (NDLS)', to: 'Lucknow (LKO)', departure: '03:30 PM', arrival: '09:30 PM', status: 'On Time' }
];

const mockBuses = [
  { id: 1, bus: 'DTC 534', from: 'Delhi (ISBT)', to: 'Chandigarh (ISBT)', departure: '06:00 AM', arrival: '10:15 AM', status: 'On Time' },
  { id: 2, bus: 'HRTC 123', from: 'Delhi (ISBT)', to: 'Manali', departure: '07:30 AM', arrival: '09:45 PM', status: 'On Time' },
  { id: 3, bus: 'UPSRTC 456', from: 'Delhi (ISBT)', to: 'Lucknow', departure: '08:15 AM', arrival: '06:30 PM', status: 'Delayed 25m' },
  { id: 4, bus: 'RSRTC 789', from: 'Delhi (ISBT)', to: 'Jaipur', departure: '09:30 AM', arrival: '02:45 PM', status: 'On Time' },
  { id: 5, bus: 'HPTC 234', from: 'Delhi (ISBT)', to: 'Shimla', departure: '10:45 AM', arrival: '08:30 PM', status: 'On Time' },
  { id: 6, bus: 'PSRTC 567', from: 'Delhi (ISBT)', to: 'Amritsar', departure: '12:00 PM', arrival: '09:30 PM', status: 'Delayed 30m' },
  { id: 7, bus: 'UTC 890', from: 'Delhi (ISBT)', to: 'Dehradun', departure: '01:30 PM', arrival: '08:45 PM', status: 'On Time' },
  { id: 8, bus: 'GMRC 345', from: 'Delhi (ISBT)', to: 'Haridwar', departure: '03:00 PM', arrival: '09:30 PM', status: 'On Time' }
];

const mockFamousSpots = {
  "Delhi": [
    {
      name: "Red Fort",
      description: "UNESCO World Heritage Site and historic fortress",
      imageUrl: "https://source.unsplash.com/photo-1488972685288-c3fd157d7c7a",
      transport: [
        { mode: "bus", duration: "20 mins", frequency: "15 mins" },
        { mode: "train", duration: "15 mins", frequency: "10 mins" }
      ]
    },
    {
      name: "Qutub Minar",
      description: "73m-tall minaret built in 1193",
      imageUrl: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      transport: [
        { mode: "bus", duration: "30 mins", frequency: "20 mins" },
        { mode: "train", duration: "25 mins", frequency: "12 mins" }
      ]
    }
  ]
};

const Timetables = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [location, setLocation] = useState('Delhi');
  const [selectedTransport, setSelectedTransport] = useState<{id: string, type: 'flight' | 'train' | 'bus'} | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Timetables</h1>
            <p className="mt-2 text-lg text-gray-600">Check the latest schedules for all transport modes</p>
            
            <div className="mt-4 flex items-center">
              <div className="relative mr-4">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-10 py-2 pr-4 border border-gray-300 rounded-md focus:ring-travel-primary focus:border-travel-primary"
                />
              </div>
              
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="py-2 px-4 border border-gray-300 rounded-md focus:ring-travel-primary focus:border-travel-primary"
              >
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="flights" className="w-full">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="flights" className="flex-1">
                    <Plane className="h-4 w-4 mr-2" />
                    Flights
                  </TabsTrigger>
                  <TabsTrigger value="trains" className="flex-1">
                    <Train className="h-4 w-4 mr-2" />
                    Trains
                  </TabsTrigger>
                  <TabsTrigger value="buses" className="flex-1">
                    <Bus className="h-4 w-4 mr-2" />
                    Buses
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="flights" className="p-4 bg-white rounded-lg shadow">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Flight</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">From</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">To</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Departure</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Arrival</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Status</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Map</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockFlights.map((flight) => (
                          <tr key={flight.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{flight.flight}</td>
                            <td className="py-3 px-4">{flight.from}</td>
                            <td className="py-3 px-4">{flight.to}</td>
                            <td className="py-3 px-4">{flight.departure}</td>
                            <td className="py-3 px-4">{flight.arrival}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                flight.status.includes('Delayed') 
                                  ? 'bg-amber-100 text-amber-800' 
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {flight.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button 
                                    className="text-travel-primary hover:text-travel-dark"
                                    onClick={() => setSelectedTransport({id: flight.flight, type: 'flight'})}
                                  >
                                    View
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                  <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Flight {flight.flight} Location</h3>
                                    <p className="text-sm text-gray-500">From {flight.from} to {flight.to}</p>
                                    <TransportMap 
                                      type="flight" 
                                      transportId={flight.flight}
                                      status={flight.status}
                                    />
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="trains" className="p-4 bg-white rounded-lg shadow">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Train</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">From</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">To</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Departure</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Arrival</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Status</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Map</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockTrains.map((train) => (
                          <tr key={train.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{train.train}</td>
                            <td className="py-3 px-4">{train.from}</td>
                            <td className="py-3 px-4">{train.to}</td>
                            <td className="py-3 px-4">{train.departure}</td>
                            <td className="py-3 px-4">{train.arrival}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                train.status.includes('Delayed') 
                                  ? 'bg-amber-100 text-amber-800' 
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {train.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button 
                                    className="text-travel-primary hover:text-travel-dark"
                                    onClick={() => setSelectedTransport({id: train.train, type: 'train'})}
                                  >
                                    View
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                  <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Train {train.train} Location</h3>
                                    <p className="text-sm text-gray-500">From {train.from} to {train.to}</p>
                                    <TransportMap 
                                      type="train" 
                                      transportId={train.train}
                                      status={train.status}
                                    />
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="buses" className="p-4 bg-white rounded-lg shadow">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Bus</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">From</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">To</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Departure</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Arrival</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Status</th>
                          <th className="py-3 px-4 text-left font-medium text-gray-500">Map</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockBuses.map((bus) => (
                          <tr key={bus.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{bus.bus}</td>
                            <td className="py-3 px-4">{bus.from}</td>
                            <td className="py-3 px-4">{bus.to}</td>
                            <td className="py-3 px-4">{bus.departure}</td>
                            <td className="py-3 px-4">{bus.arrival}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                bus.status.includes('Delayed') 
                                  ? 'bg-amber-100 text-amber-800' 
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {bus.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button 
                                    className="text-travel-primary hover:text-travel-dark"
                                    onClick={() => setSelectedTransport({id: bus.bus, type: 'bus'})}
                                  >
                                    View
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                  <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Bus {bus.bus} Location</h3>
                                    <p className="text-sm text-gray-500">From {bus.from} to {bus.to}</p>
                                    <TransportMap 
                                      type="bus" 
                                      transportId={bus.bus}
                                      status={bus.status}
                                    />
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Famous Spots</h2>
                <FamousSpots city={location} spots={mockFamousSpots[location] || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Timetables;
