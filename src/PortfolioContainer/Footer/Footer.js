import React from 'react'
import './Footer.css';
import {ImHeart} from 'react-icons/im';
export default function Footer() {
    let date = new Date().getFullYear();
  return (
    <footer className="site-footer">
        <div className="container-footer">
                <div className="">
                    <div className=" footer-toop">
                        <h3 id='NameFooter'>PRASHANT KUMAR</h3>
                        <p>A Full Stack Developer skilled in frontend, backend and passionate about building excellent websites that improves the lives of those around me. Look forward to joining a company where I will  be able to contribute towards individual and company growth.</p>
                        <div className='footer-social'>
                            <a href="https://github.com/PRASHANT7277" target="_blank">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/prashant-kumar-346037159/" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="container-footer-text">
                <p>©{date}. Design with {<ImHeart color='red'/>} by Niraj.</p>
            </div> */}
    </footer>
  )
}
