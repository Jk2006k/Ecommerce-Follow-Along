import React from 'react';
import './productCard.css';

function Card({product,showActions, onDelete, onEdit , Onadd}) {
  console.log(product)
  return (
    <div className="card">
      <img src={`http://localhost:3000${product.imgUrl[0]}`} alt={product.name} className="card-image" />
      <div className="card-info">
        <h2 className="card-name">{product.name}</h2>
        <p className='card-description'>{product.description}</p>
        <p className="card-price">${product.price}</p>

        <div className="card-actions">
          {showActions ? (
            <>
              <button className="delete-button edit" onClick={() => onEdit(product._id)}>Edit</button>
              <button className="delete-button" onClick={() => onDelete(product._id)}>Delete</button>
            </>
          ) : (
            <button onClick={(e) => Onadd(product,e)}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
