import React from 'react';

function Card(props) {
  return (
    <div className='card'>
        <div className='card__inner'>
            <div className='card__inner__back'>
                <span className='card__inner__back__image'>
                    <img src={props.imgBackground || props.img} alt="Agroinfo" />
                </span>
                <span className='card__inner__back__description'>
                    {(props.description !== '') && (
                        props.description
                    )}
                        {(props.link !== '') && (
                            <span className='card__inner__back__description__link'>
                                    <a href={props.link}>
                                        {props.linkName}
                                    </a>
                            </span>
                        )}
                    {(props.icons !== '') && (
                        <span className='card__inner__back__description__code'>
                            {props.icons.map(icon => 
                                icon
                            )}
                        </span>
                    )}
                </span>
            </div>
            <div className='card__inner__front'>
                <img src={props.img} alt={props.title} />
            </div>
        </div>
        <span className='card__text'>{props.title}</span>
    </div>
  );
}

export default Card;
