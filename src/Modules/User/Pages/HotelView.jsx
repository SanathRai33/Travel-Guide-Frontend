import React from 'react'
import { useParams } from 'react-router-dom';
import ViewHeader from '../Component/layout/ViewHeader';
import PaymentForm from '../Component/PaymentForm';
import HotelDetail from '../Component/hotel/HotelDetail';
import { useHotels } from '../hooks/hotels/viewHotels';

const HotelView = () => {

  const { id } = useParams()
  const { hotels } = useHotels(id);

  let location = {
    country: "India",
    city: 'Navi Mumbai'
  }

  return (
    <div className='flex flex-col bg-white'>
      <div className='lg:h-96'>
        <ViewHeader image={hotels?.featuredImage}
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
