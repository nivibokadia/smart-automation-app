
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IndianRupee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;

  if (!booking) {
    navigate('/search');
    return null;
  }

  const handlePayment = () => {
    // Here you would integrate with a payment gateway
    alert("Payment functionality will be implemented with a payment gateway integration!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm and Pay</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Journey Type</p>
                      <p className="font-medium capitalize">{booking.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Operator</p>
                      <p className="font-medium">{booking.operator}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">From</p>
                      <p className="font-medium">{booking.from}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">To</p>
                      <p className="font-medium">{booking.to}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Departure</p>
                      <p className="font-medium">{booking.departureTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Arrival</p>
                      <p className="font-medium">{booking.arrivalTime}</p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold mb-4">Price Breakdown</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Base fare</span>
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" />
                        <span>{(booking.price * 0.9).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Taxes & fees</span>
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" />
                        <span>{(booking.price * 0.1).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="flex justify-between font-bold pt-2">
                      <span>Total Amount</span>
                      <div className="flex items-center text-travel-primary">
                        <IndianRupee className="h-5 w-5 mr-1" />
                        <span>{booking.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                  <div className="space-y-4">
                    <Button
                      onClick={handlePayment}
                      className="w-full bg-travel-primary hover:bg-travel-dark text-white py-6 text-lg"
                    >
                      Pay Now
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      By clicking Pay Now, you agree to our terms and conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Payment;
