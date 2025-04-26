
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Plane, Train, Bus, User, Home, Calendar, Map } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-travel-primary font-bold text-xl mr-1">Travel</span>
              <span className="text-travel-secondary font-bold text-xl">Nexus</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-travel-primary px-3 py-2 rounded-md text-sm font-medium">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <Link to="/search" className="flex items-center text-gray-600 hover:text-travel-primary px-3 py-2 rounded-md text-sm font-medium">
              <Plane className="h-4 w-4 mr-1" />
              Book
            </Link>
            <Link to="/routes" className="flex items-center text-gray-600 hover:text-travel-primary px-3 py-2 rounded-md text-sm font-medium">
              <Map className="h-4 w-4 mr-1" />
              Routes
            </Link>
            <Link to="/timetables" className="flex items-center text-gray-600 hover:text-travel-primary px-3 py-2 rounded-md text-sm font-medium">
              <Calendar className="h-4 w-4 mr-1" />
              Timetables
            </Link>
            <div className="ml-4 flex items-center">
              <Link to="/login">
                <Button variant="outline" size="sm" className="mr-2">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="bg-travel-primary hover:bg-travel-dark text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-travel-primary focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-travel-primary px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5 mr-2" />
              Home
            </Link>
            <Link 
              to="/search" 
              className="flex items-center text-gray-600 hover:text-travel-primary px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Plane className="h-5 w-5 mr-2" />
              Book
            </Link>
            <Link 
              to="/routes" 
              className="flex items-center text-gray-600 hover:text-travel-primary px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Map className="h-5 w-5 mr-2" />
              Routes
            </Link>
            <Link 
              to="/timetables" 
              className="flex items-center text-gray-600 hover:text-travel-primary px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Timetables
            </Link>
            <div className="flex space-x-2 px-3 py-2">
              <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full bg-travel-primary hover:bg-travel-dark text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
