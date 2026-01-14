import React from 'react'
import { ImAirplane } from "react-icons/im";
import { FaTrainTram } from "react-icons/fa6";
import { IoBoatSharp } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";

const TicketCard = ({ title, description, icon, isActive, onClick }) => {
  
  const getIcon = () => {
    switch(icon) {
      case "flight":
        return <ImAirplane className='w-8 h-8' />;
      case "train":
        return <FaTrainTram className='w-8 h-8' />;
      case "yacht":
        return <IoBoatSharp className='w-8 h-8' />;
      case "bus":
      default:
        return <FaBusAlt className='w-8 h-8' />;
    }
  };

  return (
    <button 
      className={`p-6 rounded-xl text-left transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-start
        ${isActive 
          ? 'bg-blue-600 text-white transform -translate-y-1' 
          : 'bg-white text-black hover:bg-gray-50'
        }`}
      onClick={onClick}
    >
      <div className={`flex justify-center items-center p-3 rounded-lg mb-4 w-14 h-14
        ${isActive ? 'bg-blue-500' : 'bg-blue-100'}`}>
        {getIcon()}
      </div>
      <h3 className='text-xl font-bold mb-2'>
        {title}
      </h3>
      <p className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
        {description}
      </p>
      
      {/* Active indicator */}
      {isActive && (
        <div className="mt-4 border-t border-blue-400">
          <span className="text-sm font-medium">Currently Selected</span>
        </div>
      )}
    </button>
  )
}

export default TicketCard