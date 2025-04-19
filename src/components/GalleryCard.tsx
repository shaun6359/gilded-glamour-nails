
import { useState } from "react";

type GalleryItem = {
  id: number;
  image: string;
  title: string;
  tags: string[];
};

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="gallery-item aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <div className={`gallery-item-overlay ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-white font-montserrat text-lg font-medium mb-1">{item.title}</h3>
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
