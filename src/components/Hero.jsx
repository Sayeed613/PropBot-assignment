import { FaMapMarkerAlt, FaSearch, FaChevronDown } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiShare1 } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      className="relative w-[90%] max-w-[1440px] mx-auto rounded-4xl overflow-hidden min-h-[80vh] flex flex-col justify-center items-center text-center my-8 shadow-lg"
      style={{
        backgroundImage: `url(https://images6.alphacoders.com/139/1392451.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Content */}
      <div className="absolute top-6 z-10 text-white px-4 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Home in One Click!
        </h1>
        <p className="text-md sm:text-lg md:text-xl mb-8">
          Discover, Buy, or Rent Verified Properties with Ease.
        </p>
      </div>

      {/* Search bar */}
      <div className="absolute bottom-24 w-[90%] sm:w-[95%] md:w-full max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 px-2 sm:px-3 py-2 rounded-full shadow-lg bg-transparent">
        <div className="flex items-center flex-1 border bg-white border-gray-300 rounded-md px-3 py-2">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search Location..."
            className="flex-1 px-2 py-2 outline-none text-gray-700 text-sm sm:text-base"
          />
          <FaSearch className="text-gray-400 ml-2 sm:ml-0" />
        </div>
        <button className="w-full sm:w-auto ml-0 sm:ml-2 px-4 py-3 bg-white text-black rounded-full cursor-pointer text-sm sm:text-base">
          List Your Property
        </button>
      </div>

      {/* Filters & Find Property */}
      <div className="hidden sm:block absolute bottom-1 z-50 w-[95%] sm:w-full max-w-5xl mx-auto py-4 bg-white rounded-full shadow px-2 sm:px-0">
        <div className="flex flex-col sm:flex-row items-center justify-evenly gap-3 sm:gap-4 w-full">
          {/* For Rent */}
          <div className="flex items-center justify-center gap-2 md:gap-5 rounded-full border border-gray-300 px-4 sm:px-6 md:px-8 py-2 sm:py-3 cursor-pointer hover:shadow-md transition-shadow w-full sm:w-auto">
            <CiShare1 className="text-gray-600 text-lg" />
            <span className="text-gray-700 text-sm sm:text-lg font-medium">For Rent</span>
            <FaChevronDown className="text-gray-600 text-lg" />
          </div>

          {/* House */}
          <div className="flex items-center justify-center gap-2 md:gap-5 rounded-full border border-gray-300 px-4 sm:px-6 md:px-8 py-2 sm:py-3 cursor-pointer hover:shadow-md transition-shadow w-full sm:w-auto">
            <HiOutlineHome className="text-gray-500 text-lg" />
            <span className="text-gray-700 text-sm sm:text-lg font-medium">House</span>
            <FaChevronDown className="text-gray-600 text-lg" />
          </div>

          {/* Indonesia */}
          <div className="flex items-center justify-center gap-2 md:gap-5 rounded-full border border-gray-300 px-4 sm:px-6 md:px-8 py-2 sm:py-3 cursor-pointer hover:shadow-md transition-shadow w-full sm:w-auto">
            <FaLocationCrosshairs className="text-gray-500 text-lg" />
            <span className="text-gray-700 text-sm sm:text-lg font-medium">Indonesia</span>
            <FaChevronDown className="text-gray-600 text-lg" />
          </div>

          {/* Find Property Button */}
          <button className="w-full sm:w-auto   bg-blue-700 rounded-full px-6 md:px-8 py-3 text-base sm:text-lg text-white font-semibold hover:bg-blue-800 transition-colors">
            Find Property
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
