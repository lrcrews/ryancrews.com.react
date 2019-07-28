import React from 'react';

import { Link } from 'react-router-dom';

import './About.scss';

const About: React.FC = () => {
    return (
        <div id="about-page">
            <h1>About Page</h1>
            <h2>the page of aboutness</h2>
            <h3 className="font-section-header">
                You may be wondering, "How does he come up with all these page designs?"
            </h3>
            <p>
                Some paragraph content here. I'm merely an engineer who happens to enjoy design, so when I see a design
                I like I want to see if I can recreate it (or something similar). For instance, this page is based on
                the level "map" screen of a fantastic came called{' '}
                <a href="https://www.dots.co/twodots/" target="_blank">
                    Two Dots
                </a>
            </p>
            <p>
                <Link to="/disclosure">visit disclosure page</Link>
            </p>
        </div>
    );
};
export default About;
