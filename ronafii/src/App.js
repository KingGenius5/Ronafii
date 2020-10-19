import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Home'

function App() {
  return (
    // BEM styling convention
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
