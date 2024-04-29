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
      src: Images.ECP1,
      alt: "Wedding",
    },
    {
      id: 2,
      name: "Wedding",
      tags: ["Wedding"],
      src:  Images.ECL1,
      alt: "Wedding",
    },
    {
      id: 3,
      name: "Wedding",
      tags: ["Wedding"],
      src: Images.ECL2,
      alt: "Wedding",
    },
    {
      id: 4,
      name: "Events",
      tags: ["Events"],
      src: Images.ECP2,
      alt: "5",
    },
    {
      id: 5,
      name: "Events",
      tags: ["Events"],
      src: Images.ECL3,
      alt: "Events",
    },
    {
      id: 6,
      name: "Events",
      tags: ["Events"],
      src: Images.ECL4,
      alt: "Events",
    },

    {
      id: 7,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src:  Images.ECP3,
      alt: "Pre-Wedding",
    },
    {
      id: 8,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src:  Images.ECP2,
      alt: "Pre-Wedding",
    },
    {
      id: 9,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src:Images.ECL5,
      alt: "Pre-Wedding",
    },

    {
      id: 10,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.ECL6,
      alt: "Fashion & Portraits",
    },
    {
      id: 11,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src:  Images.ECP2,
      alt: "Fashion & Portraits",
    },
    {
      id: 12,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.ECL7,
      alt: "Fashion & Portraits",
    },

    {
      id: 13,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.ECL8,
      alt: "Baby & Maternity",
    },
    {
      id: 14,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src:  Images.ECP4,
      alt: "Baby & Maternity",
    },
    {
      id: 15,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.ECL9,
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
  const subHeading = "Our photographers skillfully document events of all kinds from wedding & corporate gatherings ,concerts & cultural festivals."

  return (
    <>
    <MainCollage sliderData={sliderData} imagesData={images} heading="Event" subHeading={subHeading} />
    </>
  )
}

export default Event