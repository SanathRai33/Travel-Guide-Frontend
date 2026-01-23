import React from 'react';
import '../../css/Footer.css';
import { FaFacebook, FaWhatsapp, FaInstagram, FaYoutube, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import pay1 from "../../Images/pay1.png"; import pay2 from "../../Images/pay2.png";
import pay3 from "../../Images/pay3.jpg"; import pay4 from "../../Images/pay4.png";
import pay5 from "../../Images/pay5.png"; import pay6 from "../../Images/pay6.webp";
import pay7 from "../../Images/pay7.webp"; import pay8 from "../../Images/pay8.png"; 
import pay9 from "../../Images/pay9.jpg";

const Payment = [{ methodes: pay1},{methodes: pay2},{methodes: pay3},{methodes: pay4}
    ,{methodes: pay5},{methodes: pay6},{methodes: pay7},{methodes: pay8},{methodes: pay9}
]

export default function Footer() {

  return (
    <div className='footer'>
        <div className="footTop">
            <div className="scl-mda">
                <FaFacebook className='ftr-icn'/>
                <FaInstagram className='ftr-icn'/>
                <FaPinterest className='ftr-icn'/>
                <FaTwitter className='ftr-icn'/>
                <FaWhatsapp className='ftr-icn'/>
                <FaYoutube className='ftr-icn'/>
                <FaLinkedin className='ftr-icn'/>
            </div>
            <div className="rating">
                <Rating name="text-feedback" value='4.7' readOnly precision={0.1} 
                    emptyIcon={<StarIcon style={{ opacity: 0.3, color:'white' }} fontSize="inherit" />} />
                <p >4.7 rating | </p>
                <p  style={{paddingLeft: "10px", }}> 7,59,254 reviews</p>
            </div>
            <div className="links">
                <div className="quick">
                    <h5>Quick Links</h5>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/packages">Packages</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className="support">
                    <h5>Support</h5>
                    <a href="/">Terms & Conditions</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Refund & Cancellation Policy</a>
                </div>
                <div className="help">
                    <h5>Helps</h5>
                    <a href="/">Your Account</a>
                    <a href="/">Package Safety Alerts</a>
                    <a href="/">100% Package Guarentee</a>
                    <a href="/">Regal Roamers App Download</a>
                    <a href="/">Help</a>
                </div>
                <div className="payment">
                    <h5>Ways You Can Pay</h5>
                    <div className="pay">
                        { Payment.map((pay, index)=>{
                            return <img src={pay.methodes} key={index} alt="pay" />
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className="footBottom">
            <div className="app">
                <div className="playstore">
                    <div className="img">
                    </div>
                    <div className="info">
                        <p>Get it on</p>
                        <h6>Google Play</h6>
                    </div>
                </div>
                <div className="appstore">
                    <div className="img"></div>
                    <div className="info">
                        <p>Download on the</p>
                        <h6>App Store</h6>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <h6>© 2025 Regal Roamers. All rights reserved.</h6>
            </div>
        </div>
    </div>
  )
}
