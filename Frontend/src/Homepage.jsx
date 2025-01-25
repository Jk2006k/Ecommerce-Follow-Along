import React from 'react';
import Card from './productCard';
import './Homepage.css'

const products = [
  { id: 1, name: 'Product 1', image: 'https://ae01.alicdn.com/kf/HTB1HFhxqMKTBuNkSne1q6yJoXXaI/New-Eyki-Men-Women-Business-Couple-Watch-Stainless-Steel-Case-Wrist-Watches-Luxury-Brand-Lovers-Watch.jpg ', price: 25 },
  { id: 2, name: 'Product 2', image: 'https://ae01.alicdn.com/kf/HTB1HFhxqMKTBuNkSne1q6yJoXXaI/New-Eyki-Men-Women-Business-Couple-Watch-Stainless-Steel-Case-Wrist-Watches-Luxury-Brand-Lovers-Watch.jpg ', price: 35 },
  { id: 3, name: 'Product 3', image: 'https://ae01.alicdn.com/kf/HTB1HFhxqMKTBuNkSne1q6yJoXXaI/New-Eyki-Men-Women-Business-Couple-Watch-Stainless-Steel-Case-Wrist-Watches-Luxury-Brand-Lovers-Watch.jpg ', price: 45 },
  { id: 4, name: 'Product 4', image: 'https://ae01.alicdn.com/kf/HTB1HFhxqMKTBuNkSne1q6yJoXXaI/New-Eyki-Men-Women-Business-Couple-Watch-Stainless-Steel-Case-Wrist-Watches-Luxury-Brand-Lovers-Watch.jpg ', price: 55 },
  
];

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Featured Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <Card
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
