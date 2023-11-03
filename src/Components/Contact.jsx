import React from 'react'
import '../Components-CSS/Contact.css'
const Contact = () => {
  const request = ()=>{
    alert("Your Request has been successfully proceeded")
  }
  return (
    <div id='contact'>
      <div className="contactmain container bg-primary text-light py-5">
      <span className='text-center'><h5>CONTACT ME</h5><h1>Request Free Consultancy</h1></span>
      <div className="allcont row justify-content-around ">
      <div className="contleft col-md-5 bg-light text-dark p-5 my-5">
      <span><h6 className=' fw-bolder'>Hotline 24/7</h6><h1>(+92) 302-4579819</h1></span>
      <div className="form">
      <h6><span className='fw-bolder'>Address:</span>485 Kashmir Block, Allama Iqbal Town, Lahore, Pakistan</h6>
      <h6><span className='fw-bolder'>Email:</span>hachohan12@gmail.com</h6>
      {/* <h5><span className='fw-bolder'>Address:</span>485 Kashmir Block, Allama Iqbal Town, Lahore, Pakistan</h5> */}
      <h6><span className='fw-bolder'>Work Hour:</span>Mon - Sat: 9:00 - 18:00</h6>
      </div>
      </div>
      <div className="contright col-md-6 my-5">
        <input className='rounded-2 py-2 w-50 px-4' type="text" placeholder='Name' />
        <input className='rounded-2 py-2 w-50 px-4' type="email" placeholder='Email' /><br />
        <input className='rounded-2 w-100 my-3 p-2 ' type="text" placeholder='How we can help you?' /><br />
        <textarea className='rounded-2 p-2 w-100 h-75 ' placeholder='Describe here!'></textarea>
        <input type="radio" />By submitting, I agree to the <span className='underline'>Terms & Conditons</span>
      </div>
      <button onClick={request} className="btn123 btn btn-dark my-5">
            Request Now
        </button>
      </div>
      </div>
    </div>
  )
}

export default Contact
