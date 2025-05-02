import { useEffect, useState } from "react";
import GalleryCard from "../components/GalleryCard";

// Combined gallery data from all three galleries
const allGalleryItems = [
  // Press-Ons Gallery
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1974&auto=format&fit=crop",
    title: "Classic French Tips",
    tags: ["French", "Short", "Elegant", "Press-On"],
    aspectRatio: "portrait" as const,
    type: "Press-On"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1636018942549-d84835d0b2fc?q=80&w=2071&auto=format&fit=crop",
    title: "Gold Glitter Accent",
    tags: ["Glitter", "Medium", "Statement", "Press-On"],
    aspectRatio: "landscape" as const,
    type: "Press-On"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1599206676215-d1b228631535?q=80&w=1974&auto=format&fit=crop",
    title: "Pink Marble",
    tags: ["Marble", "Long", "Trendy", "Press-On"],
    aspectRatio: "square" as const,
    type: "Press-On"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1604902369280-1a77244f68a3?q=80&w=1974&auto=format&fit=crop",
    title: "Matte Black",
    tags: ["Matte", "Medium", "Bold", "Press-On"],
    aspectRatio: "landscape" as const,
    type: "Press-On"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?q=80&w=2070&auto=format&fit=crop",
    title: "Rose Gold Foil",
    tags: ["Foil", "Medium", "Luxury", "Press-On"],
    aspectRatio: "portrait" as const,
    type: "Press-On"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
    title: "White Minimalist",
    tags: ["Minimalist", "Short", "Clean", "Press-On"],
    aspectRatio: "square" as const,
    type: "Press-On"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=2070&auto=format&fit=crop",
    title: "Red Classic",
    tags: ["Red", "Long", "Timeless", "Press-On"],
    aspectRatio: "portrait" as const,
    type: "Press-On"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1625165647283-bbd923e7c652?q=80&w=2070&auto=format&fit=crop",
    title: "Pastel Dreams",
    tags: ["Pastel", "Medium", "Subtle", "Press-On"],
    aspectRatio: "landscape" as const,
    type: "Press-On"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1975&auto=format&fit=crop",
    title: "Nude Elegance",
    tags: ["Nude", "Almond", "Sophisticated", "Press-On"],
    aspectRatio: "square" as const,
    type: "Press-On"
  },
  
  // Acrylics Gallery
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1612022346090-d8e185fb1d58?q=80&w=2067&auto=format&fit=crop",
    title: "Crystal Clear",
    tags: ["Clear", "Long", "Modern", "Acrylic"],
    aspectRatio: "landscape" as const,
    type: "Acrylic"
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1974&auto=format&fit=crop",
    title: "Blue Ocean",
    tags: ["Blue", "Medium", "Gradient", "Acrylic"],
    aspectRatio: "portrait" as const,
    type: "Acrylic"
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1975&auto=format&fit=crop",
    title: "French XL",
    tags: ["French", "XL", "Classic", "Acrylic"],
    aspectRatio: "square" as const,
    type: "Acrylic"
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?q=80&w=2070&auto=format&fit=crop",
    title: "Glossy Red",
    tags: ["Red", "Almond", "Glossy", "Acrylic"],
    aspectRatio: "landscape" as const,
    type: "Acrylic"
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1599206676215-d1b228631535?q=80&w=1974&auto=format&fit=crop",
    title: "Marble & Gold",
    tags: ["Marble", "Gold", "Long", "Acrylic"],
    aspectRatio: "portrait" as const,
    type: "Acrylic"
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=2070&auto=format&fit=crop",
    title: "Classic Burgundy",
    tags: ["Burgundy", "Medium", "Elegant", "Acrylic"],
    aspectRatio: "square" as const,
    type: "Acrylic"
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1604902369280-1a77244f68a3?q=80&w=1974&auto=format&fit=crop",
    title: "Stiletto Black",
    tags: ["Black", "Stiletto", "Edgy", "Acrylic"],
    aspectRatio: "portrait" as const,
    type: "Acrylic"
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1625165647283-bbd923e7c652?q=80&w=2070&auto=format&fit=crop",
    title: "Ombré Fantasy",
    tags: ["Ombré", "Long", "Statement", "Acrylic"],
    aspectRatio: "landscape" as const,
    type: "Acrylic"
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
    title: "Crystal Accents",
    tags: ["Crystals", "XL", "Luxury", "Acrylic"],
    aspectRatio: "square" as const,
    type: "Acrylic"
  },
  
  // Biogel Gallery
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1625165647283-bbd923e7c652?q=80&w=2070&auto=format&fit=crop",
    title: "Natural Pink",
    tags: ["Pink", "Natural", "Short", "Biogel"],
    aspectRatio: "portrait" as const,
    type: "Biogel"
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1604902369280-1a77244f68a3?q=80&w=1974&auto=format&fit=crop",
    title: "Glossy White",
    tags: ["White", "Glossy", "Medium", "Biogel"],
    aspectRatio: "landscape" as const,
    type: "Biogel"
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
    title: "Baby Blue",
    tags: ["Blue", "Pastel", "Medium", "Biogel"],
    aspectRatio: "square" as const,
    type: "Biogel"
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1975&auto=format&fit=crop",
    title: "French Twist",
    tags: ["French", "Classic", "Short", "Biogel"],
    aspectRatio: "landscape" as const,
    type: "Biogel"
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1599206676215-d1b228631535?q=80&w=1974&auto=format&fit=crop",
    title: "Subtle Shimmer",
    tags: ["Shimmer", "Elegant", "Neutral", "Biogel"],
    aspectRatio: "portrait" as const,
    type: "Biogel"
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?q=80&w=2070&auto=format&fit=crop",
    title: "Nude Perfection",
    tags: ["Nude", "Minimalist", "Professional", "Biogel"],
    aspectRatio: "square" as const,
    type: "Biogel"
  },
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1974&auto=format&fit=crop",
    title: "Dusty Rose",
    tags: ["Rose", "Medium", "Matte", "Biogel"],
    aspectRatio: "portrait" as const,
    type: "Biogel"
  },
  {
    id: 26,
    image: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=2070&auto=format&fit=crop",
    title: "Soft Lavender",
    tags: ["Lavender", "Short", "Pastel", "Biogel"],
    aspectRatio: "landscape" as const,
    type: "Biogel"
  },
  {
    id: 27,
    image: "https://images.unsplash.com/photo-1612022346090-d8e185fb1d58?q=80&w=2067&auto=format&fit=crop",
    title: "Clear Builder",
    tags: ["Clear", "Natural", "Strengthening", "Biogel"],
    aspectRatio: "square" as const,
    type: "Biogel"
  }
];

// All unique tags extracted from items
const extractAllTags = () => {
  const allTags = new Set<string>();
  allTags.add("All");
  allGalleryItems.forEach(item => {
    item.tags.forEach(tag => allTags.add(tag));
  });
  // Add type filters
  allTags.add("Press-On");
  allTags.add("Acrylic");
  allTags.add("Biogel");
  
  return Array.from(allTags);
};

const GalleryPage = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [filteredGallery, setFilteredGallery] = useState(allGalleryItems);
  const allTags = extractAllTags();
  
  useEffect(() => {
    if (activeTag === "All") {
      setFilteredGallery(allGalleryItems);
    } else if (["Press-On", "Acrylic", "Biogel"].includes(activeTag)) {
      // Filter by type (Press-On, Acrylic, Biogel)
      const filtered = allGalleryItems.filter(item => item.type === activeTag);
      setFilteredGallery(filtered);
    } else {
      // Filter by other tags
      const filtered = allGalleryItems.filter(item => 
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
            src="https://images.unsplash.com/photo-1604902369280-1a77244f68a3?q=80&w=1974&auto=format&fit=crop" 
            alt="Nail Art Gallery" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 gold-gradient">
            Nail Art Gallery
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Browse our complete collection of nail designs featuring press-ons, acrylics, 
            and biogel options to find your perfect style.
          </p>
        </div>
      </div>
      
      {/* Filter Tags */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {/* Type filters highlighted */}
          <div className="w-full flex justify-center mb-4">
            <div className="inline-flex rounded-md bg-secondary p-1 max-w-full overflow-x-auto">
              {["All", "Press-On", "Acrylic", "Biogel"].map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTag === type 
                      ? "bg-[#d1bb91] text-black" 
                      : "text-gray-300 hover:text-[#d1bb91]"
                  }`}
                  onClick={() => setActiveTag(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          {/* Other tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {allTags
              .filter(tag => !["All", "Press-On", "Acrylic", "Biogel"].includes(tag))
              .map((tag, index) => (
                <button
                  key={index}
                  className={`px-4 py-1 rounded-full text-sm transition-colors ${
                    activeTag === tag 
                      ? "bg-[#d1bb91] text-black" 
                      : "bg-transparent text-gray-400 border border-gray-700 hover:border-[#d1bb91] hover:text-[#d1bb91]"
                  }`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(100px,auto)]">
          {filteredGallery.map((item) => (
            <div key={item.id} className={`
              ${item.aspectRatio === 'landscape' ? 'col-span-2' : ''}
              ${item.aspectRatio === 'portrait' ? 'row-span-2' : ''}
              ${item.aspectRatio === 'square' && filteredGallery.indexOf(item) % 7 === 0 ? 'col-span-2 row-span-2' : ''}
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

export default GalleryPage;
