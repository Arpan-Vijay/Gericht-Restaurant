import React from 'react'
import { images } from '../../constants'

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper_info">

        <SubHeading title='Chase the new flavour' />

        <h1 className='app__header-h1'>The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '1.5rem 0 2rem 0' }}>Discover Geritcht, a harmonious fusion of global flavors and inviting ambiance. Experience a culinary journey that combines gourmet mastery with a relaxing atmosphere.</p>

        {/* <button className='custom__button' type='button'>Explore button</button> */}
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="primary-image" />
      </div>
    </div>
  )
}

export default Header
