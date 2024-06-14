import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';
import './Menu.css'; 

const Menu = ({ menuItems }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <span><img src={item.image} alt='images'/>{item.name} - ${item.price}</span>
          <button onClick={() => handleAddItem(item)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
