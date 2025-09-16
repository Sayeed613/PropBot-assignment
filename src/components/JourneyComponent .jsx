import { FaDollarSign, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const JourneyComponent = () => {
  return (
    <div className="w-full min-h-screen font-sans text-gray-900">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#152a75]">
          Start Your Journey Today!
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          Create a profile in seconds and find your ideal home.
        </p>

        {/* Form */}
        <form
          className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            className="flex-1 min-w-[200px] border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#152a75] shadow-sm"
          />
          <select
            className="flex-1 min-w-[200px] border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#152a75] shadow-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Select User Type
            </option>
            <option>Traveler</option>
            <option>Host</option>
            <option>Guest</option>
          </select>
          <input
            type="text"
            placeholder="Enter Your Location"
            className="flex-1 min-w-[200px] border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#152a75] shadow-sm"
          />
          <button
            type="submit"
            className="bg-[#152a75] text-white rounded-md px-6 py-3 font-semibold hover:bg-[#0f2058] transition-colors w-full md:w-auto"
          >
            Continue
          </button>
        </form>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/309/467/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg"
            alt="Modern white home"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-64 sm:h-72 md:h-[500px] object-cover rounded-lg shadow-md"
          />
          <img
            src="https://media.istockphoto.com/id/2175973722/photo/modern-luxury-home-exterior-at-sunset.jpg?s=612x612&w=0&k=20&c=v6auH3ZOL92-iaoMVgIErBdxuPxZzM0UeN2UwejnAEs="
            alt="A-frame wooden home"
            className="absolute -bottom-6 sm:-bottom-10 md:-bottom-[80px] -right-4 sm:-right-6 w-40 sm:w-[400px]  h-32 sm:h-[420px] object-cover rounded-lg shadow-lg border-4 border-gray-200"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-10 flex flex-col items-center md:items-start">
          <h2 className="text-[#152a75] font-extrabold text-2xl sm:text-3xl text-center md:text-left">
            We Provide Latest Properties <br /> For Our Valuable Clients
          </h2>

          <div className="space-y-6 w-full">
            {[
              {
                icon: <FaDollarSign className="text-green-500 text-3xl mt-2" />,
                title: "Budget Friendly",
                desc: "Affordable housing solutions tailored to your budget without compromising on quality.",
              },
              {
                icon: <FaUsers className="text-blue-500 text-3xl mt-2" />,
                title: "Trusted by Thousands",
                desc: "Thousands of happy clients rely on us for secure, transparent, and reliable property services.",
              },
              {
                icon: <FaMapMarkerAlt className="text-red-500 text-3xl mt-2" />,
                title: "Prime Location",
                desc: "Discover properties in the most desirable and well-connected neighborhoods.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex space-x-4 items-start max-w-full sm:max-w-lg md:max-w-none"
              >
                {item.icon}
                <div>
                  <h3 className="text-[#152a75] font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:w-[90%]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyComponent;
