import React from 'react'
import AboutUs from '../../component/AboutUs'
import Services from '../../component/Services'
import AboutCard from '../../component/AboutCard/AboutCard'

const About = () => {

 const para  = "AARAV FILMS seamlessly integrates cutting-edge technology with artistic vision, producing visually stunning and emotionallyresonant content across various platforms. AARAV FILMS boasts a richlegacy of collaborating with brands to bring their stories to lifein dynamic and impactful ways. With a keen understanding of brandidentity and consumer psychology, AARAV FILMS crafts bespokecampaigns that resonate deeply with target audiences, drivingengagement and brand loyalty."
  return (
    <>
    <AboutUs para={para}/>

        <AboutCard/>  
     

     <Services />

    
    </>
  )
}

export default About
