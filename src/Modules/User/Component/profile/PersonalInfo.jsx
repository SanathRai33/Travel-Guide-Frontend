import React from 'react'
import { CiMail, CiCalendar } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

const PersonalInfo = () => {
    return (
        <div className='bg-white rounded-xl shadow-md p-6'>
            <h2 className='text-xl font-bold text-gray-900 mb-4'>Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <p className="text-gray-900 py-[12px] m-0">John</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <p className="text-gray-900 py-[12px] m-0">Doe</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <CiMail className='h-4 w-4 inline mr-2' />Email</label>
                    <p className="text-gray-900 py-[12px] m-0">
                        john.doe@example.com
                    </p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MdOutlinePhone className='h-4 w-4 inline mr-2' />Phone
                    </label>
                    <p className="text-gray-900 py-[12px] m-0">+1 (555) 123-4567</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <CiCalendar className='h-4 w-4 inline mr-2' />Date of Birth
                    </label>
                    <p className="text-gray-900 py-[12px] m-0">1/15/1990</p>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo
