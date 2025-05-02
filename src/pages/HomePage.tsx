
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ title, description, image, link }: { title: string, description: string, image: string, link: string }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold font-montserrat text-white group-hover:text-gold transition-colors duration-300">{title}</h3>
        <p className="text-white/80 mt-2 text-sm">{description}</p>
        <Button variant="outline" size="sm" className="mt-4 self-start" asChild>
          <Link to={link}>View More</Link>
        </Button>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="lovable-uploads/85d06358-eb2c-4c24-8f55-2b5bc9f54adb.png"
                alt="Nail Artist at Work"
                className="rounded-lg shadow-lg border border-gold/20"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="section-title">About Polish Me Pretty</h2>
              <p className="mt-6 text-gray-400 leading-relaxed">
                Polish Me Pretty was founded with a passion for creativity and a dedication to quality. Our mission is to transform your nails into wearable art that expresses your unique personality and style.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Each design is meticulously crafted with premium products and attention to detail. Whether you're looking for elegant acrylics, long-lasting biogel, or custom press-ons to wear at home, we're committed to delivering nail designs that make you feel confident and beautiful.
              </p>
              <Button className="mt-8" variant="outline" asChild>
                <Link to="/contact">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="text-center text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">
            Discover our range of premium nail services, each designed to provide you with the perfect look for any occasion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Press Ons"
              description="Custom designed press-on nails for an instant, salon-quality manicure at home."
              image="lovable-uploads/afa4fc3a-4fab-4213-a192-be1f25989429.png"
              link="/gallery/press-ons"
            />
            <ServiceCard
              title="Acrylics"
              description="Durable and versatile acrylic enhancements for a perfect, long-lasting manicure."
              image="lovable-uploads/f946b9c2-95d8-44b8-903e-1612e71410e6.png"
              link="/gallery/acrylics"
            />
            <ServiceCard
              title="Biogel"
              description="Gentle on your natural nails with a glossy finish that lasts for weeks."
              image="lovable-uploads/939ace81-db72-4834-bd5e-84cb550471ef.png"
              link="/gallery/biogel"
            />
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Featured Designs</h2>
          <p className="text-center text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">
            Browse through some of our most stunning nail artistry and get inspired for your next appointment.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="lovable-uploads/7b2dc5da-6439-495d-8c65-628ce8bfcb11.png" alt="Nail Design" className="w-full h-64 object-cover rounded-md hover:opacity-90 transition-opacity" />
            <img src="lovable-uploads/2ab2a643-5df0-428a-8866-c626f77d6d92.png" alt="Nail Design" className="w-full h-64 object-cover rounded-md hover:opacity-90 transition-opacity" />
            <img src="lovable-uploads/85ab2f2a-776e-4a49-bc75-d94144f8085d.png" alt="Nail Design" className="w-full h-64 object-cover rounded-md hover:opacity-90 transition-opacity" />
            <img src="lovable-uploads/9c75b39b-e5bb-4a8d-b1a5-9ce3ce35b6d8.png" alt="Nail Design" className="w-full h-64 object-cover rounded-md hover:opacity-90 transition-opacity" />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/gallery/press-ons">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Ready to Elevate Your Nail Game?</h2>
          <p className="text-gray-400 mt-6 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the luxury of custom nail artistry tailored to your personal style.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
