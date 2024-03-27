import React, { useEffect } from 'react'
import MainCollage from '../MainCollage/MainCollage';
import { Images } from '../../constant/ImageConst';
const Event = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

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
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP8.jpg",
      alt: "Wedding",
    },
    {
      id: 3,
      name: "Wedding",
      tags: ["Wedding"],
      src: "https://cinefilms.co.in/assets/img/Pre-Wedding/NVP13.jpeg",
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

  const sliderData = [
    {
      h1: "Events",
      h2: "Photography",
      srNum: "01",
      imgUrl:  Images.Slider4
    } 
  ];

  return (
    <>
    
    <MainCollage sliderData={sliderData} imagesData={images} heading="Event & corporate" />
    </>
  )
}

export default Event