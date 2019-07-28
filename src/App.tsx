import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import routes from './routes';

import PageNotFound from './404/PageNotFound';

const App: React.FC = () => {
    return (
        <section>
            <header>site header</header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/disclosure">Disclosure</Link>
                </li>
                <li>
                    <Link to="/about/more">About More</Link>
                </li>
            </ul>
            <Switch>
                {routes.map((route, i) => (
                    <Route key={i} exact path={route.path} render={(props): JSX.Element => <route.component />} />
                ))}
                <Route component={PageNotFound} />
            </Switch>
            <footer>site footer</footer>
        </section>
    );
};

export default App;
