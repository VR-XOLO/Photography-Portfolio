import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import "../index.css";
import { TfiAlignRight } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { Images } from "../constant/ImageConst";

const Header = ({handleScroll}) => {
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

  const humburgerClose = ()=>{
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen)
      
    }, 400);
  }

  return (
    <>
      <div className="header-container">
      
      
          <div className="logo">
            <img src={Images.logo} alt="" />
          </div>
     
          <div className="display-container">
          <div id="link-container" className={isMenuOpen ? "#link-container active" : "#link-container"} >
            <li>
              {" "}
              <Link to="/" onClick={humburgerClose}> Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about" onClick={humburgerClose}> About</Link>
            </li>
            <li>
              {" "}
              <Link to="/wedding" onClick={humburgerClose}> Wedding</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/event" onClick={humburgerClose}> Event & Corporate</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/preWedding" onClick={humburgerClose}> Pre-Wedding</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/fashionAndPortraits" onClick={humburgerClose}>Fashion & Portraits</Link>{" "}
            </li>
           
            <li>
              {" "}
              <Link to="/babyAndMaternity" onClick={humburgerClose}> Baby and Maternity</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/Ecommerce" onClick={humburgerClose}> E-Commerce</Link>{" "}
            </li>
          </div>
          </div>
       

        <div className="social-icons" onClick={handleScroll}>
          <span >Contact Us</span>
        </div>
        <div id="mobile" onClick={toggleMenu}>
          {isMenuOpen? <IoMdClose className="icon CloseIcon" /> :<TfiAlignRight className="icon OpenIcon" /> }
         
          
        </div>
      </div>
    </>
  );
};

export default Header;
