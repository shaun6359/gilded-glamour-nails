import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black border-t border-[#d8b74b]/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-4">
              <img src="/lovable-uploads/373d1555-07f0-4a76-9a36-233a03cba102.png" alt="Polish Me Pretty" className="h-8" />
            </Link>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Elevating your nail game with luxurious, custom designs that make a statement.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/polishmepretty007/?utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d8b74b] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@polishmepretty007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d8b74b] transition-colors" aria-label="TikTok">
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
                
              </li>
              
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-gold transition-colors text-sm">Gallery</Link>
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
        
        <div className="border-t border-[#d8b74b]/20 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>© {currentYear} Polish Me Pretty. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
