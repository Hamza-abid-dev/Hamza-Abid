import React from 'react'
import portfolio from '../Assets/imgs/portfolio.png'
import daraz from '../Assets/imgs/daraz.png'
import textform from '../Assets/imgs/textform.png'
import '../Components-CSS/Projects.css'
const Projects = () => {
  return (
    <div>
      <div className="promain container my-5 text-center">
      <span><h4 className='text-primary'>OUR PROJECTS</h4><h1 className='my-3'>Presenting My Front End <br/> Landing Pages and Projects</h1></span>
      <button className="btn btn-primary btn-lg px-5 rounded-5 my-3">ALL</button>
      <div className="column py-5">
        <img src={portfolio} alt=''/>
        <img src={daraz} alt=''/>
        <img src={textform} alt=''/>
      </div>
      </div>
    </div>
  )
}

export default Projects
