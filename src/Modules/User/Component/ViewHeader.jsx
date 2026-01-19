import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const ViewHeader = ({image, name, location, review, style}) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className='w-full relative h-full'>
            <img src={image} alt="Paris" className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 '>
                <button className='flex items-center space-x-2 text-white mb-3 hover:opacity-80' onClick={goBack}>
                    <FaArrowLeftLong className='w-5 h-5' />
                    <span>Back</span>
                </button>
                <div className='flex gap-3 items-start'>
                    <h1 className='text-4xl font-bold text-white mb-2'>{name}</h1>
                    <span className='px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm'>{style}</span>
                </div>
                <div className='flex items-center space-x-4 text-white'>
                    <div className='flex items-end'>
                        <FaLocationDot className="h-5 w-5 mr-2 fill-blue-600 text-blue-600" />
                        <span className='h-5'>{location}</span>
                    </div>
                    <div className='flex items-end'>
                        <FaStar className='h-5 w-5 mr-1 fill-yellow-400 text-yellow-400' />
                        <span className='h-5'>{review}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewHeader
