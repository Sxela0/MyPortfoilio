import React from 'react';
import './Card.css';
import Image from 'next/image';

const Card = ({
  title = 'Cerasa Redesign',
  meta = 'FRONT-END DEVELOPER - REDESIGN - MIDDLE 2015',
  description = `Cerasa is composed of an established team of Italian master craftsmen that produces and puts up bathrooms undisputed of exceptional "Made in Italy" quality. Cerasa...`,
  image = '/static/card.png',
  number = '01',
  order = 0,
}) => {
  return (
    <div className="card-container">
      <div className="inner-card-container">
        <div
          className="card-flex-container"
          style={{
            flexDirection: order === 1 ? 'row-reverse' : 'row',
          }}
        >
          <div className="left-side-container">
            <Image alt="" src={image} width={100} height={100} />
            <span>{number}</span>
          </div>
          <div className="right-side-container">
            <h3>{title}</h3>
            <span>{meta}</span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
