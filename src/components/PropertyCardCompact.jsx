import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const PropertyCardCompact = ({ property }) => {
  const formatCurrency = (n) =>
    typeof n === "number" ? `$${n.toLocaleString()}` : n;

  return (
    <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden font-sans">
      {/* Image */}
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />

      {/* Details */}
      <div className="p-3 ">
        {/* Location + Rating */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-blue-700" />
            <span>
              {property.city}, {property.state}
            </span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar /> <span>4.5</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-3">
          {property.description ||
            `Spacious ${property.bedrooms ?? 3}BHK apartment with modern amenities.`}
        </p>

        {/* Price + Button */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">
            {formatCurrency(property.price ?? 450000)}
          </span>
          <button className="bg-blue-800 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-900 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardCompact;
