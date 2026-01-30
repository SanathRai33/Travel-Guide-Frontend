import React from 'react'
import ViewHeader from '../Component/layout/ViewHeader';
import PaymentForm from '../Component/PaymentForm';
import RestaurantDetail from '../Component/restaurant/RestaurantDetail';

const RestaurantView = () => {
  
  const location ={
    country: "india",
    city : [ 'mumbai', 'chennai']
  }
  return (
    <div className='flex flex-col bg-white'>
      <div className='lg:h-96'>
        <ViewHeader image="https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2NzgzOTE4NHww&ixlib=rb-4.1.0&q=80&w=1080"
          name='Le Gourmet' location={location} review='4.9 (432 reviews)' ambition="Japaneese"
           /> 
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-[120px] py-12 px-8'>
        <div className='lg:col-span-2 space-y-8'>
          <RestaurantDetail />
        </div>
        <div className='lg:col-span-1'>
          <PaymentForm />
        </div>
      </div>

    </div>
  )
}

export default RestaurantView
