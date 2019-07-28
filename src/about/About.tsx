import React from 'react';

import { Link } from 'react-router-dom';

import './About.scss';

const About: React.FC = () => {
    return (
        <div id="about-page">
            <h1>About Page</h1>
            <p>
                <Link to="/disclosure">visit disclosure page</Link>
            </p>
        </div>
    );
};
export default About;
