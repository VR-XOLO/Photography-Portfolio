import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { gsap } from 'gsap';
import "../index.css";
import { TfiAlignRight } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const animateLinks = () => {
    if (!isMenuOpen) {
      // Animate links to slide in from the right and become visible
      gsap.fromTo("#link-container li", {
        x: 100, // Start off-screen to the right
        opacity: 0,
      }, {
        x: 0, // End at their natural position
        opacity: 1,
        stagger: 0.2,
        ease: "sine",
        duration: 0.4,
      });
    } 
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
    console.log("Menu toggled");
    // Wait for the next render to complete so the state update is reflected
    setTimeout(() => animateLinks(), 0);
  };

  return (
    <>
      <div className="header-container">
      
      
          <div className="logo">
            <img src="https://www.aaravcreation.com/wp-content/uploads/2022/08/Aarav-creation-Logo-white.png" alt="" />
          </div>
     
          <div className="display-container">
          <div id="link-container" className={isMenuOpen ? "#link-container active" : "#link-container"} >
            <li>
              {" "}
              <Link to="/"> Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about"> About</Link>
            </li>
            <li>
              {" "}
              <Link to="/wedding"> Wedding</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/event"> Event</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/preWedding"> Pre-Wedding</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/fashionAndPortraits">Fashion & Portraits</Link>{" "}
            </li>
           
            <li>
              {" "}
              <Link to="/babyAndMaternity"> Baby and Maternity</Link>{" "}
            </li>
            {/* <li>
              {" "}
              <Link to="/contact"> contact</Link>{" "}
            </li> */}
          </div>
          </div>
       

        <div className="social-icons">
          <FaFacebook className="facebook" />
          <FaInstagram className="instagram" />
          <FaYoutube className="youtube" />
        </div>
        <div id="mobile" onClick={toggleMenu}>
          {isMenuOpen? <IoMdClose className="icon CloseIcon" /> :<TfiAlignRight className="icon OpenIcon" /> }
         
          
        </div>
      </div>
    </>
  );
};

export default Header;
