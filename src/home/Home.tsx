import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from './ListItem';

import './Home.scss';

const posts = [
    {
        createdAtTimestampInSeconds: Date.now() / 1000,
        link: '/',
        score: 42,
        source: 'design.inspiration.com',
        title: 'Post title in big blue text.',
        user: { link: '/', name: 'categoryLink' },
    },
];

const Home: React.FC = () => {
    return (
        <div id="home-page">
            <main>
                <h1>Celebrating classic list sites</h1>
                <p>This design is a love-letter to old reddit and digg and the like.</p>
                <p>
                    (Wondering why? Check out the <Link to="/about">about</Link> page!)
                </p>
                <ul>
                    {posts.map((post, index) => {
                        return (
                            <li key={index}>
                                <ListItem {...post} rank={index + 1} />
                            </li>
                        );
                    })}
                </ul>
            </main>
        </div>
    );
};
export default Home;
