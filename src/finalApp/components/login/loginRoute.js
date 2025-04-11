import * as React from 'react';

import Login, {
  action as loginAction,
  loader as loginLoader,
} from './loginComponent';

export const loginRoute = {
  path: 'login',
  element: <Login />,
  errorElement:<div>Error Occured!</div>,
  action: loginAction,
  loader: loginLoader,
};
