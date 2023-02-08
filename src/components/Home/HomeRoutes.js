import React, { lazy, Suspense } from 'react';
import {
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import {
    Loader,
} from '@components';
import { PRIVATE_ROUTE } from '../../route.constants';

const {
    HOME,
    DASHBOARD,
    USERS,
} = PRIVATE_ROUTE;

const routes = [
    {
        path: DASHBOARD,
        component: lazy(() => import("@components/Dashboard/Dashboard")),
        exact: true,
    },
    {
        path: `${USERS}/special`,
        component: lazy(() => import("@components/Users/Users")),
        exact: true,
    },
    {
        path: `${USERS}/normal`,
        component: lazy(() => import("@components/Users/Users")),
        exact: true,
    },
];

const HomeRoutes = () => {

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {routes.map((route, idx) => (
                    <Route
                        key={idx}
                        exact={route.exact}
                        path={`${route.path}/*`}
                        element={<route.component />}
                    />
                ))}
                <Route
                    exact
                    path='*'
                    element={
                        <Navigate
                            to={`/${HOME}/${DASHBOARD}`}
                        />
                    }
                />
            </Routes>
        </Suspense>
    );
}

export default HomeRoutes;