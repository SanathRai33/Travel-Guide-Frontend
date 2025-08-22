import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/Navbar.css';
import Profile from "../Images/view1.jpg";
import LOGO from '../Images/Logo.png'
import { FaClipboardList } from "react-icons/fa";

const Navbar = () => {

  const [profileState, setProfileState] = useState(null);
  // const [ profImg, setProfImg] = useState(LOGO)
  const [name, setName] = useState("Sanath");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogIn = () => navigate("/login")
  const closeProfile = () => setProfileState(null);
  const viewProfile = (Navbar) => setProfileState(Navbar);

  const handlePic = (e) => {
    // const file = e.target.files[0];
    // if (file) {
    //   const imageUrl = URL.createObjectURL(file);
    //   setProfImg(imageUrl);
    // }
    console.log(e.target.value)
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
  }

  // const user = null;

  return (
    <div className="Nav">
      <div className="logo-links">
        <div className="brand">
          <img src={LOGO} alt="logo" />
          <h3 className="name">Regal Roamers</h3>
        </div>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
      <div className="notify-profile">
        {user ?
          <>
            <NavLink to="/BookStatus" className="cart" >Booking<FaClipboardList className="cart-icon" /> </NavLink>
            <button className="btn" onClick={handleLogIn}>LogOut</button>
          </> :
          <>
            <button className="btn" onClick={handleLogIn}>LogIn</button>
            <></>
          </>}
        {/* <NavLink to="/Notification" className="notific">
            <FaBell className="bell-icon" />
          </NavLink> */}
        <div className="profile" onClick={viewProfile}>
          <img src={LOGO} alt="something" />
        </div>
      </div>
      {profileState && (
        <Profile image={LOGO} changePic={handlePic} name={name} changeName={handleNameChange} close={closeProfile} />
      )
      }
    </div>
  );
};
export default Navbar;
