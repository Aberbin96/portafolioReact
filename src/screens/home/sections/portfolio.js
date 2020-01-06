import React from 'react';

function Portfolio(props) {
  return (
    <section id="works" className='portfolio section'>
        <span className='portfolio__title'>
            {props.localization.worksTitle}
            <span className='portfolio__title--tiny'>
                {props.localization.worksDescription}
            </span>
        </span>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year portfolio__timeline__year--orange'>
                <span>2016</span>
                <hr />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--one-down'>
                <img src="/images/atancha.png" alt="Atancha" />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--one-up'>
                <img src="/images/inti.png" alt="Agroinfo" />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--two-rigth'>
                <img src="/images/inti.png" alt="Inti API" />
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year portfolio__timeline__year--aqua'>
                <hr />
                <span>2017</span>
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--two-center'>
                <img src="/images/default.png" alt="Kromium" />
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year portfolio__timeline__year--purple'>
                <span>2018</span>
                <hr />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--one-down'>
                <img src="/images/salvador.png" alt="XSalvador" />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--one-up'>
                <img src="/images/panaPanadero.png" alt="PanaPanadero" />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--two-rigth'>
                <img src="/images/ilargento.png" alt="Ilargento" />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--one-up'>
                <img src="/images/default.png" alt="Mi Portafolio en Vue" />
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year portfolio__timeline__year--pink'>
                <hr />
                <span>2019</span>
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--one-down'>
                <img src="/images/tuOfertazo.png" alt="TuOfertazo" />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--one-up'>
                <img src="/images/aldi.png" alt="Aldi" />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--one-down'>
                <img src="/images/activeCity.png" alt="Active City" />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--one-up'>
                <img src="/images/default.png" alt="Dragoy" />
            </div>
        </div>
        <div className='portfolio__timeline'>
            <div className='portfolio__timeline__year portfolio__timeline__year--yellow'>
                <span>2020</span>
                <hr />
            </div>
            <div className='portfolio__timeline__item portfolio__timeline__item--two-center'>
                <img src="/images/default.png" alt="default" />
                <span>Tu proyecto</span>
            </div>
        </div>
    </section>
  );
}

export default Portfolio;
