import React, { useState } from 'react'

const PackageFilter = () => {

    const [ filter, setFilter] = useState(false);

    const handleFilter = () =>{
        setFilter(!filter)
    }

  return (
    <div className=' w-full px-4 sm:px-6 lg:px-8 py-8'>
      <div className='flex flex-col md:flex-row gap-4 mb-3'>
        <div className='flex-1 relative'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" data-fg-bwgu12="2.16:4.8165:/components/home/PackagesSection.tsx:56:13:3528:85:e:Search::::::D4QS"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
        <input type="text" placeholder="Search packages..." className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" data-fg-bwgu13="2.16:4.8165:/components/home/PackagesSection.tsx:57:13:3626:332:e:input" value=""/>
        </div>
        <select name="Features" className='px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' id="">
            <option value="">All</option>
            <option value="lowPrice">Price (Low to High)</option>
            <option value="highPrice">Price (High to Low)</option>
            <option value="lowRating">Rating (Low to High)</option>
            <option value="highRating">Rating (High to Low)</option>
        </select>
        <button onClick={handleFilter} className='flex items-center space-x-2 px-4 py-3 bg-gray-200 rounded-lg hover:bg-gray-400 transition-colors'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sliders-horizontal h-5 w-5" data-fg-bwgu26="2.16:4.8165:/components/home/PackagesSection.tsx:83:13:4758:41:e:SlidersHorizontal::::::DWgk"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
            <span data-fg-bwgu27="2.16:4.8165:/components/home/PackagesSection.tsx:84:13:4812:20:e:span">Filters</span>
        </button>
      </div>
      {
        filter && (
            <div className='pt-3 border-t border-gray-200'>
                <p className='font-medium mb-3'>Package Types</p>
                <div className='flex flex-wrap gap-2'>
                    <button className='px-4 py-2 rounded-lg capitalize transition-colors bg-blue-600 text-white'>All</button>
                    <button className='px-4 py-2 rounded-lg capitalize transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200'>Beach</button>
                    <button className='px-4 py-2 rounded-lg capitalize transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200'>Moutain</button>
                    <button className='px-4 py-2 rounded-lg capitalize transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200'>City</button>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default PackageFilter
