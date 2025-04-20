
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  tags: string[];
  aspectRatio?: "square" | "portrait" | "landscape";
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
          <h3 className="text-white font-montserrat text-lg font-medium mb-1">{item.title}</h3>
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs bg-[#d8b74b]/20 text-[#d8b74b] px-2 py-0.5 rounded-full"
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
