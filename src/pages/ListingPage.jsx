import React, { useEffect, useState } from "react";
import { getProperties } from "../services/api";
import PropertyCard from "../components/PropertyCard";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListingPage = () => {
  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const propertiesPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProperties();
      setProperties(data);
      setFiltered(data);
    };
    fetchData();
  }, []);

  // Filtering
  useEffect(() => {
    let result = [...properties];

    if (type) result = result.filter((p) => p.type?.toLowerCase() === type.toLowerCase());
    if (city) result = result.filter((p) => p.city?.toLowerCase().includes(city.toLowerCase()));

    if (priceRange) {
      if (priceRange === "low") result = result.filter((p) => p.price < 500000);
      if (priceRange === "mid") result = result.filter((p) => p.price >= 500000 && p.price <= 1000000);
      if (priceRange === "high") result = result.filter((p) => p.price > 1000000);
    }

    setFiltered(result);
    setCurrentPage(1); // reset to page 1 when filters change
  }, [type, city, priceRange, properties]);

  // Pagination logic
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / propertiesPerPage);

  // Buy Now handler
  const handleBuy = async (property) => {
    if (!user) {
      toast.warn("Please log in to continue");
      navigate("/login");
      return;
    }

    toast.success(`You expressed interest in ${property.name}! 🎉`);

    try {
      await axios.post("/api/sendEmail", {
        to: user.email,
        subject: "Property Purchase Request",
        message: `
          Hello ${user.name || "User"},
          
          You showed interest in buying:
          🏠 ${property.name}
          📍 ${property.city}, ${property.state}
          💰 Price: $${property.price?.toLocaleString()}

          Our team will contact you shortly.
        `,
      });
      toast.info("Confirmation email sent to your inbox 📧");
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send email. Try again later.");
    }
  };

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 py-10 font-sans flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-6 rounded-2xl shadow-md top-20 h-fit">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">Filters</h3>

        <div className="space-y-6">
          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
            <select
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">All</option>
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <input
              type="text"
              placeholder="Enter city"
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 z-50">Price Range</label>
            <select
              className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">All</option>
              <option value="low">Below $500k</option>
              <option value="mid">$500k - $1M</option>
              <option value="high">Above $1M</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Properties */}
      <main className="w-full md:w-">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Explore Our Premium Properties
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Discover handpicked listings tailored for you. Whether you’re
            searching for your dream home or an investment, we bring you the
            best deals in top locations.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          {currentProperties.length > 0 ? (
            currentProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onBuy={() => handleBuy(property)}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No properties found. Try adjusting your filters.
            </p>
          )}
        </div>

        {/* Pagination */}
      {totalPages > 1 && (
  <div className="flex flex-wrap justify-center items-center mt-10 gap-2">
    {/* Prev */}
    <button
      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
      disabled={currentPage === 1}
      className="px-3 py-1 rounded-lg border bg-white text-sm md:text-base hover:bg-gray-100 disabled:opacity-50"
    >
      Prev
    </button>

    {/* Page numbers */}
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i + 1}
        onClick={() => setCurrentPage(i + 1)}
        className={`px-3 py-1 rounded-lg border text-sm md:text-base ${
          currentPage === i + 1
            ? "bg-blue-800 text-white"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        {i + 1}
      </button>
    ))}

    {/* Next */}
    <button
      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-3 py-1 rounded-lg border bg-white text-sm md:text-base hover:bg-gray-100 disabled:opacity-50"
    >
      Next
    </button>
  </div>
)}

      </main>
    </div>
  );
};

export default ListingPage;
