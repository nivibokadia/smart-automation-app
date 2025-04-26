
import { Search, BarChart2, Bookmark, Clock, Map, CreditCard, History } from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6 text-travel-primary" />,
    title: "Unified Search",
    description: "Search across multiple travel modes in one place. Compare options easily.",
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-travel-primary" />,
    title: "Real-time Comparison",
    description: "Compare prices, duration, and comfort across different modes of transportation.",
  },
  {
    icon: <Bookmark className="h-6 w-6 text-travel-primary" />,
    title: "Multi-mode Booking",
    description: "Book buses, trains, and flights in a single transaction with one payment.",
  },
  {
    icon: <Clock className="h-6 w-6 text-travel-primary" />,
    title: "Timetable Viewer",
    description: "Access real-time schedules for all transportation modes in your area.",
  },
  {
    icon: <Map className="h-6 w-6 text-travel-primary" />,
    title: "Route Explorer",
    description: "Discover and visualize available routes between any two destinations.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-travel-primary" />,
    title: "Payment Integration",
    description: "Secure payment options including credit cards, digital wallets, and more.",
  },
  {
    icon: <History className="h-6 w-6 text-travel-primary" />,
    title: "Booking History",
    description: "View and manage all your past and upcoming trips in one dashboard.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-travel-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Your Travel Needs in One Place
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform brings together all modes of transport with powerful features
            to make booking and managing your journeys effortless.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="travel-card p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="rounded-full bg-travel-primary/10 p-3 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
