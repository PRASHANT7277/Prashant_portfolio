import React from 'react'
import './Skills.css'
import  {SiChakraui} from 'react-icons/si';
import  {GiSkills} from 'react-icons/gi';
import  {ImHtmlFive, ImDatabase} from 'react-icons/im';
import  {FaReact} from 'react-icons/fa';
import  {RiGitBranchLine} from 'react-icons/ri'
import Calendar from '../Calendar/Calendar';

export default function Skills() {
  return (
    <div className='skills-container' id='Skills'>
        <div className='skills-header'>
            <h3>Skills</h3>
            <p>Hands On Experience</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>
        <div className="skillsDetails">
            <div className="boxContainer">
                <div className='skillBox skillbox1'>
                    <div className='sillIcon'><ImHtmlFive color='red'/></div>
                    <div className='skillTitle'>Web Technologies</div>
                    <div className='skillInfo'>HTML, CSS, JavaScript, npm, heroku</div>
                </div>
                <div className='skillBox skillbox2'>
                    <div className='sillIcon'><FaReact /></div>
                    <div className='skillTitle'>Web frameworks</div>
                    <div className='skillInfo'>React, Node.js, Express.js</div>
                </div>
                <div className='skillBox skillbox3'>
                    <div className='sillIcon'><SiChakraui color='blue'/></div>
                    <div className='skillTitle'>UX/UI</div>
                    <div className='skillInfo'>Chakra UI,Bootstrap</div> 
                </div>
                <div className='skillBox skillbox4'>
                    <div className='sillIcon'><ImDatabase/></div>
                    <div className='skillTitle'>DATABASE</div>
                    <div className='skillInfo'>MongoDb</div> 
                </div>
                <div className='skillBox skillbox5'>
                    <div className='sillIcon'><GiSkills color='rgb(109, 152, 0)'/></div>
                    <div className='skillTitle'>Soft Skills</div>
                    <div className='skillInfo'>Team work, Quick Learner, Adaptability, Openness to criticism </div> 
                </div>
                <div className='skillBox skillbox6'>
                    <div className='sillIcon'>
                    <RiGitBranchLine color='blue'/>
                    </div>
                    <div className='skillTitle'>Code Version Control</div>
                    <div className='skillInfo'>GitHub, Git, Postman</div>
                </div>
            </div>
            
        </div>
        {/* <Calendar/> */}
       
    </div>
  )
}
