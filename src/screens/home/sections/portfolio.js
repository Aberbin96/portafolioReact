import React from 'react';

function Portfolio(props) {
  return (
    <div className='portfolio section'>
        <span className='portfolio__title'>{props.localization.worksTitle}</span>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year'>
                <span>2016</span>
                <hr />
            </div>
            <div className='portfolio__timeline__item'>
                <span>Atancha</span>
            </div>
            <div className='portfolio__timeline__item'>
                <span>Agroinfo</span>
            </div>
            <div className='portfolio__timeline__item'>
                <span>Inti API</span>
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year'>
                <hr />
                <span>2017</span>
            </div>
            <div className='portfolio__timeline__item'>
                <span>Kromium</span>
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year'>
                <span>2018</span>
                <hr />
            </div>
            <div className='portfolio__timeline__item'>
                <span>Xsalvador</span>
            </div>
            <div className='portfolio__timeline__item'>
                <span>PanaPanadero</span>
            </div>
            <div className='portfolio__timeline__item'>
                <span>Ilargento</span>
            </div>
            <div className='portfolio__timeline__item'>
                <span>Mi Portafolio en Vue</span>
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year'>
                <hr />
                <span>2019</span>
            </div>
            <div className='portfolio__timeline__item'>
                <span>TuOfertazo</span>
            </div>
            <div className='portfolio__timeline__item'>
                <span>Aldi</span>
            </div>
            <div className='portfolio__timeline__item'>
                <span>Active City</span>
            </div>
            <div className='portfolio__timeline__item'>
                <span>Dragoy</span>
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year'>
                <span>2020</span>
                <hr />
            </div>
            <div className='portfolio__timeline__item'>
                <span>Tu proyecto</span>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
