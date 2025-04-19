
import { useEffect, useState } from "react";
import GalleryCard from "../components/GalleryCard";

// Gallery data
const acrylicsGallery = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1612022346090-d8e185fb1d58?q=80&w=2067&auto=format&fit=crop",
    title: "Crystal Clear",
    tags: ["Clear", "Long", "Modern"]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1974&auto=format&fit=crop",
    title: "Blue Ocean",
    tags: ["Blue", "Medium", "Gradient"]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1975&auto=format&fit=crop",
    title: "French XL",
    tags: ["French", "XL", "Classic"]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?q=80&w=2070&auto=format&fit=crop",
    title: "Glossy Red",
    tags: ["Red", "Almond", "Glossy"]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1599206676215-d1b228631535?q=80&w=1974&auto=format&fit=crop",
    title: "Marble & Gold",
    tags: ["Marble", "Gold", "Long"]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=2070&auto=format&fit=crop",
    title: "Classic Burgundy",
    tags: ["Burgundy", "Medium", "Elegant"]
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1604902369280-1a77244f68a3?q=80&w=1974&auto=format&fit=crop",
    title: "Stiletto Black",
    tags: ["Black", "Stiletto", "Edgy"]
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1625165647283-bbd923e7c652?q=80&w=2070&auto=format&fit=crop",
    title: "Ombré Fantasy",
    tags: ["Ombré", "Long", "Statement"]
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
    title: "Crystal Accents",
    tags: ["Crystals", "XL", "Luxury"]
  }
];

// Filter tags for the gallery
const allTags = ["All", "Short", "Medium", "Long", "XL", "French", "Marble", "Ombré", "Crystals"];

const AcrylicsGallery = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [filteredGallery, setFilteredGallery] = useState(acrylicsGallery);
  
  useEffect(() => {
    if (activeTag === "All") {
      setFilteredGallery(acrylicsGallery);
    } else {
      const filtered = acrylicsGallery.filter(item => 
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
            src="https://images.unsplash.com/photo-1612022346090-d8e185fb1d58?q=80&w=2067&auto=format&fit=crop" 
            alt="Acrylics Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 gold-gradient">
            Acrylics Gallery
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Explore our stunning collection of acrylic nail designs, known for their 
            durability and endless customization possibilities.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <GalleryCard key={item.id} item={item} />
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

export default AcrylicsGallery;
