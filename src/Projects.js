import React from 'react';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

export default class Details extends React.Component {

    render() {
        return (
            <div>
                <Link to="/" > Back to HomePage </Link>
                <h2>Project Page</h2>
                <div className="container">
                    <div className="item">UNIVERSITY ALUMNI PAGE</div>
                    <div className="item">NON-PROFIT ORGANISATION WEBSITE</div>
                </div>
            </div>
        );
    }
}
