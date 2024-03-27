import React, { useState } from 'react'
import { FaFacebook, FaInstagram,  FaTwitter, FaWhatsapp } from 'react-icons/fa'

import { Modal } from 'antd'
import AboutUs from '../../component/AboutUs'
import Services from '../../component/Services'
import ContactUs from '../../component/ContactUs'
import AboutCard from '../../component/AboutCard/AboutCard'

const About = ({ContactScroll}) => {
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
  return (
    <>
    <AboutUs/>

        <AboutCard/>  
     

     <Services />

    
    </>
  )
}

export default About
