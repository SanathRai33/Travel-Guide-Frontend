import React from 'react';
import '../css/Home.css';
import { NavLink } from 'react-router-dom';
import { FaUtensils, FaBed, FaHome, FaTicketAlt, FaPlane, FaHamsa } from 'react-icons/fa';

export default function HomeBar() {
  return (
    <div className='HomeBar'>
      <nav>
        <NavLink to="/" className="Nav"><FaHome/><p>Search All</p></NavLink>
        <NavLink to="/packages" className="Nav"><FaHamsa/><p>View Packages</p></NavLink>
        <NavLink to="/hotels" className="Nav"><FaBed/><p>Hotels</p></NavLink>
        <NavLink to="/restuarant" className="Nav"><FaUtensils/><p>Restaurants</p></NavLink>
        {/* <NavLink to="/ticket" className="Nav"><FaPlane/><p>Ticket Books</p></NavLink>
        <NavLink to="/things" className="Nav"><FaTicketAlt/><p>Things to do</p></NavLink> */}
      </nav>
    </div>
  );
}
