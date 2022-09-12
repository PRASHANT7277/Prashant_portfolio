import React from "react";
import c from "./Images/c.png"
import d from "./Images/d.png"
import e from "./Images/git.png"

const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="content">
          <div className="title">
            <span>My Skills</span>
          </div>
          <div className="skills-details">
            <div className="boxes">
              <div className="box">
                <div><img src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt="" className="iconimg" /></div>
                <div className="topic">HTML</div>
                {/* <!-- <div className="per">90%</div> --> */}
              </div>
              <div className="box">
              <div><img src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt="" className="iconimg"/></div>
                <div className="topic">CSS</div>
                {/* <!-- <div className="per">80%</div> --> */}
              </div>
              <div className="box">
              <div><img src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt=""className="iconimg" /></div>
                <div className="topic">JavScript</div>
                {/* <!-- <div className="per">70%</div> --> */}
              </div>
              <div className="box">
              <div><img src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt="" className="iconimg"/></div>
                <div className="topic">React</div>
                {/* <!-- <div className="per">65%</div> --> */}
              </div>
              <div className="box">
              <div><img src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt="" className="iconimg"/></div>
                <div className="topic">Redux</div>
                {/* <!-- <div className="per">60%</div> --> */}
              </div>
              <div className="box">
                <div><img src={e} alt="" className="iconimg"/></div>
                <div className="topic">Git</div>
              </div>
              <div className="box">
                <div><img src={d} alt=""className="iconimg" /></div>
                <div className="topic">ChakraUI</div>
                {/* <!-- <div className="per">90%</div> --> */}
              </div>
              <div className="box">
                <div><img src={c} alt=""className="iconimg" /></div>
                <div className="topic">MongoDb</div>
                {/* <!-- <div className="per">90%</div> --> */}
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
