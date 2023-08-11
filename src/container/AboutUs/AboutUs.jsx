import React from 'react'
import {images} from '../../constants'

import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="Capital G" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_spoon" className='app__aboutus-spoon__img' />
          <p className='p__opensans'>Discover Geritcht, a harmonious fusion of global flavors and inviting ambiance. Experience a culinary journey that combines gourmet mastery with a relaxing atmosphere. From delectable dishes to a warm setting, Geritcht promises a remarkable dining experience that celebrates food, community, and elegance. Join us for an exceptional adventure in taste and togetherness.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">

          <img src={images.knife} alt="Big Knife" />

        </div>

        <div className="app__aboutus-content_history">
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'>Founded on a passion for culinary excellence, Geritcht has a story woven with flavors, traditions, and generations. Our journey began with a vision to create a haven where food not only tantalizes the palate but also carries the legacy of time-honored recipes. Passed down through generations, our recipes hold the essence of diverse cultures.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}


export default AboutUs
