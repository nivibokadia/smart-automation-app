
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-travel-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Simplify Your Travel Experience?
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Join thousands of travelers who have simplified their journey planning. 
          Start booking smarter today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/signup">
            <Button size="lg" className="bg-white text-travel-primary hover:bg-travel-light hover:text-travel-dark">
              Sign Up — It's Free 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/search">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Routes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
