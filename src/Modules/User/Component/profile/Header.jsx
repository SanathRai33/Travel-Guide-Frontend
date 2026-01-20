import React from 'react'
import { FaRegUser, FaCamera } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";

const Header = () => {
    return (
        <div className='bg-white rounded-xl shadow-md overflow-hidden mb-8'>
            <div className='h-32 bg-gradient-to-r from-blue-500 to-blue-600'>
            </div>
            <div className='px-6 pb-6'>
                <div className='flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-12'>
                    <div className='relative'>
                        <div className='w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center overflow-hidden'>
                            <FaRegUser className="h-16 w-16 text-gray-400" />
                        </div>
                        <button className='absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors'>
                            <FaCamera className='w-4 h-4' />
                        </button>
                    </div>
                    <div className='mt-4 sm:mt-0 sm:ml-6 flex-1 sm:text-left text-left'>
                        <h1 className='text-3xl font-bold text-gray-900'>John Doe</h1>
                        <p className='m-0 text-gray-600 mt-1'>john.doe@gmail.com</p>
                    </div>
                    <button className='mt-4 sm:mt-0 flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
                        <LuPencil className='w-4 h-4' />
                        <span>Edit Profile</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
