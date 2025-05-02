
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  tags: string[];
  aspectRatio?: "square" | "portrait" | "landscape";
  type?: "Press-On" | "Acrylic" | "Biogel";
};

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAspectRatio = (type?: "square" | "portrait" | "landscape") => {
    switch (type) {
      case "portrait":
        return 3/4;
      case "landscape":
        return 16/9;
      default:
        return 1; // square is the default
    }
  };

  return (
    <div 
      className="gallery-item h-full rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AspectRatio ratio={getAspectRatio(item.aspectRatio)}>
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className={`gallery-item-overlay absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between items-end mb-1">
            <h3 className="text-white font-montserrat text-lg font-medium">{item.title}</h3>
            {item.type && (
              <span className="text-xs bg-[#d1bb91] text-black px-2 py-0.5 rounded-full">
                {item.type}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {item.tags
              .filter(tag => tag !== item.type)
              .map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-[#d1bb91]/20 text-[#d1bb91] px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default GalleryCard;
