import React, { useRef, useState, useEffect, createRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PiHandFill } from "react-icons/pi";


import {
  FaFacebook,
  FaInstagram,
  FaRegArrowAltCircleRight,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";


// import required modules
import gsap from "gsap";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Showcase from "../../component/portfolio/showcase/Showcase";
import Button from "../../component/Button/Button";
import Contact from "../../component/contact/Contact";
// import Contact from "../../component/contact/Contact";

import { Modal } from "antd";

export default function Home() {
  const headerRefs = useRef([
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
      src: "https://cinefilms.co.in/assets/img/Ring%20ceromony/DAV09783%20(1).jpg",
      alt: "Wedding",
    },
    {
      id: 2,
      name: "Wedding",
      tags: ["Wedding"],
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP13.jpeg",
      alt: "Wedding",
    },
    {
      id: 3,
      name: "Wedding",
      tags: ["Wedding"],
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP8.jpg",
      alt: "Wedding",
    },
    {
      id: 4,
      name: "Events",
      tags: ["Events"],
      src: "https://cinefilms.co.in/assets/img/Ring%20ceromony/DAV09783%20(1).jpg",
      alt: "5",
    },
    {
      id: 5,
      name: "Events",
      tags: ["Events"],
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP8.jpg",
      alt: "Events",
    },
    {
      id: 6,
      name: "Events",
      tags: ["Events"],
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP8.jpg",
      alt: "Events",
    },

    {
      id: 7,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: "https://cinefilms.co.in/assets/img/Ring%20ceromony/DAV09783%20(1).jpg",
      alt: "Pre-Wedding",
    },
    {
      id: 8,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: "https://cinefilms.co.in/assets/img/Ring%20ceromony/DAV09783%20(1).jpg",
      alt: "Pre-Wedding",
    },
    {
      id: 9,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP13.jpeg",
      alt: "Pre-Wedding",
    },

    {
      id: 10,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP8.jpg",
      alt: "Fashion & Portraits",
    },
    {
      id: 11,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: "https://cinefilms.co.in/assets/img/Ring%20ceromony/DAV09783%20(1).jpg",
      alt: "Fashion & Portraits",
    },
    {
      id: 12,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP8.jpg",
      alt: "Fashion & Portraits",
    },

    {
      id: 13,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP8.jpg",
      alt: "Baby & Maternity",
    },
    {
      id: 14,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: "https://cinefilms.co.in/assets/img/Ring%20ceromony/DAV09783%20(1).jpg",
      alt: "Baby & Maternity",
    },
    {
      id: 15,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP13.jpeg",
      alt: "Baby & Maternity",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState("all");
  const [imagesData, setImagesData] = useState(images);
  const [transition, setTransition] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const sliderData = [
    {
      h1: "Prenav Creations",
      h2: "Photography",
      srNum: "01",
      imgUrl:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      h1: "Pre-Wedding",
      h2: "Photography",
      srNum: "02",
      imgUrl:
        "https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      h1: " Fashion & Portraits",
      h2: "Photography",
      srNum: "03",
      imgUrl:
        "https://images.pexels.com/photos/3635872/pexels-photo-3635872.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      h1: "Ring-Cermony",
      h2: "Photography",
      srNum: "04",
      imgUrl:
        "https://images.pexels.com/photos/2852135/pexels-photo-2852135.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      name: "Pre-Wedding",
      id: "Pre-Wedding",
    },
    {
      name: "Fashion & Portraits",
      id: "Fashion & Portraits",
    },
    {
      name: "Baby & Maternity",
      id: "Baby & Maternity",
    },
  ];

  const filterImages = (tag) => {
    setTransition("zoomOut");
    setTimeout(() => {
      if (tag !== "all") {
        const filteredImages = images.filter((value) =>
          value.tags.includes(tag)
        );
        setImagesData(filteredImages);
      } else {
        setImagesData(images);
      }
      setTransition("zoomIn");
    }, 200);

    setTimeout(() => {
      setTransition(false);
    }, 600);
  };

  const clickHandler = (id) => {
    setActive(id);
    filterImages(id);
  };

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
          <SwiperSlide key={index}>
            <div
              className="slideBackground"
              style={{ backgroundImage: `url(${slide.imgUrl})` }}
            >
              <div
                className="hero-heading-container"
                ref={headerRefs.current[index]}
              >
                <div className="srNum">{slide.srNum}/4</div>
                <h2 className="myText">{slide.h1}</h2>
                <h3 className="myText">{slide.h2}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div id="about-container">
        <div className="about-text">
          <h2>
            {" "}
            hey , there <PiHandFill />
          </h2>
          <h3>I'm Prenav kumar </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            debitis distinctio maiores cupiditate fugit aliquid eum nemo, magni
            sed nisi dicta officiis dolorum earum cumque vitae eos minus ratione
            amet. debitis distinctio maiores cupiditate fugit aliquid eum nemo,
            magni sed nisi dicta officiis dolorum earum cumque vitae eos minus
            ratione amet.
          </p>
          <div className="info-div">
            <FaRegArrowAltCircleRight className="right-arrow" />
            <p>more information.</p>
          </div>
        </div>
        <div className="about-img">
          <img
            src="https://cinefilms.co.in/assets/img/photos/about.jpg"
            alt=""
          />
        </div>
      </div>

      <div id="portfolio-container">
        {/* <Portfolio /> */}

        <div className="portfolio-heading">
          <h2>Check our Portfolio</h2>
        </div>

        <div className="filter-menu">
          <ul className="filter-menu-items">
            {filtersData.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`filter-menu-item  ${
                    active === item.id ? "active" : ""
                  }`}
                  onClick={() => clickHandler(item.id)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="portfolio-collage">
          <Showcase
            imagesData={imagesData}
            transition={transition}
            currentFilter={active}
          />
        </div>
      </div>

      <div id="services-container">
        <div className="services-heading">
          <h2>Our Services</h2>
          <h3>
            Transforming fleeting moments into timeless memories, our lens
            captures the essence of your journey, turning each snapshot into a
            masterpiece that speaks volumes beyond words.
          </h3>
        </div>
        <div className="services-button">
          <Button />
        </div>
      </div>

      <div id="contact-container">
        <div className="contact-heading">
          <h2>Contact Us</h2>
        </div>
        <Contact />
      </div>

      <div id="footer-container">
        <div className="footer-heading">
          <h2>
            Let’s discuss <span> ! </span>{" "}
          </h2>
        </div>
        <div className="footer-content">
          <p>abc@gmail.com</p>
          <button onClick={showModal}>Get Direction</button>
          <Modal
            title="Get Direction"
            width={"900"}
            footer={[]}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.1511742239945!2d76.83748791512969!3d30.657871281663244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f94c78077e03d%3A0xd2999931358175b!2sThe%20Hermitage%20Plaza!5e0!3m2!1sen!2sin!4v1670397502062!5m2!1sen!2sin"
              width="100%"
              height="400px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Modal>
          <p>1234567890</p>
        </div>
        <div className="footer-end">
          <FaFacebook className="facebook icon" />
          <FaInstagram className="instagram icon" />
          <FaTwitter className="icon" />
          <FaWhatsapp className="icon" />
        </div>
      </div>
    </>
  );
}
