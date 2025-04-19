
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 gold-gradient">404</h1>
        <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page might have been moved, deleted, or perhaps never existed.
          Let's get you back on track.
        </p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
