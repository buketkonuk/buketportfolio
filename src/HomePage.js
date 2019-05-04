import React from 'react';
import Projects from "./Projects/Projects.js";
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Main from "./Main.js"
// import aboutImg from "./buket_deer01.jpg"

export default class Details extends React.Component {

    render() {
        return (
          <Router>
<div class="wrapper">
  <header class="page-header">
    <nav>
      <h2 class="logo">BUKET KONUK-HIRST</h2>
      <ul>
        <li>
          <a href="/">About me</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/buketkonuk/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/buketkonuk" target='_blank' rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
        <Link to='/projects'>Projects</Link>
        </li>
      </ul>
      <button class="cta-contact" ><a href="mailto:bukikir@gmail.com">Contact</a></button>
    </nav>
  </header>
  <Switch>
  <Route exact path="/" component={Main} />

<Route exact path="/Projects" component={Projects} />
</Switch>

  <footer class="page-footer">
    <small>© Copyright 2019. All rights reserved.</small>
    <ul>
      <li>
        <a href="https://twitter.com/KonukBuket" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/buketkonuk/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin-in"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/buketkonuk" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>
    
  </footer>
</div>
</Router>
        );
    }
}