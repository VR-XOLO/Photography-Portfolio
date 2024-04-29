import React, { useEffect } from 'react'
import MainCollage from '../MainCollage/MainCollage';
import { Images } from '../../constant/ImageConst';

const BabyAndMaternity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  const images = [
    {
      id: 1,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.BMP1,
      alt: "Wedding",
    },
    {
      id: 2,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.BML1,
      alt: "Wedding",
    },
    {
      id: 3,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.BML2,
      alt: "Wedding",
    },
    {
      id: 4,
      name: "Events",
      tags: ["Events"],
      src: Images.BMP2,
      alt: "5",
    },
    {
      id: 5,
      name: "Events",
      tags: ["Events"],
      src: Images.BML3,
      alt: "Events",
    },
    {
      id: 6,
      name: "Events",
      tags: ["Events"],
      src: Images.BML4,
      alt: "Events",
    },

    {
      id: 7,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: Images.BMP3,
      alt: "Pre-Wedding",
    },
    {
      id: 8,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: Images.BMP4,
      alt: "Pre-Wedding",
    },
    {
      id: 9,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src:Images.BML5,
      alt: "Pre-Wedding",
    },

    {
      id: 10,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.BML6,
      alt: "Fashion & Portraits",
    },
    {
      id: 11,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.BMP5,
      alt: "Fashion & Portraits",
    },
    {
      id: 12,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.BML7,
      alt: "Fashion & Portraits",
    },

    {
      id: 13,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src:Images.BML8,
      alt: "Baby & Maternity",
    },
    {
      id: 14,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.BMP6,
      alt: "Baby & Maternity",
    },
    {
      id: 15,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.BML9,
      alt: "Baby & Maternity",
    },
  ];

  const sliderData = [
    {
      h1: "Baby & Maternity",
      h2: "Photography",
      srNum: "01",
      imgUrl:  Images.Slider6
    } 
  ];
  const subHeading = "From glowing maternity portraits to tender newborn shots we ensures and prioritize  the comfort and safety of both mother and child."

  return (

    <>
        <MainCollage sliderData={sliderData} imagesData={images} heading="Baby & Maternity"  subHeading={subHeading}/>

    </>
  )
}

export default BabyAndMaternity