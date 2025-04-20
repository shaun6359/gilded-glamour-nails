
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1974&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Gold accents - decorative elements */}
      <div className="absolute top-[20%] left-[10%] w-32 h-32 border border-gold rounded-full opacity-20"></div>
      <div className="absolute bottom-[15%] right-[15%] w-48 h-48 border border-gold rounded-full opacity-10"></div>
      <div className="absolute top-[40%] right-[5%] w-24 h-24 border border-gold rounded-full opacity-20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center max-w-3xl">
        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gold-gradient animate-fade-in">
          POLISH ME PRETTY
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Elevate your style with luxurious, custom nail designs
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" asChild>
            <Link to="/gallery/press-ons">
              View Gallery
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
