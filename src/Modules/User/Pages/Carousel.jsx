import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Discovery1 from "../Images/Discovery1.jpg";
import Discovery2 from "../Images/Discovery2.jpg";
import Discovery3 from "../Images/Discovery3.jpg";
import Discovery4 from "../Images/Discovery4.jpg";

const CarouselSection = () => {

  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <div className="rounded-xl text-left">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={Discovery3} alt="dn" className="lg:w-full lg:h-[450px] object-cover object-bottom" />
          <Carousel.Caption>
            <span className="rounded-xl font-bold text-left bg-green-700 text-white px-3 py-1">Packages</span>
            <h1 className="mulish">Mountain Adventures</h1>
            <p className="text-left">Explore breathtaking landscapes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Discovery4} alt="dn" className="lg:w-full lg:h-[450px] object-cover object-center bg-black opacity-60" />
          <Carousel.Caption>
            <span className="rounded-xl font-bold text-left bg-blue-700 text-white px-3 py-1">Tickets</span>
            <h1 className="mulish">Tropical Paradise</h1>
            <p className="text-left">Enjoy Travel in Minimum Price</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Discovery1} alt="dn" className="lg:w-full lg:h-[450px] object-cover object-bottom" />
          <Carousel.Caption>
            <span className="rounded-xl font-bold text-left bg-yellow-500 text-white px-3 py-1">Hotels</span>
            <h1 className="mulish">Luxury Hotels</h1>
            <p className="text-left">Stay in the finest accommodations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Discovery2} alt="dn" className="lg:w-full lg:h-[450px] object-cover object-center" />
          <Carousel.Caption>
            <span className="rounded-xl font-bold text-left bg-red-600 text-white px-3 py-1">Resraurants</span>
            <h1 className="mulish">Fine Dining</h1>
            <p className="text-left">Savor exquisite culinary experiences</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
