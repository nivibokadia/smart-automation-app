
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Train, 
  Bus, 
  Clock, 
  Download, 
  Calendar, 
  CreditCard, 
  AlertCircle,
  CheckCircle,
  User,
  Settings,
  X
} from "lucide-react";

// Mock booking data
const upcomingBookings = [
  {
    id: 1,
    type: 'flight',
    from: 'New York (JFK)',
    to: 'San Francisco (SFO)',
    departureDate: '2025-04-15',
    departureTime: '08:00 AM',
    arrivalTime: '11:30 AM',
    bookingRef: 'FLT123456',
    operator: 'American Airlines',
    status: 'Confirmed',
  },
  {
    id: 2,
    type: 'train',
    from: 'New York (Penn Station)',
    to: 'Washington DC (Union Station)',
    departureDate: '2025-04-20',
    departureTime: '09:15 AM',
    arrivalTime: '12:45 PM',
    bookingRef: 'TRN789012',
    operator: 'Amtrak',
    status: 'Confirmed',
  },
];

const pastBookings = [
  {
    id: 3,
    type: 'bus',
    from: 'New York (Port Authority)',
    to: 'Boston (South Station)',
    departureDate: '2025-03-10',
    departureTime: '10:30 AM',
    arrivalTime: '02:45 PM',
    bookingRef: 'BUS345678',
    operator: 'Greyhound',
    status: 'Completed',
  },
  {
    id: 4,
    type: 'flight',
    from: 'San Francisco (SFO)',
    to: 'New York (JFK)',
    departureDate: '2025-03-05',
    departureTime: '12:00 PM',
    arrivalTime: '08:45 PM',
    bookingRef: 'FLT901234',
    operator: 'Delta Airlines',
    status: 'Completed',
  },
];

type Booking = {
  id: number;
  type: string;
  from: string;
  to: string;
  departureDate: string;
  departureTime: string;
  arrivalTime: string;
  bookingRef: string;
  operator: string;
  status: string;
};

const Dashboard = () => {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'flight':
        return <Plane className="h-5 w-5" />;
      case 'train':
        return <Train className="h-5 w-5" />;
      case 'bus':
        return <Bus className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'text-green-600 bg-green-100';
      case 'Completed':
        return 'text-gray-600 bg-gray-100';
      case 'Cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between mb-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:truncate">
                My Dashboard
              </h1>
              <p className="mt-2 text-gray-600">
                Manage your bookings, view tickets, and update your profile
              </p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <Button variant="outline" className="mr-3">
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </Button>
              <Button className="bg-travel-primary hover:bg-travel-dark text-white">
                <Plane className="h-4 w-4 mr-2" />
                Book New Trip
              </Button>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-travel-primary/10 flex items-center justify-center text-travel-primary">
                  <User className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-900">John Doe</h2>
                  <p className="text-gray-600">john.doe@example.com</p>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-medium">
                    Premium Member
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 border-t border-gray-200 pt-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-500">Total Trips</div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900">8</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-500">Loyalty Points</div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900">1,250</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-500">Saved Routes</div>
                  <div className="mt-1 text-2xl font-semibold text-gray-900">3</div>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="upcoming">
            <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-3">
              <TabsTrigger value="upcoming" className="py-2">Upcoming Trips</TabsTrigger>
              <TabsTrigger value="past" className="py-2">Past Trips</TabsTrigger>
              <TabsTrigger value="saved" className="py-2">Saved Routes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-travel-primary" />
                    Upcoming Trips
                  </h2>
                </div>
                
                {upcomingBookings.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {upcomingBookings.map((booking) => (
                      <li 
                        key={booking.id} 
                        className="p-6 hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedBooking(booking)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className={`
                              p-2 rounded-lg mr-4 
                              ${booking.type === 'flight' ? 'bg-blue-100 text-blue-800' : 
                                booking.type === 'train' ? 'bg-indigo-100 text-indigo-800' : 
                                'bg-amber-100 text-amber-800'}
                            `}>
                              {getTypeIcon(booking.type)}
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">{formatDate(booking.departureDate)}</p>
                              <h3 className="font-medium text-gray-900 mt-1">
                                {booking.from} to {booking.to}
                              </h3>
                              <p className="text-gray-500 mt-1">
                                {booking.departureTime} - {booking.arrivalTime}
                              </p>
                              <p className="text-sm text-gray-500 mt-1">
                                {booking.operator} · Booking Ref: {booking.bookingRef}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                              {booking.status}
                            </span>
                            <div className="mt-2 flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4 mr-1" />
                                Ticket
                              </Button>
                              <Button size="sm" variant="outline">
                                <Clock className="h-4 w-4 mr-1" />
                                Reschedule
                              </Button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-gray-500">You don't have any upcoming trips.</p>
                    <Button className="mt-4 bg-travel-primary hover:bg-travel-dark text-white">
                      Book a Trip
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-travel-primary" />
                    Past Trips
                  </h2>
                </div>
                
                {pastBookings.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {pastBookings.map((booking) => (
                      <li 
                        key={booking.id} 
                        className="p-6 hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedBooking(booking)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className={`
                              p-2 rounded-lg mr-4 
                              ${booking.type === 'flight' ? 'bg-blue-100 text-blue-800' : 
                                booking.type === 'train' ? 'bg-indigo-100 text-indigo-800' : 
                                'bg-amber-100 text-amber-800'}
                            `}>
                              {getTypeIcon(booking.type)}
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">{formatDate(booking.departureDate)}</p>
                              <h3 className="font-medium text-gray-900 mt-1">
                                {booking.from} to {booking.to}
                              </h3>
                              <p className="text-gray-500 mt-1">
                                {booking.departureTime} - {booking.arrivalTime}
                              </p>
                              <p className="text-sm text-gray-500 mt-1">
                                {booking.operator} · Booking Ref: {booking.bookingRef}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                              {booking.status}
                            </span>
                            <div className="mt-2 flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4 mr-1" />
                                Receipt
                              </Button>
                              <Button size="sm" variant="outline">
                                Book Again
                              </Button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-gray-500">You don't have any past trips.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="saved">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Saved Routes</h2>
                </div>
                
                <div className="p-6 text-center">
                  <p className="text-gray-500">You haven't saved any routes yet.</p>
                  <p className="text-gray-500 mt-2">
                    Save your frequently traveled routes for quick booking in the future.
                  </p>
                  <Button className="mt-4 bg-travel-primary hover:bg-travel-dark text-white">
                    Find Routes
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Booking Details Modal */}
          {selectedBooking && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Booking Details</h3>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setSelectedBooking(null)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`
                      p-2 rounded-lg mr-4 
                      ${selectedBooking.type === 'flight' ? 'bg-blue-100 text-blue-800' : 
                        selectedBooking.type === 'train' ? 'bg-indigo-100 text-indigo-800' : 
                        'bg-amber-100 text-amber-800'}
                    `}>
                      {getTypeIcon(selectedBooking.type)}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {selectedBooking.from} to {selectedBooking.to}
                      </h4>
                      <p className="text-gray-500">
                        {formatDate(selectedBooking.departureDate)}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedBooking.status)}`}>
                        {selectedBooking.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Booking Reference</dt>
                        <dd className="mt-1 text-gray-900">{selectedBooking.bookingRef}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Operator</dt>
                        <dd className="mt-1 text-gray-900">{selectedBooking.operator}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Departure</dt>
                        <dd className="mt-1 text-gray-900">
                          {selectedBooking.departureTime} - {selectedBooking.from}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Arrival</dt>
                        <dd className="mt-1 text-gray-900">
                          {selectedBooking.arrivalTime} - {selectedBooking.to}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Travel Type</dt>
                        <dd className="mt-1 text-gray-900 capitalize">
                          {selectedBooking.type}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Payment Method</dt>
                        <dd className="mt-1 text-gray-900">
                          <div className="flex items-center">
                            <CreditCard className="h-4 w-4 mr-1 text-gray-500" />
                            <span>•••• 4242</span>
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Ticket Information</h4>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex items-start">
                        {selectedBooking.status === 'Confirmed' ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-gray-500 mt-0.5 mr-2" />
                        )}
                        <div>
                          <p className="text-gray-900 font-medium">
                            {selectedBooking.status === 'Confirmed'
                              ? 'Your booking is confirmed'
                              : 'This trip has been completed'}
                          </p>
                          <p className="text-gray-500 text-sm mt-1">
                            {selectedBooking.status === 'Confirmed'
                              ? 'You can download your e-ticket below. Please arrive at least 30 minutes before departure.'
                              : 'Thank you for traveling with us.'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-travel-primary hover:bg-travel-dark text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download Ticket
                      </Button>
                      {selectedBooking.status === 'Confirmed' && (
                        <>
                          <Button variant="outline">
                            <Clock className="h-4 w-4 mr-2" />
                            Reschedule
                          </Button>
                          <Button variant="outline" className="text-red-600 hover:text-red-700">
                            Cancel Booking
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
