import React from "react";
import Slider from "react-slick";
import PropertyCardCompact from "./PropertyCardCompact";

const PropertyCarouselCompact = ({ properties }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default (desktop)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } }, // tablets & down
    ],
  };

  return (
    <div className="py-6 px-6">
      <Slider {...settings}>
        {properties.map((property) => (
          <div key={property.id} className="px-2">
            <PropertyCardCompact property={property} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertyCarouselCompact;
