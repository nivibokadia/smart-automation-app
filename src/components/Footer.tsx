
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="flex items-center font-bold text-xl mb-4">
              <span className="text-travel-primary">Travel</span>
              <span className="text-travel-secondary">Nexus</span>
            </h3>
            <p className="text-gray-600 mb-4">
              One platform. Every journey. Book buses, trains, and flights all in one place.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-travel-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-travel-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-travel-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-travel-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-travel-primary">Home</Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-600 hover:text-travel-primary">Book Now</Link>
              </li>
              <li>
                <Link to="/routes" className="text-gray-600 hover:text-travel-primary">Routes</Link>
              </li>
              <li>
                <Link to="/timetables" className="text-gray-600 hover:text-travel-primary">Timetables</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-travel-primary">Help Center</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-travel-primary">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-travel-primary">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-travel-primary">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-travel-primary mt-1" />
                <span className="text-gray-600">support@travelnexus.com</span>
              </li>
              <li className="text-gray-600">
                123 Travel Street<br />
                Transport City, TC 12345<br />
                United States
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Travel Nexus. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-travel-primary text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-travel-primary text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-600 hover:text-travel-primary text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
