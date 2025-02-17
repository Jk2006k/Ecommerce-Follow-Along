import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import './ProductView.css';

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/forms/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      await axios.post('http://localhost:3000/cart/add', {
        name: product.name,
        price: product.price,
        quantity,
        image: product.imgUrl[currentImageIndex]
      });
      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % product.imgUrl.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + product.imgUrl.length) % product.imgUrl.length
    );
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="topper">
        <h1 className="Heading">Watch Loft</h1>  
        <div className='nav'><Navbar/></div>
      </div>
      <br />
      <div className="product-view">
        <h1>{product.name}</h1>
        <div className="image-slider">
          {product.imgUrl && product.imgUrl.length > 1 && (
            <button className="prev-btn" onClick={prevImage}>&#10094;</button>
          )}
          <img src={`http://localhost:3000${product.imgUrl[currentImageIndex]}`} alt={product.name} />
          {product.imgUrl && product.imgUrl.length > 1 && (
            <button className="next-btn" onClick={nextImage}>&#10095;</button>
          )}
        </div>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <div className="quantity-selector">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <button className='add' onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductView;
