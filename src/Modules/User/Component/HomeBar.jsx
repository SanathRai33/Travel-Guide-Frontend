import React from "react";
import "../css/Home.css";
import { NavLink } from "react-router-dom";

export default function HomeBar() {
  return (
    <div className="HomeBar border-b-2 flex justify-start   items-center sticky top-[64px] left-0 w-full z-10 bg-white">
      <nav className="flex items-center justify-start w-full lg:h-[45px] lg:gap-12 lg:px-[85px]" >
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
