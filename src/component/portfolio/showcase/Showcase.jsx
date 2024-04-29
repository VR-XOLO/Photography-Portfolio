import LightGallery from "lightgallery/react";
import "../../../index.css";

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

export default function Showcase({ imagesData, currentFilter }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const onInit = () => {};

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const galleryStyle = {
    columnCount: currentFilter === "all" && !isMobile ? 3 : 2,
    columnGap: "15px",
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
            const isLastImage = index === imagesData.length ; // Check if the current image is the last one
            const itemClassName = `gallery-item ${
              isLastImage && isMobile ? "hide-on-mobile" : ""
            }`.trim();
            return (
              <a className={itemClassName} href={image.src} key={index}>
                <img alt={image.alt} src={image.src} />
              </a>
            );
          })}
        </LightGallery>
      </div>
    </div>
  );
}
