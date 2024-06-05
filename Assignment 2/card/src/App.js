import React from 'react';
import Card from './Components/Card';
import './App.css'
const App = () => {
  

  return (
    <div className="app">
      <h1>Card List</h1>
      <div className="card-list">
          <Card
            title='User Profile 1'
            description='This is a great product.'
            image='https://via.placeholder.com/300x200'
          />
          <Card
          title= 'Article 1'
          description= 'This is an interesting article.'
          image= 'https://via.placeholder.com/300x200'/>
          <Card
          title= 'Article 2'
          description= 'This is an interesting article.'
          image= 'https://via.placeholder.com/300x200'/>
          <Card
          title= 'Article 3'
          description= 'This is an interesting article.'
          image= 'https://via.placeholder.com/300x200'/>
          <Card
          title= 'Article 4'
          description= 'This is an interesting article.'
          image= 'https://via.placeholder.com/300x200'/>
          <Card
          title= 'Article 5'
          description= 'This is an interesting article.'
          image= 'https://via.placeholder.com/300x200'/>
          <Card
          title= 'Article 6'
          description= 'This is an interesting article.'
          image= 'https://via.placeholder.com/300x200'/>
          <Card
          title= 'Article 7'
          description= 'This is an interesting article.'
          image= 'https://via.placeholder.com/300x200'/>
          <Card
          title= 'Article 8'
          description= 'This is an interesting article.'
          image= 'https://via.placeholder.com/300x200'/>

      </div>
    </div>
  );
};

export default App;

