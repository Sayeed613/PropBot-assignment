import { FaMapMarkerAlt, FaBookmark } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden font-sans">
      {/* Image */}
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-4">
        {/* Location & Bookmark */}
        <div className="flex justify-between items-center mb-1 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-700" />
            <span>{property.city}, {property.state}</span>
          </div>
          <FaBookmark className="text-blue-700" />
        </div>

        {/* Title */}
        <h2 className="text-gray-900 font-semibold text-lg leading-tight">
          {property.name}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-1">
          Spacious {property.bedrooms}BHK apartment in a prime location with modern amenities.
        </p>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-900">$450,000</span>
          <button className="bg-blue-800 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-900 transition-colors">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;