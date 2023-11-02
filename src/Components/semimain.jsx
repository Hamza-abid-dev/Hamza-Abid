import React from 'react'
import html from '../Assets/imgs/html.png'
import Css from '../Assets/imgs/css.png'
import Boostrap from '../Assets/imgs/boostrap.png'
import Java from '../Assets/imgs/java.png'
import Reacct from '../Assets/imgs/react.png'
import '../Components-CSS/Semimain.css'

const semimain = () => {
  return (
    <div>
      <div className="exp d-flex justify-content-around text-center container">
      <h3><span><img className='my-3' src={html} width={"50px"} alt=""/></span><br /> HTML</h3>
      <h3><span><img className='my-2' src={Css} width={"65"} height={"65px"} alt=""/></span><br /> CSS</h3>
      <h3><span><img src={Boostrap} width={"80px"} alt=''/></span><br />&nbsp;BOOSTRAP</h3>
      <h3><span><img  className='my-3' src={Java} width={"50px"} alt=''/></span><br />JAVASCRIPT</h3>
      <h3><span><img  id='about' className='my-3' src={Reacct} width={"50px"} alt=''/></span><br />&nbsp;REACT JS</h3>
      </div>
    </div>
  )
}

export default semimain
