import React from 'react';
import logo from './buket_pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Buket Konuk-Hirst Personal Portfolio Page.
        </p>
        <div>
          <div>Home</div>
          <div>Projects</div>
          <div>gitHub</div>
          <div>Contact</div>
        </div>
      </header>
    </div>
  );
}

export default App;
