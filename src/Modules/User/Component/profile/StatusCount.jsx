import React from 'react'

const StatusCount = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-[32px]'>
            <div className='bg-white rounded-xl shadow-md p-6 text-center'>
                <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-3'>
                    <span className='text-2xl font-bold'>{18}</span>
                </div>
                <p className='text-sm text-gray-600'>
                    Total Bookings
                </p>
            </div>
            <div className='bg-white rounded-xl shadow-md p-6 text-center'>
                <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-3'>
                    <span className='text-2xl font-bold'>{2}</span>
                </div>
                <p className='text-sm text-gray-600'>
                    Countries Visited
                </p>
            </div>
            <div className='bg-white rounded-xl shadow-md p-6 text-center'>
                <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-3'>
                    <span className='text-2xl font-bold'>{4}</span>
                </div>
                <p className='text-sm text-gray-600'>
                    Reviews Written
                </p>
            </div>
            <div className='bg-white rounded-xl shadow-md p-6 text-center'>
                <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-600 mb-3'>
                    <span className='text-2xl font-bold'>{2022}</span>
                </div>
                <p className='text-sm text-gray-600'>
                    Member Since
                </p>
            </div>
        </div>
    )
}

export default StatusCount
