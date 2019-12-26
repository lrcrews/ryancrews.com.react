import React from 'react';
import { Link } from 'react-router-dom';

import './SiteHeader.scss';

const SiteHeader: React.FC = props => {
    return (
        <div id="site-header">
            <Link to="/">ryancrews.com</Link>
            <div>
                <Link to="/about">about</Link> | <Link to="/disclosure">disclosure</Link>
            </div>
        </div>
    );
};
export default SiteHeader;
