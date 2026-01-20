import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const Address = () => {
    return (
        <div className='bg-white rounded-xl shadow-md p-6'>
            <h2 className='text-xl font-bold text-gray-900 mb-4'>
                <CiLocationOn className='h-5 w-5 inline mr-2' />Address
            </h2>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <p className="text-gray-900 py-[12px] m-0">123 Main Street</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <p className="text-gray-900 py-[12px] m-0">New York</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                        <p className="text-gray-900 py-[12px] m-0">10001</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                        <p className="text-gray-900 py-[12px] m-0">United States</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address
