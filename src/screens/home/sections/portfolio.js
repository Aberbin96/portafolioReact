import React from 'react';

function Portfolio(props) {
  return (
    <div className='portfolio'>
        <span>{props.localization.works}</span>
        <div className='portfolio__timeline'>
            2017
        </div>
        <div className='portfolio__timeline'>
            2018
        </div>
        <div className='portfolio__timeline'>
            2019
        </div>
        <div className='portfolio__timeline'>
            2020
        </div>
    </div>
  );
}

export default Portfolio;
