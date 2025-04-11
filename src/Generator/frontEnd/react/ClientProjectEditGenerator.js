const { isPathExists, createFile, firstLetterCaptalize } = require('../../util');
const { getJpaByJpaName } = require('../../DomainConfig');
const { getRoutePathString, getRootRoutes, isRootRoute } = require('../../ContentMapValidator');

const {
  generateReactForm,
  generateImportString,
  extractDataSourceProviderObject,
  // getDataSourceKeyWithColTitle,
  searchDependantDataSource,
  constanctStrings,
  extractVariables,
  generateBreadCrumbPathObject,
  generateRoute,
  generateAction,
  doesDependantDataSourceEmpty
} = require('./ClientProjectCommonStructureGenerator')

const ClientProjectEditGenerator = (applicationObject, ConfigObject) => {
  const componentPath = ConfigObject.getClientComponentPath();
  const objectName = applicationObject['appObjectId'];
  const className = applicationObject['appObjectIdClass'];
  const backendUrl = ConfigObject.getBackendURI();

  const componentOwnPath = `${componentPath}\\/${objectName}`;
  const componentEditPath = `${componentOwnPath}\\edit`;


  //  1) for each appObjectId get complete route path
  const routePathString = getRoutePathString(objectName);
  const [first, ...completeRoutePathArray] = routePathString.split('/');
  //  2) get direct parent route path
  const directParentRoutePath =
    completeRoutePathArray.length > 1
      ? completeRoutePathArray[completeRoutePathArray.length - 2]
      : '';

  const completeRoutePathString = generateBreadCrumbPathObject(applicationObject, 'edit');

  const parentJpaName =
    directParentRoutePath.length > 1
      ? applicationObject.getJpaNameByAppObjectId(directParentRoutePath)
      : '';

  let editComponentContent = ``
  let editFormBodyContent = ``;
  let stotedProcedureResponse = ``
  let stotedProcedureReturn = ``

  let editFormBodyStart = constanctStrings.formBodyStart;
  const editFormBodyEnd = constanctStrings.formBodyEnd
  /********************************************************************************
   *                              utils
   ********************************************************************************/

  let editRouteBody = ``

  let editActionBody = ``

  let editLoaderImport = constanctStrings.loaderImport
  let editLoaderBody = constanctStrings.loaderBody
  let editLoaderBodyResponse = ``
  let editLoaderBodyClose = ``
  // let editComponentVariable = ``

  let initializeSystemVariable = ``

  let editReactComponentBody = {};

  let edit_OnChangeStatus_Body = ``
  let edit_Loader_ReturnString = ``
  let edit_Component_StateVariables = ``
  let edit_Initialize_OnLoader_DataSources = ``
  let edit_Initialize_OnForm_DataSources = ``
  let edit_ReactComponent_OnForm_UseEffect = ``
  let edit_Form_ImportString = ``;
  let edit_OnBlur_CallPlace = ``;

  let isSubmittingText = ``
  let formOnSubmitActionPath = ``
  let editActionBodyPath = ``
  let editActionBodyRedirectPath = ``
  // let listPath = ``

  let editMultiStepSupported = false


  let dataSourceProvider_stateVariables = ``
  let onChange_DataSourceProvider_Output = ``

  let hasAnyValidUpdateMethod = false
  /********************************************************************************
  *                        Jakarta Persistence API
  ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['jpas'])?.map((jpaName) => {
    const result = getJpaByJpaName(jpaName, parentJpaName);
    const targetJpa = result['finalJpa'];
    editMultiStepSupported = result['steps'].length > 0 ? true : false

    hasAnyValidUpdateMethod = applicationObject.hasAnyValidUpdateMethod(jpaName);

    /********************************************************************************
     *                        component EditRoute.js
     ********************************************************************************/
    editRouteBody += generateRoute(
      jpaName,
      getRootRoutes().includes(jpaName),
      result['primaryKey'],
      directParentRoutePath,
      result['targetJpaParentPK'],
      'edit'
    )
    /********************************************************************************
     *                        component EditLoader.js
     ********************************************************************************/
    if (getRootRoutes().includes(jpaName)) {
      if (result['primaryKey']) {
        editLoaderBodyResponse += `
      const response = await sendRequest(
        \`${backendUrl}/${objectName}s/\${params['${result['primaryKey']}']}?page=\${page ? Number(page) - 1 : 0
        }&size=2&sort=${result['primaryKey']},ASC\`,
        'GET',
        null
      );
  `;

      }
    } else {
      if (result['primaryKey']) {
        editLoaderBodyResponse += `
      const response = await sendRequest(
        \`${backendUrl}/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s/\${params['${result['primaryKey']}']}\`,
        'GET',
        null
      );
  `;
      }
    }

    /********************************************************************************
     *                        DataSourceProvider
     ********************************************************************************/

    let {
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

          edit_Form_ImportString += 'import { fakeAuthProvider } from \'../../../auth\';',

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
    } = extractVariables(dataSourceProviderObject2, onBlurDataSourceProviderObject2, null, backendUrl, 'edit')

    edit_OnBlur_CallPlace = onBlurCallPlaceBody
    edit_OnChangeStatus_Body = form_OnChangeStatus
    edit_Loader_ReturnString = loader_ReturnString
    edit_Component_StateVariables = form_LocalVariable
    edit_Initialize_OnLoader_DataSources = initialize_OnLoader_DataSources
    edit_Initialize_OnForm_DataSources = initialize_OnForm_DataSources
    edit_ReactComponent_OnForm_UseEffect = form_OnForm_CallPlace_UseEffect
    edit_Form_ImportString += form_ImportString

    editLoaderBodyResponse += `
  // const response = {};
  // response['data'] = ${JSON.stringify(columnObjects)}

  ${loader_Call_OnLoadCallPlace_RemoteStoredProcedure.length > 0 ? loader_Call_OnLoadCallPlace_RemoteStoredProcedure : ''}
`;




    /********************************************************************************
   *                        onBlur DataSource_Provider input/output variable.jsx
   *                        TODO  should be transfered into extractVariables() function
   ********************************************************************************/

    //     dataSourceProvider_stateVariables = !doesDependantDataSourceEmpty(dataSourceProviderObject2) && 'const [dataSourceProviderOutput, setDataSourceProviderOutput] = useState({});'
    //     onChange_DataSourceProvider_Output = !doesDependantDataSourceEmpty(dataSourceProviderObject2) && `
    //  const onChangeDataSourceProviderOutput = (name, response) => {
    //    setDataSourceProviderOutput({
    //      ...dataSourceProviderOutput,
    //      [\`\${name} \`]: {
    //        ...response
    //      },
    //    })
    //  }`

    // listPath += `${getRootRoutes().includes(jpaName)
    //   ?
    //   ''
    //   :
    //   `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s`}`;


    /********************************************************************************
     *                        component Edit.jsx
     ********************************************************************************/

    editReactComponentBody = generateReactForm(
      applicationObject['appObjectId'],
      targetJpa.content,
      'edit',
      result['steps']
    );

    edit_Form_ImportString += generateImportString(editReactComponentBody.formImportObjects);
    edit_Form_ImportString += `
var JSONbigNative = require(\'json-bigint\')({ useNativeBigInt: true });`
    editFormBodyContent = `${editReactComponentBody.formBody}`;
    needToConvertColumnArray2 = editReactComponentBody.needToConvertColumnArray
    // console.log(needToConvertColumnArray2)

    /********************************************************************************
    *                        Component Operation lable_fa
    ********************************************************************************/

    /********************************************************************************
    *                        script file
    ********************************************************************************/

    /********************************************************************************
     *                        style file
     ********************************************************************************/

    isSubmittingText += `const isSubmitting = navigation.formAction == '/${getRootRoutes().includes(jpaName) ? `${objectName}s/${result['primaryKey']}/edit` : `${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/${result['primaryKey']}/edit`}';`

    //  on-submit path
    formOnSubmitActionPath += `${getRootRoutes().includes(jpaName)
      ?
      `'/${objectName}s/edit'`
      :
      `${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/edit`}`

    /********************************************************************************
     *                        component EditAction.js
     ********************************************************************************/

    editActionBody += generateAction(
      jpaName,
      getRootRoutes().includes(jpaName),
      result['primaryKey'],
      result['virtualPKColumn'],
      result['pathVariableObject'],
      ConfigObject.getBackendURI(),
      directParentRoutePath,
      parentJpaName,
      result['targetJpaParentPK'],
      'edit'
    )
  });


  /********************************************************************************
*                        storedProcedures API
********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['storedProcedures'])?.map((storedProcedureName) => {

    hasAnyValidUpdateMethod = applicationObject.hasAnyValidUpdateMethod(jpaName);

    /********************************************************************************
     *                        component EditRoute.js
    ********************************************************************************/
    editRouteBody.length == 0 && (editRouteBody += `import * as React from 'react';
    //  import { loader as ${objectName}EditLoader } from './${objectName}EditLoader';
    //  import ${className}Edit from './${objectName}Edit';
    //  import { action as ${objectName}EditAction } from './${objectName}EditAction';

     export const ${objectName}EditRoute = {
       path: '${objectName}s/edit',
       element: <></>,
      //  loader: ${objectName}EditLoader,
      //  action: ${objectName}EditAction,
     };
     `);


    /********************************************************************************
    *                        component EditLoader.js
    ********************************************************************************/

    editLoaderBodyResponse += `
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
    *                        component Edit.jsx
    ********************************************************************************/

    editFormBodyContent.length > 0 && (
      stotedProcedureResponse += `let ${storedProcedureName}DataSource = loaderData.${storedProcedureName}DataSource;`)
  })
  
  if (hasAnyValidUpdateMethod) {

    isPathExists(componentEditPath);

    editFormBodyStart += `
  export default function ${objectName}Edit() {
    
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  const actionData = useActionData();
  const submit = useSubmit();
  ${isSubmittingText}
  
  const [state, setState] = useState({});
  ${edit_Component_StateVariables}

  //  on-loader useEffect
  useEffect(() => {
    setState({
      ...JSONbigNative.parse(JSONbigNative.stringify(loaderData['data']), (key, value) => value === null ? "" : value),
      ${initializeSystemVariable}${initializeSystemVariable.length > 0 ? `,` : ''}
      ${needToConvertColumnArray2.length > 0 ? '//  Columns need to convert before use' : ``}${needToConvertColumnArray2.map(i => `
      ['${i}']: loaderData.data.${i}.split(',')`)}
    })
    ${edit_Initialize_OnLoader_DataSources}
    ${edit_Initialize_OnForm_DataSources}
    ${editMultiStepSupported == true ? `multiStepFormScript()` : ''}
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
    }${edit_OnChangeStatus_Body}
  };

  const stateChangedIndex = () => {
    return Object.keys(state).findIndex(item => loaderData['data'][item] != state[item])
  }
  
    ${edit_ReactComponent_OnForm_UseEffect}
    ${stotedProcedureResponse}
    ${edit_OnBlur_CallPlace}
    
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
        ${editMultiStepSupported == true ? 'data-multi-step className="multi-step-form"' : ''}
        onKeyDown={e => {
          if (e.key == 'Enter') {
            e.preventDefault()
          }
        }}
        onSubmit={(e) => {
        e.preventDefault()
        let formData = new FormData();
        formData = { ...state }
        submit(formData, {
          method: "post",
          // action: "\${formOnSubmitActionPath}"
        })
      }}
      >`

    editRouteBody.length > 0 &&
      createFile(
        `${componentEditPath}`,
        `${objectName}EditRoute.js`,
        editRouteBody
      );

    editLoaderBodyClose = `  return { data: response.data.content[0] ${stotedProcedureReturn} ${edit_Loader_ReturnString}, activeProfile: fakeAuthProvider.activeProfile}; 
  } catch (err) {
    //  AXIOS Error
    throw err
  }
}`

    const editLoaderContent = `${editLoaderImport}
  ${editLoaderBody}
  ${editLoaderBodyResponse}
  ${editLoaderBodyClose}`

    editLoaderContent.length > 0 &&
      createFile(
        `${componentEditPath}`,
        `${objectName}EditLoader.js`,
        editLoaderContent
      );

    editActionBody.length > 0 &&
      createFile(
        `${componentEditPath}`,
        `${objectName}EditAction.js`,
        editActionBody
      );

    editComponentContent = `
    ${edit_Form_ImportString}
    ${editFormBodyStart}
    ${editFormBodyContent}
    ${editFormBodyEnd}`

    editComponentContent.length > 0 &&
      createFile(
        `${componentEditPath}`,
        `${objectName}Edit.jsx`,
        editComponentContent
      );
  }
};
module.exports = ClientProjectEditGenerator;
