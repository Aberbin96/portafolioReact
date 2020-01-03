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
                <img src="/images/atancha.png" />
                <span>Atancha</span>
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/inti.png" />
                <span>Agroinfo</span>
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/inti.png" />
                <span>Inti API</span>
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year'>
                <hr />
                <span>2017</span>
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/default.png" />
                <span>Kromium</span>
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year'>
                <span>2018</span>
                <hr />
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/salvador.png" />
                <span>Xsalvador</span>
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/panaPanadero.png" />
                <span>PanaPanadero</span>
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/ilargento.png" />
                <span>Ilargento</span>
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/default.png" />
                <span>Mi Portafolio en Vue</span>
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year'>
                <hr />
                <span>2019</span>
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/tuOfertazo.png" />
                <span>TuOfertazo</span>
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/aldi.png" />
                <span>Aldi</span>
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/activeCity.png" />
                <span>Active City</span>
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/default.png" />
                <span>Dragoy</span>
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year'>
                <span>2020</span>
                <hr />
            </div>
            <div className='portfolio__timeline__item'>
                <img src="/images/default.png" />
                <span>Tu proyecto</span>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
