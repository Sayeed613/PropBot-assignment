import React, { useEffect, useState } from "react";
import { getProperties } from "../services/api";
import PropertyCarouselCompact from "./PropertyCarouselCompact";

const SaleAndRentCompactSection = () => {
  const [saleProperties, setSaleProperties] = useState([]);
  const [rentProperties, setRentProperties] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getProperties();

      const enriched = data.map((item, i) => ({
        ...item,
        type: i % 2 === 0 ? "sale" : "rent",
        price: 450000,
        bedrooms: 3,
      }));

      setSaleProperties(enriched.filter((p) => p.type === "sale"));
      setRentProperties(enriched.filter((p) => p.type === "rent"));
    };

    loadData();
  }, []);

  return (
    <section className="my-12 overflow-hidden">
      {/* Sale Carousel */}
      <div className="mb-12">
        <div className="px-4 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          {/* Left text */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              Best Properties Available For Sale
            </h2>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              Browse our top-rated properties for sale, featuring premium listings
              tailored to your needs. Find your dream home today!
            </p>
          </div>
          {/* Button */}
          <button className="mt-4 md:mt-0 bg-blue-900 text-white px-5 py-2 rounded-full text-sm md:text-base hover:bg-blue-800 transition">
            View More Properties
          </button>
        </div>
        <PropertyCarouselCompact properties={saleProperties} />
      </div>

      {/* Rent Carousel */}
      <div>
        <div className="px-4 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          {/* Left text */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              Best Properties Available For Rent
            </h2>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              Browse our top-rated properties for rent, with handpicked listings
              that suit every budget and lifestyle.
            </p>
          </div>
          {/* Button */}
          <button className="mt-4 md:mt-0 bg-blue-900 text-white px-5 py-2 rounded-full text-sm md:text-base hover:bg-blue-800 transition">
            View All Rentals
          </button>
        </div>
        <PropertyCarouselCompact properties={rentProperties} />
      </div>
    </section>
  );
};

export default SaleAndRentCompactSection;
