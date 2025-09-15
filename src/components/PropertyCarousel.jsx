import React from "react";
import Slider from "react-slick";
import PropertyCard from "./PropertyCard";

const PropertyCarousel = ({ properties }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="py-4 px-2">
      <Slider {...settings}>
        {properties.map((property) => (
          <div key={property.id} className="px-2">
            <PropertyCard property={property} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertyCarousel;
