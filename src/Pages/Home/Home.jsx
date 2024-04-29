import React, { useRef, useState, useEffect, createRef, useCallback } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import gsap from "gsap";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Showcase from "../../component/portfolio/showcase/Showcase";

import { Images } from "../../constant/ImageConst";

import AboutUs from "../../component/AboutUs";
import Services from "../../component/Services";

export default function Home() {
  const headerRefs = useRef([
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ]);

  const images = [
    {
      id: 1,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.WP1,
      alt: "Wedding",
    },
    {
      id: 2,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.WL1,
      alt: "Wedding",
    },
    {
      id: 3,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.WL2,
      alt: "Wedding",
    },
    {
      id: 4,
      name: "Events",
      tags: ["Events"],
      src: Images.ECP1,
      alt: "Events",
    },
    {
      id: 5,
      name: "Events",
      tags: ["Events"],
      src:  Images.ECL1,
      alt: "Events",
    },
    {
      id: 6,
      name: "Events",
      tags: ["Events"],
      src:  Images.ECL2,
      alt: "Events",
    },

    {
      id: 7,
      name: "Architecture",
      tags: ["Architecture"],
      src:  Images.AIP1,
      alt: "Architecture",
    },
    {
      id: 8,
      name: "Architecture",
      tags: ["Architecture"],
      src:  Images.AIP2,
      alt: "Architecture",
    },
    {
      id: 9,
      name: "Architecture",
      tags: ["Architecture"],
      src:  Images.AIL4,
      alt: "Architecture",
    },

    {
      id: 10,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src:  Images.Slider3,
      alt: "Fashion & Portraits",
    },
    {
      id: 11,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src:  Images.FP1,
      alt: "Fashion & Portraits",
    },
    {
      id: 12,
      name: "E-Commerce",
      tags: ["E-Commerce"],
      src:  Images.EcomL1,
      alt: "E-Commerce",
    },

    {
      id: 13,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src:  Images.BML1,
      alt: "Baby & Maternity",
    },
    {
      id: 14,
      name: "E-Commerce",
      tags: ["E-Commerce"],
      src:  Images.EcomP1,
      alt: "E-Commerce",
    },
    {
      id: 15,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src:  Images.BML6,
      alt: "Baby & Maternity",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState("all");
  const [imagesData, setImagesData] = useState(images);

  const sliderData = [
    {
      h1: "Aarav Films",
      h2: "Photography",
      srNum: "01",
      imgUrl: Images.Slider1,
    },
    {
      h1: "Wedding",
      h2: "Photography",
      srNum: "02",
      imgUrl: Images.Slider2,
    },
    {
      h1: " Fashion & Portraits",
      h2: "Photography",
      srNum: "03",
      imgUrl: Images.Slider3,
    },
    {
      h1: "Events & corporate",
      h2: "Photography",
      srNum: "04",
      imgUrl: Images.Slider4,
    },
    {
      h1: "Architecture",
      h2: "Photography",
      srNum: "05",
      imgUrl: Images.AIL1,
    },
    {
      h1: "Baby & Maternity",
      h2: "Photography",
      srNum: "06",
      imgUrl: Images.Slider6,
    },
    {
      h1: "E - Commerce",
      h2: "Photography",
      srNum: "07",
      imgUrl: Images.Slider7,
    },
  ];
  
  const filtersData = [
    {
      name: "All",
      id: "all",
    },
    {
      name: "Wedding",
      id: "Wedding",
    },
    {
      name: "Events",
      id: "Events",
    },
    {
      name: "Architecture",
      id: "Architecture",
    },
    {
      name: "Fashion & Portraits",
      id: "Fashion & Portraits",
    },
    {
      name: "Baby & Maternity",
      id: "Baby & Maternity",
    },
    {
      name: "E-Commerce",
      id: "E-Commerce",
    },
  ];

  const filterImages = (tag) => {
    if (tag !== "all") {
      const filteredImages = images.filter((value) => value.tags.includes(tag));
      setImagesData(filteredImages);
    } else {
      setImagesData(images);
    }
  };

  const clickHandler = useCallback((id) => {
    setActive(id);
    filterImages(id);
  }, [filterImages]);
  

  const animateHeader = (index) => {
    if (headerRefs.current[index] && headerRefs.current[index].current) {
      gsap.fromTo(
        headerRefs.current[index].current,
        { x: -400, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      );
    }
  };

  const onSlideChange = (swiper) => {
    animateHeader(swiper.activeIndex);
    setCurrentSlide(swiper.activeIndex);
  };

  useEffect(() => {
    if (currentSlide !== null) {
      animateHeader(currentSlide);
    }
  }, [currentSlide]);

  const ShowcaseMemo = React.memo(Showcase);

  const para = "AARAV FILMS merges innovation with storytelling, creating captivating content that pushes the boundaries of media. Known for integrating cutting-edge technology with artistic vision, its team of passionate creators produces visually stunning, emotionally resonant work across platforms. As a trailblazer in creative media, AARAV FILMS continuously sets new benchmarks for excellence, inspiring and entertaining audiences worldwide with its mesmerizing visual effects and thought-provoking narratives."

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        height={100}
        speed={600}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={onSlideChange}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={slide.srNum}>
            <div
              className="slideBackground"
              style={{ '--background-image': `url(${slide.imgUrl})` }}
            >
              <div
                className="hero-heading-container"
                ref={headerRefs.current[index]}
              >
                <div
                  className="srNum"
                >
                  {slide.srNum}/7
                </div>
                <h2 className="myText">{slide.h1}</h2>
                <h3 className="myText">{slide.h2}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AboutUs para={para} />

      <div id="portfolio-container">
        <div className="portfolio-heading">
          <h2>Check our Portfolio</h2>
        </div>

        <div className="filter-menu">
          <ul className="filter-menu-items">
            {filtersData.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`filter-menu-item ${active === item.id ? 'active' : ''}`}
                  onClick={() => clickHandler(item.id)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="portfolio-collage">
          <ShowcaseMemo imagesData={imagesData} currentFilter={active} />
        </div>
      </div>

      <Services />
    </>
  );
}
