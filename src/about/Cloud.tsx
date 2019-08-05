import React from 'react';

import './Cloud.scss';

export interface CloudProps {
    left: string;
    top: string;
}

const Cloud: React.FC<CloudProps> = props => {
    const { left, top } = props;
    return (
        <div className="cloud" style={{ left, top }}>
            <div>
                <span></span>
            </div>
        </div>
    );
};
export default Cloud;
