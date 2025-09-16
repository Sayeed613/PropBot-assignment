import React from "react";

const FeaturedProperty = () => {
  return (
    <section className="px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Large Image (Left) */}
        <div className="md:col-span-2 relative">
          <img
            src="https://picsum.photos/800/600?random=1"
            alt="Featured Property"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm">By Finder & Projects</p>
            <h2 className="text-xl font-bold">Kenanga Residence</h2>
          </div>
        </div>

        {/* Tall Image (Middle) */}
        <div className="relative">
          <img
            src="https://picsum.photos/600/800?random=2"
            alt="Modern House"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Two stacked images (Right) */}
        <div className="flex flex-col gap-4">
          <img
            src="https://picsum.photos/600/400?random=3"
            alt="Luxury Villa"
            className="w-full h-1/2 object-cover rounded-xl shadow-md"
          />
          <img
            src="https://picsum.photos/600/400?random=4"
            alt="City Apartment"
            className="w-full h-1/2 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
