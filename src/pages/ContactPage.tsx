import { Instagram, ArrowRight } from "lucide-react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="pt-16 pb-24 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black h-48 md:h-64 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 gold-gradient">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Reach out to book an appointment or inquire about our services
          </p>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-montserrat font-semibold mb-6 text-gold">Get In Touch</h2>
              
              <p className="text-gray-300 mb-8">
                Whether you have questions about our services or would like to book an appointment,
                we're here to help. Fill out the form or connect with us directly through our socials.
              </p>
              
              <div className="space-y-8">
                {/* Booking Process */}
                <div className="bg-[#0a0a0a] p-6 rounded-lg border border-gold/20">
                  <h3 className="text-xl font-montserrat font-medium mb-3 text-gold">Booking Process</h3>
                  <ol className="space-y-3 text-gray-300 list-decimal pl-5">
                    <li>Submit your inquiry through our contact form or social media</li>
                    <li>We'll reach out to discuss your preferences and schedule</li>
                    <li>Arrive at your scheduled time ready for your glamorous new nails</li>
                  </ol>
                </div>
                
                {/* Connect With Us */}
                <div>
                  <h3 className="text-xl font-montserrat font-medium mb-4 text-gold">Connect With Us</h3>
                  <div className="flex flex-col space-y-4">
                    <a 
                      href="https://www.instagram.com/polishmepretty007/?utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-400 hover:text-gold transition-colors group"
                    >
                      <div className="bg-gold/10 p-2.5 rounded-full">
                        <Instagram size={20} className="text-gold" />
                      </div>
                      <span className="group-hover:underline">@polishmepretty007</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    
                    <a 
                      href="https://www.tiktok.com/@polishmepretty007" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-400 hover:text-gold transition-colors group"
                    >
                      <div className="bg-gold/10 p-2.5 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                        </svg>
                      </div>
                      <span className="group-hover:underline">@polishmepretty007</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-montserrat font-semibold mb-6 text-gold">Send a Message</h2>
              <div className="bg-[#0a0a0a] p-6 rounded-lg border border-gold/20">
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16 pt-8 border-t border-gold/20">
            <h2 className="text-2xl font-montserrat font-semibold mb-6 text-gold text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#0a0a0a] p-6 rounded-lg">
                <h3 className="text-lg font-montserrat font-medium mb-2 text-gold">How long do appointments typically take?</h3>
                <p className="text-gray-400">
                  Appointments can range from 2-4+ hours depending on the service and complexity of design.
                  We'll provide a time estimate when booking.
                </p>
              </div>
              
              <div className="bg-[#0a0a0a] p-6 rounded-lg">
                <h3 className="text-lg font-montserrat font-medium mb-2 text-gold">Do you offer nail repairs?</h3>
                <p className="text-gray-400">
                  Yes, we offer repairs for nails done at our salon. Contact us as soon as possible
                  if you need a repair.
                </p>
              </div>
              
              <div className="bg-[#0a0a0a] p-6 rounded-lg">
                <h3 className="text-lg font-montserrat font-medium mb-2 text-gold">How long will my nails last?</h3>
                <p className="text-gray-400">
                  With proper care, acrylics and biogel typically last 3-4 weeks before needing a fill.
                  Press-ons can last 1-2 weeks depending on application and lifestyle.
                </p>
              </div>
              
              <div className="bg-[#0a0a0a] p-6 rounded-lg">
                <h3 className="text-lg font-montserrat font-medium mb-2 text-gold">Can I bring my own design ideas?</h3>
                <p className="text-gray-400">
                  Absolutely! We encourage you to bring inspiration photos or ideas.
                  We'll work with you to create a design you'll love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
