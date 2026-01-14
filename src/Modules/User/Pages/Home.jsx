import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchAll from './SearchAll';
import Hotel from './Hotel';
import Restuarant from './Restuarant';
import Ticket from './Ticket';
import Things from './Things';
import Packages from './Packages';
import HomeBar from '../Component/HomeBar';
import PackageView from '../Component/PackageView';
import RestaurantView from '../Component/RestaurantView';
import HotelView from '../Component/HotelView';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div className='Home bg-[#F8FAFC]'>
      <HomeBar /> 
      <Routes>
        <Route path="/" element={<SearchAll />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/restuarant" element={<Restuarant />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/things" element={<Things />} />
        <Route path="/RestaurantView/:id" element={<RestaurantView />} />
        <Route path="/PackageView/:id" element={<PackageView />} />
        <Route path="/HotelView/:id" element={<HotelView />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

