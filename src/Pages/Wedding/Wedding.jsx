import React, { useEffect } from "react";
import MainCollage from "../MainCollage/MainCollage";
import { Images } from "../../constant/ImageConst";
const Wedding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      src: Images.WP2,
      alt: "5",
    },
    {
      id: 5,
      name: "Events",
      tags: ["Events"],
      src: Images.WL3,
      alt: "Events",
    },
    {
      id: 6,
      name: "Events",
      tags: ["Events"],
      src: Images.WL4,
      alt: "Events",
    },

    {
      id: 7,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: Images.WP3,
      alt: "Pre-Wedding",
    },
    {
      id: 8,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: Images.PWP1,
      alt: "Pre-Wedding",
    },
    {
      id: 9,
      name: "Pre-Wedding",
      tags: ["Pre-Wedding"],
      src: Images.WL5,
      alt: "Pre-Wedding",
    },

    {
      id: 10,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.PWL1,
      alt: "Fashion & Portraits",
    },
    {
      id: 11,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.PWP2,
      alt: "Fashion & Portraits",
    },
    {
      id: 12,
      name: "Fashion & Portraits",
      tags: ["Fashion & Portraits"],
      src: Images.PWL2,
      alt: "Fashion & Portraits",
    },

    {
      id: 13,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.PWL3,
      alt: "Baby & Maternity",
    },
    {
      id: 14,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src:Images.PWP3,
      alt: "Baby & Maternity",
    },
    {
      id: 15,
      name: "Baby & Maternity",
      tags: ["Baby & Maternity"],
      src: Images.PWL4,
      alt: "Baby & Maternity",
    },
  ];
  const sliderData = [
    {
      h1: "Wedding",
      h2: "Photography",
      srNum: "01",
      imgUrl: Images.Slider2,
    },
  ];

  const subHeading = " Aarav Films is dedicated to capturing every cherish moment of your special day. Through stunning image that reflects beauty &emotions";

  return (
    <>
      <MainCollage
        sliderData={sliderData}
        imagesData={images}
        heading="Wedding Photoshoot"
        subHeading={subHeading}
      />
    </>
  );
};

export default Wedding;
