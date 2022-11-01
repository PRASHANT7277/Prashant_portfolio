import React from 'react'
import './Statistic.css'
const statistic = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}> Statistics </h1>
      <div className="gitstats">
        <img
          className="gitimg"
          src={
            "https://github-readme-stats.vercel.app/api?username=PRASHANT7277&hide_border=false&include_all_commits=true&count_private=true"
          }
        />
        <img
          className="gitimg"
          src={
            "https://github-readme-streak-stats.herokuapp.com/?user=PRASHANT7277&hide_border=false&include_all_commits=true&count_private=true"
          }
        />
                
      </div>

      <div className="stat">
        <div className="individualStat">
          <div>1200+</div>
          <div>
            <h3>Hours</h3>of Coding
          </div>
        </div>

        <div className="individualStat">
          <div>400+</div>
          <div>
            <h3>DSA</h3>Problems
          </div>
        </div>
        

        <div className="individualStat">
          <div>10+</div>
          <div>
            <h3>Projects</h3>Done
          </div>
        </div>

        <div className="individualStat" id="hours">
          <div>100+</div>
          <div>
            <h3>Hours</h3> of Soft Skills Sessions
          </div>
        </div>
      </div>
    </>
  );
}

export default statistic