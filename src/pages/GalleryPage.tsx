
import { useState } from "react";
import GalleryCard from "../components/GalleryCard";

// Gallery items with the uploaded images
const galleryItems = [
  {
    id: 1,
    image: "public/lovable-uploads/85d06358-eb2c-4c24-8f55-2b5bc9f54adb.png",
    title: "French Tips with Floral Accent",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 2,
    image: "public/lovable-uploads/3b01c11d-e101-4258-9e75-2c3d754c0bb1.png",
    title: "Pink Square Acrylics",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Acrylic" as const
  },
  {
    id: 3,
    image: "public/lovable-uploads/cb8664f8-f2e3-4bab-a22a-c46c375e206d.png",
    title: "Green Leaf Design",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 4,
    image: "public/lovable-uploads/f946b9c2-95d8-44b8-903e-1612e71410e6.png",
    title: "BMW-Inspired Racing Set",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Acrylic" as const
  },
  {
    id: 5,
    image: "public/lovable-uploads/1ba09d81-f0e0-41da-afd7-1c9de0b782ef.png",
    title: "Peach French with Stars",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 6,
    image: "public/lovable-uploads/bcfdb0b6-131b-484e-99c9-3187a4cee4ca.png",
    title: "Beach French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 7,
    image: "public/lovable-uploads/7b2dc5da-6439-495d-8c65-628ce8bfcb11.png",
    title: "Minimal French Manicure",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 8,
    image: "public/lovable-uploads/0d206aaa-af0c-4d79-92e5-c68f2e26df7c.png",
    title: "Black Flame Design",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Acrylic" as const
  },
  {
    id: 9,
    image: "public/lovable-uploads/939ace81-db72-4834-bd5e-84cb550471ef.png",
    title: "Pink French with Flowers",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Biogel" as const
  },
  {
    id: 10,
    image: "public/lovable-uploads/afa4fc3a-4fab-4213-a192-be1f25989429.png",
    title: "Nude and White French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 11,
    image: "public/lovable-uploads/2ab2a643-5df0-428a-8866-c626f77d6d92.png",
    title: "Pink and Gold Accent",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 12,
    image: "public/lovable-uploads/9f9c1a8b-c36d-454f-bfbd-eb025aaab44f.png",
    title: "Green and Gold Abstract",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 13,
    image: "public/lovable-uploads/85ab2f2a-776e-4a49-bc75-d94144f8085d.png",
    title: "Pastel Green Floral",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 14,
    image: "public/lovable-uploads/9c75b39b-e5bb-4a8d-b1a5-9ce3ce35b6d8.png",
    title: "White French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 15,
    image: "public/lovable-uploads/19ed0f98-4a28-4653-9db8-0cdbd215d5b3.png",
    title: "Pastel Blue with Pearls",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  }
];

const GalleryPage = () => {
  return (
    <div className="pt-16 pb-24">
      {/* Hero Section */}
      <div className="relative bg-black h-72 md:h-96 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="public/lovable-uploads/85d06358-eb2c-4c24-8f55-2b5bc9f54adb.png" 
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
            Browse our complete collection of nail designs showcasing our latest and most popular styles.
          </p>
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="h-full">
              <GalleryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
