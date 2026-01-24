import React from 'react'
import ViewHeader from '../Component/ViewHeader';
import PaymentForm from '../Component/PaymentForm';
import HotelDetail from '../Component/hotel/HotelDetail';

const HotelView = () => {

  let location = {
    country: "India",
    city: 'Navi Mumbai'
  }

  return (
    <div className='flex flex-col bg-white'>
      <div className='lg:h-96'>
        <ViewHeader image="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name='Hotel Taj, Mumbai' location={location} review='4.9 (5.7K reviews)' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-[120px] py-12 px-8'>
        <div className='lg:col-span-2 space-y-8'>
          <HotelDetail />
        </div>
        <div className='lg:col-span-1'>
          <PaymentForm />
        </div>
      </div>

    </div>
  )
}

export default HotelView
