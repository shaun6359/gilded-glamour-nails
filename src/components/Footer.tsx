
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-gold/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="text-2xl font-bold font-montserrat tracking-wider gold-gradient mb-4">
              GILDED GLAMOUR
            </Link>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Elevating your nail game with luxurious, custom designs that make a statement.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                {/* TikTok icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-gold font-montserrat text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery/press-ons" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Press Ons Gallery
                </Link>
              </li>
              <li>
                <Link to="/gallery/acrylics" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Acrylics Gallery
                </Link>
              </li>
              <li>
                <Link to="/gallery/biogel" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Biogel Gallery
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-gold font-montserrat text-lg font-medium mb-4">Book an Appointment</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ready to elevate your nail game? Reach out to book your appointment or ask any questions.
            </p>
            <Link to="/contact" className="btn btn-outline text-sm">
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gold/20 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>© {currentYear} Gilded Glamour Nails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
