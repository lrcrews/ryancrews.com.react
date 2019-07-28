import React from 'react';

import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>
                <Link to="/disclosure">visit disclosure page</Link>
            </p>
        </div>
    );
};
export default About;
