import React from "react";
 import { BsFillEnvelopeFill,BsFillTelephoneFill } from "react-icons/bs";

const Contacts = () => {
  return (
    <>
      {/* <!-- Contact Me section Start --> */}
      <section className="contact" id="contact">
        {/* <div className="content"> */}
        <div className="title">
          <span>Contact Me</span>
        </div>
        <div className="text">
          <div className="media-icons">
            <div>
            <a href="tel:+916200539474"> <BsFillTelephoneFill id="icon"/></a>
            </div>
            <div>
              <a href="mailto:connect.kumar.prashant477@gmail.com" target="_blank">
                <BsFillEnvelopeFill id="icon" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/prashant-kumar-346037159/" target="_blank">
                <i id="i" className="fab fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a href="https://github.com/PRASHANT7277"target="_blank">
                <i id="i" className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
