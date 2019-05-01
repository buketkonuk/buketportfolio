import React from 'react';
import './App.css';
import HomePage from './HomePage.js';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Projects from "./Projects.js";


function App() {

  return (
    
    // <Router basename="/buketkonuk.github.io/buketportfolio">
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={Projects}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
