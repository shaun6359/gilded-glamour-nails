
import GalleryCard from "../components/GalleryCard";

// Gallery items with all the uploaded images
const galleryItems = [
  {
    id: 1,
    image: "lovable-uploads/85d06358-eb2c-4c24-8f55-2b5bc9f54adb.png",
    title: "French Tips with Floral Accent",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 2,
    image: "lovable-uploads/3b01c11d-e101-4258-9e75-2c3d754c0bb1.png",
    title: "Pink Square Acrylics",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Acrylic" as const
  },
  {
    id: 3,
    image: "lovable-uploads/cb8664f8-f2e3-4bab-a22a-c46c375e206d.png",
    title: "Green Leaf Design",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 4,
    image: "lovable-uploads/f946b9c2-95d8-44b8-903e-1612e71410e6.png",
    title: "BMW-Inspired Racing Set",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Acrylic" as const
  },
  {
    id: 5,
    image: "lovable-uploads/1ba09d81-f0e0-41da-afd7-1c9de0b782ef.png",
    title: "Peach French with Stars",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 6,
    image: "lovable-uploads/bcfdb0b6-131b-484e-99c9-3187a4cee4ca.png",
    title: "Beach French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 7,
    image: "lovable-uploads/7b2dc5da-6439-495d-8c65-628ce8bfcb11.png",
    title: "Minimal French Manicure",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 8,
    image: "lovable-uploads/0d206aaa-af0c-4d79-92e5-c68f2e26df7c.png",
    title: "Black Flame Design",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Acrylic" as const
  },
  {
    id: 9,
    image: "lovable-uploads/939ace81-db72-4834-bd5e-84cb550471ef.png",
    title: "Pink French with Flowers",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Biogel" as const
  },
  {
    id: 10,
    image: "lovable-uploads/afa4fc3a-4fab-4213-a192-be1f25989429.png",
    title: "Nude and White French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 11,
    image: "lovable-uploads/2ab2a643-5df0-428a-8866-c626f77d6d92.png",
    title: "Pink and Gold Accent",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 12,
    image: "lovable-uploads/9f9c1a8b-c36d-454f-bfbd-eb025aaab44f.png",
    title: "Green and Gold Abstract",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 13,
    image: "lovable-uploads/85ab2f2a-776e-4a49-bc75-d94144f8085d.png",
    title: "Pastel Green Floral",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 14,
    image: "lovable-uploads/9c75b39b-e5bb-4a8d-b1a5-9ce3ce35b6d8.png",
    title: "White French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 15,
    image: "lovable-uploads/19ed0f98-4a28-4653-9db8-0cdbd215d5b3.png",
    title: "Pastel Blue with Pearls",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  // New images
  {
    id: 16,
    image: "lovable-uploads/758ef8ba-520d-4ece-8ce7-ce96fd982df4.png",
    title: "Natural French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 17,
    image: "lovable-uploads/6ff2ceda-d0af-42c3-ad8f-77451923ca4e.png",
    title: "White Square Acrylics",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Acrylic" as const
  },
  {
    id: 18,
    image: "lovable-uploads/2ee82d95-7452-4b8d-97c8-0771f97f3a36.png",
    title: "Pink French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 19,
    image: "lovable-uploads/ab8ed59d-82da-4fc0-815d-63e039ede089.png",
    title: "Red & Black Designer Set",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Acrylic" as const
  },
  {
    id: 20,
    image: "lovable-uploads/56055f5f-62f5-4213-936d-8a3d1beadc2c.png",
    title: "Red French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 21,
    image: "lovable-uploads/24eff33b-c5d9-43d9-b649-ed1e50b684e7.png",
    title: "Green French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 22,
    image: "lovable-uploads/5f3823a9-b8cb-495d-93dc-d9ab48600271.png",
    title: "Black & Silver Bow Design",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 23,
    image: "lovable-uploads/fb1780d4-fab8-42d7-a914-82c428b8dc94.png",
    title: "Luxury Gold & Black Set",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Acrylic" as const
  },
  {
    id: 24,
    image: "lovable-uploads/14dd5c8b-36d9-4469-a392-252d17a39439.png",
    title: "Yellow Tips with Pearls",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 25,
    image: "lovable-uploads/52077b51-5170-435c-b22a-a9e06be8409f.png",
    title: "Orange French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 26,
    image: "lovable-uploads/2a5f685f-6134-4b2d-8362-01c0c7f0a6c4.png",
    title: "White with Cannabis Design",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 27,
    image: "lovable-uploads/a6ed1bfd-0848-4be9-b8dd-eb651e7be5fc.png",
    title: "Blue French Tips",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 28,
    image: "lovable-uploads/d3dcf1cd-2f40-41da-b626-04f22f196bac.png",
    title: "Jade Green Marble Effect",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Acrylic" as const
  },
  {
    id: 29,
    image: "lovable-uploads/dfc9381f-8ed4-4b0c-a046-24b2f6445075.png",
    title: "Red Flower Design",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 30,
    image: "lovable-uploads/697c2fb4-52f6-486a-b9fb-e082c7192761.png",
    title: "Colorful Summer Design",
    tags: [],
    aspectRatio: "portrait" as const,
    type: "Press-On" as const
  },
  {
    id: 31,
    image: "lovable-uploads/cb3e1310-baf4-46ed-b401-ff2bb96bde5e.png",
    title: "Almond-Shaped Pink Nails",
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
            src="lovable-uploads/85d06358-eb2c-4c24-8f55-2b5bc9f54adb.png" 
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
