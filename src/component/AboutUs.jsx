import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { PiHandFill } from "react-icons/pi";
import { Images } from "../constant/ImageConst";
const AboutUs = () => {
  return (
    <>
      <div id="about-container">
        <div className="about-text">
          <h2>
            hey , there <PiHandFill />
          </h2>
          <h3>I'm Aarav Films </h3>
          <p>
            AARAV FILMS merges innovation with storytelling, creating
            captivating content that pushes the boundaries of media. Known for
            integrating cutting-edge technology with artistic vision, its team
            of passionate creators produces visually stunning, emotionally
            resonant work across platforms. As a trailblazer in creative media,
            AARAV FILMS continuously sets new benchmarks for excellence,
            inspiring and entertaining audiences worldwide with its mesmerizing
            visual effects and thought-provoking narratives.
          </p>
          <div className="info-div" style={{ cursor: "pointer" }}>
            <FaRegArrowAltCircleRight className="right-arrow" />
            <p>
              {" "}
              <a href=""> more information. </a>
            </p>
          </div>
        </div>
        <div className="about-img">
          <img src={Images.logo } alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
