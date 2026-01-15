import React from "react";
import "../css/About.css";
import person1 from "../Images/person 1.JPG";
import HeadQuarter from "../Images/company.avif";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import { FaRegHeart, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  return (
    <div className="lg:px-40 lg:py-10 flex justify-center items-center flex-col gap-5 bg-[#F8FAFC]">
      {/* Title Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariant}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          About Trip Harbor
        </h1>
        <p className="text-xl text-gray-600">Your Journey, Our Passion</p>
      </motion.div>

      {/* Our Story Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="bg-white rounded-2xl shadow-lg p-12 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Our story
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Founded in 2020, Trip Harbor emerged from a simple dream: to make
              world-class travel experiences accessible to everyone. What
              started as a small boutique travel agency has grown into one of
              the most trusted names in the travel industry.
            </p>
            <p>
              Our commitment to excellence, attention to detail, and passion for
              creating unforgettable memories has helped us serve over 100,000
              happy customers across the globe. We believe that travel is not
              just about visiting new places—it's about discovering yourself,
              connecting with diverse cultures, and creating stories that last a
              lifetime.
            </p>
            <p>
              With partnerships spanning across continents and a dedicated team
              of travel experts, we curate experiences that go beyond the
              ordinary. From exotic beach getaways to thrilling mountain
              adventures, from luxury accommodations to authentic local
              dining—we handle every detail so you can focus on making memories.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-5">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
              <BsGlobeCentralSouthAsia className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Global Reach
            </h3>
            <p className="text-gray-600">
              Connecting you to destinations worldwide
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
              <FaRegHeart className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Customer First
            </h3>
            <p className="text-gray-600">Your satisfaction is our priority</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <FiTarget className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Excellence
            </h3>
            <p className="text-gray-600">Delivering exceptional experiences</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-4">
              <GiAchievement className="h-10 w-10 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Quality
            </h3>
            <p className="text-gray-600">Maintaining highest standards</p>
          </div>
        </div>
      </motion.div>

      {/* Founder Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Meet our Founder
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src={person1}
                alt="SanathRai_Pic"
                className="w-64 h-64 rounded-full object-cover shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Sanath Rai
              </h3>
              <p className="text-lg text-blue-600 mb-3">Founder & CEO</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                With over 20 years of experience in the travel industry,
                Alexandra founded TravelVista with a vision to revolutionize how
                people explore the world. Her passion for travel and commitment
                to customer satisfaction has been the driving force behind our
                success.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "Travel is the only thing you buy that makes you richer. At
                TravelVista, we don't just sell trips—we create life-changing
                experiences that broaden horizons and connect hearts."
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Headquarters Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Head Branch
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Visit our flagship office located in the heart of the city,
                where our team of travel experts is ready to help you plan your
                perfect journey.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-2">Address</h6>
                <p className="text-gray-700">
                  Trip Harbor Headquarters <br />
                  123 Travel Street <br />
                  Manglore, Karnataka 576842 <br />
                  Indian <br />
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Open Monday - Saturday, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          <div className="h-full min-h-[400px]">
            <img
              src={HeadQuarter}
              alt="Headquarter"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariant}
        className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-12 text-center w-full"
      >
        <div className="max-w-4xl mx-auto">
          <FaQuoteLeft className="h-12 w-12 text-white/30 mb-3 mx-auto" />
          <blockquote className="text-3xl font-bold text-white mb-4">
            "The journey of a thousand miles begins with a single step."
          </blockquote>
          <p className="text-xl text-white/90">
            Let TravelVista be your trusted companion on every adventure.
            Together, we'll turn your travel dreams into extraordinary
            realities.
          </p>
        </div>
      </motion.div>
    </div>
  );
}