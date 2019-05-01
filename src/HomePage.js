import React from 'react';
import { Link } from 'react-router-dom';
import logo from './buket_pic.jpg';

export default class Details extends React.Component {

    render() {
        return (
<div>
            <div className="topnav">
                <a className="active" href="#home">About me</a>
                <a href="#news">Projects</a>
                <a href="#contact">Contact</a>
                <div className="topnav-right">
                    <a href="#search">gitHub</a>
                    <a href="#about">LinkedIn</a>
                </div>
            </div>
            <section className="about">
                <h1>About me</h1>
            </section>
            <header className="App-header">
                <p>
                    Welcome to Buket Konuk-Hirst Portfolio Page
                    </p>
                <img src={logo} className="App-logo" alt="logo" />
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
            </div>
        );
    }
}