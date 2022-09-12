import React from "react";
import b from "./Images/b1.png"
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="content">
          <div className="title">
            <span>About Me</span>
          </div>
          <div className="about-details">
            <div className="left">
              <img src={b} alt="image" />
            </div>
            <div className="right">
              <div className="topic">I like to code because it's a usable <span style={{color:"#9b1750"}}>ART</span></div>
              <p>
                Hello World! I'm a passinate  Developer.I love to cook and always want to be updated on the world and domestic politics. Currently, looking forward to joining a company where I
                will be able to explore My skills. I love to combine the worlds of logic and creative design to make eye-catching,accessible,and user-friendly websites and applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
