
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

  return (
    <div 
      className="gallery-item h-full rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-[#d1bb91]/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AspectRatio ratio={4/5}>
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className={`gallery-item-overlay absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-white font-montserrat text-lg font-medium">{item.title}</h3>
        </div>
      </AspectRatio>
    </div>
  );
};

export default GalleryCard;
