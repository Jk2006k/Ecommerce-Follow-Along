import React from 'react';
import './productCard.css'

function Card({ name, image, price }) {
  return (
    <div className="card">
      <img src={image} alt={image} className="card-image" />
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

export default Card;


