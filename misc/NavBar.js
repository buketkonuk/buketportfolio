import React from 'react';

export default function NavBar() {
    return (
        <div className="topnav">
            <a className="active" href="#about">About me</a>
            <a href="#news">Projects</a>
            <a href="#contact">Contact</a>
            <div className="topnav-right">
                <a href="#search">gitHub</a>
                <a href="#about">LinkedIn</a>
            </div>
        </div>
            );
        }
