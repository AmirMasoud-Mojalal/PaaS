import * as React from 'react';
import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Link,
  // Outlet,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
// import Layout from './layout/layout';
// import { firstFormRoute } from './components/request/route';
// import { finalFromRoute } from './components/action/actionRoute';
// import { loginRoute } from './components/login/loginRoute';
// const firstFormRoute = require('./components/request/route').default;
// import '../css/bootstrap.rtl.min.css';
// import DynamicPage, {
//   loader as dynamicLoader,
// } from './components/dynamic/dynamic';
// import ErrorPage from './error-page';
// import Root from './components/routes/root.jsx';

console.log('*****');
const router = createBrowserRouter([
  {
    path: '/news',
    // element: <Root />,
    element: <div>Home Page</div>,
    // errorElement: <ErrorPage />,
  },
  // {
  //   ...loginRoute,
  // },
  // {
  //   path: '/logout',
  //   element: <div>Logout page</div>,
  //   errorElement: <div>Error Dashboard</div>,
  // },
  // {
  //   path: 'news/:contactId',
  //   element: <DynamicPage />,
  //   loader: dynamicLoader,
  // },
  // {
  //   path: 'news',
  //   element: <DynamicPage />,
  // },
  //   // {
  //   //   path: '/',
  //   //   element: <Layout />,
  //   //   children: [
  //   //     {
  //   //       index: true,
  //   //       element: <div>Indexed path!</div>,
  //   //     },
  //   //     // {
  //   //     //   element: <Layout />,
  //   //     //   children: [
  //   //     {
  //   //       path: 'new',
  //   //       element: <div>Profile new</div>,
  //   //     },

  //   //     // {
  //   //     //   path: ':tafCode/edit',
  //   //     //   element: <div>Profile edit</div>,
  //   //     // },
  //   //     //   ],
  //   //     // },
  //   //     // {
  //   //     //   ...firstFormRoute,
  //   //     // },
  //   //     // {
  //   //     //   ...finalFromRoute,
  //   //     // },
  //   //   ],
  //   // },

  //   // {

  //   // },
  //   //   ],
  //   // },
  //   // {
  //   //   path: '*',
  //   //   element: <div>No Match</div>,
  //   // },
  //   // {
  //   //   // path: '/mutualUnderstanding',
  //   //   element: <Layout />,
  //   //   children: [
  //   //     {
  //   //       index: true,
  //   //       element: <div>index_firstForm</div>,
  //   //     },
  //   //     {
  //   //       ...firstFormRoute,
  //   //     },
  //   //     {
  //   //       ...finalFromRoute,
  //   //     },
  //   //     {
  //   //       path: '*',
  //   //       element: <div>No Match</div>,
  //   //     },
  //   //   ],
  //   // },
]);

export const App = () => {
  console.log('hello!');
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>;
};
