import React from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import Bus from "./Bus";

const BusTicket = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 ">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Book Train Ticket
      </h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <div className="relative">
              <CiLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Departure location"
                className="w-full pl-10 pr-4 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required=""
                value=""
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <div className="relative">
              <CiLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Arrival location"
                className="w-full pl-10 pr-4 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required=""
                value=""
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Travel Date
            </label>
            <div className="relative">
              <CiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required=""
                value=""
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passengers
            </label>
            <div className="relative">
              <GoPeople className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-[12px] cursor-pointer border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="5">5 Passengers</option>
                <option value="6">6 Passengers</option>
              </select>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 max-h-14"
        >
          <span>Search Tickets</span>
          <FaArrowRightLong className="h-5 w-5" />
        </button>
      </form>

      {/* <div>
        <h4 className="font-semibold text-gray-900 mb-4">Availabe Buses</h4>
        <Bus />
      </div> */}

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">Popular Routes</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">New York</span>
              <FaArrowRightLong className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium">Los Angeles</span>
            </div>
            <span className="text-sm text-blue-600">From $89</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">London</span>
              <FaArrowRightLong className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium">Paris</span>
            </div>
            <span className="text-sm text-blue-600">From $65</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Tokyo</span>
              <FaArrowRightLong className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium">Osaka</span>
            </div>
            <span className="text-sm text-blue-600">From $45</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Sydney</span>
              <FaArrowRightLong className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium">Melbourne</span>
            </div>
            <span className="text-sm text-blue-600">From $72</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTicket;
