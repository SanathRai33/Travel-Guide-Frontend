import React from 'react'
import { FaRegClock } from "react-icons/fa6";

const PaymentForm = () => {

    let permision = new Date()

    console.log(permision)

    return (
        <div className='bg-white border-2 border-gray-200 rounded-xl p-6 sticky top-24'>
            <div className='mb-4'>
                <div className='flex items-baseline space-x-2 mb-1'>
                    <span className='text-3xl font-bold text-blue-600'>$ 1299</span>
                    <span className='text-gray-600'>per person</span>
                </div>
                <div className='flex items-center text-sm text-gray-600'>
                    <FaRegClock className='h-4 w-4 mr-1' />
                    7 Days
                </div>
            </div>

            <div className='space-y-4 mb-4'>
                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Select Date</label>
                    <input type="date" min="2026-01-18" class="w-full px-3 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" value="" />
                </div>
                <div>
                    <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Number of Guests</label>
                    <select class="w-full px-3 py-[12px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                    </select>
                </div>
            </div>

            <div className='bg-gray-50 rounded-lg p-3 mb-4'>
                <div className='flex justify-between mb-2'>
                    <span className='text-gray-600'>Price per person</span>
                    <span className='font-semibold'>$100</span>
                </div>
                <div className='flex justify-between mb-2'>
                    <span className='text-gray-600'>Guests</span>
                    <span className='font-semibold'>2</span>
                </div>
                <div className='border-t border-gray-300 my-2 pt-2'>
                    <div className='flex justify-between'>
                        <span className='font-semibold text-gray-900'>Total</span>
                        <span className='text-2xl font-bold text-blue-600'>$ 200</span>
                    </div>
                </div>
            </div>

            <div>
                <button className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'>
                    Book Now
                </button>
                <p className='text-xs text-gray-500 text-center mt-3'>Free cancellation up to 48 hours before departure</p>
            </div>
        </div>
    )
}

export default PaymentForm
