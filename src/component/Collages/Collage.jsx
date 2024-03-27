import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import { useEffect, useState } from "react";
import "./collage.css"
const Collage = ({imagesData}) => {
    const onInit = () => { };
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const galleryStyle = {
        columnCount: isMobile ? "2" : "3" ,
        columnGap: '15px',
      };
  return (
    <div className="App">
      <div style={galleryStyle}>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen]}
        >
          {imagesData?.map((image, index) => {
              const isLastImage = index === imagesData.length - 1; // Check if the current image is the last one
              const itemClassName = `gallery-item ${isLastImage && isMobile ? 'hide-on-mobile' : ''}`.trim();
            return (
              <a
                href={image.src}
                key={index}
                className={itemClassName}               >
                <img alt={image.alt} src={image.src} />
              </a>
            );
          })}
        </LightGallery>
      </div>
    </div>
  );
};

export default Collage;
