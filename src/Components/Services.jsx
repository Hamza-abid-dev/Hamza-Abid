import React from 'react'
import '../Components-CSS/Services.css'

const Services = () => {
  return (
    <div className='services'>
      <div className="header text-center">
        <h4 className='text-primary'>SERVICES</h4>
        <h1>Exploring My Development <span className='text-primary'>Skills</span></h1>
        <p>We transform your ideas into a distinctive web project that both inspires <br /> you and captivates your customers</p>
      </div>
      <section class="container pt-3 mb-3">
    {/* <h2 class="h3 block-title text-center">What we do<small>Whatever we do, we do with your end user in mind </small></h2> */}
    <div class="row pt-5 mt-30">
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a class="card" href="#about">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center"id='servicecard'><i class="fa fa-user fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Responsive Web Design</h3>
                    <p class="card-text text-sm">Passionate about crafting responsive web experiences that adapt seamlessly across devices. Combining design and development for user-friendly, cross-device access.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a class="card" href="#about">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center"id='servicecard'><i class="fa fa-user-circle-o fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Web &amp; UI Design</h3>
                    <p class="card-text text-sm">Passionate designer crafting responsive and user-centric UI experiences. Specializing in creating visually stunning and functional websites that adapt seamlessly across all devices.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a class="card" href="#about">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center"id='servicecard'><i class="fa fa-address-book fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Front-End Development</h3>
                    <p class="card-text text-sm">Passionate front-end web developer creating seamless user experiences with HTML, CSS, and JavaScript. Dedicated to crafting visually engaging and responsive websites.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
    </div>
</section>
    </div>
  )
}

export default Services
