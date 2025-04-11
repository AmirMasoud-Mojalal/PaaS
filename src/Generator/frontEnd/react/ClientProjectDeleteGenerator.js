const { isPathExists, createFile } = require('../../util');
const { getRoutePathString, getRootRoutes } = require('../../ContentMapValidator');
const { getJpaByJpaName } = require('../../DomainConfig');

const {
  generateRoute,
  generateAction
} = require('./ClientProjectCommonStructureGenerator')

const ClientProjectDeleteGenerator = (applicationObject, ConfigObject) => {
  const componentPath = ConfigObject.getClientComponentPath();
  const objectName = applicationObject['appObjectId'];
  const backendUrl = ConfigObject.getBackendURI();

  const componentOwnPath = `${componentPath}\\/${objectName}`;
  const componentDeletePath = `${componentOwnPath}\\delete`;
  let injectedContent = ``
  let deleteActionBodyPath = ``
  let listPath = ``


  //  1) for each appObjectId get complete route path
  const routePathString = getRoutePathString(objectName);
  const [first, ...completeRoutePathArray] = routePathString.split('/');
  //  2) get direct parent route path
  const directParentRoutePath =
    completeRoutePathArray.length > 1
      ? completeRoutePathArray[completeRoutePathArray.length - 2]
      : '';


  const parentJpaName =
    directParentRoutePath.length > 1
      ? applicationObject.getJpaNameByAppObjectId(directParentRoutePath)
      : '';

  let deleteRouteBody = ``
  let deleteActionBody = ``

  let hasAnyValidDeleteMethod = false
  /********************************************************************************
*                        Jakarta Persistence API
********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['jpas'])?.map((jpaName) => {
    const result = getJpaByJpaName(jpaName, parentJpaName);
    const targetJpa = result['finalJpa'];

    hasAnyValidDeleteMethod = applicationObject.hasAnyValidDeleteMethod(jpaName)

    /********************************************************************************
   *                        component Delete Route.js
   ********************************************************************************/
    //   if (getRootRoutes().includes(jpaName)) {

    //     injectedContent = `import * as React from 'react';
    // import { action as ${objectName}DeleteAction } from './${objectName}DeleteAction';

    // export const ${objectName}DeleteRoute = {
    //   path: '${objectName}s/:${result['primaryKey']}/delete',
    //   element: <></>,
    //   action: ${objectName}DeleteAction,
    // };
    // `;

    //   } else {

    //     injectedContent = `import * as React from 'react';
    // import { action as ${objectName}DeleteAction } from './${objectName}DeleteAction';

    // export const ${objectName}DeleteRoute = {
    //   path: '${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/:${result['primaryKey']}/delete',
    //   element: <></>,
    //   action: ${objectName}DeleteAction,
    // };
    // `;

    //   }

    deleteRouteBody = generateRoute(
      jpaName,
      getRootRoutes().includes(jpaName),
      result['primaryKey'],
      directParentRoutePath,
      result['targetJpaParentPK'],
      'delete'
    )

    // deleteActionBodyPath += `${getRootRoutes().includes(jpaName) ? `/${jpaName}s/\${fakeAuthProvider['activeProfile']['${result['primaryKey']}']}` : `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s/\${params['${result['primaryKey']}']}`}`;
    // //  IMPORTANT: actually Root-Level-Route should be deleted via its profile and after deleting a Root-Level-Route, user will be routed to the Top-Level list
    // listPath += `${getRootRoutes().includes(jpaName) ? `/${jpaName}s` : `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s`}`;
    // // We decided NOT to let a Root-Level-Route to be DELETED in Top-Level list
    // // listPath += `${getRootRoutes().includes(jpaName) ? `/${jpaName}s/\${fakeAuthProvider['activeProfile']['${result['primaryKey']}']}` : `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s`}`;


    /********************************************************************************
 *                        component Delete Action.js
 ********************************************************************************/

    //   injectedContent = `import axios, { Axios } from 'axios';
    // import { redirect, useNavigate, useParams } from 'react-router-dom';
    // import { fakeAuthProvider } from '../../../auth';
    // import { sendRequest } from '../../../util/makeRequest';

    // export async function action({ params, request }) {
    //   try {
    //     const response = await sendRequest(
    //       \`${backendUrl}${deleteActionBodyPath}\`,
    //       'DELETE',
    //       null
    //     ).then(
    //       (response) => {
    //         console.log('response - 1');
    //         console.log(response);

    //         return redirect(\`${listPath}\`);
    //         console.log('response - 2 ');
    //       },
    //       (error) => {
    //         console.log('error-1');
    //         console.log(error);
    //         return redirect(\`/${listPath}\`);
    //       }
    //     );
    //     console.log('response');
    //     return redirect(\`${listPath}\`);
    //   } catch (error) {
    //     console.log('error-2');
    //     console.log(error);
    //     throw error;
    //   }
    // }
    // `;

    deleteActionBody = generateAction(
      jpaName,
      getRootRoutes().includes(jpaName),
      result['primaryKey'],
      result['virtualPKColumn'],
      result['pathVariableObject'],
      ConfigObject.getBackendURI(),
      directParentRoutePath,
      parentJpaName,
      result['targetJpaParentPK'],
      'delete'
    )


  })

  if (hasAnyValidDeleteMethod) {

    isPathExists(componentDeletePath);

    createFile(
      `${componentDeletePath}`,
      `${objectName}DeleteRoute.js`,
      deleteRouteBody
    );


    createFile(
      `${componentDeletePath}`,
      `${objectName}DeleteAction.js`,
      deleteActionBody
    );
  }
};
module.exports = ClientProjectDeleteGenerator;
