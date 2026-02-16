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

const RestaurantDetail = ({ description, amenities, images }) => {

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
                <h2 className='mb-3 text-2xl font-bold text-gray-900'>About This Restaurant</h2>
                <p className='m-0 leading-relaxed text-gray-700'>
                    {description}
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-[32px]'>
                <div className='bg-gray-50 rounded-lg p-[20px]'>
                    <div className='flex items-center mb-2 space-x-3'>
                        <MdOutlinePhone className='w-5 h-5 text-blue-600' />
                        <h3 className='mb-0 text-base font-semibold text-gray-900'>Phone</h3>
                    </div>
                    <p className='m-0 text-gray-700'>+91 8938284463</p>
                </div>
                <div className='bg-gray-50 rounded-lg p-[20px]'>
                    <div className='flex items-center mb-2 space-x-3'>
                        <FaRegClock className='w-5 h-5 text-blue-600' />
                        <h3 className='mb-0 text-base font-semibold text-gray-900'>Hours</h3>
                    </div>
                    <p className='m-0 text-gray-700'>Mon-Sat: 6:00 PM - 11:00 PM, Sun: Closed</p>
                </div>
            </div>

            <div className='mb-[32px]'>
                <h2 className='mb-3 text-2xl font-bold text-gray-900'>House Specialties</h2>
                <div className='flex flex-wrap gap-3'>
                    <span className='px-4 py-2 font-medium text-orange-800 bg-orange-100 rounded-full'>Coq au Vin</span>
                    <span className='px-4 py-2 font-medium text-orange-800 bg-orange-100 rounded-full'>Bouillabaisse</span>
                    <span className='px-4 py-2 font-medium text-orange-800 bg-orange-100 rounded-full'>Ratatouille</span>
                    <span className='px-4 py-2 font-medium text-orange-800 bg-orange-100 rounded-full'>Crème Brûlée</span>
                </div>
            </div>

            <div className='mb-[32px]'>
                <h2 className='mb-3 text-2xl font-bold text-gray-900'>Features & Amenities</h2>
                <div className='grid grid-cols-1 gap-3 px-4 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        amenities?.map((fet, i) => (
                            <div className='flex items-center space-x-3'>
                                <GiKnifeFork className='w-5 h-5 text-orange-600' />
                                <span className='text-sm text-gray-700'>{fet?.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='mb-[32px]'>
                <h2 className='mb-3 text-2xl font-bold text-gray-900'>Menu</h2>
                <div className='space-y-6'>
                    <div>
                        <h3 className='pb-2 mb-3 text-xl font-semibold text-gray-900 border-b'>Appetizers</h3>
                        <div className='space-y-4'>
                            <div className='flex items-start justify-between'>
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 text-base m-0">French Onion Soup</h4>
                                    <p class="text-sm text-gray-600 m-0">Classic soup with caramelized onions and gruyere</p>
                                </div>
                                <span class="font-semibold text-gray-900 ml-4">$18</span>
                            </div>

                            <div className='flex items-start justify-between'>
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 text-base m-0">Escargot</h4>
                                    <p class="text-sm text-gray-600 m-0">Burgundy snails in garlic butter</p>
                                </div>
                                <span class="font-semibold text-gray-900 ml-4">$22</span>
                            </div>

                            <div className='flex items-start justify-between'>
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
                <h2 className='mb-3 text-2xl font-bold text-gray-900'>Gallery</h2>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                    {
                        images?.map((img, i) => (
                            <img key={i} src={img?.url} alt="Gallery" className='object-cover w-full h-40 transition-opacity rounded-lg shadow-lg cursor-pointer hover:opacity-90' />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetail
