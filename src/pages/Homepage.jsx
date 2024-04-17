import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-start mb-10">Products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
