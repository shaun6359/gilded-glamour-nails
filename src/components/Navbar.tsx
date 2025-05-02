
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img 
            src="/lovable-uploads/373d1555-07f0-4a76-9a36-233a03cba102.png" 
            alt="Polish Me Pretty" 
            className="h-8 mr-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
          >
            Home
          </Link>

          <Link
            to="/gallery"
            className={`nav-link ${isActive("/gallery") ? "nav-link-active" : ""}`}
          >
            Gallery
          </Link>

          <Link
            to="/pricing"
            className={`nav-link ${isActive("/pricing") ? "nav-link-active" : ""}`}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "nav-link-active" : ""}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold hover:text-gold-light transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gold/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`nav-link text-center py-2 ${isActive("/") ? "nav-link-active" : ""}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            
            <Link
              to="/gallery"
              className={`nav-link text-center py-2 ${isActive("/gallery") ? "nav-link-active" : ""}`}
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
            
            <Link
              to="/pricing"
              className={`nav-link text-center py-2 ${isActive("/pricing") ? "nav-link-active" : ""}`}
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`nav-link text-center py-2 ${isActive("/contact") ? "nav-link-active" : ""}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
