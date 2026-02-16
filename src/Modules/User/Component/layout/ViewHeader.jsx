import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const ViewHeader = ({image, name, location, review, ambition}) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }
    
    return (
        <div className='relative w-full h-full'>
            <img src={image} alt="Paris" className='object-cover w-full h-full' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 px-4 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 '>
                <button className='flex items-center mb-3 space-x-2 text-white hover:opacity-80' onClick={goBack}>
                    <FaArrowLeftLong className='w-5 h-5' />
                    <span>Back</span>
                </button>
                <div className='flex items-start gap-3'>
                    <h1 className='mb-2 text-4xl font-bold text-white'>{name}</h1>
                    <span className='px-3 py-1 text-sm text-white rounded-full bg-white/20 backdrop-blur-sm'>{ambition}</span>
                </div>
                <div className='flex items-center space-x-4 text-white'>
                    <div className='flex items-end'>
                        <FaLocationDot className="w-5 h-5 mr-2 text-blue-600 fill-blue-600" />
                        <span className='h-5'>{location?.street}, {location?.city}</span>
                    </div>
                    <div className='flex items-end'>
                        <FaStar className='w-5 h-5 mr-1 text-yellow-400 fill-yellow-400' />
                        <span className='h-5'>{review}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewHeader
