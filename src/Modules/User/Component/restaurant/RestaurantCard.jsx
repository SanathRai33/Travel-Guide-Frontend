import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaWifi, FaWheelchair } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TbParkingCircleFilled } from "react-icons/tb";
import { MdOutlinePets } from "react-icons/md";
import { IoMdWine } from "react-icons/io";
// crusine icons
import { FaBowlRice } from "react-icons/fa6";
import { PiBowlSteamDuotone } from "react-icons/pi";
import { GiNoodles, GiChickenOven, GiTacos } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";


const RestaurantCard = ({ id, name, location, image, price, amenities, badge }) => {

  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/restaurant/${id}`)
  };

  const amenitiesList = {
    parking: <TbParkingCircleFilled className="w-8 h-8 p-2 rounded-lg bg-blue-50 hover:bg-blue-200" />,
    wifi: <FaWifi className="w-8 h-8 p-2 rounded-lg bg-blue-50 hover:bg-blue-200" />,
    pet: <MdOutlinePets className="w-8 h-8 p-2 rounded-lg bg-blue-50 hover:bg-blue-200" />,
    accessibility: <FaWheelchair className="w-8 h-8 p-2 rounded-lg bg-blue-50 hover:bg-blue-200" />,
    bar: <IoMdWine className="w-8 h-8 p-2 rounded-lg bg-blue-50 hover:bg-blue-200" />
  }

  const primaryCuisineIcons = {
    Italian: <FaPizzaSlice className="w-5 h-5 text-red-500" />,
    Chinese: <GiNoodles className="w-5 h-5 text-yellow-500" />,
    Indian: <FaBowlRice className="w-5 h-5 text-green-500" />,
    Arabian: <GiChickenOven className="w-5 h-5 text-orange-500" />,
    Japanese: <PiBowlSteamDuotone className="w-5 h-5 text-pink-500" />,
  }
  
  return (
    <div className="flex flex-col overflow-hidden bg-white shadow-sm rounded-3xl">
      <div className="relative h-48">
        <img
          src={image}
          alt={name} className="w-full h-full"
        />
        <div className="absolute top-0 right-0 flex justify-between w-full px-2 py-3" >
          <p className="flex items-center justify-center h-8 px-2 m-0 font-bold text-blue-600 bg-white rounded-full shadow-md w-fit" >
            {badge}
          </p>
          <p className="flex items-center justify-center w-8 h-8 m-0 font-bold text-orange-500 bg-white rounded-full shadow-md" >
            {primaryCuisineIcons[badge]}
          </p>
        </div>

      </div>
      <div className="flex flex-col p-[20px] h-fit">
        <div className="flex flex-col">
          <h3 className="mb-2 text-xl font-bold text-gray-900">{name}</h3>
          <div className="mb-4 space-y-2">
            <p className="flex items-center gap-1 mb-0 text-sm text-gray-600">
              <IoLocationOutline />
              <span>{location?.street}, {location?.city}</span>
            </p>
            <p className="flex items-center gap-1 text-sm text-gray-600">
              <FaStar className="text-yellow-400" />
              <span>4.8 (1453 reviews)</span>
            </p>
            <p className="flex items-center gap-3 pt-2 text-blue-500 text-blueplaceholder-stone-500" >
              {
                amenities?.map((amenity, idx) => (
                  amenitiesList[amenity?.type]
                ))
              }
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex flex-col justify-around" >
            <p className="m-0 text-sm text-gray-600">Per table <span className="text-[10px]" > (max 4)</span></p>
            <h4 className="m-0 text-2xl font-bold text-blue-600" >₹ {price}</h4>
          </div>
          <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700" onClick={handleView}>
            Reserver Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
