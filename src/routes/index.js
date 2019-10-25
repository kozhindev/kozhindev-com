import React from 'react';

import IndexPage from './IndexPage';

export const ROUTE_ROOT = 'root';

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    component: IndexPage,
    label: __('KozhinDev'),
};
