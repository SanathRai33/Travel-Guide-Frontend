import React from 'react'
import ViewHeader from '../Component/ViewHeader';
import PaymentForm from '../Component/PaymentForm';
import PackagDetail from '../Component/PackagDetail';

const PackageView = () => {

  return (
    <div className='flex flex-col bg-white'>
      <div className='lg:h-96'>
        <ViewHeader />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-[120px] py-12 px-8'>
        <div className='lg:col-span-2 space-y-8'>
          <PackagDetail />
        </div>
        <div className='lg:col-span-1'>
          <PaymentForm />
        </div>
      </div>

    </div>
  )
}

export default PackageView
