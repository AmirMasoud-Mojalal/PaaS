const { isPathExists, createFile, getGridLayoutFields, firstLetterCaptalize } = require('../../util');

const { getJpaByJpaName, getPrimaryKeyByJpaName, getVirtualPKColumn } = require('../../DomainConfig');

const { getRoutePathString, getRootRoutes, isRootRoute } = require('../../ContentMapValidator');

const { generateBreadCrumbPathObject } = require('./ClientProjectCommonStructureGenerator')

const ClientProjectListGenerator = (applicationObject, ConfigObject) => {
  const componentPath = ConfigObject.getClientComponentPath();
  const backendUrl = ConfigObject.getBackendURI();
  const gridPath = ConfigObject.getClientComponentGridPath();

  const breadcrumbPath = ConfigObject.getClientComponentBreadCrumbPath();

  const objectName = applicationObject['appObjectId'];
  const className = applicationObject['appObjectIdClass'];
  const singularLable = applicationObject['singularLable']

  const componentOwnPath = `${componentPath}\\/${objectName}`;
  const componentListPath = `${componentOwnPath}\\list`;

  let listActionBody = ``;

  //  1) for each appObjectId get complete route path
  const routePathString = getRoutePathString(objectName);
  // console.log(routePathString)
  const [first, ...completeRoutePathArray] = routePathString.split('/');
  //  2) get direct parent route path
  const directParentRoutePath =
    completeRoutePathArray.length > 1
      ? completeRoutePathArray[completeRoutePathArray.length - 2]
      : '';
  //  3) get all parents route path
  // const allParentRoutes =
  //   completeRoutePathArray.length > 1
  //     ? completeRoutePathArray.slice(0, completeRoutePathArray.length - 1)
  //     : [];


  //  4) for each parent route path, generate key:value e.g. name:path
  const completeRoutePathString = generateBreadCrumbPathObject(applicationObject, 'list');

  const parentJpaName =
    directParentRoutePath.length > 1
      ? applicationObject.getJpaNameByAppObjectId(directParentRoutePath)
      : '';

  // if (objectName == 'tafahomInformation') {
  // console.log(applicationObject)
  // console.log(parentJpaName);
  // console.log(completeRoutePathString);
  // }

  /********************************************************************************
   *                        component ListAction.js
   ********************************************************************************/

  listActionBody = `import { fakeAuthProvider } from '../../../auth';
  import axios, { Axios } from 'axios';
  import { redirect } from 'react-router-dom';
  
  export async function action({ request }) {
    let formData = await request.formData();
    // let username = formData.get('username');
    // let password = formData.get('password');
  
    // Validate our form inputs and return validation errors via useActionData()
    // if (!username) {
    //   return {
    //     error: 'You must provide a username to log in',
    //   };
    // }
  
    // return await axios
    //   .post('http://localhost:8080/api/v1/...', {
    //     email: username,
    //     password: password,
    //   })
    //   .then(
    //     (response) => {
    //       let redirectTo = formData.get('redirectTo');
    //       fakeAuthProvider.signin(username);
    //       ...
    //       return redirect(redirectTo || '/...');
    //     },
    //     (error) => {
    //       return redirect('/...');
    //     }
    //   );
  }
  `;


  let listRouteBody = ``


  let listLoaderImport = `import axios from 'axios';
  import { fakeAuthProvider } from '../../../auth';
  import { redirect, useSearchParams } from 'react-router-dom';
  import { sendRequest } from '../../../util/makeRequest';`
  let listLoaderBody = `

  export async function loader({ request, params }) {
    // If the user is not logged in and tries to access \`/protected\`, we redirect
    // them to \`/login\` with a \`from\` parameter that allows login to redirect back
    // to this page upon successful authentication
    // const a = useSearchParams.get('page');
    // console.log(a);
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
  
    if (!fakeAuthProvider.isAuthenticated) {
      let params = new URLSearchParams();
      params.set('from', new URL(request.url).pathname);
      return redirect('/login?' + params.toString());
    }`
  let listLoaderBodyResponse = `
  try {
    `
  let listLoaderBodyClose = `  return { data: response.data, activeProfile: fakeAuthProvider.activeProfile };
} catch (err) {
  throw err
  //  return null;
  }
}`

  let listComponentContent = ``

  let hasAnyValidListMethod = false
  /********************************************************************************
   *                        Jakarta Persistence API
  ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['jpas']).map((jpaName) => {

    hasAnyValidListMethod = applicationObject.hasAnyValidListMethod(jpaName)

    const result = getJpaByJpaName(jpaName, parentJpaName);
    if (jpaName == 'eghdamat') {
      // if (jpaName == 'account') {
      // console.log(result);
      // console.log(applicationObject.hasAnyValidCreateMethod(jpaName))
      // console.log(applicationObject.hasAnyValidReadMethod(jpaName))
      // console.log(applicationObject.hasAnyValidUpdateMethod(jpaName))
      // console.log(applicationObject.hasAnyValidDeleteMethod(jpaName))
    }

    /********************************************************************************
    *                        component ListRoute.js
    ********************************************************************************/
    if (getRootRoutes().includes(jpaName)) {
      listRouteBody += `import * as React from 'react';

      import ${className}List from './${objectName}List';
      import { loader as ${objectName}ListLoader } from './${objectName}ListLoader';
      // import { action as ${objectName}ListAction } from './${objectName}ListAction';
      
      export const ${objectName}ListAllRoute = {
        path: '${objectName}s',
        element: <${className}List />,
        loader: ${objectName}ListLoader,
      };
    
      export const ${objectName}ListRoute = {
        path: '${objectName}s/:${result['primaryKey']}',
        element: <${className}List />,
        loader: ${objectName}ListLoader,
      };
      `;
    } else {
      // if (jpaName == 'eghdamat') {
      //   console.log(result);
      // }

      listRouteBody += `import * as React from 'react';

      import ${className}List from './${objectName}List';
      import { loader as ${objectName}ListLoader } from './${objectName}ListLoader';
      // import { action as ${objectName}ListAction } from './${objectName}ListAction';
      
      export const ${objectName}ListAllRoute = {
        path: '${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s',
        element: <${className}List />,
        loader: ${objectName}ListLoader,
      };
    
      // export const \${objectName}ListRoute = {
      //   path: '\${directParentRoutePath}s/:\${result['targetJpaParentPK']}/\${objectName}s/:\${result['virtualPKColumn']['title']}',
      //   element: <\${className}List />,
      //   loader: \${objectName}ListLoader,
      // };
      `;
    }

    // listRoutePath += `${isRootRoute(jpaName)
    //   ?
    //   `/${objectName}s/\${fakeAuthProvider['activeProfile']['${result['primaryKey']}']}`
    //   :
    //   `/${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/\${fakeAuthProvider['activeProfile']['${result['primaryKey']}']}`}`

    // if(jpaName == 'eghdamat'){
    //   console.log(result);
    // }
    /********************************************************************************
     *                        component ListLoader.js
     ********************************************************************************/
    // let isRootRoute = ``
    // \`${backendUrl}/${objectName}s\${Object.keys(params).length == 0 ? '' : \`/\${fakeAuthProvider['activeProfile']['${result['primaryKey']}']}\`}?page=\${
    if (getRootRoutes().includes(jpaName)) {
      if (result['primaryKey']) {
        listLoaderBodyResponse += `
      const response = await sendRequest(
          \`${backendUrl}/${objectName}s\${Object.keys(params).length == 0 ? '' : \`/\${params['${result['primaryKey']}']}\`}?page=\${
          page ? Number(page) - 1 : 0
        }&size=10&sort=${result['primaryKey']},DESC\`,
        'GET',
        null
      );
  `;
      }
    } else {
      if (result['primaryKey']) {
        listLoaderBodyResponse += `
      const response = await sendRequest(
        \`${backendUrl}/${parentJpaName}s\${Object.keys(params).length == 0 ? '' : \`/\${params['${result['targetJpaParentPK']}']}/${objectName}s\`}?${result['virtualPKColumn']['title']}=\${fakeAuthProvider['activeProfile']['${result['virtualPKColumn']['title']}']}\`,
        'GET',
        null
      );
  `;
        // \`${backendUrl}/${parentJpaName}s\${Object.keys(params).length == 0 ? '' : \`/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s\`}?${result['virtualPKColumn']['title']}=\${fakeAuthProvider['activeProfile']['${result['virtualPKColumn']['title']}']}\`,
        // \`${backendUrl}/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s\`,

        // page=\${
        // page ? Number(page) - 1 : 0
        // }&size=2&sort=${result['primaryKey']},ASC
      }
    }

    /********************************************************************************
     *                        component List.jsx
     ********************************************************************************/

    let touchEntity = [];
    let end = '';
    const targetJpa = result['finalJpa'];

    // console.log(jpaName);

    const gridLayoutObject = getGridLayoutFields(jpaName, targetJpa, result['primaryKey']);


    // if (jpaName == 'tafahomInformation') {
    // console.log(Object.keys(gridLayoutObject['providers']['dataSourceProvider']['storedProcedure']));
    // if (jpaName == 'eghdamat') {
    // // if (jpaName == 'accounts') {
    //   console.log(jpaName)
    //   // console.log(getPrimaryKeyByJpaName(jpaName))
    // console.log(result['primaryKey']);
    // console.log(result['uniqueIndexes']);
    // console.log(gridLayoutObject);
    // }

    if (gridLayoutObject['touchEntity'].length) {
      gridLayoutObject['touchEntity'].map((entry) => {
        touchEntity = [
          ...touchEntity,
          {
            name: entry.name,
            label: entry.label,
            type: entry.type,
            cols: entry.columnDefinition,
            largeBreakpointWidth: entry.largeBreakpointWidth,
            isPrimaryKey: entry.isPrimaryKey,
          },
        ];
      });
    }

    // if (jpaName == 'eghdamat') {
    //   console.log(directParentRoutePath.length>0);
    // }
    // console.log(directParentRoutePath);
    // console.log(jpaName)
    // console.log(gridLayoutObject);
    // if(jpaName == 'eghdamat'){
    //   console.log(jpaName);
    //   console.log(result['virtualPKColumn']);
    //   console.log(result['primaryKey']);
    // }

    //   columnToSelect: ${(result['virtualPKColumn']['title'] == undefined)
    //   ?
    //   `'${result['primaryKey']}'`
    //   :
    //   // `fakeAuthProvider['${result['virtualPKColumn']['title']}'] == '' ? fakeAuthProvider['${result['primaryKey']}'] : fakeAuthProvider['${result['virtualPKColumn']['title']}']`
    //   `fakeAuthProvider['activeProfile']['${result['virtualPKColumn']['title']}'] == '' ? '${result['primaryKey']}' : '${result['virtualPKColumn']['title']}'`
    // }

    const routePath = `{
      title: '${jpaName}s',
      lable: '${singularLable}',
      numberLable: '${result['virtualPKColumn']['lable'] == '' ? result['primaryKey'] : result['virtualPKColumn']['lable']}',
      isRoot: ${isRootRoute(jpaName)},
      columnToSelect: '${result['primaryKey']}'
    }`

    listComponentContent += `import * as React from 'react';
import {
  Link,
  Form,
  useLoaderData,
  redirect,
  useParams,
  useActionData,
  useSearchParams,
} from 'react-router-dom';
import Grid from '${gridPath}/grid';
import { Breadcrumb } from '${breadcrumbPath}';
// import \${objectName}Lable from \'./\${objectName}Lable_fa\';
import { fakeAuthProvider } from '../../../auth';

export default function ${className}sList() {
  const loaderData = useLoaderData();
  const params = useParams();

  // getRootRoutes().includes(jpaName){}
  ${directParentRoutePath.length == 0
        ?
        `// root routes
  const gridLayout = ${touchEntity.length > 0 ? JSON.stringify(touchEntity) : []}
  const primaryKeyName = gridLayout.find((col) => col['isPrimaryKey'] == true);
  // const to = Object.keys(params).length == 0 ? \`\${row[primaryKeyName['name']]}/view\` : \`/\${routePath}/\${row[primaryKeyName['name']]}/view\`
  
  // routePath='\${applicationObject['appObjectId']}s
  const routePath = ${routePath}

  `
        :
        `// non-root routes
  const gridLayout = ${touchEntity.length > 0 ? JSON.stringify(touchEntity) : []}
  const primaryKeyName = gridLayout.find((col) => col['isPrimaryKey'] == true);
  
  // const routePath = '${directParentRoutePath}s/'+loaderData['activeProfile']['${getPrimaryKeyByJpaName(directParentRoutePath)}']+'/${jpaName}s'
  const routePath = ${routePath}`

      }
  
  return (
    loaderData.data && (
      <div className=" border rounded-3 shadow-sm p-0 me-2 bg-light-subtle">
        <Breadcrumb
          path={{
            ${completeRoutePathString}
          }}
          isVisible= {true}
        />
        <Grid
          gridLayout={gridLayout}
          data={loaderData.data}
          showPagination={true}
          routePath={routePath}
          params={params}
          primaryKeyName={primaryKeyName['name']}
          isVisible={true}
          isCreateIconRendered={${applicationObject.hasAnyValidCreateMethod(jpaName)}}
          isReadIconRendered={${applicationObject.hasAnyValidReadMethod(jpaName)}}
          isUpdateIconRendered={${applicationObject.hasAnyValidUpdateMethod(jpaName)}}
          isDeleteIconRendered={${applicationObject.hasAnyValidDeleteMethod(jpaName)}}
          // routePath={{
            // ['\${applicationObject['singularLable']}']: '\${applicationObject['appObjectId']
      // }',
            // singularLable: '\${applicationObject['singularLable']}',
            // pluralLable: '\${applicationObject['pluralLable']}',
          // }}
    //       routePath={{\'\${Object.keys(result['routePath'][0])[0]}\':\'\${
    //   Object.values(result['routePath'][0])[0]
    // }\'}}
        />
      </div>
    )
  );
}
`;

    // console.log(result['primaryKey']);
  });

  /********************************************************************************
   *                        storedProcedures API
   ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['storedProcedures'])?.map((storedProcedureName) => {

    /********************************************************************************
    *                        component ListRoute.js
    ********************************************************************************/
    listRouteBody.length == 0 && (listRouteBody += `import * as React from 'react';

    import { loader as ${objectName}ListLoader } from './${objectName}ListLoader';
    // import { action as ${objectName}ListAction } from './${objectName}ListAction';

    export const ${objectName}ListRoute = {
      path: '${objectName}s',
      element: <>ListRoute</>,
      loader: ${objectName}ListLoader,
    };`
    )
    /********************************************************************************
    *                        component ListLoader.js
    ********************************************************************************/
    listLoaderBodyResponse += `
      const call${firstLetterCaptalize(storedProcedureName)}Response = await sendRequest(
        \`${backendUrl}/${objectName}s/${storedProcedureName}?page=\${
          page ? Number(page) - 1 : 0
        }&size=2\`,
        'GET',
        null
      );
    `;
  })

  if (hasAnyValidListMethod) {

    isPathExists(componentListPath);

    listRouteBody.length > 0 &&
      createFile(
        `${componentListPath}`,
        `${objectName}ListRoute.js`,
        listRouteBody
      );


    const listLoaderContent = `
    ${listLoaderImport}
    ${listLoaderBody}
    ${listLoaderBodyResponse}
    ${listLoaderBodyClose}
    `
    listLoaderContent.length > 0 &&
      createFile(
        `${componentListPath}`,
        `${objectName}ListLoader.js`,
        listLoaderContent
      );

    listComponentContent.length > 0 &&
      createFile(
        `${componentListPath}`,
        `${objectName}List.jsx`,
        listComponentContent
      );

    listActionBody.length > 0 &&
      createFile(
        `${componentListPath}`,
        `${objectName}ListAction.js`,
        listActionBody
      );
  }
};
module.exports = ClientProjectListGenerator;
