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
  doesDependantDataSourceEmpty,
  generateReportColumnLayout,
  generateProperty,
  getReportRoutePath
} = require('./ClientProjectCommonStructureGenerator')
const { getStoredProcedureParameterByStoredProcedureName, getStoredProcedureResultSetByStoredProcedureName } = require('../../DomainConfig')

const ClientProjectReportGenerator = (applicationObject, ConfigObject) => {
  const componentPath = ConfigObject.getClientComponentPath();
  const objectName = applicationObject['appObjectId'];
  const className = applicationObject['appObjectIdClass'];
  const singularLable = applicationObject['singularLable'];
  const backendUrl = ConfigObject.getBackendURI();

  const componentOwnPath = `${componentPath}\\/${objectName}`;
  const componentReportPath = `${componentOwnPath}\\report`;

  isPathExists(componentReportPath);

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

  let reportComponentContent = ``
  let reportFormBodyContent = ``;
  let stotedProcedureResponse = ``
  let stotedProcedureReturn = ``

  let reportFormBodyStart = constanctStrings.formBodyStart;
  const reportFormBodyEnd = constanctStrings.formBodyEnd
  /********************************************************************************
   *                              utils
   ********************************************************************************/

  let reportRouteBody = ``

  let reportActionBody = ``

  let reportLoaderImport = constanctStrings.loaderImport
  let reportLoaderBody = constanctStrings.loaderBody
  let reportLoaderBodyResponse = ``
  let reportLoaderBodyClose = ``
  // let editComponentVariable = ``

  let initializeSystemVariable = ``

  let editReactComponentBody = {};

  let edit_OnChangeStatus_Body = ``
  let report_Loader_ReturnString = ``
  let edit_Component_StateVariables = ``
  let edit_Initialize_OnLoader_DataSources = ``
  let edit_Initialize_OnForm_DataSources = ``
  let edit_ReactComponent_OnForm_UseEffect = ``
  let report_Form_ImportString = ``;
  let edit_OnBlur_CallPlace = ``;
  let dataSourceProvider_ResultSet_JSON
  let isSubmittingText = ``
  let formOnSubmitActionPath = ``
  let editActionBodyPath = ``
  let editActionBodyRedirectPath = ``
  // let listPath = ``

  let editMultiStepSupported = false


  let dataSourceProvider_stateVariables = ``
  let onChange_DataSourceProvider_Output = ``
  /********************************************************************************
  *                        Jakarta Persistence API
  ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['jpas'])?.map((jpaName) => {
    const result = getJpaByJpaName(jpaName, parentJpaName);
    const targetJpa = result['finalJpa'];
    editMultiStepSupported = result['steps'].length > 0 ? true : false

    /********************************************************************************
     *                        component ReportRoute.js
     ********************************************************************************/
    reportRouteBody += generateRoute(
      jpaName,
      getRootRoutes().includes(jpaName),
      result['primaryKey'],
      directParentRoutePath,
      result['targetJpaParentPK'],
      'report'
    )
    /********************************************************************************
     *                        component ReportLoader.js
     ********************************************************************************/
    if (getRootRoutes().includes(jpaName)) {
      if (result['primaryKey']) {
        reportLoaderBodyResponse += `
      const response = await sendRequest(
        \`${backendUrl}/${objectName}s&size=2&sort=${result['primaryKey']},ASC\`,
        'GET',
        null
      );
  `;

      }
    } else {

      if (result['primaryKey']) {
        reportLoaderBodyResponse += `
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

          report_Form_ImportString += 'import { fakeAuthProvider } from \'../../../auth\';',

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

    // console.log(jpaName);
    // console.log(result);
    // console.log(targetJpa.content);
    // console.log(dataSourceProviderObject2);
    // console.log(dataSourceProviderObject2['storedProcedure']);
    // generateReportColumnLayout()
    // console.log(dataSourceProviderObject2['storedProcedure'][0]['resultSet']);
    // console.log(onBlurDataSourceProviderObject2);

    // let parameterList =
    //   getStoredProcedureParameterByStoredProcedureName(dataSourceProviderObject2['storedProcedure'][0]['name']);
    // let resultSet =
    //   getStoredProcedureResultSetByStoredProcedureName(dataSourceProviderObject2['storedProcedure'][0]['name']);

    // console.log(parameterList);
    // console.log(resultSet)


    let {
      loader_Call_OnLoadCallPlace_RemoteStoredProcedure,
      dataSourceProviderParameter,
      dataSourceProviderResultSet,
      dataSourceProviderResultSetJSON,
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
    } = extractVariables(dataSourceProviderObject2, onBlurDataSourceProviderObject2, null, backendUrl, 'report')

    dataSourceProvider_ResultSet_JSON = dataSourceProviderResultSetJSON
    edit_OnBlur_CallPlace = onBlurCallPlaceBody
    edit_OnChangeStatus_Body = form_OnChangeStatus
    report_Loader_ReturnString = loader_ReturnString
    edit_Component_StateVariables = form_LocalVariable
    edit_Initialize_OnLoader_DataSources = initialize_OnLoader_DataSources
    edit_Initialize_OnForm_DataSources = initialize_OnForm_DataSources
    edit_ReactComponent_OnForm_UseEffect = form_OnForm_CallPlace_UseEffect
    report_Form_ImportString += form_ImportString

    if (jpaName == 'dashboardDetailRpt') {
      // console.log(dataSourceProviderParameter);
      // console.log({
      //   ...dataSourceProviderParameter,
      //   lstTypeCode: [params['lstTypeCode']]
      // });
      reportLoaderBodyResponse = `    const callListDetailResponse = await sendRequest(\`${backendUrl}/listDetails?page=\${page ? Number(page) - 1 : 0
    }\&size=2\`,
    "POST",
    { "tafCode": 0, "tafTitle": '', "customerName": '', "extCustId": 0, "startDateAz": 0, "expireDateTa": 0, "seri": '', "branchManagement": '', 'branch': '', "expertId": 0, "lstTypeCode": params['lstTypeCode'], "filterCode": 0 }
);`

    } else {
      // reportLoaderBodyResponse += `
      reportLoaderBodyResponse = `
    // const response = {};
    // response['data'] = ${JSON.stringify(columnObjects)}

  ${loader_Call_OnLoadCallPlace_RemoteStoredProcedure.length > 0 ? loader_Call_OnLoadCallPlace_RemoteStoredProcedure : ''}
`;
    }


    // if (jpaName == 'customerResourceRpt') {
    // if (jpaName == 'commitmentsRpt') {
    // console.log(report_Form_ImportString);
    // console.log(dataSourceProviderResultSet);
    // console.log(dataSourceProviderObject2);
    // console.log(jpaName);
    // console.log(dataSourceProviderResultSet);
    // }
    // console.log(jpaName);

    // console.log(objectName);
    // console.log(dataSourceProviderResultSet);

    /********************************************************************************
     *                        report column layout
     ********************************************************************************/
    reportLayout = `
export const reportLayout = {
  reportTitle: "${singularLable}",
  reportName: "${objectName}",
  columns: [${dataSourceProviderResultSet}],
  rows: null,
}`;


    reportRouteBody.length > 0 &&
      createFile(
        `${componentReportPath}`,
        `${objectName}ColumnLayout.js`,
        reportLayout
      );

    reportLoaderImport += `
import { reportLayout } from "./${objectName}ColumnLayout";`

    // console.log(dataSourceProviderResultSet);
    // console.log(reportLayout);
    // console.log(JSON.stringify(dataSourceProviderResultSet));
    /********************************************************************************
   *                        onBlur DataSource_Provider input/output variable.jsx
   *                        TODO  should be transfered into extractVariables() function
   ********************************************************************************/

    dataSourceProvider_stateVariables = !doesDependantDataSourceEmpty(dataSourceProviderObject2) && 'const [dataSourceProviderOutput, setDataSourceProviderOutput] = useState({});'
    onChange_DataSourceProvider_Output = !doesDependantDataSourceEmpty(dataSourceProviderObject2) && `
const onChangeDataSourceProviderOutput = (name, response) => {
  setDataSourceProviderOutput({
    ...dataSourceProviderOutput,
    [\`\${name} \`]: {
       ...response
     },
   })
 }`

    // listPath += `${getRootRoutes().includes(jpaName)
    //   ?
    //   ''
    //   :
    //   `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s`}`;


    /********************************************************************************
     *                        component Report.jsx
     ********************************************************************************/

    editReactComponentBody = generateReactForm(
      applicationObject['appObjectId'],
      targetJpa.content,
      'report',
      result['steps']
    );

    // report_Form_ImportString += generateImportString(editReactComponentBody.formImportObjects);
    report_Form_ImportString = generateImportString(editReactComponentBody.formImportObjects);

    // if (jpaName == 'commitmentsRpt') {
    //   // console.log(editReactComponentBody.formImportObjects);
    //   console.log(report_Form_ImportString);
    // }
    //     report_Form_ImportString += `
    // import React from 'react'
    // var JSONbigNative = require(\'json-bigint\')({ useNativeBigInt: true });
    // // import ReportComponent from "../../UIComponent/reportComponent";
    // // import ReportCard from "../../UIComponent/reportCard";
    // import _ from "lodash";`
    reportFormBodyContent = `${editReactComponentBody.formBody}`;
    needToConvertColumnArray2 = editReactComponentBody.needToConvertColumnArray

    // console.log(jpaName)
    // console.log(reportFormBodyContent)

    /********************************************************************************
    *                        Component Operation lable_fa
    ********************************************************************************/
    property = generateProperty(
      applicationObject['appObjectId'],
      targetJpa.content
    );

    const reportRoutePath = getReportRoutePath(
      targetJpa.content
    )

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
     *                        component ReportAction.js
     ********************************************************************************/
    // console.log(result['finalJpa']);
    // console.log(jpaName);
    reportActionBody += generateAction(
      jpaName,
      getRootRoutes().includes(jpaName),
      result['primaryKey'],
      result['virtualPKColumn'],
      result['pathVariableObject'],
      ConfigObject.getBackendURI(),
      directParentRoutePath,
      parentJpaName,
      result['targetJpaParentPK'],
      'report',
      reportRoutePath
    )
  });


  /********************************************************************************
  *                        storedProcedures API
  ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['storedProcedures'])?.map((storedProcedureName) => {
    // console.log(storedProcedureName);
    /********************************************************************************
     *                        component ReportRoute.js
    ********************************************************************************/
    reportRouteBody.length == 0 && (reportRouteBody += `import * as React from 'react';
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

    reportLoaderBodyResponse += `
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

    reportFormBodyContent.length > 0 && (
      stotedProcedureResponse += `let ${storedProcedureName}DataSource = loaderData.${storedProcedureName}DataSource;`)
  })

  reportFormBodyStart += `
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
      // ...loaderData['data'],
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
      <Form ${editMultiStepSupported == true ? 'data-multi-step className="multi-step-form"' : ''} onSubmit={(e) => {
        e.preventDefault()
        let formData = new FormData();
        formData = { ...state }
        submit(formData, {
          method: "post",
          // action: "\${formOnSubmitActionPath}"
        })
      }}
      >`


  reportRouteBody.length > 0 &&
    createFile(
      `${componentReportPath}`,
      `${objectName}ReportRoute.js`,
      reportRouteBody
    );

  // console.log('report_Loader_ReturnString.length' + report_Loader_ReturnString);
  reportLoaderBodyClose = `
    return { data: { ...reportLayout ${report_Loader_ReturnString} }, activeProfile: fakeAuthProvider.activeProfile }; 
  } catch (err) {
    //  AXIOS Error
    throw err;
  }
}`

  const reportLoaderContent = `${reportLoaderImport}

  ${reportLoaderBody}
  ${reportLoaderBodyResponse}
  ${reportLoaderBodyClose}`


  reportLoaderContent.length > 0 &&
    createFile(
      `${componentReportPath}`,
      `${objectName}ReportLoader.js`,
      reportLoaderContent
    );

  property.length > 0 &&
    createFile(
      `${componentOwnPath}`,
      `${objectName}OperationLables_fa.js`,
      property
    );

  reportActionBody.length > 0 &&
    createFile(
      `${componentReportPath}`,
      `${objectName}ReportAction.js`,
      reportActionBody
    );

  reportComponentContent = `
    ${report_Form_ImportString}
    ${reportFormBodyStart}
    ${reportFormBodyContent}
    ${reportFormBodyEnd}`

  reportComponentContent = `
  ${report_Form_ImportString}
import _ from "lodash";
import { fakeAuthProvider } from "../../../auth";

const MainReport = () => {
  
  const submit = useSubmit()
  let formData = new FormData()
  
  const loaderData = useLoaderData();
  const {data} = loaderData;

  const [state, setState] = useState({});

  const onChangeData = (e) => {
    setState(prevState => ({
      //  Computed property name
      ...prevState,
      [\`\${e.target.id}\`]: e.target.value,
    }));
  };

  const filterData = data.rows.map((row) => 
    JSON.parse(
      \`{${dataSourceProvider_ResultSet_JSON}
      }\`)
  );

  const handleRowClick = (row) => {
    submit(JSON.stringify(row, (_, v) => typeof v === 'bigint' ? v.toString() : v), { method: "POST", encType: "application/json" })
  };

  return (
    <>
  ${reportFormBodyContent}
    </>
  );
};

export default MainReport;
`
  //   if (objectName == 'commitmentsRpt') {
  //     reportComponentContent = `${report_Form_ImportString}
  // import _ from "lodash";
  // import { fakeAuthProvider } from "../../../auth";

  // const MainReport = () => {

  //   const submit = useSubmit()
  //   let formData = new FormData()

  //   const loaderData = useLoaderData();
  //   const {data} = loaderData;

  //   const [state, setState] = useState({});

  //   //  on-loader useEffect
  //   useEffect(() => {
  //     setState({
  //       ...loaderData['data'],
  //     }, []);
  //   },[])

  //   const onChangeData = (e) => {
  //     setState(prevState => ({
  //       //  Computed property name
  //       ...prevState,
  //       [\`\${e.target.id}\`]: e.target.value,
  //     }));
  //   };


  //   const handleRowClick = (row) => {
  //     submit(JSON.stringify(row, (_, v) => typeof v === 'bigint' ? v.toString() : v), { method: "POST", encType: "application/json" })
  //   };

  //   return (
  //     <>
  //   ${reportFormBodyContent}
  //     </>
  //   );
  // };

  // export default MainReport;`
  //   } else 
  if (
    objectName == 'searchRpt' ||
    objectName == 'commitmentsRpt' ||
    objectName == 'customerRialResourceRpt' ||
    objectName == 'customerArzResourceRpt' ||
    objectName == 'customerRialResourceAvgRpt' ||
    objectName == 'customerArzResourceAvgRpt' ||
    objectName == 'lendingRpt' ||
    objectName == 'collateralRpt' ||
    objectName == 'costBenefitRpt' ||
    objectName == 'customerProfileAbstractRpt' ||
    objectName == 'performanceRpt'
  ) {
    reportComponentContent = `${report_Form_ImportString}
import _ from "lodash";
import { fakeAuthProvider } from "../../../auth";

const MainReport = () => {
  
  const submit = useSubmit()
  let formData = new FormData()
  
  const loaderData = useLoaderData();
  const {data} = loaderData;

  const [state, setState] = useState({});

  //  on-loader useEffect
  useEffect(() => {
    setState({
      ...loaderData['data'],
    }, []);
  },[])

  const onChangeData = (e) => {
    setState(prevState => ({
      //  Computed property name
      ...prevState,
      [\`\${e.target.id}\`]: e.target.value,
    }));
  };

  const handleRowClick = (row) => {
    submit(JSON.stringify(row, (_, v) => typeof v === 'bigint' ? v.toString() : v), { method: "POST", encType: "application/json" })
  };
  
  return (
  <>${reportFormBodyContent}
      <br/>
    </>
  );
};

export default MainReport;
`
  }

  reportComponentContent.length > 0 &&
    createFile(
      `${componentReportPath}`,
      `${objectName}Report.jsx`,
      reportComponentContent
    );
};
module.exports = ClientProjectReportGenerator;
