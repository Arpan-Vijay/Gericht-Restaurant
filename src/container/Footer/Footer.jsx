import React from 'react'
import './Footer.css';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">W 53rd st, New York, NY 10019, US</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>


        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
          <img src={images.spoon} alt="" className='spoon__img' style={{ marginTop: '15px' }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>


        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday: 08:00am .12:00am</p>
          <p className="p__opensans"> Saturday-Sunday: 07:00am -11 pm </p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2023 Greicht. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer

