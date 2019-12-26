import React from 'react';
import { Link } from 'react-router-dom';

import './ListItem.scss';

export interface ListItemProps {
    createdAtTimestampInSeconds: number;
    link: string;
    rank: number;
    score: number;
    source: string;
    title: string;
    user: { link: string; name: string };
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
    const timeDisplay = (createdAtTimeStamp: number): string => {
        const nowInSeconds = Date.now() / 1000;
        const diffInSeconds = Math.floor(nowInSeconds - createdAtTimeStamp);
        const diffInHours = Math.floor(diffInSeconds / 3600);
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInHours < 1) {
            return 'just now';
        } else if (diffInDays < 1) {
            return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
        } else {
            return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
        }
    };

    return (
        <div className="list-item">
            <div>{props.rank}.</div>
            <div className="votes">
                <div>
                    <div className="up-vote"></div>
                </div>
                <div>
                    <div className="down-vote"></div>
                </div>
            </div>
            <section>
                <header>
                    <Link to={props.link}>{props.title}</Link>
                    <span>({props.source})</span>
                </header>
                <footer>
                    for <Link to={props.user.link}>{props.user.name}</Link>{' '}
                    {timeDisplay(props.createdAtTimestampInSeconds)} with score {props.score}
                </footer>
            </section>
        </div>
    );
};
export default ListItem;
