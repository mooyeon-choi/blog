import IRoute from '../interfaces/route';
import AboutPage from '../pages/about';
import HomePage from '../pages/home';
import InteractivePage from '../pages/interactive';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/about',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
    {
        path: '/about/:number',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
    {
        path: '/interactive',
        name: 'Interactive Canvas',
        component: InteractivePage,
        exact: true
    },
    {
        path: '/interactive/:number',
        name: 'Interactive Canvas',
        component: InteractivePage,
        exact: true
    },
]

export default routes;