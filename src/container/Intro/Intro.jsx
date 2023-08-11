import React from 'react'

import './Intro.css';
import { meal } from '../../constants'
import { SubHeading } from '../../components';
import { images } from '../../constants'

const Intro = () => {
  return (
    <div className='app__intro flex__center section__padding' id='intro'>
      <div className="app__intro-title">
        <h1 className='headtext__cormorant'>Live Experience</h1>
      </div>

      <div className='app__video'>
        <video src={meal}
          // ref={vidRef}
          type='video/mp4'
          controls='false'
          loop
          muted

        />
      </div>

    </div>

  )
}

export default Intro
