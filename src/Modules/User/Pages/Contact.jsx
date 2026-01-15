import React, { useState } from 'react'
import '../css/Contact.css'
import { FaPhone, FaMapMarkerAlt, FaMailBulk, FaGlobe, FaRegPaperPlane, FaAward, FaClock } from 'react-icons/fa'
import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { GrLocation, GrUserWorker } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiGrowth } from "react-icons/gi";
import { FaClockRotateLeft } from "react-icons/fa6";

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
      message: "Amazing service! The tour package was perfectly organized and exceeded all expectations.",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      date: 'Oct 2025'
    },
    {
      name: "Mark Wilson",
      message: "Best travel experience ever. Professional team and wonderful destinations.",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      date: 'Sep 2025'
    },
    {
      name: "Sophia Kim",
      message: "Great value for money. Would definitely recommend to friends and family.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      date: 'Dec 2025'
    },
    {
      name: "James Carter",
      message: "Exceptional customer service and attention to detail. Thank you TravelVista!",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      date: 'Nov 2025'
    },
    // {
    //   name: "Emma Rodriguez",
    //   message: "The dine-in reservation system is very convenient. No waiting time, and the service was top-notch!",
    //   image: "https://randomuser.me/api/portraits/women/14.jpg",
    //   date: 'Dec 2025'
    // },
    // {
    //   name: "David Lee",
    //   message: "Great experience! Found the best deals for flights and hotels. Will definitely use this site again.",
    //   image: "https://randomuser.me/api/portraits/men/15.jpg",
    //   date: 'Jan 2026'
    // }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className='lg:px-40 lg:pt-10 lg:pb-20 flex justify-center items-center flex-col gap-5 bg-[#F8FAFC]'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Contact Us
        </h1>
        <p className='text-xl text-gray-600'>
          We'd love to hear from you
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full'>
        <div className='space-y-8'>
          <div>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>Get in Touch</h2>
            <div className='space-y-4'>
              <div className='flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md'>
                <div className='bg-blue-100 p-3 rounded-lg'>
                  <GrLocation className='h-6 w-6 text-blue-600' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1 text-lg'>Address</h3>
                  <p className='text-gray-600'>123 Travel Street, Adventure City, TC 12345</p>
                </div>
              </div>
              
              <div className='flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md'>
                <div className='bg-green-100 p-3 rounded-lg'>
                  <LuPhone className='h-6 w-6 text-green-600' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1 text-lg'>Phone</h3>
                  <p className='text-gray-600'>+91 6366242321</p>
                  <p className='text-gray-600'>+91 9876543210</p>
                </div>
              </div>

              <div className='flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md'>
                <div className='bg-pink-100 p-3 rounded-lg'>
                  <MdOutlineMail className='h-6 w-6 text-pink-600' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1 text-lg'>Email</h3>
                  <p className='text-gray-600'>info@tripharbor.com</p>
                  <p className='text-gray-600'>support@tripharbor.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white'>
            <h3 className='font-semibold mb-3 text-[16px]'>Office Hours</h3>
            <div className='space-y-2 text-sm'>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed(Offline only)</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Send us a Message</h2>
          <form action="" className='space-y-4'>
            <div>
              <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
              <input type="text" name="Name" id="Name" className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
            </div>
            <div>
              <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
              <input type="email" name="Email" id="Email" className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
            </div>
            <div>
              <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Subject</label>
              <input type="text" name="Subject" id="Subject" className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
            </div>
            <div>
              <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
              <textarea rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 
              focus:border-transparent" required />
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2" >
              <FaRegPaperPlane className='w-5 h-5' />
              <span>Send Message</span></button>
          </form>
        </div>
      </div>

      <motion.div ref={ref} className='text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white w-full h-fit flex flex-col p-4' 
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} >
        <h2 className='font-bold'>Journey of Regal Roamers</h2>
        <div className='flex justify-around items-center gap-12 mt-5 px-13 py-0 lg:h-88'>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} >
            <div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3'>
              <HiOutlineUserGroup className='h-8 w-8 text-white' />
            </div>
            <h1>{inView ? <CountUp start={0} end={100} duration={2} /> : "100"}K+</h1>
            <p>Happy Travelers</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} >
            <div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3'>
              <FaAward className='h-8 w-8 text-white' />
            </div>
            <h1>{inView ? <CountUp start={0} end={20} duration={2} /> : "6"}+</h1>
            <p>Awards Won</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} >
            <div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3'>
              <FaClockRotateLeft className='h-8 w-8 text-white' />
            </div>
            <h1>{inView ? <CountUp start={0} end={6} duration={2} /> : "0"}+</h1>
            <p>Years Of Service</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} >
            <div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3'>
              <GrUserWorker className='h-8 w-8 text-white' />
            </div>
            <h1>{inView ? <CountUp start={0} end={200} duration={2} /> : "0"}+</h1>
            <p>Total Employees</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} >
            <div className='inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3'>
              <GiGrowth className='h-8 w-8 text-white' />
            </div>
            <h1>{inView ? <CountUp start={0} end={100} duration={2} /> : "0"}%</h1>
            <p>Success Rate</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} >
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-4'>What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedbacks.map((feed, i) => {
            return (
              <div className='bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow' key={i}>
                <div className='flex items-center mb-3'>
                  <img src={feed.image} alt={feed.name} className='w-12 h-12 rounded-full mr-3' />
                  <div>
                    <h4 className='font-semibold text-gray-900'>{feed.name}</h4>
                    <p className='text-sm text-gray-500'>{feed.date}</p>
                  </div>
                </div>
                  <p className='text-gray-600 text-[14px] text-justify m-0' >
                    {feed.message}
                  </p>
              </div>
            )
          })}
        </div>
      </motion.div>

    </div>

  )
}
