import React from 'react';
import { useSelector } from 'react-redux';
import BillItem from './BillItem';
import './Bill.css'; 
const Bill = () => {
  const items = useSelector((state) => state.items);

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bill-container">
      <h2>Bill</h2>
      <div className="bill-table-container">
        <table className="bill-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <BillItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Bill;
