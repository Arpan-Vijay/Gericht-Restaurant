import React from 'react'
import {images} from '../../constants'
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef-image" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word"/>
        <h1 className="headtext__cormorant">What we Believe In</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">As the chef behind Geritcht,</p>
          </div>
          <p className="p__opensans">I'm thrilled to invite you to a world of exceptional flavors and culinary craftsmanship. Our restaurant is a canvas where tradition meets innovation, resulting in dishes that ignite the senses and evoke nostalgia. With a commitment to sourcing the finest ingredients and infusing them with passion, our menu is a testament to my love for creating unforgettable dining moments. At Geritcht, every plate carries the heart and soul of our kitchen, beckoning you to discover the remarkable symphony of tastes that awaits. Join us for a dining experience that is as memorable as it is delicious – a true celebration of food and community.</p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chef
