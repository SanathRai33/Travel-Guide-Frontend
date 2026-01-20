import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { LuMountainSnow } from "react-icons/lu";
import { FaCity, FaUmbrellaBeach } from "react-icons/fa";

const PackageCard = ({id, image, title, location, duration, basePrice, currency, category}) => {

  const navigate = useNavigate();

  const handleView = () =>{
    navigate(`/packages/${id}`)
  }

  const cur = currency === "INR" ? "₹" : currency === "USD" ? "$" : "₹"

  const price = basePrice > 9999 ? `${(basePrice/1000)}K`  : basePrice

  const categoryIcons = {
    mountain: <LuMountainSnow className="text-blue-600 h-5 w-5" />,
    city: <FaCity className="text-blue-600 h-5 w-5" />,
    beach: <FaUmbrellaBeach className="text-blue-600 h-5 w-5" />,
  };

  return (
    <div className="flex flex-col rounded-3xl overflow-hidden shadow-sm bg-white">
      <div className="relative h-48">
        <img
          src={image}
          alt={title} className="h-full w-full"
        />
        <span className="absolute right-5 top-3 bg-white rounded-full shadow-md h-9 w-9 flex justify-center items-center" >
          {categoryIcons[category]}
        </span>
      </div>
      <div className="flex flex-col p-[20px] h-fit">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="space-y-2 mb-4">
            <p className="flex items-center text-sm text-gray-600 gap-1 mb-0">
                <IoLocationOutline />
                <span>{location.country}, {location.city}</span>
            </p>
            <p className="flex items-center text-sm text-gray-600 gap-1">
                <CiCalendar />
                <span>{duration.day} Days, {duration.night} Nights</span>
            </p>
            <p className="flex items-center text-sm text-gray-600 gap-1">
                <FaStar className="text-yellow-400" /> 
                <span>4.8 (1453 reviews)</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-3">
          <div className="flex flex-col justify-around" >
            <p className="m-0 text-sm text-gray-600">Starting from</p>
            <h4 className="text-2xl font-bold text-blue-600 m-0" >{cur} {price}/<span className="text-sm text-blue-600 font-normal" >person</span></h4>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" onClick={handleView}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
