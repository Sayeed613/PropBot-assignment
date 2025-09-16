 import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import { MdFeaturedPlayList } from "react-icons/md";
import SaleAndRentCompactSection from '../components/SaleAndRentCompactSection';
import Footer from '../components/Footer';
import JourneyComponent from '../components/JourneyComponent ';
import FeaturedProperty from '../components/FeaturedProperty';
 

const HomePage = () => {


  return (
    <div className=''>
      <Hero />
      <WhatWeDo />

      <div className="p-4 md:p-10">
      <div className="flex items-center justify-between mb-6 ">       
           <h1 className="sm:text-3xl text-md font-bold mb-6 text-blue-900">Featured Properties</h1>
<button className="flex items-center justify-center sm:px-4 px-2 py-2 mb-6 border border-gray-500 rounded-full text-black transition">
  {/* Icon visible on all screens */}
  <MdFeaturedPlayList className="sm:mr-2" />

  {/* Text visible only on medium and larger screens */}
  <span className="hidden sm:inline">See 268 new projects</span>
</button>
</div>
      <FeaturedProperty />
    </div>
    <SaleAndRentCompactSection />
    <JourneyComponent/>
    <Footer/>
      </div>

  )
}

export default HomePage