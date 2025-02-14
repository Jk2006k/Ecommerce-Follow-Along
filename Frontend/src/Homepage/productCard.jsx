import React from 'react';
import './productCard.css';

function Card({ id, name, description, image, price, showActions, onDelete, onEdit }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className='card-description'>{description}</p>
        <p className="card-price">${price}</p>

        <div className="card-actions">
          {showActions ? (
            <>
              <button className="delete-button edit" onClick={() => onEdit(id)}>Edit</button>
              <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
            </>
          ) : (
            <button className='addToCart'>Add To Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
