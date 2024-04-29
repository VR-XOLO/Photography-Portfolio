import React, { useEffect } from 'react'
import MainCollage from '../MainCollage/MainCollage';
import { Images } from '../../constant/ImageConst';

const Architecture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  const images = [
    {
      id: 1,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.AIP1,
      alt: "Wedding",
    },
    {
      id: 2,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.AIL1,
      alt: "Wedding",
    },
    {
      id: 3,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.AIL2,
      alt: "Wedding",
    },
    {
      id: 4,
      name: "Events",
      tags: ["Events"],
      src:   Images.AIP2,
      alt: "5",
    },
    {
      id: 5,
      name: "Events",
      tags: ["Events"],
      src: Images.AIL3,
      alt: "Events",
    },
    {
      id: 6,
      name: "Events",
      tags: ["Events"],
      src: Images.AIL4,
      alt: "Events",
    },

    {
      id: 7,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src:  Images.AIP1,
      alt: "Pre-Wedding",
    },
    {
      id: 8,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src:  Images.AIP2,
      alt: "Pre-Wedding",
    },
    {
      id: 9,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src:  Images.AIL5,
      alt: "Pre-Wedding",
    },

    {
      id: 10,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.AIL6,
      alt: "Fashion & Portraits",
    },
    {
      id: 11,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src:  Images.AIP1,
      alt: "Fashion & Portraits",
    },
    {
      id: 12,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.AIL7,
      alt: "Fashion & Portraits",
    },

    {
      id: 13,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.AIL8,
      alt: "Baby & Maternity",
    },
    {
      id: 14,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src:  Images.AIP2,
      alt: "Baby & Maternity",
    },
    {
      id: 15,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.AIL9,
      alt: "Baby & Maternity",
    },
  ];

  const sliderData = [
    {
      h1: "Architecture",
      h2: "Photography",
      srNum: "01",
      imgUrl: Images.AIL1
    } 
  ];
  const subHeading = "We simultaneously crafting images that showcase the harmony of colors ,textures ,architecture elements within the interior environments."

  return (
    <>
        <MainCollage sliderData={sliderData} imagesData={images} heading="Architecture Photoshot" subHeading={subHeading} />

    </>
  )
}

export default Architecture