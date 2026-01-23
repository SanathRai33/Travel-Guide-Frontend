import React from "react";
import { useNavigate } from "react-router-dom";
import {FaStar, FaWifi } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TbParkingCircleFilled } from "react-icons/tb";
import { PiBowlSteamDuotone } from "react-icons/pi";

const RestaurantCard = () => {
  
  const navigate = useNavigate();

  const handleView = () =>{
    navigate(`/restaurant/${1}`)
  }

  return (
    <div className="flex flex-col rounded-3xl overflow-hidden shadow-sm bg-white">
      <div className="relative h-48">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          alt="restaurant" className="h-full w-full"
        />
        <div className="absolute right-0 py-3 px-2 top-0 flex justify-between w-full" >
            <p className="bg-white rounded-full shadow-md h-8 m-0 w-fit px-2 font-bold flex justify-center items-center text-blue-600" >
                Japaneese
            </p>
            <p className="bg-white rounded-full shadow-md h-8 w-8 m-0 font-bold flex justify-center items-center text-orange-500" >
                <PiBowlSteamDuotone className="w-5 h-5" />
            </p>
        </div>
        
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
                <TbParkingCircleFilled className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />
                <FaWifi className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-3">
          <div className="flex flex-col justify-around" >
            <p className="m-0 text-sm text-gray-600">Per table <span className="text-[10px]" > (max 4)</span></p>
            <h4 className="text-2xl font-bold text-blue-600 m-0" >$ 499</h4>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" onClick={handleView}>
            Reserver Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
