import React, { lazy, Suspense, useEffect } from 'react';
import {
    Route,
    Navigate,
    BrowserRouter as Router,
    Routes,
    useLocation,
} from 'react-router-dom';
import {
    Loader,
} from '@components';
import ErrorBoundary from './ErrorBoundary';
import {
    PRIVATE_ROUTE,
    PUBLIC_ROUTE,
} from '../route.constants';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('@pages/Home/Home'));

const publicRoutes = [
    {
        path: PUBLIC_ROUTE.LANDING,
        exact: true,
        component: lazy(() => import('@pages/Login/Login')),
    },
    {
        path: PUBLIC_ROUTE.LOGIN,
        exact: true,
        component: lazy(() => import('@pages/Login/Login')),
    },
    {
        path: PUBLIC_ROUTE.PAGE_404,
        component: lazy(() => import('@pages/404/404')),
    },
];

const PrivateRoute = ({ children, }) => {
    const isLoggedIn = useSelector((state) => state.auth.token);

    if (!isLoggedIn) {
        return (
            <Navigate
                to={PUBLIC_ROUTE.LOGIN}
                replace={true}
            />
        );
    }

    return children;
}

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    return null;
}

const AppRoutes = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Router>
                    <ScrollToTop />
                    <Routes>
                        {publicRoutes.map((route, index) => (
                            <Route
                                key={index}
                                exact={route.exact}
                                path={route.path}
                                element={<route.component />}
                            />
                        ))}
                        <Route
                            exact
                            path={`/${PRIVATE_ROUTE.HOME}/*`}
                            element={
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            }
                        />
                        <Route path='*' element={<Navigate to={PUBLIC_ROUTE.PAGE_404} />} />
                    </Routes>
                </Router>
            </Suspense>
        </ErrorBoundary>
    );
}

export default AppRoutes;