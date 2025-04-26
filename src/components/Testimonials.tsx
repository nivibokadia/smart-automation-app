
const testimonials = [
  {
    quote: "I used to waste so much time comparing prices across different websites. Travel Nexus saves me hours of research for every trip!",
    author: "Sarah Johnson",
    role: "Frequent Traveler",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "Being able to see all transportation options side by side made it easy to choose the most efficient way to travel for my business trips.",
    author: "Michael Chen",
    role: "Business Consultant",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    quote: "The multi-city booking feature is a game-changer for planning complex itineraries. Everything is so well organized!",
    author: "Emma Rodriguez",
    role: "Travel Blogger",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of travelers use our platform to simplify their journey planning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="travel-card p-6 flex flex-col"
            >
              <div className="flex-1">
                <div className="text-travel-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-800 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
