import React from 'react'
import '../css/About.css'
import person1 from '../Images/person 1.JPG'
import person3 from  '../Images/person2.jpg'
import person2 from  '../Images/person 3.JPG'
import company from '../Images/company.avif'
import { FaGlobeAsia, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion'


export default function About() {

  const Information = [{
    Name : "Sanath Rai",
    Role : "CEO & Co-Founder, Regal Roamers",
    details: `Sanath is the visionary leader behind Regal Roamers, bringing his deep passion for travel and exploration to life.
              With years of experience in the tourism industry, he ensures that every journey curated by the company is unique,
              immersive, and memorable. From itinerary planning to business strategy, He drives innovation and excellence, 
              setting Regal Roamers apart in the world of guided travel.`,
    img: person1
  },
  {
    Name : "Karthik Vaniyan",
    Role : "Lead Tour Guide & Co-Founder, Regal Roamers",
    details: `Karthik is the heart of every Regal Roamers experience, ensuring that travelers get an authentic and enriching journey. 
              With extensive knowledge of history, culture, and local traditions, he transforms every tour into a storytelling adventure. 
              His deep connections with local communities and dedication to creating unforgettable moments make him an invaluable 
              part of the team.`,
    img: person2
  },
  {
    Name : "Theerthesh Acharya",
    Role : "Adventure Specialist & Co-Founder, Regal Roamers",
    details: `A true explorer at heart, Theerthesh leads the adventure and trekking experiences at Regal Roamers. From scaling mountain 
              peaks to uncovering hidden trails, he ensures that travelers seeking adrenaline-pumping adventures get the best, safest, 
              and most thrilling experiences. His expertise in outdoor survival, eco-tourism, and sustainable travel makes him a trusted 
              guide for all things adventurous.`,
    img: person3
  }
]

  return (
    <div className='About'>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} className='intro '>
        <h1>From India to the World</h1>
        <h4>Welcome to Regal Roamers – where every journey is crafted to perfection!
          We specialize in premium guided tours that blend adventure, culture, and luxury.
          Whether you're a history enthusiast, nature lover, or thrill-seeker, we ensure an 
          unforgettable experience filled with stunning landscapes, rich heritage, 
          and personalized service</h4>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }} className='fouders'>
        <h1>Meet the Minds Behind the Journey</h1>
          {
            Information.map((info, index)=>{
              return<div className='found' key={index}>
                <div>
                  <img src={info.img} alt="person"/>
                </div>
                <div>
                  <p>{info.Name}</p>
                  <p>{info.Role}</p>
                  <p>{info.details}</p>
                </div>
                </div>
            })
          }
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }} className='experience'>
        <h1>Years of Expertise, A Lifetime of Memories</h1>
        <ul> 
          <li>Over 10+ years of combined experience in the travel industry.</li>
          <li>Certified tour guides with in-depth knowledge of history, culture, and local traditions.</li>
          <li>Partnerships with renowned travel organizations and premium accommodations.</li>
          <li>Multilingual team offering tours in English, Hindi, Kannada, and more.</li>
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}  className='location'>
        <div className="loc-img">
          <img src={company} alt='company'/>
        </div>
        <div className="loc-add">
        <h1> Beyond Borders: Where We Take You</h1>
        <p>With a strong presence in India and expanding footprints worldwide,</p>
        <p><FaMapMarkerAlt size={20} className="icn"/>Headquarters: Mangalore, India</p>
        <p><FaGlobeAsia size={18} className="icn"/>Our Coverage Areas:</p>
        <p>India: Rajasthan, Kerala, Goa, Himachal Pradesh, Karnataka, and more.</p>
        <p>International: Thailand, Dubai, Maldives, and select European destinations.</p>
      </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }} className="message">
        <h1>A Journey with Regal Roamers</h1>
        <p>At Regal Roamers, we believe in creating journeys that aren’t just about 
          sightseeing but immersing yourself in new cultures, cuisines, and experiences. 
          Our passion for travel drives us to go beyond the ordinary, ensuring that 
          every trip is unique, luxurious, and unforgettable.</p>
        <p>"Travel is not just about places; it's about the stories you collect along the way." – Regal Roamers Team</p>
      </motion.div>
    </div>
  )
}
