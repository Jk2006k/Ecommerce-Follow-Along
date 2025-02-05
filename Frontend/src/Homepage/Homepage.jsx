import React ,{useEffect,useState}from 'react';
import Card from './productCard';
import './Homepage.css'

const products = [
  { id: 1, name: 'Product 1', image: 'https://ae01.alicdn.com/kf/HTB1HFhxqMKTBuNkSne1q6yJoXXaI/New-Eyki-Men-Women-Business-Couple-Watch-Stainless-Steel-Case-Wrist-Watches-Luxury-Brand-Lovers-Watch.jpg ', price: 25 },
  { id: 2, name: 'Product 2', image: 'https://ae01.alicdn.com/kf/HTB1HFhxqMKTBuNkSne1q6yJoXXaI/New-Eyki-Men-Women-Business-Couple-Watch-Stainless-Steel-Case-Wrist-Watches-Luxury-Brand-Lovers-Watch.jpg ', price: 35 },
  { id: 3, name: 'Product 3', image: 'https://ae01.alicdn.com/kf/HTB1HFhxqMKTBuNkSne1q6yJoXXaI/New-Eyki-Men-Women-Business-Couple-Watch-Stainless-Steel-Case-Wrist-Watches-Luxury-Brand-Lovers-Watch.jpg ', price: 45 },
  { id: 4, name: 'Product 4', image: 'https://ae01.alicdn.com/kf/HTB1HFhxqMKTBuNkSne1q6yJoXXaI/New-Eyki-Men-Women-Business-Couple-Watch-Stainless-Steel-Case-Wrist-Watches-Luxury-Brand-Lovers-Watch.jpg ', price: 55 },
  
];

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/forms/get');
        const data = await response.json();
        setProducts(data);
        console.log(products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="homepage">
      <h1>Featured Products</h1>
      <div className="product-grid">
      {Array.isArray(products) && products.map(product => (
          <Card
            key={product._id}
            name={product.name}
            image={product.imgUrl}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
