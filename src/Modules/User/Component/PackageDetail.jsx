import React from 'react'
import { IoCheckmark } from "react-icons/io5";

const PackageDetail = ({ description, activity, images, includes }) => {

    const arr = [
        {
            title: "Arrival & Beach Welcome",
            description: "Arrive in Bali, transfer to hotel, beach sunset welcome dinner"
        },
        {
            title: "Ubud Cultural Tour",
            description: "Visit Monkey Forest, rice terraces, and traditional art markets"
        },
        {
            title: "Temple Discovery",
            description: "Explore ancient temples including Tanah Lot and Uluwatu"
        },
        {
            title: "Water Sports Adventure",
            description: "Snorkeling, surfing, and beach relaxation"
        },
        {
            title: "Wellness Day",
            description: "Spa treatments, yoga session, and healthy cuisine"
        },
        {
            title: "Island Hopping",
            description: "Visit nearby islands and enjoy water activities"
        },
        {
            title: "Departure",
            description: "Breakfast and transfer to airport"
        },
    ]

    return (
        <div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>Overview</h2>
                <p className='text-gray-700 leading-relaxed m-0'>{description}</p>
            </div>
            <div className='mb-[32px]'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>What's included</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        includes?.map((inc, i) => (
                            <div className='flex items-start space-x-3 bg-gray-50'>
                                <IoCheckmark className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
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
