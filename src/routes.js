import {lazy} from 'react';

const Tasks = lazy(() => import('./components/Tasks/tasks'));

const Multivideos = lazy(() => import('./components/video/Multivideos'));

const routes = [
    {
        path: '/tasks',
        component: Tasks,
        exact: true
    },
    {
        path: '/multivideos',
        component: Multivideos,
        exact: true
    }
];