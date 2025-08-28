/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Splash from 'components/loader/Splash';
import PageLoader from 'components/loader/PageLoader';
import paths, { rootPaths } from './paths';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Dashboard = lazy(() => import('pages/dashboard'));
const AnalyticsPage = lazy(() => import('pages/AnalyticsPage'));
const Loans = lazy(()=> import('pages/Loans'));
const Borrowers = lazy(()=> import('pages/Borrowers'));
const NotificationPage = lazy(()=> import('pages/Notifications'));
const Settings = lazy(()=> import('pages/Settings'));
const InternetConnectivity = lazy(()=> import('pages/Offline'))
const SignUp = lazy(() => import('pages/authentication/SignUp'));
const Locked= lazy(() => import('pages/authentication/Locked'));
const Error404 = lazy(() => import('pages/errors/Error404'));

const routes = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: rootPaths.pageRoot,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.analytics,
            index: true,
            element: <AnalyticsPage />,
          },
        ],
      },
      {
        path: rootPaths.pageRoot,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.loans,
            index: true,
            element: <Loans />,
          },
        ],
      },
      {
        path: rootPaths.pageRoot,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.borrowers,
            index: true,
            element: <Borrowers />,
          },
        ],
      },
      {
        path: rootPaths.pageRoot,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.notification,
            index: true,
            element: <NotificationPage />,
          },
        ],
      },
      {
        path: rootPaths.pageRoot,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.settings,
            index: true,
            element: <Settings />,
          },
        ],
      },
      {
        path: rootPaths.pageRoot,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: paths.networkError,
            index: true,
            element: <InternetConnectivity />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: (
          <Suspense fallback={<Splash />}>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            path: paths.signup,
            element: (
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            ),
          },
          {
            path: paths.locked,
            element: <Locked />,
          },
        ],
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/' });

export default router;
