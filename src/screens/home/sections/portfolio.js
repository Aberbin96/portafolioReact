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
        <div className='portfolio__timeline portfolio__timeline--left'>
            <div className='portfolio__timeline__year portfolio__timeline__year--orange'>
                <span className='text'>2016</span>
                <hr />
            </div>
            <div className='portfolio__timeline__content'>
                <div className='portfolio__timeline__content__item'>
                    <div className='portfolio__timeline__content__item__inner'>
                        <div className='portfolio__timeline__content__item__inner__back'>
                            <span className='portfolio__timeline__item__content__image'></span>
                            <span className='portfolio__timeline__item__content__title'></span>
                            <span className='portfolio__timeline__item__content__description'></span>
                            <span className='portfolio__timeline__item__content__enlace'></span>
                            <span className='portfolio__timeline__item__content__example'></span>
                        </div>
                        <div className='portfolio__timeline__content__item__inner__front'>
                            <img src="/images/atancha.png" alt="Atancha" />
                            <span className='portfolio__timeline__content__item__text'>1. Atancha</span>
                        </div>
                    </div>
                </div>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/inti.png" alt="Agroinfo" />
                    <span className='portfolio__timeline__content__item__text'>2. Agroinfo</span>
                </div>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/inti.png" alt="Inti API" />
                    <span className='portfolio__timeline__content__item__text'>3. Inti API</span>
                </div>
            </div>
        </div>
        <div className='portfolio__timeline portfolio__timeline--rigth'>
            <div className='portfolio__timeline__year portfolio__timeline__year--aqua'>
                <span className='text'>2017</span>
                <hr />
            </div>
            <div className='portfolio__timeline__content'>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/default.png" alt="Kromium" />
                    <span className='portfolio__timeline__content__item__text'>4. Kromium</span>
                </div>
            </div>
        </div>
        <div className='portfolio__timeline portfolio__timeline--left'>
            <div className='portfolio__timeline__year portfolio__timeline__year--purple'>
                <span className='text'>2018</span>
                <hr />
            </div>
            <div className='portfolio__timeline__content'>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/salvador.png" alt="XSalvador" />
                    <span className='portfolio__timeline__content__item__text'>5. XSalvador</span>
                </div>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/panaPanadero.png" alt="PanaPanadero" />
                    <span className='portfolio__timeline__content__item__text'>6. PanaPanadero</span>
                </div>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/ilargento.png" alt="Ilargento" />
                    <span className='portfolio__timeline__content__item__text'>7. Ilargento</span>
                </div>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/default.png" alt={props.localization.PortfolioVueJS} />
                    <span className='portfolio__timeline__content__item__text'>8. {props.localization.PortfolioVueJS}</span>
                </div>
            </div>
        </div>
        <div className='portfolio__timeline portfolio__timeline--rigth'>
            <div className='portfolio__timeline__year portfolio__timeline__year--pink'>
                <span className='text'>2019</span>
                <hr />
            </div>
            <div className='portfolio__timeline__content'>

                <div className='portfolio__timeline__content__item'>
                    <img src="/images/tuOfertazo.png" alt="TuOfertazo" />
                    <span className='portfolio__timeline__content__item__text'>9. TuOfertazo</span>
                </div>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/aldi.png" alt="Aldi" />
                    <span className='portfolio__timeline__content__item__text'>10. Aldi</span>
                </div>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/activeCity.png" alt="Active City" />
                    <span className='portfolio__timeline__content__item__text'>11. Active City</span>
                </div>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/default.png" alt="Dragoy" />
                    <span className='portfolio__timeline__content__item__text'>12. Dragoy</span>
                </div>
            </div>
        </div>
        <div className='portfolio__timeline portfolio__timeline--left'>
            <div className='portfolio__timeline__year portfolio__timeline__year--yellow'>
                <span className='text'>2020</span>
                <hr />
            </div>
            <div className='portfolio__timeline__content'>
                <div className='portfolio__timeline__content__item'>
                    <img src="/images/comingSoon.png" alt="Dragoy" />
                    <span className='portfolio__timeline__content__item__text'>{props.localization.comingSoon}</span>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Portfolio;
