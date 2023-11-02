import React from 'react'
import '../Components-CSS/Work.css'

const Work = () => {
  return (
    <div>
      <div className="mainwork text-center text-light bg-primary py-5 container rounded-4">
        <h5 className='py-5'>OUR MILESTONES <span><h1 className='py-3'>What sets our studio apart <br />for your projects?</h1></span></h5>
        <div className="datawork row justify-content-evenly my-5">
        <div id='workcard' className="rounded-4 mb-2 "><span><h1 className='py-3'><span><h5><i class="fa fa-user fa-3x head-icon"></i></h5></span></h1><h5>Elevate your online presence with our web development studio's innovative solutions.</h5></span></div>
        <div id='workcard' className="rounded-4 mb-2"><span><h1 className='py-3'><span><h5><i class="fa fa-user-circle-o fa-3x head-icon"></i></h5></span></h1><h5>We craft stunning websites and applications tailored to your unique vision.</h5></span></div>
        <div id='workcard' className="rounded-4 mb-2 "><span><h1 className='py-3'><span><h5><i class="fa fa-address-book fa-3x head-icon"></i></h5></span></h1><h5>Let our expert team turn your ideas into digital reality, with a touch of creativity.</h5></span></div>
        <div id='workcard' className="rounded-4 mb-2 "><span><h1 className='py-3'><span><h5><i class="fa fa-code fa-3x head-icon"></i></h5></span></h1><h5 id='work'>Experience the future of web development – join us on this exciting journey!</h5></span></div>
        </div>
      </div>
    </div>
  )
}

export default Work
