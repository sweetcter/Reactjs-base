import { Navigate } from 'react-router-dom';

export const publicRoutes = [
    {
        path: '/',
        element: <div>Hello</div>,
        children: [],
    },
    {
        path: '*',
        element: <Navigate to={'/404'} />,
    },
];
