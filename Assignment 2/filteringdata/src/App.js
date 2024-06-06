import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    availability: ''
  });

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  useEffect(() => {
    let filtered = products;
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    if (filters.availability) {
      if (filters.availability === 'inStock') {
        filtered = filtered.filter(product => product.stock > 5);
      } else if (filters.availability === 'lowStock') {
        filtered = filtered.filter(product => product.stock > 0 && product.stock <= 5);
      }
    }
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
    setFilteredProducts(filtered);
  }, [filters, products]);

  return (
    <div className="app">
      <h1>Product List</h1>
      <Filter filters={filters} setFilters={setFilters} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
