import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/SearchAll.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
// import offer from "../Images/offer2.jpeg";
import Carousel from "../Component/layout/Carousel";
import SearchBox from "../Component/SearchBox";

export default function SearchAll() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const navigate = useNavigate();

  const toLogin = () => navigate('/login')

  return (
    <div className="SearchAll lg:px-20 lg:py-10 flex justify-center items-center flex-col gap-5 bg-[#F8FAFC]">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} className="overflow-hidden bg-black shadow-lg carosoule rounded-xl lg:max-h-120 lg:w-full">
        <Carousel />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:max-h-120 lg:w-full lg:py-10">
        <SearchBox/>
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} className="whyChose">
        <h1 className="head">Why book with Regal Roamers?</h1>
        <div className="grid grid-cols-1 gap-6 reasons md:grid-cols-2 lg:grid-cols-4">
          <div className="Exp shadow p-2 rounded-md bg-[#0EA5E9] text-white">
            <p><img width='50px' src="https://cdn-icons-png.flaticon.com/128/9636/9636012.png" alt="tourist icons" /></p>
            <h5>Experienced Local Guides</h5>
            <p>Our passionate and knowledgeable guides bring destinations to life with
              insider insights, hidden gems, and cultural expertise.</p>
          </div>
          <div className="itineraries shadow p-2 rounded-md bg-[#0EA5E9] text-white">
            <p><img width='50px' src="https://cdn-icons-png.flaticon.com/128/10217/10217348.png" alt="tourist icons" /></p>
            <h5>Customizable itineraries</h5>
            <p>Whether you prefer adventure, history, or relaxation, we tailor each
              tour to match your interests and schedule for a truly personalized experience.</p>
          </div>
          <div className="support shadow p-2 rounded-md bg-[#0EA5E9] text-white">
            <p><img width='50px' src="https://cdn-icons-png.flaticon.com/128/4230/4230869.png" alt="tourist icons" /></p>
            <h5>24/7 customer support</h5>
            <p>Travel with confidence knowing that our dedicated support team is available
              around the clock to assist you whenever you need help.</p>
          </div>
          <div className="price shadow p-2 rounded-md bg-[#0EA5E9] text-white">
            <p><img width='50px' src="https://cdn-icons-png.flaticon.com/128/17216/17216427.png" alt="tourist icons" /></p>
            <h5>Affordable pricing</h5>
            <p>We offer competitive rates without compromising on quality, ensuring you get
              the best value for your money on every tour.</p>
          </div>
        </div>
        <div className="login">
          <h2>Log in to manage bookings & Regal Roamers Rewards</h2>
          <h6>Don't have an account yet? <a href="/register">Sign up</a></h6>
          <button onClick={toLogin}>Login</button>
        </div>
      </motion.div>
    </div>
  );
}
