import React, { useEffect } from 'react'
import MainCollage from '../MainCollage/MainCollage';
import { Images } from '../../constant/ImageConst';

const Ecommerce = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  const images = [
    {
      id: 1,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.EcomP1,
      alt: "Wedding",
    },
    {
      id: 2,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.EcomL1,
      alt: "Wedding",
    },
    {
      id: 3,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.EcomL2,
      alt: "Wedding",
    },
    {
      id: 4,
      name: "Events",
      tags: ["Events"],
      src: Images.EcomP2,
      alt: "5",
    },
    {
      id: 5,
      name: "Events",
      tags: ["Events"],
      src: Images.EcomL3,
      alt: "Events",
    },
    {
      id: 6,
      name: "Events",
      tags: ["Events"],
      src: Images.EcomL4,
      alt: "Events",
    },

    {
      id: 7,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: Images.EcomP3,
      alt: "Pre-Wedding",
    },
    {
      id: 8,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: Images.EcomP4,
      alt: "Pre-Wedding",
    },
    {
      id: 9,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: Images.EcomL5,
      alt: "Pre-Wedding",
    },

    {
      id: 10,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.EcomL6,
      alt: "Fashion & Portraits",
    },
    {
      id: 11,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.EcomP5,
      alt: "Fashion & Portraits",
    },
    {
      id: 12,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.EcomL7,
      alt: "Fashion & Portraits",
    },

    {
      id: 13,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.EcomL8,
      alt: "Baby & Maternity",
    },
    {
      id: 14,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.EcomP6,
      alt: "Baby & Maternity",
    },
    {
      id: 15,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.EcomL9,
      alt: "Baby & Maternity",
    },
  ];

  const sliderData = [
    {
      h1: "E-Commerce",
      h2: "Photography",
      srNum: "01",
      imgUrl: Images.Slider7
    } 
  ];
  const subHeading = "Aarav films extends its expertise to e-commerce  services in digital market place from visually stunning product photography ."

  return (
    <>
        <MainCollage sliderData={sliderData} imagesData={images} heading="E-Commerce" subHeading={subHeading} />

    </>
  )
}

export default Ecommerce