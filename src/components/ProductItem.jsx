import React, {useContext} from 'react';
import {ShopContext} from '../context/ShopContext';
import {Link} from "react-router-dom";
function ProductItem({product}){
    const {addToCart} = useContext(ShopContext);
    const handleAddToCart = () => {
        addToCart(product);
    }
  return (
    <div className="card" style={{ width: '18rem' }}>
        <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} className="card-img-top" alt={product.name} />
        </Link>

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
