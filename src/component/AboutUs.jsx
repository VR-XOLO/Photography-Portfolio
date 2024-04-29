import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { PiHandFill } from "react-icons/pi";
import { Images } from "../constant/ImageConst";
const AboutUs = ({para}) => {
  return (
    <>
      <div id="about-container">
        <div className="about-text">
          <h2>
            hey , there <PiHandFill />
          </h2>
          <h3>I'm Aarav Films </h3>
          <p>
            {para}
          </p>
          <div className="info-div" style={{ cursor: "pointer" }}>
            <FaRegArrowAltCircleRight className="right-arrow" />
            <p>
              <a href="https://www.instagram.com/aaravfilms5621/" target="_blank" rel="noopener noreferrer"> more information. </a>
            </p>
          </div>
        </div>
        <div className="about-img">
          <img src={Images.logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
