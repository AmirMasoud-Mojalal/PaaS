const { isPathExists, createFile, firstLetterCaptalize, getDataSourceProvider } = require('../../util');
const { getJpaByJpaName } = require('../../DomainConfig');
const { getRoutePathString, getRootRoutes, isRootRoute } = require('../../ContentMapValidator');

const {
  generateReactForm,
  generateImportString,
  extractDataSourceProviderObject,
  getDataSourceKeyWithColTitle,
  searchDependantDataSource,
  constanctStrings,
  generateProperty,
  extractVariables,
  generateBreadCrumbPathObject,
  generateRoute,
  generateAction,
  doesDependantDataSourceEmpty
} = require('./ClientProjectCommonStructureGenerator')

const ClientProjectSearchGenerator = (applicationObject, ConfigObject) => {
  const componentPath = ConfigObject.getClientComponentPath();
  const objectName = applicationObject['appObjectId'];
  const className = applicationObject['appObjectIdClass'];
  const singularLable = applicationObject['singularLable'];
  const backendUrl = ConfigObject.getBackendURI();

  const componentOwnPath = `${componentPath}\\/${objectName}`;
  const componentSearchPath = `${componentOwnPath}\\search`;


  //  1) for each appObjectId get complete route path
  const routePathString = getRoutePathString(objectName);
  const [first, ...completeRoutePathArray] = routePathString.split('/');
  //  2) get direct parent route path
  const directParentRoutePath =
    completeRoutePathArray.length > 1
      ? completeRoutePathArray[completeRoutePathArray.length - 2]
      : '';


  //  3) for each parent route path, generate key:value e.g. name:path
  // completeRoutePathArray.length > 0 && completeRoutePathArray.map((route, index) => {
  //   end =
  //     index + 1 <= completeRoutePathArray.length && `,
  //         `
  //   // : ``;
  //   completeRoutePathString += `          \'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
  //     }\': \'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
  //     }s\'${end}`;
  // })
  const completeRoutePathString = generateBreadCrumbPathObject(applicationObject, 'new');

  const parentJpaName =
    directParentRoutePath.length > 1 && applicationObject.getJpaNameByAppObjectId(directParentRoutePath)
  // : '';

  let searchComponentContent = ``;
  let searchFormBodyContent = ``;
  let stotedProcedureResponse = ``
  let stotedProcedureReturn = ``
  let form_ImportString = ``;

  let newFormBodyStart = constanctStrings.formBodyStart;
  const newFormBodyEnd = constanctStrings.formBodyEnd

  /********************************************************************************
   *                              utils
   ********************************************************************************/

  let searchRouteBody = ``

  let newActionBody = ``

  let searchloaderImport = constanctStrings.loaderImport
  let searchLoaderBody = constanctStrings.loaderBody
  let searchLoaderBodyResponse = ``
  let searchLoaderBodyClose = ``
  // let editComponentVariable = ``

  let initializeSystemVariable = ``

  let newReactComponentBody = {};

  let new_OnChangeStatus_Body = ``
  let search_Loader_ReturnString = ``
  let new_Component_StateVariables = ``
  let new_Initialize_OnLoader_DataSources = ``
  let new_Initialize_OnForm_DataSources = ``
  let new_ReactComponent_OnForm_UseEffect = ``
  let search_Form_ImportString = ``;
  let new_OnBlur_CallPlace = ``
  //  duplicate code
  let form_OnChangeStatus = ``

  let dataSourceProvider_ResultSet_JSON
  let isSubmittingText = ``
  let formOnSubmitActionPath = ``
  let newActionBodyPath = ``
  let newActionBodyRedirectPath = ``

  let newMultiStepSupported = false
  let clearFakeAuth = ``

  let dataSourceProvider_stateVariables = ``
  let onChange_DataSourceProvider_Output = ``

  let hasAnyValidCreateMethod = false
  /********************************************************************************
   *                        Jakarta Persistence API
   ********************************************************************************/
  Object.keys(applicationObject['dataAccessLayer']['jpas'])?.map((jpaName) => {
    const result = getJpaByJpaName(jpaName, parentJpaName);
    const targetJpa = result['finalJpa'];
    newMultiStepSupported = result['steps'].length > 0 ? true : false

    hasAnyValidCreateMethod = applicationObject.hasAnyValidCreateMethod(jpaName)

    if (!isRootRoute(jpaName) == true) {
      clearFakeAuth = `
    Object.keys(fakeAuthProvider.activeProfile).map(e => {
      Object.keys(response.data).find(item => {
        if (item == e) {
          response['data'][item] = fakeAuthProvider['activeProfile'][e]
        }
      })
    })`
    }

    /********************************************************************************
   *                        component NewRoute.js
   ********************************************************************************/
    searchRouteBody += generateRoute(
      jpaName,
      getRootRoutes().includes(jpaName),
      '',
      directParentRoutePath,
      result['targetJpaParentPK'],
      'search'
    )

    // if (jpaName == 'searchForm') {
    //   console.log(searchRouteBody);
    // }

    /********************************************************************************
     *                        component NewLoader.js
     ********************************************************************************/

    //  Only applicable to Edit Components

    //    if (getRootRoutes().includes(jpaName)) {
    //     if (result['primaryKey']) {
    //       editLoaderBodyResponse += `
    //     const response = await sendRequest(
    //       \`${backendUrl}/${objectName}s/\${params['${result['primaryKey']}']}?page=\${page ? Number(page) - 1 : 0
    //       }&size=2&sort=${result['primaryKey']},ASC\`,
    //       'GET',
    //       null
    //     );
    // `;

    //     }
    //   } else {
    //     if (result['primaryKey']) {
    //       editLoaderBodyResponse += `
    //     const response = await sendRequest(
    //       \`${backendUrl}/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s/\${params['${result['primaryKey']}']}\`,
    //       'GET',
    //       null
    //     );
    // `;
    //     }
    //   }

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

    // if (jpaName == 'tafahomInformation') {
    // console.log(dataSourceProviderObject2);
    // console.log(onBlurDataSourceProviderObject2);
    // console.log(columnObjects);
    // }

    //  get list of unique system objects
    //  generate state variable string for each unique system object
    searchDependantDataSource(dataSourceProviderObject2, '')['systemObject'].length > 0 && (
      //  TODO  - should be removed
      // replaced by rules
      searchDependantDataSource(dataSourceProviderObject2, '')['systemObject'].map((object, index) => {
        let tmp = `${object['colTitle']}: `
        if (Object.keys(object).includes('fakeAuthProvider')) {

          search_Form_ImportString += 'import { fakeAuthProvider } from \'../../../auth\';',

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

    if (jpaName == 'tafahomInformation') {
      //   // if (jpaName == 'account') {
      //   // if (jpaName == 'tasParameter') {
      //   // console.log(columnObjects);
      //   // console.log(dataSourceProviderObject['storedProcedure'].length);
      //   // console.log(dataSourceProviderObject['restService'].length);
      //   // console.log(dataSourceProviderObject['systemObject'].length);
      //   // console.log(initializeSystemVariable);
      //   // console.log(searchDependantDataSource('')['systemObject']);
      //   // console.log(doesDependantDataSourceEmpty(dataSourceProviderObject));
      // console.log(dataSourceProviderObject2);
      // console.log(jpaName);
      // console.log(dataSourceProviderObject2);
      // console.log(onBlurDataSourceProviderObject2);
      //   // console.log(new_Component_StateVariables);
    }





    // jpaName == 'tafahomInformation' && console.log(jpaName);
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
    } = extractVariables(dataSourceProviderObject2, onBlurDataSourceProviderObject2, null, backendUrl, 'new')

    dataSourceProvider_ResultSet_JSON = dataSourceProviderResultSetJSON
    new_OnBlur_CallPlace = onBlurCallPlaceBody
    new_OnChangeStatus_Body = form_OnChangeStatus
    search_Loader_ReturnString = loader_ReturnString
    new_Component_StateVariables = form_LocalVariable
    //  TODO
    new_Initialize_OnLoader_DataSources = initialize_OnLoader_DataSources
    new_Initialize_OnForm_DataSources = initialize_OnForm_DataSources
    new_ReactComponent_OnForm_UseEffect = form_OnForm_CallPlace_UseEffect
    search_Form_ImportString += form_ImportString

    searchLoaderBodyResponse += objectName == 'search' ? `    const callListDetailResponse = await sendRequest(\`${backendUrl}/listDetails?page=\${page ? Number(page) - 1 : 0
    }\&size=2\`,
    "POST",
    {
      "tafCode": parseInt(tafCode),
      "tafTitle": title,
      "customerName": '',
      "extCustId": 0,
      "startDateAz": startDate !== null && startDate.length >= 8 ? removeSlashFromDate(startDate) : 0,
      "expireDateTa": expireDate !== null && expireDate.length >= 8 ? removeSlashFromDate(expireDate) : 0,
      "seri": seri == 0 ? '' : seri,
      "branchManagement": branchManagement == 'undefined' ? '' : branchManagement,
      'branch': branch == 'undefined' ? '' : branch,
      "expertId": 0,
      "lstTypeCode": parseInt(tafState),
      "filterCode": 0
    }
);


    const callBranchManagementResponse = await sendRequest(\`${backendUrl}/orgUnitCharts?page=\${page ? Number(page) - 1 : 0
      }& size=2\`,
      "POST",
      { "branch": 0, "flag": 0 }
    );
` : `
    const response = {};
    response['data'] = ${JSON.stringify(columnObjects)}
    // response['data'] = {
    //   ...response['data'],
    //   \${result['virtualPKColumn']['title']}: fakeAuthProvider['activeProfile']['\${result['virtualPKColumn']['title']}']
    // }

    ${loader_Call_OnLoadCallPlace_RemoteStoredProcedure.length > 0 ? loader_Call_OnLoadCallPlace_RemoteStoredProcedure : ''}
  `;

    /********************************************************************************
   *                        onBlur DataSource_Provider input/output variable.jsx
   *                        TODO  should be transfered into extractVariables() function
   ********************************************************************************/

    //     dataSourceProvider_stateVariables = !doesDependantDataSourceEmpty(dataSourceProviderObject) && 'const [dataSourceProviderOutput, setDataSourceProviderOutput] = useState({});'
    //     onChange_DataSourceProvider_Output = !doesDependantDataSourceEmpty(dataSourceProviderObject) && `
    // const onChangeDataSourceProviderOutput = (e) => {
    //   setDataSourceProviderOutput({
    //     ...dataSourceProviderOutput,
    //     [\`\${e.target.name}\`]: {
    //       ...e.target.response
    //     },
    //   })
    // }`

    /********************************************************************************
     *                        component New.jsx
     ********************************************************************************/


    newReactComponentBody = generateReactForm(
      applicationObject['appObjectId'],
      targetJpa.content,
      'new',
      result['steps']
    );


    search_Form_ImportString += generateImportString(newReactComponentBody.formImportObjects);
    searchFormBodyContent += `${newReactComponentBody.formBody}`;
    // searchFormBodyContent += newReactComponentBody.multiStepRows;
    needToConvertColumnArray2 = newReactComponentBody.needToConvertColumnArray

    /********************************************************************************
     *                        Component Operation lable_fa
     ********************************************************************************/
    //  Do it once in NEW component so VIEW & Edit components will use it
    property = generateProperty(
      applicationObject['appObjectId'],
      targetJpa.content
    );

    /********************************************************************************
     *                        script file
     ********************************************************************************/
    //  Do it once in NEW component so VIEW & Edit components will use it

    script = `export function multiStepFormScript() {
      const multiStepForm = document.querySelector("[data-multi-step]")
      // console.log(multiStepForm);
      const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
      // console.log(formSteps);
      let currentStep = formSteps.findIndex(step => {
          return step.classList.contains("active")
      })
  
      if (currentStep < 0) {
          currentStep = 0
          showCurrentStep()
      }
  
      multiStepForm.addEventListener("click", e => {
          let incrementor
          if (e.target.matches("[data-next]")) {
              incrementor = 1
          } else if (e.target.matches("[data-previous]")) {
              incrementor = -1
          }
  
          if (incrementor == null) return
  
          //    input validation
          const inputs = [...formSteps[currentStep].querySelectorAll("input")]
          const allValid = inputs.every(input => input.reportValidity())
          if (allValid) {
              currentStep += incrementor
              showCurrentStep()
          }
      })
  
      formSteps.forEach(step => {
          step.addEventListener("animationend", e => {
              if (e.target.classList.contains("cards")) {
                  formSteps[currentStep].classList.remove("hide")
                  e.target.classList.toggle("hide", !e.target.classList.contains("active"))
              }
          })
      })
  
      function showCurrentStep() {
          formSteps.forEach((step, index) => {
              step.classList.toggle("active", index === currentStep)
          })
      }
  }`

    /********************************************************************************
     *                        style file
     ********************************************************************************/
    //  Do it once in NEW component so VIEW & Edit components will use it

    style = `.cards {
    /* background-color: white;
        border: 1px solid #333;
        border-radius: .5rem;
        padding: .5rem;
        max-width: 300px;
        margin: 0 auto; */
    border: none;
    display: none;
    animation: fade 250ms ease-in-out forwards;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: .5rem;
    gap: .25em;
}

.form-group:last-child {
    margin: 0;
}

.form-group>label {
    font-weight: bold;
    font-size: .8em;
    color: #333;
}

.form-group>input {
    border: 1px solid #333;
    border-radius: .25em;
    font-size: 1rem;
    padding: .25em;
}

.step-title {
    margin: 0;
    margin-bottom: 1rem;
    text-align: center;
}

.cards.active {
    display: block;
    animation: slide 250ms 125ms ease-in-out both;
}

.multi-step-form {
    overflow: hidden;
    position: relative;
}

.hide {
    display: none;
}

@keyframes slide {
    0% {
        transform: translateX(200%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fade {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(.75);
        opacity: 0;
    }

    100% {
        opacity: 0;
        transform: scale(0);
    }
}`





    isSubmittingText += `const isSubmitting = navigation.formAction == '/${getRootRoutes().includes(jpaName) ? `${objectName}s/new` : `${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/new`}';`

    //  on-submit path
    formOnSubmitActionPath += `${getRootRoutes().includes(jpaName)
      ?
      `'/${objectName}s/new'`
      :
      `${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/new`}`

    /********************************************************************************
     *                        component NewAction.js
     ********************************************************************************/

    newActionBody = generateAction(
      jpaName,
      getRootRoutes().includes(jpaName),
      result['primaryKey'],
      result['virtualPKColumn'],
      result['pathVariableObject'],
      ConfigObject.getBackendURI(),
      directParentRoutePath,
      parentJpaName,
      result['targetJpaParentPK'],
      'new'
    )
// console.log(dataSourceProviderResultSet);
    reportLayout = `
    export const reportLayout = {
      reportTitle: "${singularLable}",
      reportName: "${objectName}",
      // columns: [\${dataSourceProviderResultSet}],
      columns: [ {
        field: "expertIdTitle",
        title: "کارشناس",
        percent: 8,
        content: null,
      }, {
        field: "tafCode",
        title: "شماره تفاهم نامه",
        percent: 10,
        content: null,
      }, {
        field: "title",
        title: "عنوان تفاهم نامه",
        percent: 12,
        content: null,
      }, {
        field: "expireDate",
        title: "تاریخ انتقضاء",
        percent: 8,
        content: null,
      }, {
        field: "sumCntrctAmntSum",
        title: "مبلغ پرداخت شده",
        percent: 12,
        content: null,
      }, {
        field: "sumPrpslTypeCount",
        title: "تعداد پرداختی",
        percent: 12,
        content: null,
      }, {
        field: "sumAvgAmnt",
        title: "جمع منابع",
        percent: 12,
        content: null,
      }, {
        field: "spclApprvlAvgAmnt",
        title: "معدل حساب شده",
        percent: 12,
        content: null,
      }, {
        field: "seri",
        title: "شماره مصوبه",
        percent: 12,
        content: null,
      }],
      rows: null,
    }`;


    // reportRouteBody.length > 0 &&
    createFile(
      `${componentSearchPath}`,
      `${objectName}ColumnLayout.js`,
      reportLayout
    );

    searchloaderImport += `
import { reportLayout } from "./${objectName}ColumnLayout";
import { removeSlashFromDate } from '../../../util/Date';
`

  });

  /********************************************************************************
  *                        storedProcedures API
  ********************************************************************************/

  Object.keys(applicationObject['dataAccessLayer']['storedProcedures'])?.map((storedProcedureName) => {

    hasAnyValidCreateMethod = applicationObject.hasAnyValidCreateMethod(jpaName)

    /********************************************************************************
     *                        component NewRoute.js
    ********************************************************************************/

    searchRouteBody.length == 0 && (searchRouteBody += `import * as React from 'react';

// import ${className}New from './${objectName}New';
// import { loader as ${objectName}NewLoader } from './${objectName}NewLoader';
// import { action as ${objectName}NewAction } from './${objectName}NewAction';

export const ${objectName}NewRoute = {
  path: '${objectName}s/new',
  // element: <${className}New />,
  element: <></>,
  // loader: ${objectName}NewLoader,
  // action: ${objectName}NewAction,
};
`);


    /********************************************************************************
    *                        component NewLoader.js
    ********************************************************************************/
    searchLoaderBodyResponse += `
    const call${firstLetterCaptalize(storedProcedureName)}Response = await sendRequest(
      \`${backendUrl}/${parentJpaName}s/${objectName}s/${storedProcedureName}?page=\${
        page ? Number(page) - 1 : 0
      }&size=2\`,
      'GET',
      null
    );
    `;
    stotedProcedureReturn += `, ${storedProcedureName}DataSource : call${firstLetterCaptalize(storedProcedureName)}Response.data`

    /********************************************************************************
    *                        component New.jsx
    ********************************************************************************/

    searchFormBodyContent.length > 0 && (
      stotedProcedureResponse += `let ${storedProcedureName}DataSource = loaderData.${storedProcedureName}DataSource;`)
  })

  newFormBodyStart += `
export default function ${objectName}New() {
  
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  const actionData = useActionData();
  const submit = useSubmit();
  ${isSubmittingText}

  const [state, setState] = useState({...loaderData['data']});
  
  ${new_Component_StateVariables}

  //  on-loader useEffect
useEffect(() => {
  ${initializeSystemVariable.length > 0 || needToConvertColumnArray2.length > 0
      ? `
  setState({
    ${initializeSystemVariable}${initializeSystemVariable.length > 0 ? `,` : ''}
      ${needToConvertColumnArray2.length > 0 ? '//  Columns need to convert before use' : ``}${needToConvertColumnArray2.map(i => `
      ['${i}']: loaderData.data.${i}.split(',')`)
      }
  })      
      `
      : ''
    }
    ${new_Initialize_OnLoader_DataSources}
    ${new_Initialize_OnForm_DataSources}
    ${newMultiStepSupported == true ? `multiStepFormScript()` : ''}
  }, []);

const onChangeData = (e) => {
  setState(prevState => ({
    //  Computed property name
    ...prevState,
    [\`\${e.target.id}\`]: e.target.value,
    }));
  };
  
  // const onChangeStatus = (e) => {
  //   if (e.target.type == 'checkbox') {
  //     setState(prevState => ({
  //       ...prevState,
  //       [\`\${e.target.name}\`]:
  //         typeof state[e.target.name] != 'undefined'
  //           ?
  //           (state[e.target.name]).includes(e.target.value.toString())
  //             ?
  //             //  Array.prototype.filter() always returns Array
  //             state[e.target.name].filter((idx) => { return idx !== e.target.value.toString() })
  //             :
  //             [...state[e.target.name], e.target.value.toString()]
  //           : [e.target.value.toString()]
  //     }))
  //   } else if (e.target.type == 'radio') {
  //     setState(prevState => ({
  //       ...prevState,
  //       [\`\${e.target.name}\`]: e.target.value
  //     }))
  //   } else if (e.target.type == 'select-one') {
  //     setState(prevState => ({
  //       ...prevState,
  //       [\`\${e.target.name}\`]: e.target.selectedIndex
  //     }))
  //   }\${new_OnChangeStatus_Body}
  // };

  const stateChangedIndex = () => {
    return Object.keys(state).findIndex(item => loaderData['data'][item] != state[item])
  }

  ${new_ReactComponent_OnForm_UseEffect}
  ${stotedProcedureResponse}
  ${new_OnBlur_CallPlace}

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
        ${newMultiStepSupported == true ? 'data-multi-step className="multi-step-form"' : ''}
        onKeyDown={e => {
          if (e.key == 'Enter') {
            e.preventDefault()
          }
        }}
        ${objectName == 'search'
      ? `
        action="/tafahomInformations/123/searchs/new"`
      : `
        onSubmit={(e) => {
          e.preventDefault()
          if (stateChangedIndex() > -1){
            let formData = new FormData();
            formData = { ...state }
            submit(formData, {
              method: "post",
              // action: "\${formOnSubmitActionPath}"
            })
          } else {
            alert('nothing changed!')
          }
      }}`}
      >
    `

  if (hasAnyValidCreateMethod) {

    isPathExists(componentSearchPath);

    searchRouteBody.length > 0 &&
      createFile(
        `${componentSearchPath}`,
        `${objectName}Route.js`,
        searchRouteBody
      );


    searchLoaderBodyClose = `
    return { 
      data: {
        ...reportLayout, rows: callListDetailResponse.data
      },
      formData: { "tafCodee": 0, "title": '', "customerName": '', "branchManagement": 0, "branch": 0, "startDate": 0, "expireDate": 0, "seri": '', "branchManagement": '', 'branch': '', "tafState": 3, "filterCode": 0 },
      activeProfile: fakeAuthProvider.activeProfile
      ${search_Loader_ReturnString} }
  } catch (err) {
    //  AXIOS Error
    throw err
  }
}
`
    const searchLoaderContent = `${searchloaderImport}
    export async function loader({ request, params }) {
      // If the user is not logged in and tries to access \`/protected\`, we redirect
      // them to \`/login\` with a \`from\` parameter that allows login to redirect back
      // to this page upon successful authentication
    
      const url = new URL(request.url);

      const page = url.searchParams.get('page');
      const title = url.searchParams.get('title');
      const tafState = url.searchParams.get('tafState');
      const tafCode = url.searchParams.get('tafCode');
      const seri = url.searchParams.get('seri');
      const branchManagement = url.searchParams.get('branchManagement');
      const branch = url.searchParams.get('branch');
      const startDate = url.searchParams.get('startDate');
      const expireDate = url.searchParams.get('expireDate');
    
      if (!fakeAuthProvider.isAuthenticated) {
        let params = new URLSearchParams();
        params.set('from', new URL(request.url).pathname);
        return redirect('/login?' + params.toString());
      }
      try { 
  ${searchLoaderBodyResponse}

  ${searchLoaderBodyClose}`

    //     if (objectName == 'search') {
    //       searchLoaderContent = `    const callListDetailResponse = await sendRequest(\`${backendUrl}/listDetails?page=\${page ? Number(page) - 1 : 0
    //     }\&size=2\`,
    //     "POST",
    //     { "tafCode": 0, "tafTitle": '', "customerName": '', "extCustId": 0, "startDateAz": 0, "expireDateTa": 0, "seri": '', "branchManagement": '', 'branch': '', "expertId": 0, "lstTypeCode": params['lstTypeCode'], "filterCode": 0 }
    // );
    // `
    //     }
    searchLoaderContent.length > 0 &&
      createFile(
        `${componentSearchPath}`,
        `${objectName}Loader.js`,
        searchLoaderContent
      );


    newActionBody.length > 0 &&
      createFile(
        `${componentSearchPath}`,
        `${objectName}Action.js`,
        newActionBody
      );

    searchComponentContent = `
${search_Form_ImportString}
${newFormBodyStart}
${searchFormBodyContent}
${newFormBodyEnd}
`

    searchComponentContent = `
${search_Form_ImportString}
import _ from "lodash";
import { fakeAuthProvider } from "../../../auth";
import { Report } from '../../UIComponent/report/Report';

const MainReport = () => {

const submit = useSubmit()
const loaderData = useLoaderData();
const navigation = useNavigation();
const [searchParam, setSearchParam] = useSearchParams();

const [state, setState] = useState({ ...loaderData.formData });


const {data} = loaderData;
let formData = new FormData()
const isSubmitting = navigation.formAction == '/tafahomInformations/new';


const onChangeData = (e) => {
  setState(prevState => ({
    //  Computed property name
    ...prevState,
    [\`\${e.target.id}\`]: e.target.value,
  }));
};

const [branchManagement, setBranchManagement] = useState('');
let branchManagementDataSource = loaderData.branchManagementDataSource;
const [branch, setBranch] = useState({branch: '', title: ''}); 
const [branchDataSource, setBranchDataSource] = useState([]); 

const filterData = data.rows == null ? [] : data.rows.map((row) => 
  JSON.parse(
    \`{${dataSourceProvider_ResultSet_JSON}
    }\`)
);

const handleRowClick = (row) => {
  // submit(JSON.stringify(row, (_, v) => typeof v === 'bigint' ? v.toString() : v), { method: "POST", encType: "application/json" })
  submit(
    null,
    { method: "GET", action: \`/tafahomInformations/\${row['archiveNumber']}\` }
  )
};

const stateChangedIndex = () => {
  return Object.keys(state).findIndex(item => loaderData['data'][item] != state[item])
}

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          setSearchParam({ 
            title: state.title, 
            tafState: state.tafState,
            tafCode: state.tafCodee,
            seri: state.seri,
            branchManagement: branchManagement.title,
            branch: branch.title,
            startDate: state.startDate,
            expireDate: state.expireDate
          })
        }}
      >
    ${searchFormBodyContent}
        <br />
        <div className="row mx-1 my-1 align-items-center justify-content-center">
          <div className='col-4'></div>
          <div className="d-grid col text-center">
            <button
              type="submit"
              className={stateChangedIndex() > -1 ? "btn btn-sm btn-outline-primary" : "btn btn-sm btn-outline-secondary"}
              // disabled={stateChangedIndex() > -1 ? false : true}
            >
              {isSubmitting ? 'درحال جستجوی اطلاعات...' : lables.retrive}
            </button>
          </div>
          <div className='col-4'></div>
        </div>
        <br />
      </Form>
      <div className="row mx-1 my-1 align-items-center justify-content-center">
        <Report
          id="uniqueCode"
          name="uniqueCode"
          data={data}
          filterData={filterData}
          onRowClick={handleRowClick}
          disabled={false}
          isVisible={true}
          mode={"report"}
          // pageSize={[15]}
          showBackIcon={true}
        />
      </div>
    </>  
);
};

export default MainReport;
`

    searchComponentContent.length > 0 &&
      createFile(`${componentSearchPath}`, `${objectName}.jsx`, searchComponentContent);
  }

  property.length > 0 &&
    createFile(
      `${componentOwnPath}`,
      `${objectName}OperationLables_fa.js`,
      property
    );

  newMultiStepSupported == true &&
    createFile(
      `${componentOwnPath}`,
      `${objectName}Style.css`,
      style
    );

  newMultiStepSupported == true &&
    createFile(
      `${componentOwnPath}`,
      `${objectName}Script.js`,
      script
    );

};

module.exports = ClientProjectSearchGenerator;
