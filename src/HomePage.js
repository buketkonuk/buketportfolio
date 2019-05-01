import React from 'react';
import { Link } from 'react-router-dom';
import logo from './buket_pic.jpg';

export default class Details extends React.Component {

    render() {
        return (
            <header className="App-header">
                <div class="topnav">
                    <a class="active" href="#home">About me</a>
                    <a href="#news">Projects</a>
                    <a href="#contact">Contact</a>
                    <div class="topnav-right">
                        <a href="#search">gitHub</a>
                        <a href="#about">LinkedIn</a>
                    </div>
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Buket Konuk-Hirst Portfolio Page
                    </p>
                <div className="navigation">
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/projects'>Projects</Link></div>
                    <div>
                        <a href="https://github.com/buketkonuk" target='_blank' rel="noopener noreferrer">
                            gitHub
                                </a>
                    </div>
                    <div><Link to='/contact'>Contact</Link></div>
                </div>
            </header>
        );
    }
}