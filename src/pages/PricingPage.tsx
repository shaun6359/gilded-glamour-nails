
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PriceItem {
  service: string;
  price: string;
}

interface AddonItem {
  service: string;
  priceAll: string;
  priceAccent?: string;
}

const PriceTable = ({ items }: { items: PriceItem[] }) => {
  return (
    <div className="border border-gold/30 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gold/10">
            <th className="text-left py-4 px-6 font-montserrat">Service</th>
            <th className="text-right py-4 px-6 font-montserrat">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-black' : 'bg-[#0a0a0a]'}>
              <td className="py-4 px-6 border-t border-gold/20">{item.service}</td>
              <td className="py-4 px-6 text-right border-t border-gold/20">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AddonTable = ({ items }: { items: AddonItem[] }) => {
  return (
    <div className="border border-gold/30 rounded-lg overflow-hidden mt-8">
      <table className="w-full">
        <thead>
          <tr className="bg-gold/10">
            <th className="text-left py-4 px-6 font-montserrat">Add-on</th>
            <th className="text-right py-4 px-6 font-montserrat">Full Set (10 nails)</th>
            <th className="text-right py-4 px-6 font-montserrat">Accent (2 nails)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-black' : 'bg-[#0a0a0a]'}>
              <td className="py-4 px-6 border-t border-gold/20">{item.service}</td>
              <td className="py-4 px-6 text-right border-t border-gold/20">{item.priceAll}</td>
              <td className="py-4 px-6 text-right border-t border-gold/20">{item.priceAccent || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PricingPage = () => {
  const acrylicPrices: PriceItem[] = [
    { service: "Short", price: "$65" },
    { service: "Medium", price: "$70" },
    { service: "Long", price: "$80" },
    { service: "XL", price: "$90" },
    { service: "XXL", price: "$100" },
  ];

  const biogelPrices: PriceItem[] = [
    { service: "Full Set", price: "$70" },
  ];

  const pressOnPrices: PriceItem[] = [
    { service: "Short", price: "$25" },
    { service: "Medium", price: "$30" },
    { service: "Long", price: "$40" },
    { service: "XL", price: "$50" },
    { service: "XXL", price: "$65" },
  ];

  const designAddons: AddonItem[] = [
    { service: "Solid Color", priceAll: "$10", priceAccent: "$2" },
    { service: "French Tip", priceAll: "$30", priceAccent: "$8" },
    { service: "Ombré", priceAll: "$35", priceAccent: "$10" },
    { service: "Marble", priceAll: "$30", priceAccent: "$6" },
  ];

  const accentAddons: AddonItem[] = [
    { service: "Full Acrylic Flowers", priceAll: "$80", priceAccent: "$8/nail" },
    { service: "Half Acrylic Flowers", priceAll: "$50", priceAccent: "$5/nail" },
    { service: "Quarter Acrylic Flowers", priceAll: "$30", priceAccent: "$3/nail" },
    { service: "Bling & Nail Art", priceAll: "$30-$150", priceAccent: "$3-$15+/nail" },
  ];

  return (
    <div className="pt-16 pb-24 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black h-48 md:h-64 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 gold-gradient">
            Our Pricing
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Transparent pricing for all our services and design options
          </p>
        </div>
      </div>

      {/* Pricing Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="acrylics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="acrylics">Acrylics</TabsTrigger>
              <TabsTrigger value="biogel">Biogel</TabsTrigger>
              <TabsTrigger value="press-ons">Press Ons</TabsTrigger>
            </TabsList>
            
            <TabsContent value="acrylics">
              <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">Acrylic Nails</h2>
                <p className="text-gray-400 mb-6">
                  Our acrylic services include nail preparation, application, shaping, and finishing with a gel top coat for 
                  long-lasting shine. Pricing varies by length.
                </p>
                <PriceTable items={acrylicPrices} />
              </div>
            </TabsContent>
            
            <TabsContent value="biogel">
              <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">Biogel Nails</h2>
                <p className="text-gray-400 mb-6">
                  Our biogel services include nail preparation, application, and finishing. 
                  Biogel is gentler on your natural nails while providing strength and flexibility.
                </p>
                <PriceTable items={biogelPrices} />
              </div>
            </TabsContent>
            
            <TabsContent value="press-ons">
              <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">Press On Nails</h2>
                <p className="text-gray-400 mb-6">
                  Our custom press-on nails are handcrafted to your specifications. Each set includes adhesive tabs, 
                  nail glue, a file, and cuticle stick for application.
                </p>
                <PriceTable items={pressOnPrices} />
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 pt-8 border-t border-gold/20">
            <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">Design Add-Ons</h2>
            <p className="text-gray-400 mb-6">
              Customize your manicure with our range of design options. Prices apply to all three nail types.
            </p>
            
            <AddonTable items={designAddons} />
            
            <h3 className="text-xl font-montserrat font-semibold mt-10 mb-4 text-gold">3D Elements & Art</h3>
            <AddonTable items={accentAddons} />
          </div>
          
          {/* Notes & Policies */}
          <div className="mt-12 pt-8 border-t border-gold/20">
            <h2 className="text-2xl font-montserrat font-semibold mb-4 text-gold">Booking Information</h2>
            
            <div className="bg-[#0a0a0a] p-6 rounded-lg border border-gold/20">
              <h3 className="text-xl font-montserrat font-medium mb-3 text-gold">Important Notes</h3>
              <ul className="space-y-3 text-gray-300 list-disc pl-5">
                <li>Prices may vary based on specific design complexity</li>
                <li>Please provide at least 24 hours notice for cancellations</li>
                <li>Late arrivals (15+ minutes) may result in rescheduling</li>
              </ul>
              
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link to="/contact">Book Your Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
