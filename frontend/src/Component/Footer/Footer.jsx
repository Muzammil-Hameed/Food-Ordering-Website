import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt='' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla tenetur asperiores illo. Voluptatibus laboriosam sint fuga, cupiditate hic harum ipsa soluta! Culpa itaque ullam excepturi, perspiciatis voluptatem perferendis veniam.</p>
           <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
      </div>
      <div className='footer-content-right'>
             <h2>Get In Touch</h2>
             <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
             </ul>
      </div>
      </div>
      <hr />
      <p className='footer-copy-right'>Copyright 2024 Tomato.com - All rights reserved</p>
    </div>
  )
}

export default Footer
