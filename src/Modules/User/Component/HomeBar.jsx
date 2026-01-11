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
    <div className="HomeBar shadow-sm">
      <nav>
        <button className="px-6 py-2 rounded-md font-medium text-sm whitespace-nowrap transition-colors bg-blue-600 text-white">
          <NavLink to="/" className="Nav">
            <p>All</p>
          </NavLink>
        </button>

        <button className="px-6 py-2 rounded-md font-medium text-sm whitespace-nowrap transition-colors bg-blue-600 text-white">
          <NavLink to="/packages" className="Nav">
            <p>Packages</p>
          </NavLink>
        </button>

        <button className="px-6 py-2 rounded-md font-medium text-sm whitespace-nowrap transition-colors bg-blue-600 text-white">
          <NavLink to="/hotels" className="Nav">
            <p>Hotels</p>
          </NavLink>
        </button>

        <button className="px-6 py-2 rounded-md font-medium text-sm whitespace-nowrap transition-colors bg-blue-600 text-white">
          <NavLink to="/restuarant" className="Nav">
            <p>Restaurants</p>
          </NavLink>
        </button>

        {/* <NavLink to="/ticket" className="Nav"><FaTicketAlt/><p>Ticket Books</p></NavLink> */}
        {/* <NavLink to="/things" className="Nav"><FaTicketAlt/><p>Things to do</p></NavLink>  */}
      </nav>
    </div>
  );
}
