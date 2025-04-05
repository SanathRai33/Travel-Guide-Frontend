import React, { useState } from 'react'
import '../css/Contact.css'
import { FaPhone, FaMapMarkerAlt, FaMailBulk, FaGlobe, } from 'react-icons/fa'
import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }
    console.log("Feedback Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const feedbacks = [
    {
      name: "Alice Johnson",
      message: "The travel packages offered a perfect mix of adventure and relaxation. Everything was well planned!",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Mark Wilson",
      message: "Booking a room was seamless, and the hotel was exactly as described. Loved the hassle-free experience!",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Sophia Kim",
      message: "The restaurant recommendations were amazing! Tried local delicacies that I wouldn’t have found otherwise.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "James Carter",
      message: "I booked a travel package for my honeymoon, and it was a dream come true. Highly recommend it!",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      name: "Emma Rodriguez",
      message: "The dine-in reservation system is very convenient. No waiting time, and the service was top-notch!",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      name: "David Lee",
      message: "Great experience! Found the best deals for flights and hotels. Will definitely use this site again.",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className='Contact'>
      <motion.div className="con-head" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} >
        <h1>Let's Make It Happen.<br />Don't hesitate to get in touch!</h1>
        <div className="con-info">
          <p><FaMapMarkerAlt size={20} className='icn' /><br />  Mangalore, Dakshina Kannada, Karnataka, India</p>
          <p><FaPhone size={20} className='icn' /><br /> +91 948382 54422</p>
          <p><FaMailBulk size={20} className='icn' /><br /> contact@regalroamers.com</p>
          <p><FaGlobe size={20} className='icn' /><br /> www.regalroamers.com</p>
        </div>
      </motion.div>

      <motion.div className="feedback-container" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} >
        <div className='feedback-section'>
          <h2>Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <input type="text" name="name" className='input' placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" className='input' placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <textarea name="message" className='txtArea' placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="4" />
            <button type="submit">Submit</button>
            {submitted && <p className='successMessage'>Feedback Submitted Successfully!</p>}
          </form>
        </div>

        <div className="opinion">
          {feedbacks.map((feed, i) => {
            return (
              <Card sx={{ maxWidth: "400px", height: '150px', display: 'flex', flexDirection: 'column' }} key={i}>
                <CardHeader sx={{ height: '40px', width: '100%', backgroundColor: '#f5f5f5' }}
                  avatar={<CardMedia sx={{ borderRadius: '50%' }} component="img" height="35" image={feed.image} alt={feed.name} />}
                  title={feed.name} />
                <CardContent>
                  <Typography variant="p" sx={{ color: 'text.secondary' }}>
                    {feed.message}
                  </Typography>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </motion.div>

      <motion.div ref={ref} className='transform' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} >
        <h2>Journey of Regal Roamers</h2>
        <div className='trans-body'>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} >
            <h1>{inView ? <CountUp start={0} end={50} duration={2} /> : "0"}+</h1>
            <p>Destinations</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} >
            <h1>{inView ? <CountUp start={0} end={200} duration={2} /> : "0"}+</h1>
            <p>Hotels Partnered</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} >
            <h1>{inView ? <CountUp start={0} end={150} duration={2} /> : "0"}+</h1>
            <p>Restaurant Partnered</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} >
            <h1>{inView ? <CountUp start={0} end={10} duration={2} /> : "0"}M+</h1>
            <p>Happy Travelers</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} >
            <h1>{inView ? <CountUp start={0} end={15} duration={2} /> : "0"}+</h1>
            <p>Years of Expertise</p>
          </motion.div>
        </div>
      </motion.div>

    </div>

  )
}
