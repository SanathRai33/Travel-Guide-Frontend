import React, { useState } from 'react'
import { IoCheckmark } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { CgGym } from "react-icons/cg";
import { GiKnifeFork } from "react-icons/gi";
import { LuCircleParking } from "react-icons/lu";
import { MdPool } from "react-icons/md";
import { GoPeople } from "react-icons/go";

const HotelDetail = () => {

    const [select, setSelect] = useState(1);

    const handleSelect = (n) => {
        console.log(n)
        setSelect(n)
    }

    const arr = [
        {
            title: "Deluxe Room",
            description: "Spacious room with city views",
            size: 350,
            guest: 2,
            price: 299
        },
        {
            title: "Executive Suite",
            description: "Luxurious suite with separate living area",
            size: 600,
            guest: 4,
            price: 499
        },
        {
            title: "Presidential Suite",
            description: "Ultimate luxury with panoramic views",
            size: 1200,
            guest: 6,
            price: 899
        },
    ]

    const amenities = [
        {
            name: "Free Wifi",
            icon: <FaWifi className='h-5 w-5 text-blue-600' />
        },
        {
            name: "Coffee Maker",
            icon: <FiCoffee className='h-5 w-5 text-blue-600' />
        },
        {
            name: "Fitness Center",
            icon: <CgGym className='h-5 w-5 text-blue-600' />
        },
        {
            name: "Restaurant",
            icon: <GiKnifeFork className='h-5 w-5 text-blue-600' />
        },
        {
            name: "Free Parking",
            icon: <LuCircleParking className='h-5 w-5 text-blue-600' />
        },
        {
            name: "Pool",
            icon: <MdPool className='h-5 w-5 text-blue-600' />
        },
    ]

    const features = [
        "Round-trip flights", "Round-trip flights", "Round-trip flights", "Round-trip flights", "Round-trip flights", "Round-trip flights",
    ]

    return (
        <div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>About This Hotel</h2>
                <p className='text-gray-700 leading-relaxed m-0'>
                    Experience unparalleled luxury in the heart of Manhattan. Our 5-star hotel offers world-class amenities,
                    stunning city views, and exceptional service that exceeds expectations.
                </p>
            </div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Amenities</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        amenities.map((amen, i) => (
                            <div className='flex items-center space-x-3 p-[12px] bg-blue-50 rounded-lg'>
                                {amen.icon}
                                <span className='text-gray-700 text-sm'>{amen.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Hotel Features</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {
                        features.map((f, i) => (
                            <div className='flex items-start space-x-3'>
                                <IoCheckmark className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                                <span className='text-gray-700'>{f}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                    Room Options
                </h2>
                <div className='space-y-4'>
                    {
                        arr.map((opt, i) => (
                            <div className='border-2 rounded-lg p-[20px] cursor-pointer transition-all border-gray-200 hover:border-gray-300'
                                onClick={() => handleSelect(i + 1)} style={{ backgroundColor: select === i + 1 ? '#eff6ff' : '', borderColor: select === i + 1 ? '#155dfc' : '' }}>
                                <div className='flex justify-between items-start mb-[12px]'>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900 m-0'>{opt.title}</h3>
                                        <p className='text-sm text-gray-600 m-0'>{opt.description}</p>
                                    </div>
                                    <div className='text-right'>
                                        <div className='text-2xl font-bold text-blue-600'>$ {opt.price}</div>
                                        <div className='text-xs text-gray-600'>per night</div>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-4 text-sm text-gray-600'>
                                    <span>sq ft {opt.size}</span>
                                    <span>•</span>
                                    <div className='flex items-center'>
                                        <GoPeople className='h-4 w-4 mr-1' />
                                        Upto {opt.guest} guests
                                    </div>
                                </div>
                                {console.log(select, i + 1)}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Gallery</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ph" className='w-full h-40 object-cover rounded-lg hover:opacity-90 cursor-pointer transition-opacity shadow-lg' />
                    <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ph" className='w-full h-40 object-cover rounded-lg hover:opacity-90 cursor-pointer transition-opacity shadow-lg' />
                    <img src="https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ph" className='w-full h-40 object-cover rounded-lg hover:opacity-90 cursor-pointer transition-opacity shadow-lg' />
                    {/* <img src="https://plus.unsplash.com/premium_photo-1730078556503-5d8fc0587b23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ph" className='w-full h-40 object-cover rounded-lg hover:opacity-90 cursor-pointer transition-opacity shadow-lg' /> */}
                </div>
            </div>
        </div>
    )
}

export default HotelDetail
