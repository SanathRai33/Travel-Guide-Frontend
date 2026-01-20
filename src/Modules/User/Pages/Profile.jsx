import React from 'react'
import Header from '../Component/profile/Header'
import StatusCount from '../Component/profile/StatusCount'
import PersonalInfo from '../Component/profile/PersonalInfo'
import Address from '../Component/profile/Address'
import Settings from '../Component/profile/Settings'
import Notifications from '../Component/profile/Notifications'

const Profile = () => {
    return (
        <div className='min-h-screen bg-gray-50 py-12'>
            <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div>
                    <Header />
                </div>
                <div>
                    <StatusCount />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='lg:col-span-2 space-y-6'>
                        <PersonalInfo />
                        <Address />
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
                            <p className="text-gray-700 m-0">Passionate traveler exploring the world one destination at a time.</p>
                        </div>
                    </div>
                    <div className='lg:col-span-1 space-y-6'>
                        <Settings />
                        <Notifications />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
