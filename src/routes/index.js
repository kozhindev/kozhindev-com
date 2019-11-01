import IndexPage from './IndexPage';
import ContactsPage from 'routes/ContactsPage';
import TechnologiesPage from 'routes/TechnologiesPage';
import ProjectsPage from 'routes/ProjectsPage';
import ProjectPage from 'routes/ProjectPage'

export const ROUTE_ROOT = 'root';
export const ROUTE_CONTACTS = 'contacts';
export const ROUTE_TECHNOLOGIES = 'technologies';
export const ROUTE_PROJECTS = 'projects';
export const ROUTE_PROJECTS_ITEM = 'projects_item';

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    label: __('KozhinDev'),
    items: {
        [ROUTE_PROJECTS]: {
            exact: true,
            path: '/projects',
            component: ProjectsPage,
            label: __('Проекты'),
            items: {
                [ROUTE_PROJECTS_ITEM]: {
                    path: '/projects/:id',
                    component: ProjectPage,
                },
            },
        },
        [ROUTE_TECHNOLOGIES]: {
            exact: true,
            path: '/technologies',
            component: TechnologiesPage,
            label: __('Технологиии'),
        },
        [ROUTE_CONTACTS]: {
            exact: true,
            path: '/contacts',
            component: ContactsPage,
            label: __('Контакты'),
        },
    }
};
