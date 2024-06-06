
import React from 'react';
import DataFetcher from './DataFetcher';
import './App.css';

const App = () => {
  return (
    <div>
      
      <DataFetcher
        url="https://fakestoreapi.com/products"
        render={(data) => (
          <div>
            <center><h2>ABC Store</h2></center>
            <div className="card-container">
              {data.map((item) => (
                <div key={item.id} className="card">
                  <img src={item.image} alt={item.title} className="card-image" />
                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    
                    <p className="card-price">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default App;
