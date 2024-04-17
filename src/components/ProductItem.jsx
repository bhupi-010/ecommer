import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useUser } from '../context/UserContext';
import { Link, useNavigate } from "react-router-dom";

function ProductItem({ product }) {
  const { addToCart } = useContext(ShopContext);
  const { authenticated } = useUser();
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!authenticated) {
      navigate("/login"); 
    } else {
      addToCart(product);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }

  return (
    <div className="card product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="card-img-top product-image" alt={product.name} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">Title: {product.title}</h5>
        <p className="card-text description">Description: {product.description.substring(0, 50)}{product.description.length > 50 ? '...' : ''}</p>
        <p className="card-text">Price: ${product.price}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
      </div>
      {showAlert && (
        <div className="alert alert-success" role="alert" style={{ position: 'fixed', top: '50px', right: '10px', zIndex: '9999' }}>
          Product added to cart!
        </div>
      )}
    </div>
  );
}

export default ProductItem;
