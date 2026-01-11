import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/SearchAll.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { motion } from "framer-motion";
import view1 from '../Images/view1.jpg';
import view2 from '../Images/view2.jpg';
import view3 from '../Images/view3.jpg';
import view4 from '../Images/view4.avif';
import view5 from '../Images/view5.avif';
import view6 from '../Images/view6.avif';
import view7 from '../Images/view7.avif';
import view8 from '../Images/view8.avif';
import view9 from '../Images/view9.avif';
import view10 from '../Images/view10.webp';
import view11 from '../Images/view11.avif';
import view12 from '../Images/view12.jpg';
// import offer from "../Images/offer2.jpeg";
import Carousel from "../Component/Carousel";
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

  const data = [
    { src: view7, title: 'Sunset view', visit: '8.95M', likes: '8.7M' },
    { src: view1, title: 'Lake view', visit: '8.20M', likes: '7.9M' },
    { src: view4, title: 'Beach view', visit: '7.35M', likes: '6.8M' },
    { src: view8, title: 'Waterfall view', visit: '6.63M', likes: '6.1M' },
    { src: view2, title: 'Night view', visit: '6.45M', likes: '6.1M' },
    { src: view3, title: 'Mountain view', visit: '5.88M', likes: '5.4M' },
    { src: view6, title: 'Forest view', visit: '5.12M', likes: '4.6M' },
    { src: view10, title: 'Mountains Snowy view', visit: '4.72M', likes: '4.3M' },
    { src: view11, title: 'Canyon view', visit: '4.28M', likes: '3.9M' },
    { src: view12, title: 'Volcano view', visit: '3.87M', likes: '3.4M' },
    { src: view5, title: 'City Skyline View', visit: '3.45M', likes: '3M' },
    { src: view9, title: 'Desert view', visit: '1.74M', likes: '1.2M' },
  ];

  return (
    <div className="SearchAll lg:px-20 lg:py-10 flex justify-center items-center flex-col gap-5">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} className="carosoule rounded-xl overflow-hidden lg:max-h-120 bg-black lg:w-full shadow-lg">
        <Carousel />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:max-h-120 lg:w-full lg:py-10">
        <SearchBox/>
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} className="whyChose">
        <h1 className="head">Why book with Regal Roamers?</h1>
        <div className="reasons grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="Exp shadow p-2 rounded-md">
            <p><img width='50px' src="https://cdn-icons-png.flaticon.com/128/9636/9636012.png" alt="tourist icons" /></p>
            <h5>Experienced Local Guides</h5>
            <p>Our passionate and knowledgeable guides bring destinations to life with
              insider insights, hidden gems, and cultural expertise.</p>
          </div>
          <div className="itineraries shadow p-2 rounded-md">
            <p><img width='50px' src="https://cdn-icons-png.flaticon.com/128/10217/10217348.png" alt="tourist icons" /></p>
            <h5>Customizable itineraries</h5>
            <p>Whether you prefer adventure, history, or relaxation, we tailor each
              tour to match your interests and schedule for a truly personalized experience.</p>
          </div>
          <div className="support shadow p-2 rounded-md">
            <p><img width='50px' src="https://cdn-icons-png.flaticon.com/128/4230/4230869.png" alt="tourist icons" /></p>
            <h5>24/7 customer support</h5>
            <p>Travel with confidence knowing that our dedicated support team is available
              around the clock to assist you whenever you need help.</p>
          </div>
          <div className="price shadow p-2 rounded-md">
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
