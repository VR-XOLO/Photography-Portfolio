import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaRegArrowAltCircleRight, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { PiHandFill } from 'react-icons/pi'
import Button from '../../component/Button/Button'
import { Modal } from 'antd'

const About = () => {
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
  )
}

export default About
