// PropertyCard.jsx
import React from "react";
import { FaMapMarkerAlt, FaBookmark } from "react-icons/fa";

const PropertyCard = ({ property, onBuy  }) => {
  const formatCurrency = (n) =>
    typeof n === "number" ? `$${n.toLocaleString()}` : n;

  return (
    <div className="w-full max-w-[650px] mx-auto font-sans">
      {/* Card with image */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl">
        <img
          src={property.image}
          alt={property.name}
          className="
            w-full 
            h-64       /* mobile */
            sm:h-80    /* small screens */
            md:h-[400px] 
            lg:h-[500px] /* desktop, exactly your size */
            object-cover
          "
        />
      </div>

      {/* Floating white details card (half below the image) */}
      <div className="relative -mt-12 sm:-mt-16 lg:-mt-20 px-4 mb-2 sm:px-6">
        <div className="bg-white rounded-xl shadow-xl   p-4 sm:p-6">
          {/* Location row with bookmark */}
          <div className="flex items-start justify-between ">
            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
              <FaMapMarkerAlt className="text-blue-700" />
              <span className="font-medium">
                {property.name}, {property.state}
              </span>
            </div>

            <FaBookmark className="text-blue-700 cursor-pointer" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            {property.description ||
              `Spacious ${property.bedrooms}BHK apartment in a prime location with modern amenities.`}
          </p>

          {/* Price & Know More */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              {formatCurrency(property.price ?? 0)}
            </span>
            <button
  onClick={onBuy}
  className="bg-blue-800 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-900 transition-colors"
>
  Buy Now
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
