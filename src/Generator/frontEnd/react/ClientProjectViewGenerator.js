const { isPathExists, createFile, firstLetterCaptalize } = require('../../util');
const { getJpaByJpaName } = require('../../DomainConfig');
const { getRoutePathString, getRootRoutes, isRootRoute } = require('../../ContentMapValidator');

const {
  generateReactForm,
  generateImportString,
  extractDataSourceProviderObject,
  getDataSourceKeyWithColTitle,
  searchDependantDataSource,
  constanctStrings,
  extractVariables,
  generateBreadCrumbPathObject,
  generateRoute,
  generateAction
} = require('./ClientProjectCommonStructureGenerator')

const ClientProjectViewGenerator = (applicationObject, ConfigObject) => {
  const componentPath = ConfigObject.getClientComponentPath();
  const objectName = applicationObject['appObjectId'];
  const className = applicationObject['appObjectIdClass'];
  const backendUrl = ConfigObject.getBackendURI();

  const componentOwnPath = `${componentPath}\\/${objectName}`;
  const componentViewPath = `${componentOwnPath}\\view`;


  //  1) for each appObjectId get complete route path
  const routePathString = getRoutePathString(objectName);
  const [first, ...completeRoutePathArray] = routePathString.split('/');
  //  2) get direct parent route path
  const directParentRoutePath =
    completeRoutePathArray.length > 1
      ? completeRoutePathArray[completeRoutePathArray.length - 2]
      : '';

  //   let completeRoutePathString = ``;
  //   completeRoutePathString += `'خانه':'\/',
  // `;

  //  used in <From onSubmit={...}
  // const formOnSubmitActionPath = `/${applicationObject.getAppObjectByAppObjectId(completeRoutePathArray[completeRoutePathArray.length - 1])['appObjectId']}s/new`
  // const formOnSubmitActionPath = `/${objectName}s/new`

  //  3) for each parent route path, generate key:value e.g. name:path
  // completeRoutePathArray.length > 0
  //   ? completeRoutePathArray.map((route, index) => {
  //     end =
  //       index + 1 <= completeRoutePathArray.length
  //         ? `,
  //         `
  //         : ``;
  //     completeRoutePathString += `          \'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
  //       }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
  //       }s\'${end}`;
  //   })
  //   : '';

  // completeRoutePathString += `'نمایش': '/${objectName}s/view',`;
  const completeRoutePathString = generateBreadCrumbPathObject(applicationObject, 'view');

  const parentJpaName =
    directParentRoutePath.length > 1
      ? applicationObject.getJpaNameByAppObjectId(directParentRoutePath)
      : '';

  let viewFormBodyContent = ``;
  let stotedProcedureResponse = ``
  let stotedProcedureReturn = ``

  let viewFormBodyStart = constanctStrings.formBodyStart;
  const viewFormBodyEnd = constanctStrings.formBodyEnd;
  /********************************************************************************
  *                              utils
  ********************************************************************************/

  let viewRouteBody = ``
  let viewActionBody = ``


  let viewLoaderImport = constanctStrings.loaderImport
  let viewLoaderBody = constanctStrings.loaderBody
  let viewLoaderBodyResponse = ``
  let viewLoaderBodyClose = ``

  let initializeSystemVariable = ``

  let viewReactComponentBody = {};

  let view_OnChangeStatus_Body = ``
  let view_Loader_ReturnString = ``
  let view_Component_StateVariables = ``
  let view_Initialize_OnLoader_DataSources = ``
  let view_Initialize_OnForm_DataSources = ``
  let view_ReactComponent_OnForm_UseEffect = ``
  let view_Form_ImportString = ``;
  let view_OnBlur_CallPlace = ``

  let isSubmittingText = ``
  let formOnSubmitActionPath = ``
  let viewActionBodyPath = ``
  let viewActionBodyRedirectPath = ``
  // let listPath = ``

  let viewMultiStepSupported = false

  let dataSourceProvider_stateVariables = ``
  let onChange_DataSourceProvider_Output = ``

  let hasAnyValidReadMethod = false
  /********************************************************************************
  *                        Jakarta Persistence API
  ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['jpas'])?.map((jpaName) => {
    const result = getJpaByJpaName(jpaName, parentJpaName);
    const targetJpa = result['finalJpa'];
    viewMultiStepSupported = result['steps'].length > 0 ? true : false

    hasAnyValidReadMethod = applicationObject.hasAnyValidReadMethod(jpaName)

    /********************************************************************************
     *                        component ViewRoute.js
     ********************************************************************************/
    viewRouteBody += generateRoute(
      jpaName,
      getRootRoutes().includes(jpaName),
      result['primaryKey'],
      directParentRoutePath,
      result['targetJpaParentPK'],
      'view'
    )
    /********************************************************************************
     *                        component ViewLoader.js
     ********************************************************************************/
    if (getRootRoutes().includes(jpaName)) {
      if (result['primaryKey']) {
        viewLoaderBodyResponse += `
      const response = await sendRequest(
        \`${backendUrl}/${objectName}s/\${params.${result['primaryKey']}}?page=\${page ? Number(page) - 1 : 0
        }&size=2&sort=${result['primaryKey']},ASC\`,
        'GET',
        null
      );
    `;
      }

    } else {
      if (result['primaryKey']) {
        viewLoaderBodyResponse += `
      const response = await sendRequest(
        \`${backendUrl}/${parentJpaName}s\${Object.keys(params).length == 0 ? '' : \`/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s\`}/\${params['${result['primaryKey']}']}\`,
        'GET',
        null
      );
  `;
      }
    }

    /********************************************************************************
     *                        DataSourceProvider
     ********************************************************************************/

    const {
      columnObjects,
      //  TODO: candidate to be removed
      // dataSourceProviderObject,
      dataSourceProviderObject2,
      onBlurDataSourceProviderObject2
    } = extractDataSourceProviderObject(targetJpa.content)

    //  get list of unique system objects
    //  generate state variable string for each unique system object
    searchDependantDataSource('')['systemObject'].length > 0 && (
      searchDependantDataSource('')['systemObject'].map((object, index) => {
        let tmp = `${object['colTitle']}: `
        if (Object.keys(object).includes('fakeAuthProvider')) {

          view_Form_ImportString += 'import { fakeAuthProvider } from \'../../../auth\';',

            Object.keys(object['fakeAuthProvider']).map((key, index) => {
              tmp += `fakeAuthProvider.${key}${(index + 1 < Object.keys(object['fakeAuthProvider']).length) ? ' + ' : ''}`
            })

          initializeSystemVariable += `${//  Initialize system variables
            tmp}`
        }
        //     tmp += `
        // // })`
      })
    );

    let {
      loader_Call_OnLoadCallPlace_RemoteStoredProcedure,
      dataSourceProviderParameter,
      generateUseEffectBody,
      onBlurCallPlaceBody,
      dependencyObject,
      uniqueDataSourceProvider,
      form_OnChangeStatus,
      loader_ReturnString,
      form_LocalVariable,
      initialize_OnLoader_DataSources,
      initialize_OnForm_DataSources,
      form_OnForm_CallPlace_UseEffect,
      form_ImportString,
    } = extractVariables(dataSourceProviderObject2, onBlurDataSourceProviderObject2, null, backendUrl, 'view')

    view_OnBlur_CallPlace = onBlurCallPlaceBody
    view_OnChangeStatus_Body = form_OnChangeStatus
    view_Loader_ReturnString = loader_ReturnString
    view_Component_StateVariables = form_LocalVariable
    view_Initialize_OnLoader_DataSources = initialize_OnLoader_DataSources
    view_Initialize_OnForm_DataSources = initialize_OnForm_DataSources
    view_ReactComponent_OnForm_UseEffect = form_OnForm_CallPlace_UseEffect
    view_Form_ImportString += form_ImportString

    viewLoaderBodyResponse += `
    // const response = {};
    // response['data'] = ${JSON.stringify(columnObjects)}

    ${loader_Call_OnLoadCallPlace_RemoteStoredProcedure.length > 0 ? loader_Call_OnLoadCallPlace_RemoteStoredProcedure : ''}
  `;

    /********************************************************************************
     *                        component View.jsx
     ********************************************************************************/

    viewReactComponentBody = generateReactForm(
      applicationObject['appObjectId'],
      targetJpa.content,
      'view',
      result['steps']
    );


    view_Form_ImportString += generateImportString(viewReactComponentBody.formImportObjects);
    view_Form_ImportString += `
var JSONbigNative = require(\'json-bigint\')({ useNativeBigInt: true });`
    viewFormBodyContent = `${viewReactComponentBody.formBody}`;
    needToConvertColumnArray2 = viewReactComponentBody.needToConvertColumnArray

    /********************************************************************************
    *                        Component Operation lable_fa
    ********************************************************************************/

    /********************************************************************************
    *                        script file
    ********************************************************************************/

    /********************************************************************************
     *                        style file
     ********************************************************************************/

    isSubmittingText += `const isSubmitting = navigation.formAction == '/${getRootRoutes().includes(jpaName) ? `${objectName}s/${result['primaryKey']}/view` : `${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/${result['primaryKey']}/view`}';`

    formOnSubmitActionPath += `${getRootRoutes().includes(jpaName)
      ?
      `'/${objectName}s/view'`
      :
      `${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/view`}`

    /********************************************************************************
     *                        component ViewAction.js
     ********************************************************************************/

    viewActionBody += generateAction(
      jpaName,
      getRootRoutes().includes(jpaName),
      result['primaryKey'],
      result['virtualPKColumn'],
      result['pathVariableObject'],
      ConfigObject.getBackendURI(),
      directParentRoutePath,
      parentJpaName,
      result['targetJpaParentPK'],
      'view'
    )
  });

  /********************************************************************************
  *                        storedProcedures API
  ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['storedProcedures'])?.map((storedProcedureName) => {

    hasAnyValidReadMethod = applicationObject.hasAnyValidReadMethod(jpaName)

    /********************************************************************************
     *                        component ViewRoute.js
    ********************************************************************************/

    viewRouteBody.length == 0 && (viewRouteBody += `import * as React from 'react';
    //  import { loader as ${objectName}ViewLoader } from './${objectName}ViewLoader';
    //  import ${className}View from './${objectName}View';

     export const ${objectName}ViewRoute = {
       path: '${objectName}s/:/view',
       element: <></>,
      //  element: <${className}View />,
      //  loader: ${objectName}ViewLoader,
     };
     `);

    /********************************************************************************
    *                        component ViewLoader.js
    ********************************************************************************/

    viewLoaderBodyResponse += `
      const call${firstLetterCaptalize(storedProcedureName)}Response = await sendRequest(
        \`${backendUrl}/${objectName}s/${storedProcedureName}/?page=\${
          page ? Number(page) - 1 : 0
        }&size=2\`,
        'GET',
        null
      );
    `;

    stotedProcedureReturn += `, ${storedProcedureName}DataSource : call${firstLetterCaptalize(storedProcedureName)}Response.data`

    /********************************************************************************
    *                        component Veiw.jsx
    ********************************************************************************/

    viewFormBodyContent.length > 0 && (
      stotedProcedureResponse += `let ${storedProcedureName}DataSource = loaderData.${storedProcedureName}DataSource;`)

  })

  if (hasAnyValidReadMethod) {

    isPathExists(componentViewPath);

    viewFormBodyStart += `
export default function ${objectName}View() {
  
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  const actionData = useActionData();
  const submit = useSubmit();

  ${isSubmittingText}

  const [state, setState] = useState({});
${view_Component_StateVariables}

  //  on-loader useEffect
  useEffect(() => {
    setState({ 
      ...JSONbigNative.parse(JSONbigNative.stringify(loaderData['data']), (key, value) => value === null ? "" : value),
      ${initializeSystemVariable}${initializeSystemVariable.length > 0 ? `,` : ''}
      ${needToConvertColumnArray2.length > 0 ? '//  Columns need to convert before use' : ``}${needToConvertColumnArray2.map(i => `
      ['${i}']: loaderData.data.${i}.split(',')`)}
  })
  ${view_Initialize_OnLoader_DataSources}
  //\${view_Initialize_OnForm_DataSources}
  ${viewMultiStepSupported == true ? `multiStepFormScript()` : ''}
}, []);

  const onChangeData = (e) => {
    setState(prevState => ({
      //  Computed property name
      ...prevState,
      [\`\${e.target.id}\`]: e.target.value,
    }));
  };
  
  const onChangeStatus = (e) => {
    if (e.target.type == 'checkbox') {
      setState({
        ...state,
        [\`\${e.target.name}\`]:
          state[e.target.name] != undefined
            ?
            (state[e.target.name]).includes(e.target.value.toString())
              ?
              //  Array.prototype.filter() always returns Array
              state[e.target.name].filter((idx) => { return idx !== e.target.value.toString() })
              :
              [...state[e.target.name], e.target.value.toString()]
            : [e.target.value.toString()]
      })
    } else if (e.target.type == 'radio') {
      setState({
        ...state,
        [\`\${e.target.name}\`]: e.target.value
      })
    } else if (e.target.type == 'select-one') {
      setState({
        ...state,
        [\`\${e.target.name}\`]: e.target.selectedIndex
      })
    }${view_OnChangeStatus_Body}
  };

  
  const stateChangedIndex = () => {
    return Object.keys(state).findIndex(item => loaderData['data'][item] != state[item])
  }

  ${view_ReactComponent_OnForm_UseEffect}
  ${stotedProcedureResponse}
  ${view_OnBlur_CallPlace}

  ${dataSourceProvider_stateVariables}
  ${onChange_DataSourceProvider_Output}

  return (
    <div className=" border rounded-3 shadow-sm p-0 me-2 bg-light-subtle">
      <Breadcrumb
        path={{
          ${completeRoutePathString}
        }}
        isVisible={true}
      />
      <Form 
        ${viewMultiStepSupported == true ? 'data-multi-step className="multi-step-form"' : ''} 
        onKeyDown={e => {
          if (e.key == 'Enter') {
            e.preventDefault()
          }
        }}
        onSubmit={(e) => {
        e.preventDefault()
        if(stateChangedIndex() > -1){
          // let formData = new FormData();
          // formData = { ...state }
          // submit(formData, {
          submit(null, {
            method: "post",
            // action: \${formOnSubmitActionPath}
            // action: actionPath
          })
        } else {
          alert('nothing changed!')
        }
      }}
      >
    `
    viewRouteBody.length > 0 &&
      createFile(
        `${componentViewPath}`,
        `${objectName}ViewRoute.js`,
        viewRouteBody
      );

    viewLoaderBodyClose = `  return { data: response.data.content[0] ${stotedProcedureReturn} ${view_Loader_ReturnString}, activeProfile: fakeAuthProvider.activeProfile}; 
  } catch (err) {
    //  AXIOS Error
    throw err
  }
}`

    const viewLoaderContent = `${viewLoaderImport}
${viewLoaderBody}
${viewLoaderBodyResponse}
${viewLoaderBodyClose}
`
    viewLoaderContent.length > 0 &&
      createFile(
        `${componentViewPath}`,
        `${objectName}ViewLoader.js`,
        viewLoaderContent
      );

    viewActionBody.length > 0 &&
      createFile(
        `${componentViewPath}`,
        `${objectName}ViewAction.js`,
        viewActionBody
      );

    viewComponentContent = `
${view_Form_ImportString}
${viewFormBodyStart}
${viewFormBodyContent}
${viewFormBodyEnd}`

    viewComponentContent.length > 0 &&
      createFile(
        `${componentViewPath}`,
        `${objectName}View.jsx`,
        viewComponentContent
      );
  }
};
module.exports = ClientProjectViewGenerator;
