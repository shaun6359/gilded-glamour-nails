
import { useEffect, useState } from "react";
import GalleryCard from "../components/GalleryCard";

// Gallery data with aspect ratios
const biogelGallery = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1625165647283-bbd923e7c652?q=80&w=2070&auto=format&fit=crop",
    title: "Natural Pink",
    tags: ["Pink", "Natural", "Short"],
    aspectRatio: "portrait"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1604902369280-1a77244f68a3?q=80&w=1974&auto=format&fit=crop",
    title: "Glossy White",
    tags: ["White", "Glossy", "Medium"],
    aspectRatio: "landscape"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
    title: "Baby Blue",
    tags: ["Blue", "Pastel", "Medium"],
    aspectRatio: "square"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1975&auto=format&fit=crop",
    title: "French Twist",
    tags: ["French", "Classic", "Short"],
    aspectRatio: "landscape"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1599206676215-d1b228631535?q=80&w=1974&auto=format&fit=crop",
    title: "Subtle Shimmer",
    tags: ["Shimmer", "Elegant", "Neutral"],
    aspectRatio: "portrait"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?q=80&w=2070&auto=format&fit=crop",
    title: "Nude Perfection",
    tags: ["Nude", "Minimalist", "Professional"],
    aspectRatio: "square"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1974&auto=format&fit=crop",
    title: "Dusty Rose",
    tags: ["Rose", "Medium", "Matte"],
    aspectRatio: "portrait"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=2070&auto=format&fit=crop",
    title: "Soft Lavender",
    tags: ["Lavender", "Short", "Pastel"],
    aspectRatio: "landscape"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1612022346090-d8e185fb1d58?q=80&w=2067&auto=format&fit=crop",
    title: "Clear Builder",
    tags: ["Clear", "Natural", "Strengthening"],
    aspectRatio: "square"
  }
];

// Filter tags for the gallery
const allTags = ["All", "Natural", "Short", "Medium", "French", "Pastel", "Glossy", "Matte", "Minimalist"];

const BiogelGallery = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [filteredGallery, setFilteredGallery] = useState(biogelGallery);
  
  useEffect(() => {
    if (activeTag === "All") {
      setFilteredGallery(biogelGallery);
    } else {
      const filtered = biogelGallery.filter(item => 
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
            src="https://images.unsplash.com/photo-1625165647283-bbd923e7c652?q=80&w=2070&auto=format&fit=crop" 
            alt="Biogel Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 gold-gradient">
            Biogel Gallery
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Discover our collection of biogel nail designs, offering strength and flexibility 
            while being gentle on your natural nails.
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
              ${item.aspectRatio === 'square' && filteredGallery.indexOf(item) % 3 === 0 ? 'col-span-2 row-span-2' : ''}
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

export default BiogelGallery;
