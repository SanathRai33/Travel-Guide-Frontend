import React from "react";
import {FaStar, FaWifi } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TbParkingCircleFilled } from "react-icons/tb";
import { PiForkKnifeFill } from "react-icons/pi";
import { CgGym } from "react-icons/cg";

const HotelCard = () => {
  return (
    <div className="flex flex-col rounded-3xl overflow-hidden shadow-sm bg-white">
      <div className="relative h-48">
        <img
          src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
          alt="hotel" className="h-full w-full"
        />
        <span className="absolute right-5 top-3 bg-white rounded-full shadow-md h-fit w-fit px-2 font-bold flex justify-center items-center text-blue-600" >
            Luxury
        </span>
      </div>
      <div className="flex flex-col p-[20px] h-fit">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Paris paradise</h3>
          <div className="space-y-2 mb-4">
            <p className="flex items-center text-sm text-gray-600 gap-1 mb-0">
                <IoLocationOutline />
                <span>Paris, Spain</span>
            </p>
            <p className="flex items-center text-sm text-gray-600 gap-1">
                <FaStar className="text-yellow-400" /> 
                <span>4.8 (1453 reviews)</span>
            </p>
            <p className="flex text-blue-500 gap-3 items-center" >
                <PiForkKnifeFill className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />
                <TbParkingCircleFilled className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />
                <FaWifi className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />
                <CgGym className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-3">
          <div className="flex flex-col justify-around" >
            <p className="m-0 text-sm text-gray-600">Starting from</p>
            <h4 className="text-2xl font-bold text-blue-600 m-0" >$ 499/<span className="text-sm text-blue-600 font-normal" >night</span></h4>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
