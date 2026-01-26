import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaWifi } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TbParkingCircleFilled } from "react-icons/tb";
import { PiForkKnifeFill } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { MdPool, MdBathtub } from "react-icons/md";
import { PiChefHatDuotone } from "react-icons/pi";
import { TbHelicopterLanding } from "react-icons/tb";
import { FaUmbrellaBeach } from "react-icons/fa";

const HotelCard = ({ id, name, image, location, category, amenities }) => {

  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/hotels/${id}`)
  }

  console.log("Popular amenities", amenities)


  const amenitiesIcon = {
    food: <PiForkKnifeFill className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />,
    parking: <TbParkingCircleFilled className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />,
    wifi: <FaWifi className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />,
    gym: <CgGym className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />,
    pool: <MdPool className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />,
    spa: <MdBathtub className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />,
    privatebutler: <PiChefHatDuotone className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />,
    helipad: <TbHelicopterLanding className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />,
    beach: <FaUmbrellaBeach className="w-8 h-8 bg-blue-50 p-2 rounded-lg hover:bg-blue-200" />,
  };

  return (
    <div className="flex flex-col rounded-3xl overflow-hidden shadow-sm bg-white">
      <div className="relative h-48">
        <img
          src={image}
          alt={name} className="h-full w-full"
        />
        <span className="absolute right-5 top-3 bg-white rounded-full shadow-md h-fit w-fit px-2 font-bold flex justify-center items-center text-blue-600" >
          {category}
        </span>
      </div>
      <div className="flex flex-col p-[20px] h-fit">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <div className="space-y-2 mb-4">
            <p className="flex items-center text-sm text-gray-600 gap-1 mb-0">
              <IoLocationOutline />
              <span>{location?.street}, {location?.city}, {location?.country}</span>
            </p>
            <p className="flex items-center text-sm text-gray-600 gap-1">
              <FaStar className="text-yellow-400" />
              <span>4.8 (1453 reviews)</span>
            </p>
            <p className="flex text-blue-500 gap-3 items-center" >
              {amenities?.map((amn, i) => (
                <div className="message flex relative cursor-pointer">
                  {amenitiesIcon[amn.toLowerCase().trim().replace(" ",'')]}
                  <div className="hidden flex-col items-center justify-center absolute left-0 top-6 show">
                    <span className="triagle text-blue-500 bg-blue-50 h-5 w-full"></span>
                    <span className="text-blue-500 bg-blue-50 h-fit px-1 rounded-b-md text-[10px]">{amn}</span>
                  </div>
                </div>
              ))}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-3">
          <div className="flex flex-col justify-around" >
            <p className="m-0 text-sm text-gray-600">Starting from</p>
            <h4 className="text-2xl font-bold text-blue-600 m-0" >$ 499/<span className="text-sm text-blue-600 font-normal" >night</span></h4>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" onClick={handleView}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
