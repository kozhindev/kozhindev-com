import IndexPage from './IndexPage';
import ContactPage from 'routes/ContactPage';

export const ROUTE_ROOT = 'root';
export const ROUTE_CONTACT = 'contact';

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    label: __('KozhinDev'),
    items: {
        [ROUTE_CONTACT]: {
            exact: true,
            path: '/contact',
            component: ContactPage,
            label: __('Контакты'),
        }
    }
};
