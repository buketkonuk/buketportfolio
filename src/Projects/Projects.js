import React from 'react';
// import { Link } from 'react-router-dom';
import alumni from "./alumni_project.png";
import npo from "./NPO_project.png";
import kodflix from "./Kodflix.png";
import "./Projects.css";

export default class Details extends React.Component {

    render() {
        return (
            <div>
                {/* <Link to="/" > Back to HomePage </Link> */}
                <h2>Web Development Projects</h2>
                <div className="container">

                    <div className="projectBox">
                        <div className="itemText">
                            <p className="projHeading">UNIVERSITY ALUMNI PAGE</p>
                        </div>
                        <div className="itemImage">
                            <a href="http://metuuk.com" target='_blank' rel="noopener noreferrer"><img src={alumni} alt="alumni page" /></a>
                        </div>
                        <h6>Responsive website deployed to GitHub pages for the Univerity Alumni Association</h6>
                    </div>
                    <div className="projectBox">
                        <div className="itemText">
                            <p className="projHeading">NON-PROFIT ORGANISATION WEBSITE</p>
                        </div>
                        <div className="itemImage">
                        <a href="http://arti1turkiye.org" target='_blank' rel="noopener noreferrer"><img src={npo} alt="npo page" /></a>
                        </div>
                        <h6>+1Turkiye Website managed by WordPress, updated and maintained by me</h6>
                    </div>
                    <div className="projectBox">
                        <div className="itemText">
                            <p className="projHeading">KODFLIX</p>
                        </div>
                        <div className="itemImage">
                        <a href="https://kodflix-buketkh.herokuapp.com/" target='_blank' rel="noopener noreferrer"><img src={kodflix} alt="npo page" /></a>
                        </div>
                        <h6>React.js application inspired by Netflix, deployed to Heroku</h6>
                    </div>



                </div>
            </div>
        );
    }
}
