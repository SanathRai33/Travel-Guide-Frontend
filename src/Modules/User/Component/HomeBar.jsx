import React from "react";
import "../css/Home.css";
import { NavLink } from "react-router-dom";
import {
  FaUtensils,
  FaBed,
  FaHome,
  FaHamsa,
  FaTicketAlt,
} from "react-icons/fa";

export default function HomeBar() {
  return (
    <div className="HomeBar shadow-sm flex justify-center items-center sticky top-[65px] left-0 w-full bg-white z-10">
      <nav className="flex items-center justify-center w-full lg:h-[45px] lg:gap-12" >
        <button className="rounded-md overflow-hidden font-medium text-sm whitespace-nowrap transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
          <NavLink to="/" className="Nav">
           All
          </NavLink>
        </button>

        <button className="rounded-md overflow-hidden font-medium text-sm whitespace-nowrap transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
          <NavLink to="/packages" className="Nav">
           Packages
          </NavLink>
        </button>

        <button className="rounded-md overflow-hidden font-medium text-sm whitespace-nowrap transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
          <NavLink to="/hotels" className="Nav">
           Hotels
          </NavLink>
        </button>

        <button className="rounded-md overflow-hidden font-medium text-sm whitespace-nowrap transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
          <NavLink to="/restuarant" className="Nav">
           Restaurants
          </NavLink>
        </button>

        <button className="rounded-md overflow-hidden font-medium text-sm whitespace-nowrap transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
          <NavLink to="/ticket" className="Nav">
            Tickets
          </NavLink>
        </button>

        {/* <NavLink to="/ticket" className="Nav"><FaTicketAlt/><p>Ticket Books</NavLink> */}
        {/* <NavLink to="/things" className="Nav"><FaTicketAlt/><p>Things to do</NavLink>  */}
      </nav>
    </div>
  );
}
