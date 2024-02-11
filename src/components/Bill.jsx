import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useUser } from '../context/UserContext';

const taxRate = 0.13;

const Bill = () => {
  const { cartItems } = useContext(ShopContext);
  const { userDetails } = useUser();

  const subtotal = Object.entries(cartItems).reduce((total, [id, [quantity, item]]) => total + item.price * quantity, 0);
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax;

  return (
    <div className="mt-3">
      <h4 className="text-start">Invoice</h4>
      {userDetails.name && (
        <div className="text-start">
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
        </div>
      )}
      <ul className="list-group">
        <li className="list-group-item">Subtotal: ${subtotal.toFixed(2)}</li>
        <li className="list-group-item">Tax (10%): ${tax.toFixed(2)}</li>
        <li className="list-group-item">Grand Total: ${grandTotal.toFixed(2)}</li>
      </ul>
    </div>
  );
};

export default Bill;
