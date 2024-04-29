import { Modal ,} from 'antd'
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import {Link} from "react-router-dom"


const Footer = () => {

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
       <div id="footer-container">
        <div className="footer-heading">
          <h2>
            Let’s discuss <span style={{color:"#72A0C1"}}> ! </span>{" "}
          </h2>
        </div>
        <div className="footer-content">
          <p>aaravcreation.in@gmail.com</p>
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
          <p> 91+ 7888799584</p>
        </div>
        <div className="footer-end">
          <a href="https://www.instagram.com/aaravfilms5621/" target="_blank" rel="noopener noreferrer"> 
          <FaInstagram className="instagram icon" />
          </a>
          <a href="https://www.instagram.com/aaravfilms5621/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="facebook icon"  />
          </a>
          <a href="https://www.instagram.com/aaravfilms5621/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className=" twitter icon" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer