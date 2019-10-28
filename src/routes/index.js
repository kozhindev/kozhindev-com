import IndexPage from './IndexPage';
import ContactsPage from 'routes/ContactsPage';
import TechnologiesPage from 'routes/TechnologiesPage';

export const ROUTE_ROOT = 'root';
export const ROUTE_CONTACTS = 'contacts';
export const ROUTE_TECHNOLOGIES = 'technologies';

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    label: __('KozhinDev'),
    items: {
        [ROUTE_CONTACTS]: {
            exact: true,
            path: '/contacts',
            component: ContactsPage,
            label: __('Контакты'),
        },
        [ROUTE_TECHNOLOGIES]: {
            exact: true,
            path: '/technologies',
            component: TechnologiesPage,
            label: __('Технологиии'),
        },
    }
};
