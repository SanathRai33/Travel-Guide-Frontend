import React, { useState } from 'react'
import { IoCheckmark } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { CgGym } from "react-icons/cg";
import { GiKnifeFork } from "react-icons/gi";
import { LuCircleParking } from "react-icons/lu";
import { MdPool } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { MdOutlinePhone } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

const RestaurantDetail = () => {

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

    const features = [
        "Private Dining Rooms",
        "Wine Cellar with 500+ selections",
        "Chef's Tasting Menu",
        "Outdoor Terrace",
        "Live Piano Music",
        "Valet Parking"
    ]

    return (
        <div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>About This Restaurant</h2>
                <p className='text-gray-700 leading-relaxed m-0'>
                    An exquisite fine dining experience featuring authentic French cuisine prepared by Michelin-trained chefs.
                    Our restaurant combines traditional recipes with modern culinary artistry in an elegant atmosphere.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-[32px]'>
                <div className='bg-gray-50 rounded-lg p-[20px]'>
                    <div className='flex items-center space-x-3 mb-2'>
                        <MdOutlinePhone className='h-5 w-5 text-blue-600' />
                        <h3 className='font-semibold text-gray-900 text-base mb-0'>Phone</h3>
                    </div>
                    <p className='text-gray-700 m-0'>+91 8938284463</p>
                </div>
                <div className='bg-gray-50 rounded-lg p-[20px]'>
                    <div className='flex items-center space-x-3 mb-2'>
                        <FaRegClock className='h-5 w-5 text-blue-600' />
                        <h3 className='font-semibold text-gray-900 text-base mb-0'>Hours</h3>
                    </div>
                    <p className='text-gray-700 m-0'>Mon-Sat: 6:00 PM - 11:00 PM, Sun: Closed</p>
                </div>
            </div>

            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>House Specialties</h2>
                <div className='flex flex-wrap gap-3'>
                    <span className='px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium'>Coq au Vin</span>
                    <span className='px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium'>Bouillabaisse</span>
                    <span className='px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium'>Ratatouille</span>
                    <span className='px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium'>Crème Brûlée</span>
                </div>
            </div>

            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Features & Amenities</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {
                        features.map((fet, i) => (
                            <div className='flex items-center space-x-3'>
                                <GiKnifeFork className='h-5 w-5 text-orange-600' />
                                <span className='text-gray-700 text-sm'>{fet}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Menu</h2>
                <div className='space-y-6'>
                    <div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-3 border-b pb-2'>Appetizers</h3>
                        <div className='space-y-4'>
                            <div className='flex justify-between items-start'>
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 text-base m-0">French Onion Soup</h4>
                                    <p class="text-sm text-gray-600 m-0">Classic soup with caramelized onions and gruyere</p>
                                </div>
                                <span class="font-semibold text-gray-900 ml-4">$18</span>
                            </div>

                            <div className='flex justify-between items-start'>
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 text-base m-0">Escargot</h4>
                                    <p class="text-sm text-gray-600 m-0">Burgundy snails in garlic butter</p>
                                </div>
                                <span class="font-semibold text-gray-900 ml-4">$22</span>
                            </div>

                            <div className='flex justify-between items-start'>
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 text-base m-0">Foie Gras</h4>
                                    <p class="text-sm text-gray-600 m-0">Pan-seared foie gras with fig compote</p>
                                </div>
                                <span class="font-semibold text-gray-900 ml-4">$28</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Gallery</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ph" className='w-full h-40 object-cover rounded-lg hover:opacity-90 cursor-pointer transition-opacity shadow-lg' />
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ph" className='w-full h-40 object-cover rounded-lg hover:opacity-90 cursor-pointer transition-opacity shadow-lg' />
                    <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ph" className='w-full h-40 object-cover rounded-lg hover:opacity-90 cursor-pointer transition-opacity shadow-lg' />
                    <img src="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ph" className='w-full h-40 object-cover rounded-lg hover:opacity-90 cursor-pointer transition-opacity shadow-lg' />
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetail
