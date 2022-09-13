import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import g from "./Images/g.png"
import h from "./Images/h.png"
import i from "./Images/i.png"
import j from "./Images/j.png"
const Projects = () => {
  return (
    <>
      {/* <!-- My Services Section Start --> */}
      <section className="services" id="services">
        <div className="content">
          <div className="title">
            <span>My Projects</span>
          </div>
          {/* upper group */}
          <div className="boxes">
            {/* first project */}
            <div className="box">
              <div className="icon">
                 {/* <i className="fas fa-desktop"></i>  */}
                <img
                  className="imgs"
                  src={h}
                  alt=""
                />
              </div>
              <div className="topic">Tanner Goods Clone</div>
              <div className="topicsum">
              <div className='paradiv'><p>
              This is a clone of E-commerce site which Deals with the highest quality leather belts, wallets and accessories, including the Mazama Wares collection of handcrafted glassware etc.
              </p></div>
              <p>
              Teckstack:REACT |HTML |CSS |JAVASCRIPT |CHAKRA UI
              </p>
              </div>
              <div className="media-icons" id="linkss">
                <a href="https://github.com/PRASHANT7277/goofy-tray-3901"target="_blank">
                  {" "}
                  <i id="ic" className="fab fa-github"></i>
                </a>
                <a href="https://tannergoods-woad.vercel.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns"/>
                </a>
              </div>
            </div>
            
            {/* second project */}
            <div className="box" id="box">
              <div className="icon">
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className="imgs"
                  src={g}
                  alt=""
                />
              </div>
              <div className="topic">Kimaye Clone[Group Project]</div>
              <div className="topicsum">
              <div className='paradiv'><p>
              This is a E-commerce Website where you can buy Super Fresh Fruits,Fresh-cuts,Fruit-combos etc directly from farms.
              </p></div>
              <p>
              Teckstack:HTML |CSS |JAVASCRIPT 
              </p>
              </div>
              <div className="media-icons" id="linkss">
                <div><a href="https://github.com/humamul/Team-Kimayi"target="_blank">
                  {" "}
                  <i id="ic" className="fab fa-github"></i>
                </a></div>
                <div>
                <a href="https://kimaye-masai.netlify.app/"target="_blank"><AiOutlineGlobal id="btns"/></a>
                </div>
              </div>
            </div>
          </div>
      
      {/* below group */}
            <div className="boxes">
            {/* third project */}
            <div className="box">
              <div className="icon">
                <img className="imgs" src={i} alt="" />
              </div>
              <div className="topic">Bella Vita Organics Clone</div>
              <div className="topicsum">
              <div className='paradiv'><p>This is a clone of E-commerce website where we have Ayurvedic & Natural Beauty Care Products made from 100% Natural Ingredients..</p></div>
              <p>Teckstack:HTML,CSS,JavaScript </p></div>
              <div className="media-icons" id="linkss">
                <a href="https://github.com/PRASHANT7277/-breakable-bikes-2790"target="_blank">
                  {" "}
                  <i id="ic" className="fab fa-github"></i>
                </a>
                <a href="https://bellavita-alpha.vercel.app/"target="_blank">
                <AiOutlineGlobal id="btns"/>
                </a>
              </div>
            </div>
          
              {/* forth project */}
              <div className="box">
              <div className="icon">
                <img className="imgs" src={j} alt="" />
              </div>
              <div className="topic">My Portfolio</div>
              <div className="topicsum">
              <div className='paradiv'><p>This is My portfolio website where the information about me is mention over their. Skills,projects and the languages are mention.
             </p></div>
              <p>Teckstack:HTML | JavaScript | React | CSS | ChakraUI </p>
              </div>
              <div className="media-icons" id="linkss">
                <a href="https://github.com/PRASHANT7277/Prashant_portfolio"target="_blank">
                  {" "}
                  <i id="ic" className="fab fa-github"></i>
                </a>
                <a href="https://PRASHANT7277.github.io/Prashant_portfolio"target="_blank">
                <AiOutlineGlobal id="btns"/>
                </a>
              </div>
              </div>



            </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
