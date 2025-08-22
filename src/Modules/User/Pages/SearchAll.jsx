import React, { useState } from "react";
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
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import Discovery1 from "../Images/Discovery1.avif";
import Discovery2 from "../Images/Discovery2.avif";
import Discovery3 from "../Images/Discovery3.avif";
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

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);
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

  const Service =[
    { name: "Package", image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: "Hotel Services", image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: "Restaurant", image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { name: "Flight Ticket", image: 'https://cdn.zeebiz.com/sites/default/files/2023/08/19/256870-air-india-reuters.jpg?im=FitAndFill=(1200,900)'},
    { name: "Train Ticket", image: 'https://plus.unsplash.com/premium_photo-1661906412572-172c5ae96d8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  ]


  return (
    <div className="SearchAll">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} className="carosoule">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={Discovery1} alt="dn" className="f-slide" />
            <Carousel.Caption>
              <h1>Discover the World with Unmatched Ease & Comfort</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Discovery2} alt="dn" className="s-slide" />
            <Carousel.Caption>
              <h1>Your Journey Begins with Seamless Exploration</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Discovery3} alt="dn" className="t-slide" />
            <Carousel.Caption>
              <h1> Experience the World Like Never Before</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </motion.div>
      {/* --------------------------------------------------------------------------------------------------------------------- */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} className="whyChose">
        <h1 className="head">Why book with Regal Roamers?</h1>
        <div className="reasons">
          <div className="Exp">
            <p><img width='50px' src="https://cdn-icons-png.flaticon.com/128/9636/9636012.png" alt="tourist icons" /></p>
            <h5>Experienced Local Guides</h5>
            <p>Our passionate and knowledgeable guides bring destinations to life with
              insider insights, hidden gems, and cultural expertise.</p>
          </div>
          <div className="itineraries">
            <p><img width='50px' src="https://cdn-icons-png.flaticon.com/128/10217/10217348.png" alt="tourist icons" /></p>
            <h5>Customizable itineraries</h5>
            <p>Whether you prefer adventure, history, or relaxation, we tailor each
              tour to match your interests and schedule for a truly personalized experience.</p>
          </div>
          <div className="support">
            <p><img width='50px' src="https://cdn-icons-png.flaticon.com/128/4230/4230869.png" alt="tourist icons" /></p>
            <h5>24/7 customer support</h5>
            <p>Travel with confidence knowing that our dedicated support team is available
              around the clock to assist you whenever you need help.</p>
          </div>
          <div className="price">
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
      {/* --------------------------------------------------------------------------------------------------------------------- */}
      {/* <motion.div className="destination" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}   >
        <h1 className="dest-head">Seven Wonders of the World</h1>
        <div className="place">
          <Slider {...settings} id="Slider">
            {Wonders.map((Place, index) => {
              return (
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 1 }} className="placeCard" key={index}>
                  <div className="image">
                    <img src={Place.image} alt={Place.name} />
                    <p>{index !== 9 ? "0" + parseInt(index + 1) : index + 1}</p>
                  </div>
                  <div className="name">
                    <h1>{Place.name}</h1>
                  </div>
                  <div className="desc">
                    <h6>{Place.description}</h6>
                  </div>
                  <div className="spot">
                    <h4>Spots we travel: <br /> {Place.attraction}</h4>
                  </div>
                  <div className="rate">
                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                      Rating: <Rating name="text-feedback" value={Place.rate} readOnly precision={0.1}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                    </Box>
                  </div>
                  <div className="btns">
                    <button className="eplr-btn" onClick={handleExlore}>Explore</button>
                  </div>
                </motion.div>
              );
            })}
          </Slider>
        </div>
      </motion.div> */}
      {/* --------------------------------------------------------------------------------------------------------------------- */}

      <motion.div className="Service-section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}   >
        <h1>Our Services</h1>
        <Slider {...settings} id="Slider" className="services">
          {Service.map((service, i)=>{
            return(
            <Card key={i} className='service'>
              <img src={service.image} alt={service.name} />
              <Box className='name'>{service.name}</Box>
            </Card>)
          })}
        </Slider>
      </motion.div>

      {/* --------------------------------------------------------------------------------------------------------------------- */}

      {/* <div className="feedback">
        {
          Feedback.map((feed)=>{
            return( 
            <div className="feed">
              <div className="pic"></div>
              <div className="message">Hi Hello Namasthe. its Beacwdvfwnv<br/>
                jfsgb  dbfvbsn v hjsddfn sbnd fsdf n  sbdf sf nmsdfn 
              </div>
              <div className="star">Rating 4.3/5</div>
            </div>
            )
          })
        }
        </div> */}
      {/* ----------------------------------------------------------------------------------------------------------------- */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} className='packages'>
        <h1>Breathtaking Views You Must See</h1>
        <div className='package'>
          {data.map((item) => (
            <Card orientation="horizontal" size="sm" key={item.title} variant="outlined"
              sx={{ width: 320, height: 140, display: 'flex', alignItems: 'center', p: 1 }} >
              <AspectRatio ratio="1" sx={{ minWidth: 120 }}>
                <img src={item.src} alt={item.title} />
              </AspectRatio>
              <Box sx={{ whiteSpace: 'wrap', mx: 1 }}>
                <Typography level="title-lg">{item.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <IconButton aria-label="add to favorites">
                    <PersonSharpIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                  <Typography sx={{ fontSize: 15 }} level="body-md">{item.visit}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: 'red', fontSize: 20 }} />
                  </IconButton>
                  <Typography sx={{ fontSize: 15 }} level="body-md" >{item.likes}</Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </div>
      </motion.div>
      {/* ----------------------------------------------------------------------------------------------------------------- */}
    </div>
  );
}
