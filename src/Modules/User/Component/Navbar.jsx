import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import LOGO from "../Images/Logo.png";
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { toast } from "react-toastify";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogIn = () => navigate("/login");
  const viewProfile = (Navbar) => {
    navigate("/profile")
  };

  // ---------------------------------------------------------------------------

  // const tl = gsap.timeline()
  // const tl2 = gsap.timeline()

  // useGSAP(()=>{
  //   tl.from('.Nav',{
  //     y: -30,
  //     duration: 0.5,
  //     delay: 0.5,
  //     opacity: 0
  //   })

  //   tl.from('.brand img',{
  //     x: -30,
  //     duration: 0.5,
  //     delay: 0.5,
  //     opacity: 0
  //   })

  //   tl.from('.brand h3',{
  //     x: -30,
  //     duration: 0.5,
  //     opacity: 0
  //   })

  //   tl.from('.links a',{
  //     x: 50,
  //     duration: 0.3,
  //     opacity: 0,
  //     stagger: 0.3,
  //     ease: "bounce.out",
  //   })

  //   tl2.from('.profile img',{
  //     x: 50,
  //     duration: 0.2,
  //     opacity: 0,
  //     delay: 1.5,
  //     ease: "power2.out",
  //     stagger: 0.3,
  //   })

  //   tl2.from('.notify-profile a',{
  //     x: 50,
  //     duration: 0.2,
  //     opacity: 0,
  //     delay: 0.5,
  //     ease: "bounce.out",
  //     stagger: 0.3,
  //   })

  //   tl2.from('.notify-profile .btn',{
  //     x: 50,
  //     duration: 0.2,
  //     opacity: 0,
  //     delay: 0.5,
  //     ease: "bounce.out",
  //     stagger: 0.3,
  //   })

  // },[])

  // ---------------------------------------------------------------------------

  const user = {
    name: "Sanath Rai",
    email: "sanathrai03@gmail.com",
  };

  // const user = null;

  return (
    <div className="Nav flex justify-between items-center w-full h-[64px] py-0 lg:px-[80px] sticky left-0 top-0 z-50 shadow-md bg-white">
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-3">
          <img src={LOGO} alt="logo" className="w-11 h-11 rounded-full" />
          <h3 className="poppins text-gray-700">Trip Harbor</h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <NavLink
          className="text-gray-700 px-3 py-2 rounded-md text-sm hover:text-slate-500 hover:bg-gray-100 active:bg-blue-600 transition-colors duration-300 ease-in-out"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="text-gray-700 px-3 py-2 rounded-md text-sm hover:text-slate-500 hover:bg-gray-100 active:bg-blue-600 transition-colors duration-300 ease-in-out"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className="text-gray-700 px-3 py-2 rounded-md text-sm hover:text-slate-500 hover:bg-gray-100 active:bg-blue-600 transition-colors duration-300 ease-in-out"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="text-gray-700 px-3 py-2 rounded-md text-sm hover:text-slate-500 hover:bg-gray-100 active:bg-blue-600 transition-colors duration-300 ease-in-out"
          to="/BookStatus"
        >
          Booking{" "}
        </NavLink>
      </div>
      <div className="notify-profile flex items-center lg:gap-5">
        <div
          className="flex justify-center items-center cursor-pointer rounded-full h-11 w-11 bg-slate-100 hover:bg-slate-200 transition-all duration-100"
          onClick={viewProfile}
        >
          <FaRegUser />
        </div>
        {user ? (
          <button
            className="flex items-center justify-center text-red-600 gap-2 w-[100px] h-10 rounded-md bg-red-50 cursor-pointer hover:bg-red-100 transition-all duration-100"
            onClick={handleLogIn}
          >
            <IoIosLogOut />
            <span>Logout</span>
          </button>
        ) : (
          <button
            className="flex items-center justify-center text-blue-600 gap-2 w-[100px] h-10 rounded-md bg-blue-50 cursor-pointer hover:bg-blue-100 transition-all duration-100"
            onClick={handleLogIn}
          >
            <CiLogin />
            <span>LogIn</span>
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;
