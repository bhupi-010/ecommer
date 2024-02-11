import React from 'react';
import products from '../data/productsData';
import ProductItem from '../components/ProductItem';

function HomePage() {

  return (
    <div className="container mt-4">
      <h1>Products</h1>
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
