import React from "react";
import "./AboutCard.css";
import { Images } from "../../constant/ImageConst";
const AboutCard = () => {
    
    const cardData1 = [
        {
            name: "Abhishek",
            title: "CEO",
            img: Images.Profile1,
            facebookLink: "https://www.facebook.com/AbhishekProfile",
            instagramLink: "https://www.instagram.com/AbhishekProfile"
        },
        {
            name: "Pooja",
            title: "Manager",
            img: Images.Profile2,
            facebookLink: "https://www.facebook.com/surajProfile",
            instagramLink: "https://www.instagram.com/surajProfile" 
        },
        {
            name: "Vishal Tiwari",
            title: "Graphic Designer",
            img: Images.Profile3,
            facebookLink: "https://www.facebook.com/AbhishekPhotographerProfile", 
            instagramLink: "https://www.instagram.com/AbhishekPhotographerProfile" 
        },
        {
            name: "Krishna",
            title: "Editor",
            img: Images.Profile3,
            facebookLink: "https://www.facebook.com/AbhishekPhotographerProfile", 
            instagramLink: "https://www.instagram.com/AbhishekPhotographerProfile" 
        }
    ];
    const cardData2 = [
        {
            name: "Nancy",
            title: "Business Developer",
            img: Images.Profile4,
            facebookLink: "https://www.facebook.com/AbhishekProfile",
            instagramLink: "https://www.instagram.com/AbhishekProfile"
        },
        {
            name: "Nafiz Ansri ",
            title: "Photographer",
            img: Images.Profile5,
            facebookLink: "https://www.facebook.com/surajProfile",
            instagramLink: "https://www.instagram.com/surajProfile" 
        },
        {
            name: "Neeraj",
            title: "Videographer",
            img: Images.Profile6,
            facebookLink: "https://www.facebook.com/AbhishekPhotographerProfile", 
            instagramLink: "https://www.instagram.com/AbhishekPhotographerProfile" 
        },
        {
            name: "Ajeet",
            title: "Cinematic Photographer",
            img: Images.Profile6,
            facebookLink: "https://www.facebook.com/AbhishekPhotographerProfile", 
            instagramLink: "https://www.instagram.com/AbhishekPhotographerProfile" 
        }
    ];

    return (
        <>
         
            <div className="containers" >
            <h1>Meet Our Team</h1>
            <div className="our-team-container">
            {cardData1.map((data, index) => {
                return (
                        <div className="our-team" key={index}>
                            <div className="picture">
                                <img
                                    className="img-fluid"
                                    src={data.img}
                                />
                            </div>
                            <div className="team-content">
                                <h3 className="name">{data.name}</h3>
                                <h4 className="title">{data.title}</h4>
                            </div>
                           
                        </div>
                    
                );
            })}
            </div>
            <div className="our-team-container">
            {cardData2.map((data, index) => {
                return (
                    <div className="our-team" key={index}>
                    <div className="picture">
                        <img
                            className="img-fluid"
                            src={data.img}
                            />
                    </div>
                    <div className="team-content">
                        <h3 className="name">{data.name}</h3>
                        <h4 className="title">{data.title}</h4>
                    </div>
                 
                </div>
                    
                );
            })}
            </div>
            </div>
        </>
    );
};

export default AboutCard;
