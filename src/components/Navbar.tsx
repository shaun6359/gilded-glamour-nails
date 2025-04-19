
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
          <span className="text-2xl font-bold font-montserrat tracking-wider gold-gradient">
            GILDED GLAMOUR
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className={`nav-link ${
              isActive("/gallery/press-ons") || 
              isActive("/gallery/acrylics") || 
              isActive("/gallery/biogel") 
                ? "nav-link-active" 
                : ""
            }`}>
              Gallery
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  to="/gallery/press-ons"
                  className="w-full"
                  onClick={closeMobileMenu}
                >
                  Press Ons
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/gallery/acrylics"
                  className="w-full"
                  onClick={closeMobileMenu}
                >
                  Acrylics
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/gallery/biogel"
                  className="w-full"
                  onClick={closeMobileMenu}
                >
                  Biogel
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
            
            <div className="relative py-2">
              <p className="nav-link text-center mb-2">Gallery</p>
              <div className="flex flex-col space-y-2 bg-secondary/50 py-2 rounded-md">
                <Link
                  to="/gallery/press-ons"
                  className="text-sm py-1 hover:text-gold transition-colors"
                  onClick={closeMobileMenu}
                >
                  Press Ons
                </Link>
                <Link
                  to="/gallery/acrylics"
                  className="text-sm py-1 hover:text-gold transition-colors"
                  onClick={closeMobileMenu}
                >
                  Acrylics
                </Link>
                <Link
                  to="/gallery/biogel"
                  className="text-sm py-1 hover:text-gold transition-colors"
                  onClick={closeMobileMenu}
                >
                  Biogel
                </Link>
              </div>
            </div>
            
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
