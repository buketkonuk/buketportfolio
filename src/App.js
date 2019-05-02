import React from 'react';
import './App.css';
import HomePage from './HomePage.js';
import NavBar from './NavBar';
// import { Switch, Route, HashRouter as Router } from 'react-router-dom';


function App() {

  return (
    
      <div className="App">
      <NavBar/>
      <HomePage/>
      </div>
  );
}

export default App;
