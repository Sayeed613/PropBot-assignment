import React from "react";
import { FaHome, FaRegHandshake, FaBuilding, FaSearch } from "react-icons/fa";

const services = [
  {
    icon: <FaHome size={28} className="text-black " />,
    title: "Buy & Sell Properties",
    description:
      "We help you find your dream home with ease and confidence.",
  },
  {
    icon: <FaRegHandshake size={28} className="text-black" />,
    title: "Find Rental Homes",
    description:
      "Find verified homes for sale or list your property with ease.",
  },
  {
    icon: <FaBuilding size={28} className="text-black" />,
    title: "Smart AI Property Search",
    description:
      "Find apartments, houses, and offices for rent quickly.",
  },
  {
    icon: <FaSearch size={28} className="text-black" />,
    title: "Safe & Secure Transactions",
    description:
      "Get expert advice on investment and property decisions.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-gray-50 px-4 md:px-10">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">What We Do</h2>
        <p className="text-gray-600 text-lg">
          Helping you find, buy, and rent the perfect property with ease.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-200 p-8 rounded-2xl shadow-md hover:bg-white hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gray-400 ">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
