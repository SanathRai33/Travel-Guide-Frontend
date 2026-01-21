import React from 'react'
import ViewHeader from '../Component/ViewHeader';
import PaymentForm from '../Component/PaymentForm';
import PackageDetail from '../Component/PackageDetail';
import { useParams } from 'react-router-dom';
import { usePackages } from '../hooks/packages/viewPackage';

const PackageView = () => {

  const { id } = useParams();
  const { packages } = usePackages(id);

  console.log("packages", packages)

  return (
    <div className='flex flex-col bg-white'>
      <div className='lg:h-96'>
        <ViewHeader image={packages?.images[0]}
          name={packages?.title} location={packages?.location} review='4.8 (245 reviews)' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-[120px] py-12 px-8'>
        <div className='lg:col-span-2 space-y-8'>
          <PackageDetail description={packages?.description} activity={packages?.itinerary}
            images={packages?.images} includes={packages?.priceIncludes} />
        </div>
        <div className='lg:col-span-1'>
          <PaymentForm basePrice={packages?.basePrice} duration={packages?.duration} currency={packages?.currency} />
        </div>
      </div>

    </div>
  )
}

export default PackageView
