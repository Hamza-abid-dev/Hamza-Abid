import React from 'react'
import Education from './Sub-Components/Education'
import Skills from './Sub-Components/Skills'
import Courses from './Sub-Components/Courses'
import { Route, Routes, Link} from 'react-router-dom'
import '../Components-CSS/About.css'
const About = () => {
  return (
    <div>
      <div id='main' className="main container my-5 mb-0 justify-content-around">
        <div className="mainleft">
          <img src="https://thumbs.dreamstime.com/b/bearded-smiling-man-arms-crossed-vector-illustration-bearded-smiling-man-arms-crossed-vector-illustration-cartoon-110736613.jpg" alt='mleft' width={"500px"} />
        </div>
        <div className="mainright"></div>
        <span><h5 className='text-primary'>ABOUT ME</h5>
        <h1><span className='text-primary'>1 Year Experience </span><br />on Web Development</h1>
        <h6>Hello there! I'm <b>Hamza Abid</b>. I specialize in web development,<br /> and I'm deeply Passionate by crafting with <b>1 year</b> of experience <br /> as a professional Front End Developer.</h6>
        <div className="btns my-5 d-flex justify-content-around">
        <Link to="/"><button id='focus' className="btn btn-outline-primary px-4 rounded-5">Main Skills</button></Link>
       <Link to="/Courses"><button id='focus' className="btn btn-outline-primary px-4 rounded-5">Courses</button></Link>
       <Link to="/Education"><button id='focus'  className="btn btn-outline-primary px-4 rounded-5 ">Education</button></Link>
        </div>
        {/* <Skills/> */}
          <Routes>
            <Route path='/' element={<Skills/>}></Route>
            <Route path='/Courses' element={<Courses id='btn1'/>}></Route>
            <Route  path='/Education' element={<Education/>}></Route>
          </Routes>
        </span>
      </div>
      <div  id='services'></div>
    </div>
  )
}

export default About
