import React from 'react'

const Settings = () => {
    return (
        <div className='bg-white rounded-xl shadow-md p-6'>
            <h2 className='text-xl font-bold text-gray-900 mb-3'>Account Settings</h2>
            <div className='space-y-3'>
                <button className="w-full text-left px-3 py-[12px] bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    Change Password
                </button>
                <button className="w-full text-left px-3 py-[12px] bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    Change Password
                </button>
                <button className="w-full text-left px-3 py-[12px] bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    Change Password
                </button>
                <button className="w-full text-left px-3 py-[12px] bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-red-700">
                    Change Password
                </button>
            </div>
        </div>
    )
}

export default Settings
