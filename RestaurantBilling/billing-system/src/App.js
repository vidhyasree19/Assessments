// src/App.js
import React from 'react';
import Menu from './components/Menu';
import Bill from './components/Bill';

const menuItems = [
  {id: 1, name: 'Burger', price: 5.99 ,image:"./images/burger.jpeg"},
  {id: 2, name: 'Fries', price: 2.99,image:"./images/fries.jpeg" },
  {id: 3, name: 'Soda', price: 1.99,image:"./images/soda.jpeg" },
  {id :4,name:'Orange Juice',price:3.00,image:"./images/orange-juice.jpeg"},
  {id:5,name:'Pizza',price:5.00,image:"./images/pizza.jpeg"},
  {id:6,name:'Tandoori',price:5.00,image:'./images/tandoori.jpeg'},
  {id:7,name:'Chicken Fry',price:5.00,image:'./images/chickenFry.jpeg'},
  {id:8,name:'Coke',price:2.78,image:'./images/coke.jpeg'}
];

const App = () => (
  <div>
    <h1>Restaurant Billing System</h1>
    <Menu menuItems={menuItems} />
    <Bill />
  </div>
);

export default App;
