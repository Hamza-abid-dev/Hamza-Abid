import React from 'react'
import '../Components-CSS/Main.css'
import CV from '../Assets/docs/My-CV.pdf'
import { saveAs } from 'file-saver'
const Main = () => {
  const download =()=>{
    saveAs(CV, "My-CV.pdf")
  }
  return (
    <div className='container'>
    <div className="main my-5 d-flex">
      <div className="mainleft container">
      <h2 className=' fw-medium py-2 '>Welcome to my Portfolio</h2>
      <h1 className=' fw-bold'>Hi I'm <br /><span className=' text-primary'>Hamza Abid</span><br />Front End Web Developer</h1>
      <h5 className=' text-body-secondary'>Passionate Front-End Developer crafting exceptional <br /> digital experiences through code and creativity.</h5>
      <div className="btns my-5">
        <a href="#contact"><button className="btn btn-primary px-4 rounded-5">Hire Me!</button></a>
        {/* <a href="../Assets/docs/My-CV.pdf" download="My-CV"> */}
        <button onClick={download} className="btn btn-outline-primary px-4 btn-sm mx-xl-5 fw-bold rounded-5">Download CV <span><i class="bi bi-download fs-5 px-2 fs-5 "></i></span></button>
      {/* </a> */}
      </div>
      </div>
      <div className="mainright ">
      <img className='mainimg' src="https://img.freepik.com/premium-vector/bearded-man-sits-floor-works-laptop-remote-work-via-internet-freelancer_165429-946.jpg" alt="mright" width={"600px"}/>
      </div>
      </div>
      
    </div>
  )
}

export default Main
