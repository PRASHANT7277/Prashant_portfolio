





import React from 'react'
import { BsChevronDoubleUp } from "react-icons/bs";

const Footer = () => {
  return (
    <>

<footer style={{backgroundColor:"white",color:"black"}}>
      {/* <div className="media-icons" style={{color:"pink"}}>
          <a href="https://www.linkedin.com/in/pooja-dhuri-a0b63b221/" target="_blank"
            ><i className="fab fa-linkedin" id="icons"></i></a>
          <a href="https://github.com/PoojaD12345"target="_blank"
            ><i className="fab fa-github" id='icons'></i></a>
        </div> */}
      <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><BsChevronDoubleUp style={{height:"40px",width:"40px",marginBottom:"-0px",position:"sticky"}}/></a></div>
</footer>
    
    
    </>
  )
}

export default Footer
