import React from "react";
import { FaRegClock } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const StatusCount = ({booked, completed, cancelled}) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 w-full gap-5">
      <div className="flex-1 flex justify-between bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white shadow-md">
        <div className="text-left">
          <span>Active Bookings</span>
          <h3>{booked}</h3>
        </div>
        <div className="flex items-center">
          <FaRegClock className="w-12 h-12 font-bold text-blue-300" />
        </div>
      </div>
      <div className="flex-1 flex justify-between bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white shadow-md">
        <div className="text-left">
          <span>Completed</span>
          <h3>{completed}</h3>
        </div>
        <div className="flex items-center">
          <IoMdCheckmarkCircleOutline className="w-12 h-12 font-bold text-green-300" />
        </div>
      </div>
      <div className="flex-1 flex justify-between bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-2xl text-white shadow-md">
        <div className="text-left">
          <span>Cancelled</span>
          <h3>{cancelled}</h3>
        </div>
        <div className="flex items-center">
          <RxCrossCircled className="w-12 h-12 font-bold text-red-300" />
        </div>
      </div>
    </div>
  );
};

export default StatusCount;
