import React from "react";
//import emailjs from "@emailjs/browser";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Calendar from "../Calendar/Calendar";
//import { useState } from "react";

export default function Contact() {
  

  
    

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-header">
        <Calendar/>
        <h3>Contact Me</h3>
        <p>Let's Keep In Touch</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="contactDetails">
        <div className="contactForm">
          <div className="topCtn">
            <div className="callBtn btnTp">
              <FaPhoneAlt />
              <p>PHONE</p>
              <span>Contact me </span>
              <p className="contactNo">
                <a href="tel:6200539474" target="_blank">
                  6200539474
                </a>
              </p>
            </div>
            <div className="emailBtn btnTp">
              <MdEmail />
              <p>EMAIL</p>
              <span>Contact me on email address</span>
              <p className="contactNo">
                <a href="mailto: kumar.prashant477@gmail.com" target="_blank">
                  kumar.prashant477@gmail.com
                </a>
              </p>
            </div>
            <div className="addrBtn btnTp">
              <FaMapMarkerAlt />
              <p>LOCATION</p>
              <span>Bhagalpur, Bihar</span>
              <p className="contactNo">
                <a href="https://www.google.com/maps/place/Bhagalpur+Jn./@25.2413266,86.9708701,17z/data=!3m1!4b1!4m5!3m4!1s0x39f04a0557a997bf:0xe2a547943ee900cc!8m2!3d25.2413266!4d86.9730588" target="_blank">
                  View on Google Map
                </a>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
