import React from 'react'
import a from "./Images/a.jpg"
const Home = () => {
  return (
   <>
   
   <section className="home" id="home">
      <div className="home-content">
        <div className="text">
          <div className="text-one">Hello,my name is</div>
          <div className="text-two">Prashant kumar</div>
          <div className="text-three">I'm a <span style={{color:"#9b1750"}}>Full Stack Developer</span> </div>
          <div className="button">
                <button>
                  <a href="https://drive.google.com/file/d/1YqCzHtQiOGUWOWtRVgo4d9H8i6lXI0VY/view?usp=sharing" target="_blank">
                    Resume
                  </a>
                </button>
              </div>
        </div>
        <div className='homeImg'>
          <img src={a} alt="Prashant" className='homeImg'/>
        </div>
      </div>
    </section>
   
   </>

  )
}

export default Home
