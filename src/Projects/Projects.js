import React from 'react';
import { Link } from 'react-router-dom';
import alumni from "./alumni_project.png";
import npo from "./NPO_project.png";
import kodflix from "./Kodflix.png";
import "./Projects.css";

export default class Details extends React.Component {

    render() {
        return (
            <div>
                {/* <Link to="/" > Back to HomePage </Link> */}
                <h2>Projects I have completed</h2>
                <div className="container">
                    <div className="item">
                    <p className="projHeading">UNIVERSITY ALUMNI PAGE</p>
                    <a href="http://metuuk.com" target='_blank' rel="noopener noreferrer"><img src={alumni} alt="alumni page"/></a>
                    </div>
                    <div className="item">
                    <p className="projHeading">NON-PROFIT ORGANISATION WEBSITE</p>
                    <a href="http://arti1turkiye.org" target='_blank' rel="noopener noreferrer"><img src={npo} alt="npo page"/></a>
                    </div>
                    <div className="item">
                    <p className="projHeading">KODFLIX (Responsive React.js APPLICATION)</p>
                    <a href="https://kodflix-buketkh.herokuapp.com/" target='_blank' rel="noopener noreferrer"><img src={kodflix} alt="npo page"/></a>
                    </div>
                </div>
            </div>
        );
    }
}
