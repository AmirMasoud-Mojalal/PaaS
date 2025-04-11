const {
  isPathExists,
  createFile,
} = require('../../util');

const { getRoutePathString, getRootRoutes, isRootRoute } = require('../../ContentMapValidator');

const ClientProjectRouteGenerator = (applicationObject, ConfigObject) => {
  const componentPath = ConfigObject.getClientComponentPath();
  const objectName = applicationObject['appObjectId'];

  const componentOwnPath = `${componentPath}\\/${objectName}`;

  let injectedContent = ``;
  let routeImport = ``
  let routeBody = ``
  isPathExists(componentOwnPath);

  let hasAnyValidCreateMethod = false     //  new
  let hasAnyValidReadMethod = false       //  view
  let hasAnyValidUpdateMethod = false     //  edit
  let hasAnyValidDeleteMethod = false     //  delete
  let hasAnyValidListMethod = false       //  list

  Object.keys(applicationObject['dataAccessLayer']['jpas'])?.map((jpaName) => {

    hasAnyValidCreateMethod = applicationObject.hasAnyValidCreateMethod(jpaName)
    hasAnyValidReadMethod = applicationObject.hasAnyValidReadMethod(jpaName)
    hasAnyValidUpdateMethod = applicationObject.hasAnyValidUpdateMethod(jpaName)
    hasAnyValidDeleteMethod = applicationObject.hasAnyValidDeleteMethod(jpaName)
    hasAnyValidListMethod = applicationObject.hasAnyValidListMethod(jpaName)

    // saveAll = Object.keys(applicationObject['dataAccessLayer']['jpas'][jpaName]).includes('saveAll');
    // findAll = Object.keys(applicationObject['dataAccessLayer']['jpas'][jpaName]).includes('findAll');
    // findById = Object.keys(applicationObject['dataAccessLayer']['jpas'][jpaName]).includes('findById');
    // updateById = Object.keys(applicationObject['dataAccessLayer']['jpas'][jpaName]).includes('updateById');
    // deleteById = Object.keys(applicationObject['dataAccessLayer']['jpas'][jpaName]).includes('deleteById');
  })

  if (objectName.slice(-3) == 'Rpt') {
    injectedContent = `import { 
      ${objectName}ReportRoute 
    } from './report/${objectName}ReportRoute';
  
  const ${objectName}Route = [
    ${objectName}ReportRoute,
  ];
  export { ${objectName}Route };`;
  } else if (objectName.slice(-3) != 'Rpt') {
    if (isRootRoute(objectName) == true) {
      injectedContent = `import { 
        ${objectName}ListAllRoute, 
        ${objectName}ListRoute 
      } from './list/${objectName}ListRoute';
    import { ${objectName}NewRoute } from './new/${objectName}NewRoute';
    import { ${objectName}ViewRoute } from './view/${objectName}ViewRoute';
    import { ${objectName}EditRoute } from './edit/${objectName}EditRoute';
    import { ${objectName}DeleteRoute } from './delete/${objectName}DeleteRoute';
    
    const ${objectName}Route = [
      ${objectName}NewRoute,
      ${objectName}ListRoute,
      ${objectName}ListAllRoute,
      ${objectName}ViewRoute,
      ${objectName}EditRoute,
      ${objectName}DeleteRoute,
    ];
    export { ${objectName}Route };`;
    } else {
      // injectedContent = `import { 
      //     ${objectName}ListAllRoute, 
      //     ${objectName}ListRoute 
      //   } from './list/${objectName}ListRoute';
      // import { ${objectName}NewRoute } from './new/${objectName}NewRoute';
      // import { ${objectName}ViewRoute } from './view/${objectName}ViewRoute';
      // import { ${objectName}EditRoute } from './edit/${objectName}EditRoute';
      // import { ${objectName}DeleteRoute } from './delete/${objectName}DeleteRoute';

      // const ${objectName}Route = [
      //   ${objectName}NewRoute,
      //   // \${objectName}ListRoute,
      //   ${objectName}ListAllRoute,
      //   ${objectName}ViewRoute,
      //   ${objectName}EditRoute,
      //   ${objectName}DeleteRoute,
      // ];
      // export { ${objectName}Route };`;
    }

    if (isRootRoute(objectName) == true) {
      hasAnyValidListMethod && (

        routeImport = `import { 
    ${objectName}ListAllRoute, 
    ${objectName}ListRoute 
  } from './list/${objectName}ListRoute';`,

        routeBody = `
  ${objectName}ListRoute,
  ${objectName}ListAllRoute,`

      )
    } else {
      hasAnyValidListMethod && (

        routeImport = `import { 
    ${objectName}ListAllRoute, 
  } from './list/${objectName}ListRoute';`,

        routeBody = `
  ${objectName}ListAllRoute,`

      )
    }

    hasAnyValidCreateMethod && (
      routeImport += `
import { ${objectName}NewRoute } from './new/${objectName}NewRoute';`,

      routeBody += `
  ${objectName}NewRoute,`

    )
    hasAnyValidReadMethod && (

      routeImport += `
import { ${objectName}ViewRoute } from './view/${objectName}ViewRoute';`,

      routeBody += `
  ${objectName}ViewRoute,`

    )
    hasAnyValidUpdateMethod && (

      routeImport += `
import { ${objectName}EditRoute } from './edit/${objectName}EditRoute';`,

      routeBody += `
  ${objectName}EditRoute,`

    )
    hasAnyValidDeleteMethod && (

      routeImport += `
import { ${objectName}DeleteRoute } from './delete/${objectName}DeleteRoute';`,

      routeBody += `
  ${objectName}DeleteRoute,`

    )

    routeBody.length > 0 && (injectedContent = `${routeImport}
const ${objectName}Route = [${routeBody}
];
export { ${objectName}Route };`)
  }
  if (objectName == 'search') {
    injectedContent = `import { searchRoute as searchFormRoute } from './search/searchRoute';
const searchRoute = [
  searchFormRoute,
];
export { searchRoute };
`}

  createFile(`${componentOwnPath}`, `${'index'}.js`, injectedContent);
};

module.exports = ClientProjectRouteGenerator;
