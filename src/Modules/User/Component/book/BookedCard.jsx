import React from "react";
import { CiLocationOn, CiCalendar, CiBadgeDollar } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const BookedCard = ({ status }) => {
  return (
    <div className="flex rounded-xl bg-white overflow-hidden shadow-md hover:shadow-lg">
      <div className="w-40 h-full flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1558117338-aa433feb1c62?w=400"
          alt="bali"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-3">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Bali, Indonesia
            </h3>
            <p className="inline-block px-2 py-1 text-xs font-medium rounded-full capitalize bg-blue-100 text-blue-800"
            style={{color: status=='Done'?'#00652f': status==='Cancelled'? '#9f0712':'',
                backgroundColor: status=='Done'?'#dbfce7': status==='Cancelled'? 'rgb(255 226 226)':''
            }}
            >
              {status}
            </p>
          </div>
          <div className="flex-shrink-0 ">
            {
                status === 'Booked' ? <FaRegClock className="w-5 h-5 font-bold text-blue-600" /> :
                status === 'Done' ? <IoMdCheckmarkCircleOutline className="w-5 h-5 font-bold text-green-600" /> :
                <RxCrossCircled className="w-5 h-5 font-bold text-red-600" />
            }
          </div>
        </div>
        <div className="space-y-2 mb-2">
          <div className="flex items-center text-sm text-gray-600">
            <CiLocationOn className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Bali, Indonesia</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <CiCalendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>February 15, 2026</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <RiGroupLine className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>2 Guests</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <CiBadgeDollar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>1599</span>
          </div>
        </div>
        <div className="flex gap-2">
          {status === "Booked" ? (
            <>
              <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View Details
              </button>
              <button className="px-3 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors">
                Cancel
              </button>
            </>
          ) : status === "Done" ? (
            <>
              <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Book Again
              </button>
              <button className="px-3 py-2 bg-green-50 text-green-600 text-sm font-medium rounded-lg hover:bg-green-100 transition-colors">
                Review
              </button>
            </>
          ) : (
            <>
              <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                View Details
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookedCard;
