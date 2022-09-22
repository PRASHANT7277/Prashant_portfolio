import React from "react";
//import emailjs from "@emailjs/browser";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt,FaGithub,FaLinkedin } from "react-icons/fa";
import Calendar from "../Calendar/Calendar";
//import { useState } from "react";

export default function Contact() {
  

  
    

  return (
    <div className="contact-container" >
      <div className="contact-header" >
        <Calendar/>
        <h3 >Contact Me</h3>
        <p>Let's Keep In Touch</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="contactDetails">
        <div className="contactForm">
          <div className="topCtn">
            {/* <div className="callBtn btnTp">
              <FaPhoneAlt />
              <p>PHONE</p>
              <span>Contact me </span>
              <p className="contactNo">
                <a href="tel:6200539474" target="_blank">
                  6200539474
                </a>
              </p>
            </div> */}
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
              <FaGithub />
              <p>GITHUB</p>
              <span>Check me on Github</span>
              <p className="contactNo">
                <a href="https://github.com/PRASHANT7277" target="_blank">
                www.github.com/
                </a>
              </p>
            </div>
            <div className="addrBtn btnTp">
              <FaLinkedin />
              <p>LINKEDIN</p>
              <span>Check me on Linkedin</span>
              <p className="contactNo">
                <a href="https://www.linkedin.com/in/prashant-kumar-346037159/" target="_blank">
                www.linkedin.com/in
                </a>
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
