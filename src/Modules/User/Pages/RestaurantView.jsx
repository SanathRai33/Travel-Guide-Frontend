import React from 'react'
import { useParams } from 'react-router-dom';
import ViewHeader from '../Component/layout/ViewHeader';
import PaymentForm from '../Component/PaymentForm';
import RestaurantDetail from '../Component/restaurant/RestaurantDetail';
import { useRestaurants } from '../hooks/restaurants/viewRestaurant';

const RestaurantView = () => {
  
  const { id } = useParams();
  const { restaurants } = useRestaurants(id);

  return (
    <div className='flex flex-col bg-white'>
      <div className='lg:h-96'>
        <ViewHeader image={restaurants?.featuredImage}
          name={restaurants?.name || 'Le Gourmet'} location={restaurants?.location?.address} review='4.9 (432 reviews)' ambition={restaurants?.primaryCuisine} />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-[120px] py-12 px-8'>
        <div className='space-y-8 lg:col-span-2'>
          <RestaurantDetail description={restaurants?.description} amenities={restaurants?.amenities} 
          images={restaurants?.images} />
        </div>
        <div className='lg:col-span-1'>
          <PaymentForm />
        </div>
      </div>

    </div>
  )
}

export default RestaurantView
