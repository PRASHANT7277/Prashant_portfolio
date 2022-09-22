import React from 'react';
import "./About.css";
//import profilePic from "../../assets/profilephoto1.jpg"

export default function About() {
    
  return (
    <div className='about-container' id='About'>
        <div className='about-header'>
            <h3>About Me</h3>
            <p>Why Choose Me?</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>

        <div className="about-content-box">
            <div className="aboutCard">
                <div className="profilePic">
                    <img src="https://www.thedesigngrouponline.com/wp-content/uploads/2012/04/shutterstock_1122339353.jpg" alt="image" />
                </div>
                <div className="profile-content">
                    <div className="profilesummary">
                    I believe everything is an Art when you 
                    put your consciousness into it. I'm 
                    interested in the whole Development Journey, 
                    like trying new things and building a great 
                    project. My main objective is to succeed 
                    in an environment of growth and excellence
                     and earn a job that provides me satisfaction 
                     and helps me to achieve
                      personal as well as organizational goals.
                    </div>
                    <div>
                        
                    </div>
                    <div className="profile-optins resumeBtn">
                        <a  href='../../assets/Prashant_Kumar_Resume.pdf'  download>
                            <button className='resumeButton2'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
