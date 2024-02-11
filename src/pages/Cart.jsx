import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Bill from "../components/Bill";

const Cart = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useContext(ShopContext);

  const handleChangeQuantity = (id, newQuantity) => {
    updateCartQuantity(id, newQuantity);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  }

  return (
    <div className="container mt-3">
      <h2 className="text-start">Shopping Cart</h2>
      <ul className="list-group">
        {Object.entries(cartItems).map(([id, data]) => (
          <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
              <img src={data[1].imageUrl} alt="" style={{width: 30, height: 30, marginRight: 5}}/>
              {data[1].name} (${data[1].price})
              </div>
            <div>
              <button className="btn btn-info btn-sm" onClick={() => handleChangeQuantity(id, data[0] - 1)}>-</button>
              <span className="mx-2">{data[0]}</span>
              <button className="btn btn-info btn-sm" onClick={() => handleChangeQuantity(id, data[0] + 1)}>+</button>
              <button className="btn btn-danger btn-sm ms-2" onClick={()=> handleRemoveFromCart(id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
        {<Bill></Bill>}
    </div>
  );
};

export default Cart;
