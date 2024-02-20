import React from "react";
import "./style.scss";
import ContactInfo from "./contact-info/ContactInfo";
import  Form  from "./form/Form.jsx"
const Contact = () => {
    return (
        <>
            <div>
                <div className="contact-content-wrapper">
                <ContactInfo/>
                <Form />
                </div>
            </div>
        </>
    );
};

export default Contact;
