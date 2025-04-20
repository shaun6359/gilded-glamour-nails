
import { useEffect, useState } from "react";
import GalleryCard from "../components/GalleryCard";

// Gallery data with aspect ratios
const pressOnsGallery = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1974&auto=format&fit=crop",
    title: "Classic French Tips",
    tags: ["French", "Short", "Elegant"],
    aspectRatio: "portrait"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1636018942549-d84835d0b2fc?q=80&w=2071&auto=format&fit=crop",
    title: "Gold Glitter Accent",
    tags: ["Glitter", "Medium", "Statement"],
    aspectRatio: "landscape"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1599206676215-d1b228631535?q=80&w=1974&auto=format&fit=crop",
    title: "Pink Marble",
    tags: ["Marble", "Long", "Trendy"],
    aspectRatio: "square"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1604902369280-1a77244f68a3?q=80&w=1974&auto=format&fit=crop",
    title: "Matte Black",
    tags: ["Matte", "Medium", "Bold"],
    aspectRatio: "landscape"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?q=80&w=2070&auto=format&fit=crop",
    title: "Rose Gold Foil",
    tags: ["Foil", "Medium", "Luxury"],
    aspectRatio: "portrait"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
    title: "White Minimalist",
    tags: ["Minimalist", "Short", "Clean"],
    aspectRatio: "square"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=2070&auto=format&fit=crop",
    title: "Red Classic",
    tags: ["Red", "Long", "Timeless"],
    aspectRatio: "portrait"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1625165647283-bbd923e7c652?q=80&w=2070&auto=format&fit=crop",
    title: "Pastel Dreams",
    tags: ["Pastel", "Medium", "Subtle"],
    aspectRatio: "landscape"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1975&auto=format&fit=crop",
    title: "Nude Elegance",
    tags: ["Nude", "Almond", "Sophisticated"],
    aspectRatio: "square"
  }
];

// Filter tags for the gallery
const allTags = ["All", "Short", "Medium", "Long", "French", "Glitter", "Matte", "Minimalist"];

const PressOnsGallery = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [filteredGallery, setFilteredGallery] = useState(pressOnsGallery);
  
  useEffect(() => {
    if (activeTag === "All") {
      setFilteredGallery(pressOnsGallery);
    } else {
      const filtered = pressOnsGallery.filter(item => 
        item.tags.some(tag => tag.toLowerCase() === activeTag.toLowerCase())
      );
      setFilteredGallery(filtered);
    }
  }, [activeTag]);
  
  return (
    <div className="pt-16 pb-24">
      {/* Hero Section */}
      <div className="relative bg-black h-72 md:h-96 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1636018942549-d84835d0b2fc?q=80&w=2071&auto=format&fit=crop" 
            alt="Press Ons Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 gold-gradient">
            Press Ons Gallery
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Browse our collection of custom press-on designs, perfect for an instant, 
            glamorous manicure you can apply at home.
          </p>
        </div>
      </div>
      
      {/* Filter Tags */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTags.map((tag, index) => (
            <button
              key={index}
              className={`px-4 py-1 rounded-full text-sm transition-colors ${
                activeTag === tag 
                  ? "bg-gold text-black" 
                  : "bg-transparent text-gray-400 border border-gray-700 hover:border-gold hover:text-gold"
              }`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(100px,auto)]">
          {filteredGallery.map((item) => (
            <div key={item.id} className={`
              ${item.aspectRatio === 'landscape' ? 'col-span-2' : ''}
              ${item.aspectRatio === 'portrait' ? 'row-span-2' : ''}
              ${item.aspectRatio === 'square' && filteredGallery.indexOf(item) % 4 === 0 ? 'col-span-2 row-span-2' : ''}
            `}>
              <GalleryCard item={item} />
            </div>
          ))}
        </div>
        
        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No designs found with this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PressOnsGallery;
