import React from 'react'
import { FaChalkboardTeacher, FaCameraRetro } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
import { GiHotMeal, GiSpookyHouse } from "react-icons/gi";
import { MdHotel } from "react-icons/md";
import { TbBus } from "react-icons/tb";
import { IoAirplane } from "react-icons/io5";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const PackageDetail = ({ description, activity, images, includes }) => {

    const categoryIcons = {
        guide: <FaChalkboardTeacher className="text-blue-600 h-5 w-5" />,
        visa: <LiaCcVisa className="text-blue-600 h-5 w-5" />,
        food: <GiHotMeal className="text-blue-600 h-5 w-5" />,
        accommodation: <MdHotel className="text-blue-600 h-5 w-5" />,
        photo: <FaCameraRetro className="text-blue-600 h-5 w-5" />,
        transportation: <TbBus className="text-blue-600 h-5 w-5" />,
        villa: <GiSpookyHouse className="text-blue-600 h-5 w-5" />,
        permit: <HiOutlineClipboardDocumentCheck className="text-blue-600 h-5 w-5" />,
        flight: <IoAirplane className="text-blue-600 h-5 w-5" />,
    };

    return (
        <div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Overview</h2>
                <p className='text-gray-700 leading-relaxed m-0'>{description}</p>
            </div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>What's included</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4'>
                    {
                        includes?.map((inc, i) => (
                            <div className='flex items-center space-x-3 bg-gray-50 px-3 rounded-md shadow-sm'>
                                {
                                    categoryIcons[inc?.type?.toLowerCase().replaceAll(" ", "")]
                                }
                                <span className='text-gray-700'>{inc?.item}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                    Day-by-Day Itinerary
                </h2>
                <div className='space-y-4'>
                    {
                        activity?.map((role, i) => (
                            <div className='bg-gray-50 rounded-lg p-[20px]' key={i}>
                                <div className='flex items-start space-x-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold'>
                                        {role.day}
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='font-semibold text-gray-900 mb-1 text-base'>{role.title}</h3>
                                        <p className='text-gray-600 text-sm m-0'>{role.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Gallery</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {
                        images?.map((image, i) => (
                            <img src={image} key={i} alt="package"
                                className='w-full h-40 object-cover rounded-lg hover:opacity-90 cursor-pointer transition-opacity shadow-lg' />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PackageDetail
