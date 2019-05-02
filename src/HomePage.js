import React from 'react';
import aboutImg from "./buket_deer01.jpg"

export default class Details extends React.Component {

    render() {
        return (
<div class="wrapper">
  <header class="page-header">
    <nav>
      <h2 class="logo">BUKET KONUK-HIRST</h2>
      <ul>
        <li>
          <a href="">About me</a>
        </li>
        <li>
          <a href="">LinkedIn</a>
        </li>
        <li>
          <a href="">GitHub</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
      <button class="cta-contact">Contact</button>
    </nav>
  </header>
  <main class="page-main">
    <div>
      <h1>Web Developer</h1>
      <p>welcome to my personal page, I am a web Developer from London, specialising in JavaScript and React.js</p>
      <p>Have a look at my Projects portfolio</p>
    </div>
  </main>
  <footer class="page-footer">
    <small>© Copyright 2019. All rights reserved.</small>
    <ul>
      <li>
        <a href="" target="_blank">
          <i class="icon ion-logo-facebook"></i>
        </a>
      </li>
      <li>
        <a href="" target="_blank">
          <i class="icon ion-logo-twitter"></i>
        </a>
      </li>
      <li>
        <a href="" target="_blank">
          <i class="icon ion-logo-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="" target="_blank">
          <i class="icon ion-logo-github"></i>
        </a>
      </li>
    </ul>
    
  </footer>
</div>
        );
    }
}