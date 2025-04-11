const { createFile } = require('../../util');

const ClientProjectRouterGenerator = (feedContent, ConfigObject) => {
  const sourcePath = ConfigObject.getClientSourcePath();

  let injectedContent = ``;

  const listOfObjects = feedContent.listOfObjects();
  let listOfObjectImports = ``;
  let listOfObjectRoutes = ``;
  Object.keys(listOfObjects).map((objectName) => {
    listOfObjectImports += `
import { ${objectName}Route } from './components/${objectName}';`;
    listOfObjectRoutes += `
      ...${objectName}Route,`;
  });

  /********************************************************************************
   *                        App.jsx file
   ********************************************************************************/
  injectedContent = `import * as React from 'react';
import {
  Form,
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
  useActionData,
  useFetcher,
  useLocation,
  useNavigation,
  // useNavigate,
  useRouteLoaderData,
  Navigate,
} from 'react-router-dom';
import { fakeAuthProvider } from './auth';
import Layout from './components/layout';

import ErrorPage from './components/error/globalErrorPage';
import { route as publicRoute } from './components/public';
import { route as loginRoute } from './components/login';
import { route as dashboardRoute } from './components/dashboard';
import { route as logoutRoute } from './components/logout';
import { userRoute } from './components/user';
${listOfObjectImports}

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader() {
      // Our root route always provides the user, if logged in
      return { 
        user: fakeAuthProvider.username,
        isAuthenticated: fakeAuthProvider.isAuthenticated,
      };
    },
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   index: true,
      //   Component: PublicPage,
      // },
      publicRoute,
      loginRoute,
      dashboardRoute,
      ...userRoute,${listOfObjectRoutes}
      logoutRoute,
      // {
        // path: '/logout',
        // loader() {
          // let navigate = useNavigate();
          // navigate('/');
          // fakeAuthProvider.signout();
          // return {};
          // redirect('/')
        // },

        // action: async () => {
        //   // We signout in a "resource route" that we can hit from a fetcher.Form
        //   console.log('from logout');
        //   await fakeAuthProvider.signout();
        //   return redirect('/');
        // },
      // },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}`;
  createFile(`${sourcePath}`, `${'App'}.jsx`, injectedContent);
};
module.exports = ClientProjectRouterGenerator;
