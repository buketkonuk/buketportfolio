import React from 'react';
import { Link } from 'react-router-dom';
import logo from './buket_pic.jpg';

export default class Details extends React.Component {

    render() {
        return (
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Buket Konuk-Hirst Personal Portfolio Page
                    </p>
                        <div>
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