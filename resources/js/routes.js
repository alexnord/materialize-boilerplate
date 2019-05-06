import React from 'react';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Typography = React.lazy(() => import('./pages/Theme/Typography'));
const Users = React.lazy(() => import('./pages/Users/Users'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/management',
    exact: true,
    name: 'Management',
    component: Typography,
  },
  {
    path: '/management/matters',
    name: 'Matters',
    component: Typography,
  },
  {
    path: '/users',
    exact: true,
    name: 'Users',
    component: Users,
  },
];

export default routes;
