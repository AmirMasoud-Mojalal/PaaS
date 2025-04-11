import * as React from 'react';
import FirstForm from './request';

export const firstFormRoute = {
  path: 'requests',
  element: <div>Request!</div>,
  // element: <FirstForm />,
  // children: [
  //   { index: true, element: <div>Hello</div> },
  //   {
  //     path: ':tafCode',
  //     element: <div>show the specified request!</div>,
  //   },
  //   {
  //     path: ':tafCode/edit',
  //     element: <div>edit specified request!</div>,
  //   },
  //   {
  //     path: ':tafCode/delete',
  //     element: <div>delete specified request!</div>,
  //   },
  // ],
};
// module.exports = firstFormRoute;
