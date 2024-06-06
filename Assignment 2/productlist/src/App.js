import React from 'react';
import ProductList from './ProductList';
import './App.css';
const products = [
          { title:'User Profile 1',
          description:'This is a great product.',
          image:'https://via.placeholder.com/300x200'},
          {title: 'Article 1',
          description: 'This is an interesting article.',
          image: 'https://via.placeholder.com/300x200' },
          {title: 'Article 3',
          description: 'This is an interesting article.',
          image: 'https://via.placeholder.com/300x200'},
          {
          title: 'Article 4',
          description: 'This is an interesting article.',
          image: 'https://via.placeholder.com/300x200'},
          {
          title: 'Article 5',
          description: 'This is an interesting article.',
          image: 'https://via.placeholder.com/300x200'},
          {
          title: 'Article 6',
          description: 'This is an interesting article.',
          image: 'https://via.placeholder.com/300x200'},
          {
          title: 'Article 7',
          description: 'This is an interesting article.',
          image: 'https://via.placeholder.com/300x200'},
          {
          title: 'Article 8',
          description: 'This is an interesting article.',
          image: 'https://via.placeholder.com/300x200'}

];

const App = () => {
  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;