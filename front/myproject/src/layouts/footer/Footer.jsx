import React from 'react'
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.footer}>
       <div className={style.footer_sec1}>
        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
        <input type="text" placeholder='Enter your email'/>
       </div>

       <div className={style.footer_sec2}>
        <h1>About</h1>
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contacts</li>
        </ul>
       </div>

       <div className={style.footer_sec3}>
        <h1>Contact</h1>
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contacts</li>
        </ul></div>

       <div className={style.footer_sec4}>
        <h1>Follow us</h1>
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contacts</li>
        </ul></div>

    </div>
  )
}

export default Footer