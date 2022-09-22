import React from 'react'
import Typical from 'react-typical';
import "./Profile.css";
import Resume from '../../../assets/Prashant_Kumar_Resume.pdf'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://github.com/PRASHANT7277" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/prashant-kumar-346037159/" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                       
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello I'm <span className='highlighted-text'>Prashant Kumar</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1>
                        <Typical
                            loop={Infinity}
                            steps ={[
                                
                                "Full Stack developer 🖥",
                                1500,
                                "Enthusiastic Dev 🔴",
                                1500,
                                
                            ]}
                        />
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building application with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <a href={Resume}  download="Prashant_Kumar_Resume">
                        <button className='resumeButton'>Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}
