import React from 'react';
import { Link } from 'react-router-dom';
import alumni from "./alumni_project.png";
import npo from "./NPO_project.png";

export default class Details extends React.Component {

    render() {
        return (
            <div>
                <Link to="/" > Back to HomePage </Link>
                <h2>Project Page</h2>
                <div className="container">
                    <div className="item">
                    <p>UNIVERSITY ALUMNI PAGE</p>
                    <a href="http://metuuk.com" target='_blank' rel="noopener noreferrer"><img src={alumni} alt="alumni page"/></a>
                    </div>
                    <div className="item">
                    <p>NON-PROFIT ORGANISATION WEBSITE</p>
                    <a href="http://arti1turkiye.org" target='_blank' rel="noopener noreferrer"><img src={npo} alt="npo page"/></a>
                    </div>
                </div>
            </div>
        );
    }
}
