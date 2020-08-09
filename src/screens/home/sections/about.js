import React from 'react';

const About = (props) => {
  return (
    <div id="about" className='about section'>
      <img src="/images/atancha.png" alt="Face" />
      <span className='about__name'>{props.localization.thisIsMeFace}</span>
    </div>
  );
}

export default About;
