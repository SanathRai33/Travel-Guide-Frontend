import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchAll from './SearchAll';
import Hotel from './Hotel';
import Restuarant from './Restuarant';
import Ticket from './Ticket';
import Things from './Things';
import Packages from './Packages';
import Profile from './Profile';
import HomeBar from '../Component/HomeBar';
import PackageView from './PackageView';
import RestaurantView from './RestaurantView';
import HotelView from './HotelView';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div className='Home bg-[#F8FAFC]'>
      <HomeBar /> 
      <Routes>
        <Route path="/" element={<SearchAll />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/restuarant" element={<Restuarant />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/things" element={<Things />} />
        <Route path="/restaurant/:id" element={<RestaurantView />} />
        <Route path="/packages/:id" element={<PackageView />} />
        <Route path="/hotels/:id" element={<HotelView />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

