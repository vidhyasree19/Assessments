import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../redux/actions';
import './BillItem.css';

const BillItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleIncrement = () => {
    dispatch(updateItem(item.id, item.quantity + 1));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateItem(item.id, item.quantity - 1));
    }
  };

  return (
    <tr className="bill-item">
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      </td>
      <td>${(item.price * item.quantity)}</td>
      <td>
        <button onClick={handleRemove}>Remove</button>
      </td>
    </tr>
  );
};

export default BillItem;
