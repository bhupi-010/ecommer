import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/productsData';
import { ShopContext} from "../context/ShopContext";

function ProductDetail() {
    const { addToCart } = useContext(ShopContext);
  const {productID} = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const productFound = products.find(product => product.id.toString() === productID)
    setProduct(productFound);
  }, [productID]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleQuantityChange = (e) => {
      setQuantity(parseInt(e.target.value))
  }
  const handleAddToCart = () => {
      console.log(product, quantity);
        addToCart(product, quantity);
  }

  return (
      <div className="container mt-3">
          <div className="row">
              <div className="col-md-6">
                  <img src={product.imageUrl} alt={product.name} className="img-fluid"/>
              </div>
              <div className="col-md-6">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <div className="mb-3">
                      <label htmlFor="quantity" className="form-label">Quantity</label>
                      <input
                          type="number"
                          className="form-control"
                          id="quantity"
                          value={quantity}
                          onChange={handleQuantityChange}
                      />
                  </div>
                  <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
              </div>
          </div>
      </div>
  );
}

export default ProductDetail;
