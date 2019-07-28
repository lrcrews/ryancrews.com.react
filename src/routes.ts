import About from './about/About';
import Disclosure from './disclosure/Disclosure';
import Home from './home/Home';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/disclosure',
        component: Disclosure,
    },
];
export default routes;
