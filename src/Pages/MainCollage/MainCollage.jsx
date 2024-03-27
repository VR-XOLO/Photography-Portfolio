import React from 'react'
import Showcase from '../../component/portfolio/showcase/Showcase';
import "./MainCollage.css"
import Collage from '../../component/Collages/Collage';
const MainCollage = ({sliderData, imagesData,heading}) => {

 

  return (
    <>
        <div className="mainCollage-container">
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className="slideBackground"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.imgUrl})`,
            height: "88.7vh"
          }} 
          >
          <div className="hero-heading-container">
                <div className="srNum">{slide.srNum}/01</div>
            <h2 className="myText">{slide.h1}</h2>
            <h3 className="myText">{slide.h2}</h3>
          </div>
        </div>
      ))}

       <div className="collage-container">
        <h2>{heading} </h2>

        <div className="PerPage-collage">
          <Collage  imagesData={imagesData}/>
        </div>
       </div>
       </div>
    </>
  )
}

export default MainCollage