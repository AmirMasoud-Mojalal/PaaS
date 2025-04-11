const { getRoutePathString, getRootRoutes } = require('../../ContentMapValidator');
const { getPrimaryKeyByJpaName } = require('../../DomainConfig');

const {
  isEmptyCell,
  isEmptyRow,
  isRadioComponent,
  isCheckComponent,
  isTextComponent,
  isTextAreaComponent,
  isTextWithResultSetDataSourceComponent,
  isTextWithResultSetDataSourceAndOnBlurEventComponent,
  // isTextWithOwnDataSourceComponent,
  isTextWithObjectDataSourceAndOnBlurEvent,
  isTextWithStateDataSourceComponent,
  isSelectComponent,
  isSelectWithAOComponent,
  isSelectWithStaticArrayDSComponent,
  isSwitchComponent,
  isDatePickerComponent,
  isPreAllocatingPrimaryKey,
  isFileUploadComponent,
  isTableWithInputComponent,
  isTextWithObjectDataSource,
  isSelectWithObjectDataSourceComponent,
  isIncludedCustomerComponent,
  isTafStateComponent,
  isLoanStateComponent,
  isSendToHQComponent,
  isSpanComponent,
  isSmsUserSelectionComponent,
  isRadioWithAOComponent,
  isReportComponent,
  isCommitmentsReportComponent,
  iscustomerRialResourceReportComponent,
  iscustomerArzResourceReportComponent,
  iscustomerRialResourceAvgReportComponent,
  iscustomerArzResourceAvgReportComponent,
  isCustomerProfileReportComponent,
  isLendingReportComponent,
  isCollateralReportComponent,
  isCostBenefitComponent,
  isEmailComponent,
  isTelphoneNumberComponent,
  isAmountComponent,
  isSearchComponent,
  isSearchReportComponent,
  isPerformanceReportComponent,
  isMultiSpanComponent,
} = require('./objectForm/objectFormValidator');
const radioComponentBody = require('./objectForm/radio/radioComponentBody');
const radioWithAOComponentBody = require('./objectForm/radioWithAO/radioWithAOComponentBody');
const spanComponentBody = require('./objectForm/span/spanComponentBody');
const multiSpanComponentBody = require('./objectForm/multiSpan/multiSpanComponentBody');
const checkboxComponentBody = require('./objectForm/check/checkboxComponentBody');
const textComponentBody = require('./objectForm/text/textComponentBody');
const textAreaComponentBody = require('./objectForm/textArea/textAreaComponentBody');
const textWithResultSetDataSourceComponentBody = require('./objectForm/textWithResultSetDataSource/textWithResultSetDataSourceComponentBody');
const textWithResultSetDataSourceAndOnBlurEvent = require('./objectForm/textWithResultSetDataSourceAndOnBlurEvent/textWithResultSetDataSourceAndOnBlurEventComponentBody');
// const textWithOwnDataSourceComponentBody = require('./objectForm/textWithOwnDataSource/textWithOwnDataSourceComponentBody');
const textWithObjectDataSource = require('./objectForm/textWithObjectDataSource/TextWithObjectDataSourceComponentBody');
const textWithObjectDataSourceAndOnBlurEvent = require('./objectForm/textWithObjectDataSourceAndOnBlurEvent/TextWithObjectDataSourceAndOnBlurEventComponentBody');
const textWithStateDataSourceComponentBody = require('./objectForm/textWithStateDataSource/textWithOwnStateDataSourceComponentBody');
const selectComponentBody = require('./objectForm/select/selectComponentBody');
const selectWithAOComponentBody = require('./objectForm/selectWithAo/selectWithAOComponentBody')
const selectWithStaticArrayDS = require('./objectForm/selectWithStaticArrayDS/selectWithStaticArrayDSComponentBody');
const selectWithObjectDataSource = require('./objectForm/selectWithObjectDataSource/selectWithObjectDataSourceComponentBody');
const switchComponentBody = require('./objectForm/switch/switchComponentBody');
const datePickerComponent = require('./objectForm/datePicker/datePickerComponentBody');
const fileUploaderComponent = require('./objectForm/fileUpload/fileUploadBody');
const tableWithInputComponent = require('./objectForm/tableWithInputText/tableWithImputTextComponentBody');
const searchReportComponent = require('./objectForm/searchComponent/searchReportComponentBody');
const includedCustomerComponentBody = require('./objectForm/includedCustomerComponentBody');
const tafStateComponentBody = require('./objectForm/tafStateComponentBody');
const loanStateComponentBody = require('./objectForm/loanStateComponentBody');
const sendToHQComponentBody = require('./objectForm/sendToHQComponentBody');
const smsUserSelectionComponentBody = require('./objectForm/smsUserSelectionComponentBody');
const reportComponentBody = require('./objectForm/reportComponentBody');
const commitmentsReportComponent = require('./objectForm/commitmentsReportComponent');
const customerRialResourceReportComponentBody = require('./objectForm/report/customerRialResourceReportComponentBody');
const customerArzResourceReportComponentBody = require('./objectForm/report/customerArzResourceReportComponentBody');
const customerRialResourceAvgReportComponentBody = require('./objectForm/report/customerRialResourceAvgReportComponentBody');
const customerArzResourceAvgReportComponentBody = require('./objectForm/report/customerArzResourceAvgReportComponentBody');
const lendingReportComponentBody = require('./objectForm/report/lendingReportComponentBody');
const collateralReportComponentBody = require('./objectForm/report/collateralReportComponentBody');
const costBenefitReportComponentBody = require('./objectForm/report/costBenefitReportComponentBody');
const customerProfileReportComponentBody = require('./objectForm/report/customerProfileReportComponentBody');
const performanceReportComponentBody = require('./objectForm/report/performanceReportComponentBody');
const emailComponentBody = require('./objectForm/email/emailComponentBody')
const telphoneNumberComponentBody = require('./objectForm/telphoneNumber/telphoneNumberComponentBody')
const amountComponentBody = require('./objectForm/amount/amountComponentBody')
const emptyCell = require('./objectForm/emptyCell')
const emptyRow = require('./objectForm/emptyRow')
// import { getDataSourceProvider } from '../../util'

const { firstLetterCaptalize, getColumnDataSourceProvider } = require('../../util');
const { data } = require('autoprefixer');
const { evaluateExpression } = require('../../RuleEngine/ruleManager');

//  1) Extract dataSourceProviderObject
// exports.generate = (content) => {
//     let columnObjects = {};
//     let dataSourceProviderObject = {}
//     let dataSourceProviderObject2 = {
//         storedProcedure: [],
//         restService: [],
//         systemObject: []
//     }

//     //  1) Extract dataSourceProviderObject
//     for (row of content) {
//         for (col of row) {
//             if (col['value']['type'] !== 'emptyCell') {

//                 const columnTitle = col['title'];
//                 columnObjects = {
//                     ...columnObjects,
//                     [columnTitle]: '',
//                 };

//                 const dataSourceProvider = getColumnDataSourceProvider(col)
//                 // console.log(dataSourceProvider);
//                 Object.keys(dataSourceProvider).length > 0
//                     ?
//                     (
//                         Object.keys(dataSourceProvider).includes('storedProcedure')
//                             ?
//                             (
//                                 dataSourceProviderObject['storedProcedure'] = {
//                                     ...dataSourceProviderObject['storedProcedure'],
//                                     [dataSourceProvider['storedProcedure']['name']]: { ...dataSourceProvider['storedProcedure'], colTitle: col['title'] }
//                                 },
//                                 dataSourceProviderObject2['storedProcedure'] = [
//                                     ...dataSourceProviderObject2['storedProcedure'],
//                                     { ...dataSourceProvider['storedProcedure'], colTitle: col['title'] }
//                                 ]
//                             )
//                             :
//                             Object.keys(dataSourceProvider).includes('restService')
//                                 ?
//                                 (
//                                     dataSourceProviderObject['restService'] = {
//                                         ...dataSourceProviderObject['restService'],
//                                         [dataSourceProvider['restService']['name']]: { ...dataSourceProvider['restService'], colTitle: col['title'] }
//                                     },
//                                     dataSourceProviderObject2['restService'] = [
//                                         ...dataSourceProviderObject2['restService'],
//                                         { ...dataSourceProvider['restService'], colTitle: col['title'] }
//                                     ]
//                                 )
//                                 :
//                                 Object.keys(dataSourceProvider).includes('systemObject')
//                                     ?
//                                     (
//                                         dataSourceProviderObject['systemObject'] = {
//                                             ...dataSourceProviderObject['systemObject'],
//                                             [dataSourceProvider['systemObject']['name']]: { ...dataSourceProvider['systemObject'], colTitle: col['title'] }
//                                         },
//                                         dataSourceProviderObject2['systemObject'] = [
//                                             ...dataSourceProviderObject2['systemObject'],
//                                             { ...dataSourceProvider['systemObject'], colTitle: col['title'] }
//                                         ]
//                                     )
//                                     :
//                                     ''
//                     )
//                     :
//                     ''
//             }
//         }
//     }
// }

exports.constanctStrings = {
  formBodyStart: ``,
  formBodyEnd: `
      <br />
      <br />
      <br />
      <div className="row mx-1 my-1 align-items-center justify-content-center">
        <div className="d-grid col text-center">
          <button
            type="submit"
            className={stateChangedIndex() > -1 ? "btn btn-sm btn-outline-primary" : "btn btn-sm btn-outline-secondary"}
            disabled={stateChangedIndex() > -1 ? false : true}
          >
            {isSubmitting ? 'درحال ذخیره اطلاعات...' : lables.confirm}
          </button>
        </div>
      </div>
      <br />
    </Form>
    </div>
    );
    }`,
  loaderImport: `import { fakeAuthProvider } from '../../../auth';
import { json, redirect, useSearchParams } from 'react-router-dom';
import { sendRequest } from '../../../util/makeRequest';`,
  loaderBody: `
export async function loader({ request, params }) {
  // If the user is not logged in and tries to access \`/protected\`, we redirect
  // them to \`/login\` with a \`from\` parameter that allows login to redirect back
  // to this page upon successful authentication

  const url = new URL(request.url);
  const page = url.searchParams.get('page');
  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }
  try { 
  `
}

exports.generateReactForm = (appObjectId, rows, mode, multiStepTitles) => {
  // if(appObjectId=='tafahomInformation'){
  //   console.log(rows);
  // }
  let space = '            '
  let formBody = ``;
  let formImportObjects = {};
  let needToConvertColumnArray = []
  let columnWithDateType = []
  let multiStepSectoin = ``

  let result;

  let multiStepSupported = (multiStepTitles.length > 0) ? true : false
  let activeStep = 0

  const multiStepActiveRowStart = `
        <div className='cards data-step active' data-step>

        <div className="row mx-1 my-1 align-items-center justify-content-center">
        <div className="col-2 text-end" >
        {/*
          <a
            title='قبلی'
            container="body"
            data-bs-toggle="tooltip"
            className="icon-link data-next"
          >
            <i className="bi bi-arrow-right fs-4" data-previous /><small>صفحه قبلی</small>
          </a>
        */}
        </div>
        <div className="col-8 text-start">
          <h3 className='step-title text-body-secondary fw-semibold fs-5'>${multiStepTitles[0]}</h3>
        </div>
        <div className="col-2 text-start" /* style={{ transform: 'rotate(180deg)' }} */>
          <a
            title='بعدی'
            container="body"
            data-bs-toggle="tooltip"
            className="icon-link"
          >
            <small style={{ cursor: 'pointer' }} data-next>صفحه بعد</small><i className="bi bi-arrow-left fs-4" data-next />
          </a>
        </div>
      </div>`
  const multiStepActiveRowEnd = `
        </div>`

  const multiStepNormalRowStart = `
        <div className='cards data-step' data-step>`
  const multiStepNormalRowEnd = `
    </div>`

  const stepStart = `
    <div className="col-2 text-end" >
        <a
            title='Next'
            container="body"
            data-bs-toggle="tooltip"
            className=""
        >
            <i className="bi bi-arrow-right fs-4 pe-2" data-next /><small style={{ cursor: 'pointer' }} data-previous>صفحه قبلی</small>
        </a>
    </div>
    <div className="col-8 text-start">
      <h3 className='step-title text-body-secondary fw-semibold fs-5'>This is step 1</h3>
    </div>
    <div className="col-2 text-start" /* style={{ transform: 'rotate(180deg)' }} */>
      <a
        title='Prev'
        container="body"
        data-bs-toggle="tooltip"
        className="data-next"
      >
        <small style={{ cursor: 'pointer' }} data-next>صفحه بعد</small><i className="bi bi-arrow-left fs-4 pe-2" data-previous />
      </a>
    </div>
</div>`
  const stepEnd = `</div>`


  const rowStart = `
          <div className="row mx-1 my-1 align-items-center justify-content-center">`;
  const rowEnd = `
          </div>`;
  const colStart = `
            <div className="col">`;
  const colEnd = `
            </div>`;

  const addImportObject = (importObject) => {
    Object.keys(importObject).map((object) => {
      object in formImportObjects
        ? (formImportObjects = {
          ...formImportObjects,
          [object]: {
            default: {
              ...formImportObjects[object]['default'],
              ...importObject[object]['default'],
            },
            nonDefault: {
              ...formImportObjects[object]['nonDefault'],
              ...importObject[object]['nonDefault'],
            },
          },
        })
        : (formImportObjects[object] = importObject[object]);
    });
  };

  addImportObject({
    react: { default: { React: '' }, nonDefault: { useEffect: '' } },
    'react-router-dom': {
      default: {},
      nonDefault: {
        Form: '',
        Link: '',
        useLoaderData: '',
        useActionData: '',
        useNavigation: '',
        useSubmit: '',
        useSearchParams: '',
      },
    },
    [`../${appObjectId}OperationLables_fa`]: {
      default: {},
      nonDefault: {
        [`${appObjectId}OperationLables as lables`]: '',
      },
    },
    '../../UIComponent/breadcrumb/Breadcrumb': {
      default: {},
      nonDefault: {
        Breadcrumb: '',
      },
    },
  });
  //  we have added one row and two columns to each JPA in getJpaByJpaName.js file 
  //      1)  parent primaryKey with 'isIndex=true' column
  //      2)  idColumn column e.i. a new primary key column 
  //  exclude those two columns to NOT show them in New/Edit/View client projects
  // if (rows[0].some(e => Object.keys(e['value']['schema']).includes('isPreAllocatingPrimaryKey'))) {
  //     ([first, ...rest] = rows)
  //     rows = rest
  // }




  formBody += multiStepSupported == true ? multiStepActiveRowStart : ''
  let rowStep = 0
  for (const row of rows) {
    if (multiStepSupported == true) {
      //  we suppose first col['step'] starts from 0, all [step: 1] are comming after [step: 0]
      //  as we set activeStep to 0
      if (row[0]['step'] == activeStep) {
      } else {
        activeStep = activeStep + 1

        // if (appObjectId === 'finantialStatementAbstract') {
        // if (appObjectId === 'smsParameter') {
        // console.log(row[0]);
        // console.log(row[0]['title']);
        // }

        if (row[0]['step'] == multiStepTitles.length - 1) {
          formBody += (multiStepActiveRowEnd + multiStepNormalRowStart)
          formBody += `
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                        <div className="col-2 text-end" >
                          <a
                            title='قبلی'
                            container="body"
                            data-bs-toggle="tooltip"
                            className="icon-link data-next"
                          >
                            <i className="bi bi-arrow-right fs-4" data-previous /><small style={{ cursor: 'pointer' }} data-previous>صفحه قبلی</small>
                          </a>
                        </div>
                        <div className="col-8 text-start">
                          <h3 className='step-title text-body-secondary fw-semibold fs-5 '>${multiStepTitles[row[0]['step']]}</h3>
                        </div>
                        <div className="col-2 text-start" /* style={{ transform: 'rotate(180deg)' }} */>
                          {/*
                            <a
                              title='بعدی'
                              container="body"
                              data-bs-toggle="tooltip"
                              className="icon-link"
                            >
                              <small style={{ cursor: 'pointer' }} data-next>صفحه بعد</small><i className="bi bi-arrow-left fs-4" data-next />
                            </a>
                          */}
                        </div>
                      </div>`
        }
        else if (row[0]['step'] < multiStepTitles.length - 1) {
          // console.log('Y')
          formBody += (multiStepActiveRowEnd + multiStepNormalRowStart)
          formBody += `
                      <div className="row mx-1 my-1 align-items-center justify-content-center">
                        <div className="col-2 text-end" >
                          <a
                            title='قبلی'
                            container="body"
                            data-bs-toggle="tooltip"
                            className="icon-link data-next"
                          >
                            <i className="bi bi-arrow-right fs-4" data-previous /><small style={{ cursor: 'pointer' }} data-previous>صفحه قبلی</small>
                          </a>
                        </div>
                        <div className="col-8 text-start">
                          <h3 className='step-title text-body-secondary fw-semibold fs-5'>${multiStepTitles[row[0]['step']]}</h3>
                        </div>
                        <div className="col-2 text-start" /* style={{ transform: 'rotate(180deg)' }} */>
                          <a
                            title='بعدی'
                            container="body"
                            data-bs-toggle="tooltip"
                            className="icon-link"
                          >
                            <small style={{ cursor: 'pointer' }} data-next>صفحه بعد</small><i className="bi bi-arrow-left fs-4" data-next />
                          </a>
                        </div>
                      </div>`
        }

      }
    }
    formBody += rowStart;

    for (col of row) {
      // formBody += colStart;

      // // isTextAreaComponent(col)
      // //     && ((result = textAreaComponentBody(col, mode)),
      // //         addImportObject(result.import),
      // //         (formBody += result.body))
      // if (isTextAreaComponent(col) == true) {
      //     result = textAreaComponentBody(col, mode)
      //     addImportObject(result.import)
      //     if (multiStepSupported == true) {
      //         //  we suppose first col['step'] starts from 0, all [step: 1] are comming after [step: 0]
      //         //  as we set activeStep to 0
      //         if (col['step'] == activeStep) {
      //             formBody += result.body
      //         } else {
      //             formBody += multiStepActiveRowEnd + result.body
      //             activeStep = activeStep + 1
      //         }

      //     } else {
      //         formBody += result.body
      //     }
      // }

      // // isTextWithDataSourceComponent(col)
      // //     && ((result = textWithDataSourceComponentBody(col, mode)),
      // //         addImportObject(result.import),
      // //         (formBody += result.body))
      // if (isTextWithDataSourceComponent(col) == true) {
      //     result = textWithDataSourceComponentBody(col, mode)
      //     addImportObject(result.import)
      //     if (multiStepSupported == true) {
      //         //  we suppose first col['step'] starts from 0, all [step: 1] are comming after [step: 0]
      //         //  as we set activeStep to 0
      //         if (col['step'] == activeStep) {
      //             formBody += result.body
      //         } else {
      //             formBody += multiStepActiveRowEnd + result.body
      //             activeStep = activeStep + 1
      //         }

      //     } else {
      //         formBody += result.body
      //     }
      // }

      // // isSelectComponent(col)
      // //     && ((result = selectComponentBody(col, mode)),
      // //         addImportObject(result.import),
      // //         (formBody += result.body))
      // if (isSelectComponent(col) == true) {
      //     result = selectComponentBody(col, mode)
      //     addImportObject(result.import)
      //     if (multiStepSupported == true) {
      //         //  we suppose first col['step'] starts from 0, all [step: 1] are comming after [step: 0]
      //         //  as we set activeStep to 0
      //         if (col['step'] == activeStep) {
      //             formBody += result.body
      //         } else {
      //             formBody += multiStepActiveRowEnd + result.body
      //             activeStep = activeStep + 1
      //         }

      //     } else {
      //         formBody += result.body
      //     }
      // }

      // // isRadioComponent(col)
      // //     && ((result = radioComponentBody(col, mode)),
      // //         addImportObject(result.import),
      // //         (formBody += result.body))

      // if (isRadioComponent(col) == true) {
      //     result = radioComponentBody(col, mode)
      //     addImportObject(result.import)
      //     if (multiStepSupported == true) {
      //         //  we suppose first col['step'] starts from 0, all [step: 1] are comming after [step: 0]
      //         //  as we set activeStep to 0
      //         if (col['step'] == activeStep) {
      //             formBody += result.body
      //         } else {
      //             formBody += multiStepActiveRowEnd + result.body
      //             activeStep = activeStep + 1
      //         }

      //     } else {
      //         formBody += result.body
      //     }
      // }

      // // isCheckComponent(col)
      // //     && ((result = checkboxComponentBody(col, mode)),
      // //         addImportObject(result.import),
      // //         (formBody += result.body),
      // //         needToConvertColumnArray.push(col['title']))

      // if (isCheckComponent(col) == true) {
      //     result = checkboxComponentBody(col, mode)
      //     addImportObject(result.import)
      //     if (multiStepSupported == true) {
      //         //  we suppose first col['step'] starts from 0, all [step: 1] are comming after [step: 0]
      //         //  as we set activeStep to 0
      //         if (col['step'] == activeStep) {
      //             formBody += result.body
      //         } else {
      //             formBody += multiStepActiveRowEnd + result.body
      //             activeStep = activeStep + 1
      //         }

      //     } else {
      //         formBody += result.body
      //     }
      // }

      // // isSwitchComponent(col)
      // //     && ((result = switchComponentBody(col, mode)),
      // //         addImportObject(result.import),
      // //         (formBody += result.body),
      // //         needToConvertColumnArray.push(col['title']))
      // if (isSwitchComponent(col) == true) {
      //     result = switchComponentBody(col, mode)
      //     addImportObject(result.import)
      //     if (multiStepSupported == true) {
      //         //  we suppose first col['step'] starts from 0, all [step: 1] are comming after [step: 0]
      //         //  as we set activeStep to 0
      //         if (col['step'] == activeStep) {
      //             formBody += result.body
      //         } else {
      //             formBody += multiStepActiveRowEnd + result.body
      //             activeStep = activeStep + 1
      //         }

      //     } else {
      //         formBody += result.body
      //     }
      // }

      // // isDatePickerComponent(col)
      // //     && ((result = datePickerComponent(col, mode)),
      // //         addImportObject(result.import),
      // //         (formBody += result.body))
      // if (isDatePickerComponent(col) == true) {
      //     result = datePickerComponent(col, mode)
      //     addImportObject(result.import)
      //     if (multiStepSupported == true) {
      //         //  we suppose first col['step'] starts from 0, all [step: 1] are comming after [step: 0]
      //         //  as we set activeStep to 0
      //         if (col['step'] == activeStep) {
      //             formBody += result.body
      //         } else {
      //             formBody += multiStepActiveRowEnd + result.body
      //             activeStep = activeStep + 1
      //         }

      //     } else {
      //         formBody += result.body
      //     }
      // }

      // if (isPreAllocatingPrimaryKey(col) == false) {
      //     if (isTextComponent(col) == true) {
      //         result = textComponentBody(col, mode)
      //         addImportObject(result.import)
      //         if (multiStepSupported == true) {
      //             //  we suppose first col['step'] starts from 0, all [step: 1] are comming after [step: 0]
      //             //  as we set activeStep to 0
      //             if (col['step'] == activeStep) {
      //                 formBody += result.body
      //             } else {
      //                 formBody +=  result.body
      //                 // multiStepActiveRowEnd +
      //                 // activeStep = activeStep + 1
      //             }

      //         } else {
      //             formBody += result.body
      //         }
      //     }
      // }

      isEmptyCell(col)
        && (result = emptyCell(col, mode, space),
          formBody += result.body
        )

      isEmptyRow(col)
        && ((result = emptyRow(col, mode, space)),
          addImportObject(result.import),
          (formBody += result.body)),

        isRadioComponent(col)
        && ((result = radioComponentBody(col, mode, space)),
          addImportObject(result.import),
          (formBody += result.body))


      isRadioWithAOComponent(col)
        && ((result = radioWithAOComponentBody(col, mode, space)),
          addImportObject(result.import),
          (formBody += result.body))

      isSpanComponent(col)
        && ((result = spanComponentBody(col, mode, space)),
          addImportObject(result.import),
          (formBody += result.body))

      isMultiSpanComponent(col)
        && ((result = multiSpanComponentBody(col, mode, space)),
          addImportObject(result.import),
          (formBody += result.body))

      isCheckComponent(col)
        && (
          result = checkboxComponentBody(col, mode, space),
          addImportObject(result.import),
          (
            formBody += result.body),
          needToConvertColumnArray.push(col['title']
          )
        )
      !isPreAllocatingPrimaryKey(col) &&
        (
          //  region(tafahomInformation) & ownerName(Account)
          isTextComponent(col) &&
          (
            result = textComponentBody(col, mode, space),
            addImportObject(result.import),
            formBody += result.body
          )
        )
      // isTextComponent(col)
      // ? ((result = textComponentBody(col, mode)),
      //     addImportObject(result.import),
      //     (formBody += result.body))
      // : ``;
      isTextAreaComponent(col)
        && (
          result = textAreaComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )



      // customerName (tafahomInformation)
      // expertId (tafahomInformation)
      // isTextWithStateDataSourceComponent(col)
      //   &&
      //   (
      //     result = textWithStateDataSourceComponentBody(col, mode),
      //     addImportObject(result.import),
      //     formBody += result.body
      //   )

      //    TODO: sould be removed as datasource provider transfered into component itself and state remains in parent component
      // isTextWithOwnDataSourceComponent(col)
      //   &&
      //   (
      //     result = textWithOwnDataSourceComponentBody(col, mode),
      //     addImportObject(result.import),
      //     formBody += result.body
      //   )

      // ***********************************************Start**********************************************


      //  extCustId (tafahomInformation)
      isTextWithObjectDataSource(col)
        &&
        (
          result = textWithObjectDataSource(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      //  extCustId (tafahomInformation)
      isTextWithObjectDataSourceAndOnBlurEvent(col)
        &&
        (
          result = textWithObjectDataSourceAndOnBlurEvent(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )


      // branch
      isTextWithResultSetDataSourceComponent(col)
        &&
        (
          result = textWithResultSetDataSourceComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      //  branchManagement (tafahomInformation)
      isTextWithResultSetDataSourceAndOnBlurEventComponent(col)
        &&
        (
          result = textWithResultSetDataSourceAndOnBlurEvent(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isIncludedCustomerComponent(col)
        &&
        (
          result = includedCustomerComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isTafStateComponent(col)
        &&
        (
          result = tafStateComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isLoanStateComponent(col)
        &&
        (
          result = loanStateComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isSendToHQComponent(col)
        &&
        (
          result = sendToHQComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isSmsUserSelectionComponent(col)
        &&
        (
          result = smsUserSelectionComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isReportComponent(col)
        &&
        (
          result = reportComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      // ***********************************************End**********************************************
      isSelectComponent(col)
        && (
          result = selectComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isSelectWithAOComponent(col)
        && (
          // console.log(col['title']),
          result = selectWithAOComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isSelectWithStaticArrayDSComponent(col)
        && (
          result = selectWithStaticArrayDS(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isSelectWithObjectDataSourceComponent(col)
        && (
          result = selectWithObjectDataSource(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      // : '';
      isSwitchComponent(col)
        && (
          result = switchComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body,
          needToConvertColumnArray.push(col['title'])
        )
      // : '';
      isDatePickerComponent(col)
        && (
          (result = datePickerComponent(col, mode, space)),
          addImportObject(result.import),
          formBody += result.body
        )

      isFileUploadComponent(col)
        && (
          result = fileUploaderComponent(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isTableWithInputComponent(col)
        && (
          result = tableWithInputComponent(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isSearchReportComponent(col)
        && (
          result = searchReportComponent(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      isCommitmentsReportComponent(col)
        && (
          result = commitmentsReportComponent(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      iscustomerRialResourceReportComponent(col)
        && (
          result = customerRialResourceReportComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      iscustomerArzResourceReportComponent(col)
        && (
          result = customerArzResourceReportComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      iscustomerRialResourceAvgReportComponent(col)
        && (
          result = customerRialResourceAvgReportComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )
      iscustomerArzResourceAvgReportComponent(col)
        && (
          result = customerArzResourceAvgReportComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )
      isLendingReportComponent(col)
        && (
          result = lendingReportComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )
      isCollateralReportComponent(col)
        && (
          result = collateralReportComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )
      isCostBenefitComponent(col)
        && (
          result = costBenefitReportComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )
      isCustomerProfileReportComponent(col)
        && (
          result = customerProfileReportComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )
      isPerformanceReportComponent(col)
        && (
          result = performanceReportComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )
      isEmailComponent(col)
        && (
          result = emailComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )
      isTelphoneNumberComponent(col)
        && (
          result = telphoneNumberComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )
      isAmountComponent(col)
        && (
          result = amountComponentBody(col, mode, space),
          addImportObject(result.import),
          formBody += result.body
        )

      // formBody += colEnd;
    }
    formBody += rowEnd;



    // if (appObjectId == 'tafahomInformation') {
    // if (appObjectId == 'smsParameter') {
    //     console.log(row[0]['title']);
    // }

    rowStep = rowStep + 1
  }

  multiStepSupported == true ? (
    addImportObject({
      [`../${appObjectId}Script`]: { default: {}, nonDefault: { multiStepFormScript: '' } },
    }),
    addImportObject({
      [`../${appObjectId}Style.css`]: { default: {}, nonDefault: {} }
    })
  ) : ''
  formBody += multiStepSupported == true ? multiStepActiveRowEnd : ''

  return {
    formBody: formBody,
    formImportObjects: formImportObjects,
    needToConvertColumnArray: mode == 'new' ? [] : needToConvertColumnArray

  };
};

exports.generateImportString = (importsObject) => {
  let importString = ``;
  Object.keys(importsObject)?.map((obj) => {
    let defaultImportString = ``;
    let nonDefaultImportString = ``;
    let endPhrase = ``;

    if (Object.keys(importsObject[obj]['default']).length > 0) {
      Object.keys(importsObject[obj]['default'])?.map(
        (defaultImport, index) => {
          // console.log(importsObject[obj]['default']);
          endPhrase =
            index < Object.keys(importsObject[obj]['default']).length - 1
              ? `,`
              : ``;
          // console.log(index);
          // console.log(Object.keys(importsObject[obj]['default']).length - 1);
          defaultImportString += `${defaultImport}${endPhrase}`;
          // console.log(defaultImportString);

          // defaultImport += obj + endPhrase;
        }
      );
    }
    if (Object.keys(importsObject[obj]['nonDefault']).length > 0) {
      Object.keys(importsObject[obj]['nonDefault'])?.map(
        (nonDefaultImport, index) => {
          endPhrase =
            index < Object.keys(importsObject[obj]['nonDefault']).length - 1
              ? `, `
              : ``;
          // console.log(index);
          // console.log(Object.keys(importsObject[obj]['nonDefault']).length - 1);
          nonDefaultImportString += `${nonDefaultImport}${endPhrase}`;
          // console.log(nonDefaultImportString);
        }
      );
      // importsObject[obj]['nonDefault']?.map((obj, index) => {
      //   nonDefaultImport += obj + endPhrase;
      // });
    }
    if (
      Object.keys(importsObject[obj]['default']).length <= 0 &&
      Object.keys(importsObject[obj]['nonDefault']).length <= 0
    ) {
      defaultImportString = ``;
      nonDefaultImportString = ``;
    }

    importString += `
import ${defaultImportString.length ? defaultImportString : ``}` +
      `${defaultImportString.length > 0 && nonDefaultImportString.length > 0
        ?
        `, `
        :
        ``
      }` +
      `${nonDefaultImportString.length
        ?
        '{ ' + nonDefaultImportString + ' }'
        :
        ``
      }` +
      `${defaultImportString.length > 0 || nonDefaultImportString.length > 0
        ?
        ` from `
        :
        ``
      }` +
      `'${obj}';`;
  });

  return importString;
};;

exports.extractDataSourceProviderObject = (content) => {
  // only used in ClientNewProject to create empty string to initiate 'state'
  let columnObjects = {};
  let dataSourceProviderObject = {}
  let dataSourceProviderObject2 = {
    storedProcedure: [],
    restService: [],
    systemObject: []
  }
  let onBlurDataSourceProviderObject2 = {
    storedProcedure: [],
    restService: [],
    systemObject: []
  }

  //  1) Extract dataSourceProviderObject
  for (row of content) {
    for (col of row) {
      if (col['value']['type'] !== 'emptyCell') {

        const columnTitle = col['title'];

        columnObjects = {
          ...columnObjects,
          [columnTitle]: '',
        };

        const { dataSourceProvider, onBlurDataSourceProvider } = getColumnDataSourceProvider(col)

        Object.keys(dataSourceProvider).length > 0 && (
          Object.keys(dataSourceProvider).includes('storedProcedure')
            ?
            (
              // dataSourceProviderObject['storedProcedure'] = {
              //   ...dataSourceProviderObject['storedProcedure'],
              //   [dataSourceProvider['storedProcedure']['name']]: { ...dataSourceProvider['storedProcedure'], colTitle: col['title'] }
              // },
              dataSourceProviderObject2['storedProcedure'] = [
                ...dataSourceProviderObject2['storedProcedure'],
                {
                  ...dataSourceProvider['storedProcedure'],
                  colTitle: col['title'],
                  option: col['value']['schema']['option']
                }
              ]
            )
            :
            Object.keys(dataSourceProvider).includes('restService')
              ?
              (
                // dataSourceProviderObject['restService'] = {
                //   ...dataSourceProviderObject['restService'],
                //   [dataSourceProvider['restService']['name']]: { ...dataSourceProvider['restService'], colTitle: col['title'] }
                // },
                dataSourceProviderObject2['restService'] = [
                  ...dataSourceProviderObject2['restService'],
                  {
                    ...dataSourceProvider['restService'],
                    colTitle: col['title'],
                    option: col['value']['schema']['option']
                  }
                ]
              )
              :
              Object.keys(dataSourceProvider).includes('systemObject')
                ?
                (
                  // dataSourceProviderObject['systemObject'] = {
                  //   ...dataSourceProviderObject['systemObject'],
                  //   [dataSourceProvider['systemObject']['name']]: { ...dataSourceProvider['systemObject'], colTitle: col['title'] }
                  // },
                  dataSourceProviderObject2['systemObject'] = [
                    ...dataSourceProviderObject2['systemObject'],
                    {
                      ...dataSourceProvider['systemObject'],
                      colTitle: col['title'],
                      option: col['value']['schema']['option']
                    }
                  ]
                )
                :
                ''
        )

        Object.keys(onBlurDataSourceProvider).length > 0 && (
          Object.keys(onBlurDataSourceProvider).includes('storedProcedure')
            ?
            (
              onBlurDataSourceProviderObject2['storedProcedure'] = [
                ...onBlurDataSourceProviderObject2['storedProcedure'],
                {
                  ...onBlurDataSourceProvider['storedProcedure'],
                  colTitle: col['title'],
                  option: col['value']['schema']['option']
                }
              ]
            )
            :
            Object.keys(onBlurDataSourceProvider).includes('restService')
              ?
              (
                onBlurDataSourceProviderObject2['restService'] = [
                  ...onBlurDataSourceProviderObject2['restService'],
                  {
                    ...onBlurDataSourceProvider['restService'],
                    colTitle: col['title'],
                    option: col['value']['schema']['option']
                  }
                ]
              )
              :
              Object.keys(onBlurDataSourceProvider).includes('systemObject')
                ?
                (
                  onBlurDataSourceProviderObject2['systemObject'] = [
                    ...onBlurDataSourceProviderObject2['systemObject'],
                    {
                      ...onBlurDataSourceProvider['systemObject'],
                      colTitle: col['title'],
                      option: col['value']['schema']['option']
                    }
                  ]
                )
                :
                ''
        )
      }
    }
  }
  // return { columnObjects: columnObjects, dataSourceProviderObject: dataSourceProviderObject, dataSourceProviderObject2: dataSourceProviderObject2 }
  return {
    columnObjects: columnObjects,
    dataSourceProviderObject: dataSourceProviderObject,
    dataSourceProviderObject2: dataSourceProviderObject2,
    onBlurDataSourceProviderObject2: onBlurDataSourceProviderObject2
  }
}

//  Iterate over  dataSourceProvider2
//  search for 'colTitle' of each dataSourceProvider to match with, 
//  then return dataSourceProvider 'key'

//  TODO what is the reference of 'dataSourceProviderObject2'
exports.getDataSourceKeyWithColTitle = (dataSourceProviderObject2, colTitle) => {
  let a = ``
  let b = ``

  // Object.keys(dataSourceProviderObject).map((k) => {
  //   Object.keys(dataSourceProviderObject[k]).map((l) => {
  //     if (dataSourceProviderObject[k][l]['colTitle'] == colTitle) {
  //       a = dataSourceProviderObject[k][l]['key']
  //     }
  //   })
  // })
  // console.log(dataSourceProviderObject2);
  Object.keys(dataSourceProviderObject2).map((k) => {
    dataSourceProviderObject2[k].map((l) => {
      if (l['colTitle'] == colTitle) {
        b = l['key']
      }
    })
  })
  // return a
  return b
}

//  a)
//  Iterate over  dataSourceProvider2 -> parameter (dependant column name)
//  search for 'value' of each dataSource parameter to match with,
//  returns 'colTitle', 'key' and 'value' of dataSource 
//  search for dependant column/ UI element of this column title

//  b)
//  get list of unique system objects e.g. fakeAuthProvider
exports.searchDependantDataSource = (dataSourceProviderObject2, parameterValue) => {
  let dependantStoredProcedure = []
  let systemObject = []
  Object.keys(dataSourceProviderObject2).map((k) => {
    (k == 'storedProcedure' || k == 'restService') && dataSourceProviderObject2[k].map((storedProcedureName) => {
      Object.keys(storedProcedureName['parameters']).map((parameterName) => {
        if (storedProcedureName['parameters'][parameterName]['value'] == parameterValue) {
          dependantStoredProcedure.push(
            {
              colTitle: storedProcedureName['colTitle'],
              key: storedProcedureName['key'],
              value: storedProcedureName['value'],
            }
          )
        }
      })
    })
    k == 'systemObject' && dataSourceProviderObject2[k].map((object) => {
      // console.log(object);
      systemObject.push(
        {
          ...object
        }
      )
    })
  })
  return { dependantStoredProcedure: dependantStoredProcedure, systemObject: systemObject }
}

exports.doesDependantDataSourceEmpty = (dataSource) => {
  if (dataSource['storedProcedure'].length > 0 ||
    dataSource['restService'].length > 0 ||
    dataSource['systemObject'].length > 0) {
    return false
  } else {
    return true
  }
}

//  Extract dependant dataSources to be 
//  call setState() of each dependant dataSources to be null in case of any invalid string for independant e.i. backspace
exports.generateDependantDataSourceSetStateBody = (colTitle) => {
  let stateBodyString = ``
  let setStateBodyString = ``
  let setStateBodyStringView = ``
  //  search for dependant column/ UI element of this column title
  const dependantDataSource = this.searchDependantDataSource(colTitle)['dependantStoredProcedure']
  dependantDataSource.map((k, index) => {
    stateBodyString += `'${k['colTitle']}': ${colTitle}DataSource[objectIndex]['${k['key']}']
  
            ${index + 1 < dependantDataSource.length ? ',' : ''}`
    setStateBodyString += `set${firstLetterCaptalize(k['colTitle'])}({
        '${k['key']}': objectIndex > -1 ? ${colTitle}DataSource[objectIndex]['${k['key']}'] : '',
        '${k['value']}': objectIndex > -1 ? ${colTitle}DataSource[objectIndex]['${k['value']}'] : ''
      })`
    setStateBodyStringView += `set${firstLetterCaptalize(k['colTitle'])}({
            '${k['key']}': objectIndex > -1 ? response[objectIndex]['${k['key']}'] : '',
            '${k['value']}': objectIndex > -1 ? response[objectIndex]['${k['value']}'] : ''
          })`
  });
  return { stateBodyString: stateBodyString, setStateBodyString: setStateBodyString, setStateBodyStringView: setStateBodyStringView }
}

exports.isNameExistInDataSourceProvider = (dataSource, name) => {


  return dataSource['storedProcedure'].some(v => v['name'] == name)
}

exports.extractVariables = (dataSourceProvider_Object, onBlur_DataSourceProvider_Object, ConfigObject, backendUrl, mode) => {
  //  form Loader variables
  let loader_ReturnString = ``
  let dataSourceProviderParameter = {}
  let dataSourceProviderResultSet = []
  let dataSourceProviderResultSetJSON = ``
  let loader_Call_OnLoadCallPlace_RemoteStoredProcedure = ``

  let onFormCallPlaceUseEffectBody = ``
  let onBlurCallPlaceBody = ``
  let dependencyObject = {}
  let uniqueDataSourceProvider = {
    storedProcedure: [],
    restService: []
  }

  //  form itself variables
  let form_OnChangeStatus = ``
  let componentStateVariableArray = []
  let componentLocalVariable = ``
  let generateOnLoadDataSourceInUseEffectAsyncCall = ``
  let generateOnLoadDataSourceInUseEffectTryBlockStart = `
    try {`
  let generateOnLoadDataSourceInUseEffectTryBlockConditionStart = ``
  let generateOnLoadDataSourceInUseEffectTryBlockConditionEnd = `
      }`
  let generateOnLoadDataSourceInUseEffectTryBlockEnd = `
    } catch (error) {
      console.log(error);
    }`
  let generateOnLoadDataSourceInUseEffectTryBodyStart = ``
  let generateOnLoadDataSourceInUseEffectTryBodyEnd = `
        })`
  let generateOnLoadDataSourceInUseEffectSetState = ``
  let initialize_OnLoader_DataSources = `//  initialize on-loader datasource on startup`
  let initialize_OnForm_DataSources = ``
  let form_OnForm_CallPlace_UseEffect = ``
  let form_ImportString = ``

  let dataSourceProviderHistory = {
    storedProcedure: [
      {
        prevSpName: 'a',
        prevSpKey: 'b'
      }
    ],
    restService: [],
    systemObject: [],

  }
  let final = ``

  // *************    onBlur      *************
  let colTitles = ``
  let condition = ``
  // *************    onBlur      *************

  //  2)  Iterate over each unique dataSourceProvider
  dataSourceProvider_Object['storedProcedure'].map((storedProcedure) => {
    const name = storedProcedure['name']
    const spFirstNameCaptalize = firstLetterCaptalize(name)
    const key = storedProcedure['key']
    const value = storedProcedure['value']
    const colTitle = storedProcedure['colTitle']
    const callPlace = storedProcedure['callPlace']
    const option = storedProcedure['option']
    // if (name == 'extCustNo2NameNew') { 
    // if (name == 'fullAccountInfo') { 
    // if (name == 'lending') {
    //   console.log(storedProcedure);
    //   // console.log(storedProcedure);
    // }
    let dependencyProvider = ``
    let dataSourceKey = ``
    let spParameters = ``
    //  1) in case storedProcedure should be called on 'loader'
    if (callPlace == 'loader') {
      /********************************************************************************
       *                                      Loader
      ********************************************************************************/
      /**************** Extract StoredProcedure parameter/ value **********************/
      Object.keys(storedProcedure['parameters']).map((parameterName) => {
        dataSourceProviderParameter = {
          ...dataSourceProviderParameter,
          [parameterName]: storedProcedure['parameters'][parameterName]['value']
        }
      })

      /**************** Extract StoredProcedure parameter/ value **********************/
      //  TODO candidate to be removed
      loader_Call_OnLoadCallPlace_RemoteStoredProcedure += `
    const call${firstLetterCaptalize(colTitle)}Response = await sendRequest(\`${backendUrl}/${name}s?page=\${page ? Number(page) - 1 : 0
      }&size=2\`,
      ${Object.keys(dataSourceProviderParameter).length > 0 ? `"POST"` : `"GET"`},
      ${Object.keys(dataSourceProviderParameter).length > 0 ? JSON.stringify(dataSourceProviderParameter) : null}
    );`

      loader_ReturnString += `, ${colTitle}DataSource : call${firstLetterCaptalize(colTitle)}Response.data`

      /********************************************************************************
       *                                      onChangeStatus
      ********************************************************************************/

      form_OnChangeStatus += ` else if (e.target.type == 'text' && e.target.id == '${colTitle}') {
    
      //    set the state only if the valid String is entered i.e. there is such value in xxxDataSource list
      const valueToChange = e.target.value
      const idx = ${colTitle}DataSource.findIndex((e) => {
        return e.${value} == valueToChange ? true : false
      })
      
      //    set on-form own state variable
      set${firstLetterCaptalize(colTitle)}({
        '${key}': idx > -1 ? ${colTitle}DataSource[idx]['${key}'] : '',
        '${value}': idx > -1 ? ${colTitle}DataSource[idx]['${value}'] : valueToChange,
      })
      
      //    set on-form global state variable
      setState(prevState => ({
        ...prevState,
        '${colTitle}': idx > -1 ? ${colTitle}DataSource[idx]['${key}'] : '',
      }))
    }`

      /********************************************************************************
       *                                      state variables
      ********************************************************************************/
      componentStateVariableArray.push(
        {
          name: colTitle,
          type: 'Object',
          default: `{${key}: '', ${value}: ''}`,
        }
      )
      //             componentLocalVariable += `
      //   const [${colTitle}, set${firstLetterCaptalize(colTitle)}] = useState({ ${key}: '', ${value}: '' })`

      /********************************************************************************
       *                                      local variables
      ********************************************************************************/
      if (!uniqueDataSourceProvider['storedProcedure'].includes(name)) {
        componentStateVariableArray.push(
          {
            name: 'filtered' + firstLetterCaptalize(colTitle) + 'DataSource',
            type: "String",
            default: colTitle + 'DataSource',
          }
        )
        componentLocalVariable += `
  let ${colTitle}DataSource = loaderData.${colTitle}DataSource;
  //   const [filtered${firstLetterCaptalize(colTitle)}DataSource, setFiltered${firstLetterCaptalize(colTitle)}DataSource] = useState(${colTitle}DataSource)`
      }

      /********************************************************************************
       *                        initialize on-loader state variables
      ********************************************************************************/

      //  actually initialize_OnLoader_DataSource is used to initiate fields that previousely filled e.g. in View or Edit form
      initialize_OnLoader_DataSources += `
    //  check for empty UI
    const is${firstLetterCaptalize(colTitle)}Exist = ${colTitle}DataSource.findIndex((e) => {
        return e.${key} == loaderData.data.${colTitle} ? true : false
      })
    is${firstLetterCaptalize(colTitle)}Exist >= 0 && set${firstLetterCaptalize(colTitle)}({
      '${key}': ${colTitle}DataSource[is${firstLetterCaptalize(colTitle)}Exist]['${key}'],
      '${value}': ${colTitle}DataSource[is${firstLetterCaptalize(colTitle)}Exist]['${value}']
    })`
    }
    //  2) in case storedProcedure should be called on 'form'
    else if (callPlace == 'form') {

      let form_useEffect_parameter_string = ``

      /**************** Extract StoredProcedure parameter/ value **********************/
      // basically, for each column/ UI element, there should be just ONE 'VALUE' and  ONE storedProcedure with multiple parameters 
      Object.keys(storedProcedure['parameters']).map((parameterName) => {
        const spFirstNameCaptalize = firstLetterCaptalize(name)
        dependencyProvider = storedProcedure['parameters'][parameterName]['value']
        dataSourceKey = this.getDataSourceKeyWithColTitle(dataSourceProvider_Object, dependencyProvider)

        form_useEffect_parameter_string += `\"${parameterName}\": ${dependencyProvider}['${dataSourceKey}']`

        /********************************************************************************
         *                                  on-Form useEffect Body - generate Body
        ********************************************************************************/
        //       onFormCallPlaceUseEffectBody += `
        // //    on-Form useEffect
        // useEffect(() => {
        //   async function call${spFirstNameCaptalize}Response() {
        //     const call${spFirstNameCaptalize}Response = await sendRequest(
        //       \`${backendUrl}/${name}s?page=0&size=2\`,
        //       ${form_useEffect_parameter_string.length > 0 ? `"POST"` : `"GET"`},
        //       { ${form_useEffect_parameter_string.length > 0 ? form_useEffect_parameter_string : null} }
        //     );
        //     return call${spFirstNameCaptalize}Response.data
        //   }

        //   try {
        //     if (${dependencyProvider}['${dataSourceKey}'] != '') {
        //       call${spFirstNameCaptalize}Response().then((response) => {
        //         set${firstLetterCaptalize(colTitle)}DataSource(response)
        //         setFiltered${firstLetterCaptalize(colTitle)}DataSource(response)
        //       })
        //     }
        //   } catch (error) {
        //     console.log(error);
        //   }
        // }, [${dependencyProvider}['${dataSourceKey}']]);`;

        //    in case we didn't add such a variable before
        // componentStateVariableArray[[dependencyProvider]] = '';

        //  TODO
        // componentStateVariableArray.push(
        //     {
        //         name: dependencyProvider,
        //         type: 'String',
        //         default: ''
        //     }
        // );
        //   return dataSource['storedProcedure'].some(v => v['name'] == name)

        // (
        //  if sp name befer does not used before
        !dataSourceProviderHistory['storedProcedure'].some(v => v['prevSpName'] == name) ||
          (
            // if the parameter name does not used before
            dataSourceProviderHistory['storedProcedure'].some(v => v['prevSpParameterProviderName'] == dependencyProvider)
          )
          // )
          &&
          (
            /********************************************************************************
             *                             on-Form - loader Body
            ********************************************************************************/
            //  1)  define function to Asyncronousely call StoredProcedure service
            generateOnLoadDataSourceInUseEffectAsyncCall += `

    async function call${spFirstNameCaptalize}Response() {
      const call${spFirstNameCaptalize}Response = await sendRequest(
        \`${backendUrl}/${name}s?page=0&size=2\`,
        ${form_useEffect_parameter_string.length > 0 ? `"POST"` : `"GET"`},
        { ${form_useEffect_parameter_string.length > 0 ? `\"${parameterName}\": loaderData.data.${dependencyProvider}` : null} }
      );
      return call${spFirstNameCaptalize}Response.data
    }`,

            //  2)  set condition
            generateOnLoadDataSourceInUseEffectTryBlockConditionStart += `      if (loaderData.data.${dependencyProvider} != '') {`,

            //  3)  call Async StoredProcedure service function
            generateOnLoadDataSourceInUseEffectTryBodyStart += `
        call${spFirstNameCaptalize}Response().then((response) => {
          set${firstLetterCaptalize(colTitle)}DataSource(response)
          setFiltered${firstLetterCaptalize(colTitle)}DataSource(response)`,



            //  4)  setState
            generateOnLoadDataSourceInUseEffectSetState += `
          const objectIndex = response.findIndex((e) => {
            return e.${key} == loaderData.data.${key} ? true : false
          })

          set${firstLetterCaptalize(colTitle)}({
            ['${key}']: objectIndex > -1 ? response[objectIndex]['${key}'] : '',
            ['${value}']: objectIndex > -1 ? response[objectIndex]['${value}'] : valueToChange,
          })

          ${this.generateDependantDataSourceSetStateBody(colTitle)['setStateBodyStringView']}`,

            /********************************************************************************
             *                             save SP info for future reference
            ********************************************************************************/
            //  5)  push new values into history
            dataSourceProviderHistory['storedProcedure'].push({
              prevSpName: name,
              prevSpKey: key,
              prevSpValue: value,
              prevColumnTitle: colTitle,
              prevCallPlace: callPlace,
              prevSpParameterName: parameterName,
              prevSpParameterProviderName: dependencyProvider,
              prevSpParameterProviderKey: dataSourceKey,
            })
          )





        final += `//  initialize on-form datasource on startup
${generateOnLoadDataSourceInUseEffectAsyncCall}
${generateOnLoadDataSourceInUseEffectTryBlockStart}
${generateOnLoadDataSourceInUseEffectTryBlockConditionStart}
${generateOnLoadDataSourceInUseEffectTryBodyStart}
${generateOnLoadDataSourceInUseEffectSetState}
${generateOnLoadDataSourceInUseEffectTryBodyEnd}
${generateOnLoadDataSourceInUseEffectTryBlockConditionEnd}
${generateOnLoadDataSourceInUseEffectTryBlockEnd}`

        // console.log(form_useEffect_parameter_string);
        //  TODO candidate to be removed
        dependencyObject[dependencyProvider] = dataSourceKey
      })

      initialize_OnForm_DataSources += ``

      /********************************************************************************
       *                                      onChangeStatue Body
      ********************************************************************************/

      form_OnChangeStatus += ` else if (e.target.type == 'text' && e.target.id == '${colTitle}') {
          
      let valueToChange = e.target.value
      const objectIndex = ${colTitle}DataSource.findIndex((e) => {
        return e.titlex == valueToChange ? true : false
      })
      set${firstLetterCaptalize(colTitle)}({
        ['${key}']: objectIndex > -1 ? ${colTitle}DataSource[objectIndex]['${key}'] : '',
        ['${value}']: objectIndex > -1 ? ${colTitle}DataSource[objectIndex]['${value}'] : valueToChange,
      })
      setState(prevState => ({
        ...prevState,
        '${colTitle}': objectIndex > -1 ? ${colTitle}DataSource[objectIndex]['${key}'] : ''${this.generateDependantDataSourceSetStateBody(colTitle)['stateBodyString'].length > 0 ? `,` : ``}
        ${this.generateDependantDataSourceSetStateBody(colTitle)['stateBodyString']}
      }))${this.generateDependantDataSourceSetStateBody(colTitle)['stateBodyString'].length > 0 ? `,` : ``}
      ${this.generateDependantDataSourceSetStateBody(colTitle)['stateBodyString'].length > 0
          ? `  ${this.generateDependantDataSourceSetStateBody(colTitle)['setStateBodyString']}`
          : ''}
    }`

      /********************************************************************************
       *                                      state variable
      ********************************************************************************/
      // componentStateVariableArray[colTitle] = ''
      componentStateVariableArray.push(
        {
          name: colTitle,
          type: 'String',
          default: `{${key}: '', ${value}: ''}`,
        }
      )
      //             componentLocalVariable += `
      //   const [${colTitle}, set${firstLetterCaptalize(colTitle)}] = useState({ ${key}: '', ${value}: '' })`

      //  add on-From useEffect() body only if there is not such a storedProcedure name befere in uniqueDataSourceProvider
      if (!uniqueDataSourceProvider['storedProcedure'].includes(name)) {

        /********************************************************************************
         *                                  on-Form useEffect Body - include in form
        ********************************************************************************/
        // actually here we add useEffect() body
        form_OnForm_CallPlace_UseEffect += `
    ${onFormCallPlaceUseEffectBody}
    `
        /********************************************************************************
         *                                  constant import string
        ********************************************************************************/
        form_ImportString += `
import { sendRequest } from '../../../util/makeRequest';`

        //  actually add storedProcedure name to our uniqueDataSourceProvider for future reference
        uniqueDataSourceProvider['storedProcedure'] = [
          ...uniqueDataSourceProvider['storedProcedure'],
          name,
        ];


        /********************************************************************************
         *                                      state variable
        ********************************************************************************/
        //  actually add useStata variable to react component
        // componentStateVariableArray[colTitle + 'DataSource'] = '';
        // componentStateVariableArray['filtered' + firstLetterCaptalize(colTitle) + 'DataSource'] = '';
        componentStateVariableArray.push(
          {
            name: colTitle + 'DataSource',
            type: 'String',
            default: '[]'
          },
          {
            name: 'filtered' + firstLetterCaptalize(colTitle) + 'DataSource',
            type: 'String',
            default: `${colTitle}DataSource`
          }
        )
        //                 componentLocalVariable += `
        //   const [${colTitle}DataSource, set${firstLetterCaptalize(colTitle)}DataSource] = useState([])
        //   const [filtered${firstLetterCaptalize(colTitle)}DataSource, setFiltered${firstLetterCaptalize(colTitle)}DataSource] = useState(${colTitle}DataSource)`

        //    DataSourceProviders e.g. StoredProcedure should be called just onece in form after Load i.e useEffect(()=>{},[])
        initialize_OnForm_DataSources += `
${final}`

      }
    }
    // 3) in case storedProcedure should be called on 'onBlur' event
    else if (callPlace == 'onBlur') {

      let form_useEffect_parameter_string = ``

      /**************** Extract StoredProcedure parameter/ value **********************/
      // basically, there can NOT? be multiple storedProcedure parameters with just ONE 'VALUE' for each column/ UI element
      Object.keys(storedProcedure['parameters']).map((parameterName) => {
        // const dependencyProvider = storedProcedure['parameters'][parameterName]['value']
        // const dataSourceKey = this.getDataSourceKeyWithColTitle(dependencyProvider)
        dependencyProvider = 'state'
        dataSourceKey = storedProcedure['parameters'][parameterName]['valueProvider']
        spParameters += `\"${parameterName}\": ${dependencyProvider}['${dataSourceKey}']`

        condition = `${dependencyProvider}['${dataSourceKey}'] !== ""`

        /********************************************************************************
        *                                      state variable
        ********************************************************************************/
        componentStateVariableArray.push(
          {
            name: colTitle + 'DSProviderOutput',
            type: 'String',
            default: `{}`,
          }
        )
        // if (colTitle == "customerName") {
        //   console.log(parameterName)
        // }
      })


      // if (name == 'extCustNo2NameNew') {
      //   // if (name == 'fullAccountInfo') { 
      //   // console.log(storedProcedure);
      //   console.log(componentStateVariableArray);
      // }

      /********************************************************************************
       *                                  constant import string
      ********************************************************************************/

    }
    // 4) in case storedProcedure should be called on 'onFormLoader' event
    else if (callPlace == 'onFormLoader') {
      /********************************************************************************
       *                                      Loader
      ********************************************************************************/
      /**************** Extract StoredProcedure parameter/ value **********************/
      Object.keys(storedProcedure['parameters']).map((parameterName) => {

        // console.log(evaluateExpression(storedProcedure['parameters'][parameterName]['valueProvider']['rule']));
        storedProcedure['parameters'][parameterName]['direction'] == 'IN' && (
          dataSourceProviderParameter = {
            ...dataSourceProviderParameter,
            [parameterName]: evaluateExpression(storedProcedure['parameters'][parameterName]['valueProvider']['rule'])
          }
        )
      })


      /**************** Extract StoredProcedure parameter/ value **********************/
      //  TODO candidate to be removed
      loader_Call_OnLoadCallPlace_RemoteStoredProcedure += `
    const call${firstLetterCaptalize(colTitle)}Response = await sendRequest(\`${backendUrl}/${name}s?page=\${page ? Number(page) - 1 : 0
      }&size=2\`,
      ${Object.keys(dataSourceProviderParameter).length > 0 ? `"POST"` : `"GET"`},
      ${Object.keys(dataSourceProviderParameter).length > 0 ? JSON.stringify(dataSourceProviderParameter) : null}
    );`

      loader_ReturnString += `, ${colTitle}DataSource : call${firstLetterCaptalize(colTitle)}Response.data`

      /********************************************************************************
       *                                      onChangeStatus
      ********************************************************************************/
      //  will be achieved by the component itself
      //   form_OnChangeStatus += ` else if (e.target.type == 'text' && e.target.id == '${colTitle}') {

      //   //    set the state only if the valid String is entered i.e. there is such value in xxxDataSource list
      //   const valueToChange = e.target.value
      //   const idx = ${colTitle}DataSource.findIndex((e) => {
      //     return e.${value} == valueToChange ? true : false
      //   })

      //   //    set on-form own state variable
      //   set${firstLetterCaptalize(colTitle)}({
      //     '${key}': idx > -1 ? ${colTitle}DataSource[idx]['${key}'] : '',
      //     '${value}': idx > -1 ? ${colTitle}DataSource[idx]['${value}'] : valueToChange,
      //   })

      //   //    set on-form global state variable
      //   setState({
      //     ...state,
      //     '${colTitle}': idx > -1 ? ${colTitle}DataSource[idx]['${key}'] : '',
      //   })
      // }`

      if (!uniqueDataSourceProvider['storedProcedure'].includes(name)) {

        /********************************************************************************
         *                                      state variables
        ********************************************************************************/
        componentStateVariableArray.push(
          {
            name: colTitle,
            type: 'Object',
            // default: `{${key}: '', ${value}: ''}`,
            default: option == 'textWithResultSetDataSource' ? `{}` : `''`,
          }
        )


        /********************************************************************************
         *                                      local variables
        ********************************************************************************/
        // componentStateVariableArray.push(
        //   {
        //     name: 'filtered' + firstLetterCaptalize(colTitle) + 'DataSource',
        //     type: "String",
        //     default: colTitle + 'DataSource',
        //   }
        // )
        componentLocalVariable += `
  let ${colTitle}DataSource = loaderData.${colTitle}DataSource;`
      }

      /********************************************************************************
       *                        initialize on-loader state variables
      ********************************************************************************/

      //  actually initialize_OnLoader_DataSource is used to initiate fields that previousely filled e.g. in View or Edit form
      //   initialize_OnLoader_DataSources += `
      // //  check for empty UI
      // const is${firstLetterCaptalize(colTitle)}Exist = ${colTitle}DataSource.findIndex((e) => {
      //     return e.${key} == loaderData.data.${colTitle} ? true : false
      //   })
      // is${firstLetterCaptalize(colTitle)}Exist >= 0 && set${firstLetterCaptalize(colTitle)}({
      //   '${key}': ${colTitle}DataSource[is${firstLetterCaptalize(colTitle)}Exist]['${key}'],
      //   '${value}': ${colTitle}DataSource[is${firstLetterCaptalize(colTitle)}Exist]['${value}']
      // })`
    }

    if (
      storedProcedure['option'] == 'report' ||
      storedProcedure['option'] == 'commitmentsReport' ||
      storedProcedure['option'] == 'customerRialResourceReport' ||
      storedProcedure['option'] == 'customerArzResourceReport' ||
      storedProcedure['option'] == 'customerRialResourceAvgReport' ||
      storedProcedure['option'] == 'customerArzResourceAvgReport' ||
      storedProcedure['option'] == 'lendingReport' ||
      storedProcedure['option'] == 'collateralReport' ||
      storedProcedure['option'] == 'costBenefitReport' ||
      storedProcedure['option'] == 'customerProfileReport' ||
      storedProcedure['option'] == 'performanceReport'
    ) {
      if (callPlace == 'onFormLoader') {
        Object.keys(storedProcedure['resultSet']).map((parameterName, index) => {
          const end =
            index + 1 < Object.keys(storedProcedure['resultSet']).length
              ? `,`
              : ``;

          // console.log(evaluateExpression(storedProcedure['parameters'][parameterName]['valueProvider']['rule']));
          storedProcedure['resultSet'][parameterName]['direction'] == 'OUT' && (
            dataSourceProviderResultSet = [
              ...dataSourceProviderResultSet,
              // JSON.stringify(
              ` {
    field: "${parameterName}",
    title: "${storedProcedure['resultSet'][parameterName]['title']}",
    percent: ${storedProcedure['resultSet'][parameterName]['percent']},
    content: ${storedProcedure['resultSet'][parameterName]['content']},
  }`
              // )
            ],
            dataSourceProviderResultSetJSON += `
            "\${data.columns[${index}].title}": "\${row[data.columns[${index}].field]}"${end}`
          )
        })
        // if (storedProcedure['name'] == 'listAbstractDashboard') {
        // if (storedProcedure['name'] == 'listDetail') {
        //   // console.log(dataSourceProviderParameter);
        //   dataSourceProviderParameter = {
        //     ...dataSourceProviderParameter,
        //     lstTypeCode: `params['lstTypeCode']`
        //   }
        //   console.log(dataSourceProviderParameter);
        // }
        // console.log(dataSourceProviderResultSet);
        loader_Call_OnLoadCallPlace_RemoteStoredProcedure = `
    const call${firstLetterCaptalize(name)}Response = await sendRequest(\`${backendUrl}/${name}s?page=\${page ? Number(page) - 1 : 0
      }&size=2\`,
      ${Object.keys(dataSourceProviderParameter).length > 0 ? `"POST"` : `"GET"`},
      ${Object.keys(dataSourceProviderParameter).length > 0 ? JSON.stringify(dataSourceProviderParameter) : null}
    );`

        loader_ReturnString = `, rows: call${firstLetterCaptalize(name)}Response.data`

      } else if (callPlace == 'onBlur') {
        // console.log(storedProcedure);
        Object.keys(storedProcedure['resultSet']).map((parameterName, index) => {
          const end =
            index + 1 < Object.keys(storedProcedure['resultSet']).length
              ? `,`
              : ``;

          // console.log(evaluateExpression(storedProcedure['parameters'][parameterName]['valueProvider']['rule']));
          storedProcedure['resultSet'][parameterName]['direction'] == 'OUT' && (
            dataSourceProviderResultSet = [
              ...dataSourceProviderResultSet,
              // JSON.stringify(
              ` {
    field: "${parameterName}",
    title: "${storedProcedure['resultSet'][parameterName]['title']}",
    percent: ${storedProcedure['resultSet'][parameterName]['percent']},
    content: ${storedProcedure['resultSet'][parameterName]['content']},
  }`
              // )
            ],
            dataSourceProviderResultSetJSON += `
            "\${data.columns[${index}].title}": "\${row[data.columns[${index}].field]}"${end}`
          )
        })
      }
    }



    colTitles += `
              '${colTitle}': \`\${response['${value}']}\`,`

    // runs only if we have 'onBlur' storedProcedure
    // runs for each storedProcedure
    callPlace == 'onBlur' && (onBlurCallPlaceBody = `
  const onBlur = (e) => {
    async function call${spFirstNameCaptalize}Response() {
      const call${spFirstNameCaptalize}Response = await sendRequest(
        \`${backendUrl}/${name}s?page=0&size=2\`,
        ${spParameters.length > 0 ? `"POST"` : `"GET"`},
        { ${spParameters.length > 0 ? spParameters : null} }
      );
      return call${spFirstNameCaptalize}Response.data
    }
    try {
      if (${condition}) {
  
        console.log(e.target);
        call${spFirstNameCaptalize}Response().then((response) => {
          console.log('success!');
          console.log(response);
          console.log(response['${colTitle}']);
          setState(
            {
              ...state,
              ${colTitles}
            }
          )
        })
      }
    } catch (error) {
      console.log(error);
    }
  }`,
      form_ImportString = `import { sendRequest } from '../../../util/makeRequest';`
    )

  })

  dataSourceProvider_Object['restService'].map(() => { })

  dataSourceProvider_Object['systemObject'].map((systemObject) => {
    // console.log(systemObject);
    // const name = evaluateExpression(systemObject['objectName']['rule']);
    const colTitle = systemObject['colTitle'];

    const option = systemObject['option']

    let stateDefaultValue = ``
    if (option == 'textWithResultSetDataSource') {
      stateDefaultValue = `{}`
    } else if (option == 'textWithObjectDataSource') {
      stateDefaultValue = `''`
    }

    componentStateVariableArray.push(
      {
        name: colTitle,
        type: 'Object',
        // default: `{${key}: '', ${value}: ''}`,
        default: stateDefaultValue,
      }
    )
  })

  onBlur_DataSourceProvider_Object['storedProcedure'].map((storedProcedure) => {
    const name = storedProcedure['name']
    const spFirstNameCaptalize = firstLetterCaptalize(name)
    const key = storedProcedure['key']
    const value = storedProcedure['value']
    const colTitle = storedProcedure['colTitle']
    const callPlace = storedProcedure['callPlace']
    const option = storedProcedure['option']

    if (callPlace == 'onBlur') {
      let defaultValue = ``
      if (option == 'textWithResultSetDataSourceAndOnBlurEvent') {
        defaultValue = '[]'
      } else if (option == 'textWithObjectDataSourceAndOnBlurEvent') {
        defaultValue = '{}'
      }

      // if (colTitle == 'extAccNo') {
      //   console.log(defaultValue)
      // }

      componentStateVariableArray.push(
        {
          name: colTitle + 'OnBlurOutput',
          type: 'Object',
          // default: `{${key}: '', ${value}: ''}`,
          default: defaultValue,
        }
      )

      form_ImportString = `import { sendRequest } from '../../../util/makeRequest';`

    }
  })

  // if (dataSourceProvider_Object['colTitle'] == 'account') {
  //   //   console.log(targetStoredProcedure);
  //   console.log(componentLocalVariable);
  // }
  // transfere componentStateVariableArray to componentLocalVariable
  componentStateVariableArray.map((variable, index) => {
    // console.log(variable);

    componentLocalVariable += `
const [${variable['name']}, set${firstLetterCaptalize(variable['name'])
      }] = useState(${typeof variable['default'] == 'string' ? variable['default'] : ''}); `
  })

  // console.log(loader_Call_OnLoadCallPlace_RemoteStoredProcedure);
  return {
    loader_Call_OnLoadCallPlace_RemoteStoredProcedure: loader_Call_OnLoadCallPlace_RemoteStoredProcedure,
    dataSourceProviderParameter: dataSourceProviderParameter,
    dataSourceProviderResultSet: dataSourceProviderResultSet,
    dataSourceProviderResultSetJSON: dataSourceProviderResultSetJSON,
    //  TODO: To be removed
    onFormCallPlaceUseEffectBody: onFormCallPlaceUseEffectBody,
    onBlurCallPlaceBody: onBlurCallPlaceBody,
    dependencyObject: dependencyObject,
    uniqueDataSourceProvider: uniqueDataSourceProvider,
    form_OnChangeStatus: form_OnChangeStatus,
    loader_ReturnString: loader_ReturnString,
    form_LocalVariable: componentLocalVariable,
    initialize_OnLoader_DataSources: mode !== 'new' ? initialize_OnLoader_DataSources : '',
    initialize_OnForm_DataSources: mode == 'view' ? initialize_OnForm_DataSources : '',
    form_OnForm_CallPlace_UseEffect: form_OnForm_CallPlace_UseEffect,
    form_ImportString: form_ImportString,
  }
}

exports.generateProperty = (appObjectId, fields) => {
  const rowNum = fields.length;
  let entityfields = ``;
  const start = `exports.${appObjectId}OperationLables = {
   `;
  const end = `
}
`;
  entityfields += `${start} `;

  fields.map((row, rowIndex) => {
    if (Array.isArray(row)) {
      row.map((cols, colIndex) => {
        if (Array.isArray(cols)) {
          console.log(
            appObject['appObjectId'] +
            ` : operation Impossible for row: ` +
            rowIndex +
            ` and column: ` +
            colIndex
          );
        } else {
          if (cols['value']['type'] !== 'emptyCell') {
            const end =
              rowIndex + 1 <= rowNum
                ? `,
    `
                : ``;

            entityfields += `${cols['title']}: '${cols['lable']}'${end}`;
          }
        }
      });
    }
  });
  entityfields += `selectDate: 'انتخاب کنید',
    confirm: 'ذخیره',
    delete: 'حذف',
    deleteMessageStart: 'آیاازحذف',
    deleteMessageEnd: 'اطمینان دارید؟',
    fonfirm: 'تایید',
    cancel: 'انصراف',
    portal: 'پورتال تفاهم نامه های بانک ملت',
    retrive: 'بازیابی اطلاعات',
    `;
  entityfields += end;
  // console.log(entityfields);
  return entityfields;
};

exports.getReportRoutePath = (fields) => {
  const rowNum = fields.length;
  let entityfields = ``;

  fields.map((row, rowIndex) => {
    if (Array.isArray(row)) {
      row.map((cols, colIndex) => {
        if (Array.isArray(cols)) {
          console.log(
            appObject['appObjectId'] +
            ` : operation Impossible for row: ` +
            rowIndex +
            ` and column: ` +
            colIndex
          );
        } else {
          if (cols['value']['type'] !== 'emptyCell') {
            const end =
              rowIndex + 1 <= rowNum
                ? `,
    `
                : ``;
            if (Object.keys(cols['value']['schema']).includes('onRowClickRoutePath')) {
              entityfields = cols['value']['schema']['onRowClickRoutePath']
            }
          }
        }
      });
    }
  });
  // console.log(entityfields);
  return entityfields;
};

exports.generateBreadCrumbPathObject = (applicationObject, mode) => {
  const objectName = applicationObject['appObjectId'];

  const routePathString = getRoutePathString(objectName);
  const completeRoutePathArray = routePathString.split('/');

  let completeRoutePathString = ``;
  let tmp = ``
  // let primaryKey = ''
  // console.log(completeRoutePathArray);
  completeRoutePathArray.length > 0
    ? completeRoutePathArray.map((route, index) => {

      // if (objectName == 'account') {
      //     console.log(route);
      // }

      end =
        index + 1 <= completeRoutePathArray.length
          ? `,
`
          : ``;

      if (route == '') {
        completeRoutePathString += `'خانه': \'/dashboard\'${end}`
      }
      else if (mode == 'new') {
        //  ObjectName is in RootRoutes
        if (getRootRoutes().includes(objectName)) {
          if (getRootRoutes().includes(route)) {
            //  route is in RootRoutes
            completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
          } else {
            //  route is in RootRoutes
            completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
          }

        }
        //  ObjectName is NOT in RootRoutes
        else if (!getRootRoutes().includes(objectName)) {
          if (getRootRoutes().includes(route)) {
            //  route is in RootRoutes
            completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
            completeRoutePathString += `[\` \${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\`]: 
                        \`/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s/\${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']} \`,
                          `
            tmp += `\`/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s/\${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\``
          } else {
            //  route is NOT in RootRoutes
            // completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
            //     }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
            //     }s\'${end}`;
            tmp += `+'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']}s'`
            completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']}\':${tmp}${end}`
            // console.log(tmp);
          }
        }
      }
      else if (mode == 'view') {
        //  ObjectName is in RootRoutes
        if (getRootRoutes().includes(objectName)) {
          if (getRootRoutes().includes(route)) {
            //  route is in RootRoutes
            completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
          } else {
            //  route is in RootRoutes
            completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
          }

        }
        //  ObjectName is NOT in RootRoutes
        else if (!getRootRoutes().includes(objectName)) {
          if (getRootRoutes().includes(route)) {
            //  route is in RootRoutes e.g. tafahomInformation
            completeRoutePathString += `          \'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\': \'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
            completeRoutePathString += `          [\` \${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\`]: \`/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s/\${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\`${end}`
            tmp += `\`/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s/\${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\``
          } else {
            //  route is NOT in RootRoutes
            tmp += ` + '/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']}s'`
            completeRoutePathString += `          \'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']}\': ${tmp}${end}`
          }
        }
      } else if (mode == 'edit') {
        if (getRootRoutes().includes(objectName)) {
          //  ObjectName is NOT in RootRoutes e.g. tafahomInformation .
          if (getRootRoutes().includes(route)) {
            //  route is in RootRoutes
            completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
          } else {
            //  route is in RootRoutes
            completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
          }

        }
        //  ObjectName is NOT in RootRoutes e.g. eghdamat, account and ... .
        else if (!getRootRoutes().includes(objectName)) {
          if (getRootRoutes().includes(route)) {
            //  route is in RootRoutes
            completeRoutePathString += `          \'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\': \'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
            completeRoutePathString += `          [\` \${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\`]: \`/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s/\${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\`${end}`
            tmp += `\`/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s/\${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\``
          } else {
            //  route is NOT in RootRoutes
            tmp += ` + '/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']}s'`
            completeRoutePathString += `          \'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']}\': ${tmp}${end}`
          }
        }
      } else if (mode == 'list') {
        //     if (getRootRoutes().includes(route)) {
        //         completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']}\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']}s\'${end}`;
        //         completeRoutePathString += `            [\` \${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\`]: \`/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
        //             }s/\${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\`,`
        //         tmp += `\`/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
        //             }s/\${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\``
        //     } else {
        //         tmp += `+'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']}s'`
        //         completeRoutePathString += `
        // \'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']}\':${tmp}${end}`

        //         // completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
        //         //     }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
        //         //     }s\'${end}`;
        //     }
        if (getRootRoutes().includes(objectName)) {
          //  ObjectName is NOT in RootRoutes e.g. tafahomInformation .
          if (getRootRoutes().includes(route)) {
            //  route is in RootRoutes
            completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
          } else {
            //  route is in RootRoutes
            completeRoutePathString += `\'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\':\'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
          }

        }
        //  ObjectName is NOT in RootRoutes e.g. eghdamat, account and ... .
        else if (!getRootRoutes().includes(objectName)) {
          if (getRootRoutes().includes(route)) {
            //  route is in RootRoutes
            completeRoutePathString += `            \'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']
              }\': \'/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s\'${end}`;
            completeRoutePathString += `            [\` \${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\`]: \`/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s/\${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\`${end}`
            tmp += `\`/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']
              }s/\${loaderData['activeProfile']['${getPrimaryKeyByJpaName(route)}']}\``
          } else {
            //  route is NOT in RootRoutes
            tmp += ` + '/${applicationObject.getAppObjectByAppObjectId(route)['appObjectId']}s'`
            completeRoutePathString += `            \'${applicationObject.getAppObjectByAppObjectId(route)['pluralLable']}\': ${tmp}${end}`
          }
        }
      }

    })
    : '';



  // if (objectName == 'tafahomInformation') {
  if (objectName == 'account' && mode == 'new') {
    // console.log(index + ' ' + route);
    // console.log(completeRoutePathString);
  }
  //  for each Client Project UI Forms
  if (mode == 'new') {
    completeRoutePathString += `'ایجاد': '/${objectName}s/new',`;
  } else if (mode == 'list') {
    completeRoutePathString += `            'لیست': '/${objectName}s/list',`;
  } else if (mode == 'view') {
    completeRoutePathString += `          'نمایش': '/${objectName}s/view',`;
  } else if (mode == 'edit') {
    completeRoutePathString += `          'ویرایش': '/${objectName}s/edit',`;
  }

  // if (objectName == 'tafahomInformation') {
  // if (objectName == 'eghdamat') {
  // console.log(index + ' ' + route);
  // console.log(mode);
  // console.log(completeRoutePathString);
  // console.log('');
  // }

  return completeRoutePathString
}

/* exports.generateRouteByDetail = (jpaName) => {}

exports.generatePath = (jpaName, objectName, className, mode, component, isParent) => {
    // mode:    new, list, view, update, delete
    //  RootRoute vs. nonRootRoute
    // component: routePath, loader, jsxForm, action

    // breadCrumb
    // browser url, backend rul

    let routeBody =``
    let routePath = ``

    if(mode == 'new'){
    } else if(mode == 'list'){
        if (getRootRoutes().includes(jpaName)) {
            routeBody += `import * as React from 'react';
      
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
            routeBody += `import * as React from 'react';
      
            import ${className}List from './${objectName}List';
            import { loader as ${objectName}ListLoader } from './${objectName}ListLoader';
            // import { action as ${objectName}ListAction } from './${objectName}ListAction';
            
            export const ${objectName}ListAllRoute = {
              path: '${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s',
              element: <${className}List />,
              loader: ${objectName}ListLoader,
            };
          
            export const ${objectName}ListRoute = {
              path: '${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/:${result['primaryKey']}',
              element: <${className}List />,
              loader: ${objectName}ListLoader,
            };
            `;
          }
    } else if(mode == 'view'){
        if (getRootRoutes().includes(jpaName)) {
            routeBody += `import * as React from 'react';
            import { loader as ${objectName}ViewLoader } from './${objectName}ViewLoader';
            import ${className}View from './${objectName}View';
            
            export const ${objectName}ViewRoute = {
              path: '${objectName}s/:${result['primaryKey']}/view',
              element: <${className}View />,
              loader: ${objectName}ViewLoader,
            };
            `;
      
          } else {
            routeBody += `import * as React from 'react';
      
            import ${className}View from './${objectName}View';
            import { loader as ${objectName}ViewLoader } from './${objectName}ViewLoader';
            
            export const ${objectName}ViewRoute = {
              path: '${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/:${result['primaryKey']}/view',
              element: <${className}View />,
              loader: ${objectName}ViewLoader,
            };
            `;
          }
    } else if(mode == 'update'){
    } else if(mode == 'delete'){
    }

} */

exports.generateRoute = (jpaName, isRoot, primaryKey, directParentRoutePath, targetJpaParentPK, mode) => {

  const captalizedName = firstLetterCaptalize(jpaName)
  let routeBody = ``
  if (mode == 'new') {
    if (isRoot) {
      routeBody += `import * as React from 'react';
      
import ${captalizedName}New from './${jpaName}New';
import { loader as ${jpaName}NewLoader } from './${jpaName}NewLoader';
import { action as ${jpaName}NewAction } from './${jpaName}NewAction';

export const ${jpaName}NewRoute = {
  path: '${jpaName}s/new',
  element: <${captalizedName}New />,
  loader: ${jpaName}NewLoader,
  action: ${jpaName}NewAction,
};
        `;

    } else {
      routeBody += `import * as React from 'react';
      
import ${captalizedName}New from './${jpaName}New';
import { loader as ${jpaName}NewLoader } from './${jpaName}NewLoader';
import { action as ${jpaName}NewAction } from './${jpaName}NewAction';

export const ${jpaName}NewRoute = {
  path: '${directParentRoutePath}s/:${targetJpaParentPK}/${jpaName}s/new',
  element: <${captalizedName}New />,
  loader: ${jpaName}NewLoader,
  action: ${jpaName}NewAction,
};
          `;
    }
  } else if (mode == 'view') {
    if (isRoot) {
      routeBody += `import * as React from 'react';

import ${captalizedName}View from './${jpaName}View';
import { loader as ${jpaName}ViewLoader } from './${jpaName}ViewLoader';
import { action as ${jpaName}ViewAction } from './${jpaName}ViewAction';

export const ${jpaName}ViewRoute = {
  path: '${jpaName}s/:${primaryKey}/view',
  element: <${captalizedName}View />,
  loader: ${jpaName}ViewLoader,
  action: ${jpaName}ViewAction,
};
`;

    } else {
      routeBody += `import * as React from 'react';
      
import ${captalizedName}View from './${jpaName}View';
import { loader as ${jpaName}ViewLoader } from './${jpaName}ViewLoader';
import { action as ${jpaName}ViewAction } from './${jpaName}ViewAction';

export const ${jpaName}ViewRoute = {
  path: '${directParentRoutePath}s/:${targetJpaParentPK}/${jpaName}s/:${primaryKey}/view',
  element: <${captalizedName}View />,
  loader: ${jpaName}ViewLoader,
  action: ${jpaName}ViewAction,
};
`;
    }
  } else if (mode == 'list') {
    if (isRoot) {
      routeBody += `import * as React from 'react';

      import ${captalizedName}List from './${jpaName}List';
      import { loader as ${jpaName}ListLoader } from './${jpaName}ListLoader';
      // import { action as ${jpaName}ListAction } from './${jpaName}ListAction';
      
      export const ${jpaName}ListAllRoute = {
        path: '${jpaName}s',
        element: <${captalizedName}List />,
        loader: ${jpaName}ListLoader,
      };
    
      export const ${jpaName}ListRoute = {
        path: '${jpaName}s/:${primaryKey}',
        element: <${captalizedName}List />,
        loader: ${jpaName}ListLoader,
      };`;

    } else {
      routeBody += `import * as React from 'react';

      import ${captalizedName}List from './${jpaName}List';
      import { loader as ${jpaName}ListLoader } from './${jpaName}ListLoader';
      // import { action as ${jpaName}ListAction } from './${jpaName}ListAction';
      
      export const ${jpaName}ListAllRoute = {
        path: '${directParentRoutePath}s/:${targetJpaParentPK}/${jpaName}s',
        element: <${captalizedName}List />,
        loader: ${jpaName}ListLoader,
      };
    
      export const ${jpaName}ListRoute = {
        path: '${directParentRoutePath}s/:${targetJpaParentPK}/${jpaName}s/:${result['virtualPKColumn']['title']}',
        element: <${captalizedName}List />,
        loader: ${jpaName}ListLoader,
      };`;
    }
  } else if (mode == 'edit') {
    if (isRoot) {
      routeBody += `import * as React from 'react';
      
import ${captalizedName}Edit from './${jpaName}Edit';
import { loader as ${jpaName}EditLoader } from './${jpaName}EditLoader';
import { action as ${jpaName}EditAction } from './${jpaName}EditAction';

export const ${jpaName}EditRoute = {
  path: '${jpaName}s/:${primaryKey}/edit',
  element: <${captalizedName}Edit />,
  loader: ${jpaName}EditLoader,
  action: ${jpaName}EditAction,
};`;
    } else {
      routeBody += `import * as React from 'react';
      
import ${captalizedName}Edit from './${jpaName}Edit';
import { loader as ${jpaName}EditLoader } from './${jpaName}EditLoader';
import { action as ${jpaName}EditAction } from './${jpaName}EditAction';

export const ${jpaName}EditRoute = {
  path: '${directParentRoutePath}s/:${targetJpaParentPK}/${jpaName}s/:${primaryKey}/edit',
  element: <${captalizedName}Edit />,
  loader: ${jpaName}EditLoader,
  action: ${jpaName}EditAction,
};`;
    }
  } else if (mode == 'delete') {
    if (isRoot) {

      routeBody = `import * as React from 'react';
import { action as ${jpaName}DeleteAction } from './${jpaName}DeleteAction';

export const ${jpaName}DeleteRoute = {
  path: '${jpaName}s/:${primaryKey}/delete',
  element: <></>,
  action: ${jpaName}DeleteAction,
};
`;

    } else {

      routeBody = `import * as React from 'react';
import { action as ${jpaName}DeleteAction } from './${jpaName}DeleteAction';

export const ${jpaName}DeleteRoute = {
  path: '${directParentRoutePath}s/:${targetJpaParentPK}/${jpaName}s/:${primaryKey}/delete',
  element: <></>,
  action: ${jpaName}DeleteAction,
};
`;

    }
  } else if (mode == 'report') {
    if (isRoot) {
      routeBody = `import * as React from 'react';
      
    import ${captalizedName}Report from './${jpaName}Report';
    import { loader as ${jpaName}ReportLoader } from './${jpaName}ReportLoader';
    import { action as ${jpaName}ReportAction } from './${jpaName}ReportAction';
    
    export const ${jpaName}ReportRoute = {
      path: 'report/${jpaName}s',
      element: <${captalizedName}Report />,
      loader: ${jpaName}ReportLoader,
      action: ${jpaName}ReportAction,
    };
`
    } else {
      if (jpaName == 'dashboardMasterRpt') {
        routeBody = `import * as React from 'react';
import ${captalizedName}Report from './${jpaName}Report';
import { loader as ${jpaName}ReportLoader } from './${jpaName}ReportLoader';
import { action as ${jpaName}ReportAction } from './${jpaName}ReportAction';
export const ${jpaName}ReportRoute = {
    // path: '${directParentRoutePath}s/:${targetJpaParentPK}/report/${jpaName}s',
    path: '${directParentRoutePath}s/report/${jpaName}s',
    element: <${captalizedName}Report />,
    loader: ${jpaName}ReportLoader,
    action: ${jpaName}ReportAction,
};
`
      }
      else if (jpaName == 'dashboardDetailRpt') {
        routeBody = `import * as React from 'react';
import ${captalizedName}Report from './${jpaName}Report';
import { loader as ${jpaName}ReportLoader } from './${jpaName}ReportLoader';
import { action as ${jpaName}ReportAction } from './${jpaName}ReportAction';

export const ${jpaName}ReportRoute = {
    // path: '${directParentRoutePath}s/:${targetJpaParentPK}/report/${jpaName}s',
    path: '${directParentRoutePath}s/report/${jpaName}s/:lstTypeCode',
    element: <${captalizedName}Report />,
    loader: ${jpaName}ReportLoader,
    action: ${jpaName}ReportAction,
};
`

      } else {
        routeBody = `import * as React from 'react';
        import ${captalizedName}Report from './${jpaName}Report';
        import { loader as ${jpaName}ReportLoader } from './${jpaName}ReportLoader';
        import { action as ${jpaName}ReportAction } from './${jpaName}ReportAction';
        export const ${jpaName}ReportRoute = {
            path: '${directParentRoutePath}s/:${targetJpaParentPK}/${jpaName}s',
            // path: '${directParentRoutePath}s/report/${jpaName}s',
            element: <${captalizedName}Report />,
            loader: ${jpaName}ReportLoader,
            action: ${jpaName}ReportAction,
        };
        `
      }
    }
  } else if (mode == 'search') {
    if (isRoot) {
      routeBody = `import * as React from 'react';
      
import ${captalizedName} from './${jpaName}';
import { loader as ${jpaName}Loader } from './${jpaName}Loader';
// import { action as ${jpaName}Action } from './${jpaName}Action';
    
export const ${jpaName}ReportRoute = {
  path: '/${jpaName}s',
  element: <${captalizedName} />,
  loader: ${jpaName}Loader,
  // action: ${jpaName}ReportAction,
};`
    } else {
      routeBody = `import * as React from 'react';
import ${captalizedName} from './${jpaName}';
import { loader as ${jpaName}Loader } from './${jpaName}Loader';
// import { action as ${jpaName}Action } from './${jpaName}Action';

export const ${jpaName}Route = {
  path: '/${directParentRoutePath}s/${jpaName}s',
  element: <${captalizedName} />,
  loader: ${jpaName}Loader,
  // action: ${jpaName}Action,
};`
    }
  }
  return routeBody
}

exports.generateLoaderBodyResponse = () => { }

exports.generateAction = (jpaName, isRoot, primaryKey, virtualPKColumn, pathVariableObject, backendUrl, parentJpaName, directParentRoutePath, targetJpaParentPK, mode, onRowClick) => {
  let actionBody = ``

  if (mode == 'new') {
    let newActionBodyPath = ``
    let newActionBodyRedirectPath = ``
    let tmp = ``

    // if(jpaName == 'tafahomInformation'){
    //     console.log(virtualPKColumn);
    //     console.log(pathVariableObject)
    // }

    //  action body
    // newActionBodyPath += `${isRoot
    // ?
    // `/${jpaName}s`
    // :
    // `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${targetJpaParentPK}']}/${jpaName}s`}`;

    //  newAction body Redirect path


    if (isRoot) {
      tmp += `
        fakeAuthProvider['activeProfile']['tafTitle'] = bObject['title']`

      newActionBodyPath = `/${jpaName}s`
      const activeProfileProperty = Object.keys(virtualPKColumn).length > 0 ? virtualPKColumn['title'] : primaryKey
      tmp += `
        fakeAuthProvider['activeProfile']['${activeProfileProperty}'] = bObject['${activeProfileProperty}']`

      Object.keys(pathVariableObject).map(obj => {
        tmp += `
        fakeAuthProvider['activeProfile']['${obj}'] = bObject['${obj}']`
      })

      newActionBodyRedirectPath +=
        // `${isRoot
        // ?
        `/${jpaName}s/\${fakeAuthProvider['activeProfile']['${primaryKey}']}`
      // :
      // `/${directParentRoutePath}s/\${fakeAuthProvider['activeProfile'][\`${targetJpaParentPK}\`]}/${jpaName}s/\${fakeAuthProvider['activeProfile']['${primaryKey}']}`}`


    } else {
      newActionBodyPath = `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${targetJpaParentPK}']}/${jpaName}s`;
      // newActionBodyRedirectPath = \`/\${directParentRoutePath}s/\${fakeAuthProvider['activeProfile'][\`\${targetJpaParentPK}\`]}/\${jpaName}s\`
      newActionBodyRedirectPath = `/${directParentRoutePath}s/\${fakeAuthProvider['activeProfile'][\`${targetJpaParentPK}\`]}/${jpaName}s`
      // } `
    }

    // if(jpaName == 'search'){
    //   actionBody = `
    //   `
    //   newActionBodyRedirectPath = `/${directParentRoutePath}s/123/${jpaName}s/new`
    // }
    actionBody = `import axios, { Axios } from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function action({ request }) {
  let bObject = {};

  const formData = await request.formData();
  bObject = Object.fromEntries(formData);

  try {
    const response = await sendRequest(
      \`${backendUrl}${newActionBodyPath}\`,
      'POST',
      bObject
    ).then((response) => {
        ${tmp}
        return redirect(\`${newActionBodyPath}\`);
      },
      // (error) => {
      //   return redirect(\`${newActionBodyPath}/\${bObject['id']}/edit\`);
      // }
    );
    return redirect(\`${newActionBodyRedirectPath}\`);
  } catch (error) {
    throw error;
  }
}
`;
  } else if (mode == 'edit') {
    let editActionBodyPath = ``
    let editActionBodyRedirectPath = ``
    let tmp = ``

    //  action body
    // editActionBodyPath += `${isRoot
    //     ?
    //     `/${jpaName}s/\${params['${primaryKey}']}`
    //     :
    //     `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${targetJpaParentPK}']}/${jpaName}s/\${params['${primaryKey}']}`}`;

    //  newAction body Redirect path
    // editActionBodyRedirectPath += `${isRoot
    //     ?
    //     `/${jpaName}s/\${fakeAuthProvider['activeProfile']['${primaryKey}']}`
    //     :
    //     `/${directParentRoutePath}s/:${targetJpaParentPK}/${jpaName}s/\${fakeAuthProvider['activeProfile']['${primaryKey}']}`}`
    tmp += `
            fakeAuthProvider['activeProfile']['tafTitle'] = bObject['title']`

    if (isRoot) {
      editActionBodyPath = `/${jpaName}s/\${params['${primaryKey}']}`
      editActionBodyRedirectPath = `/${jpaName}s/\${params['${primaryKey}']}`

      const activeProfileProperty = Object.keys(virtualPKColumn).length > 0
        ?
        virtualPKColumn['title']
        :
        primaryKey

      tmp += `
            fakeAuthProvider['activeProfile']['${activeProfileProperty}'] = bObject['${activeProfileProperty}']`

      Object.keys(pathVariableObject).map(obj => {
        tmp += `
            fakeAuthProvider['activeProfile']['${obj}'] = bObject['${obj}']`
      })
    } else {
      editActionBodyPath = `/${parentJpaName}s/\${params['${targetJpaParentPK}']}/${jpaName}s/\${params['${primaryKey}']}`
      editActionBodyRedirectPath = `/${directParentRoutePath}s/\${params['${targetJpaParentPK}']}/${jpaName}s`
    }
    // /\${params['${primaryKey}']}            
    actionBody += `import axios, { Axios } from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function action({ request, params }) {
  // const navigate = useNavigate();

  let bObject = {};

  const formData = await request.formData();
  bObject = Object.fromEntries(formData);

  try {
    const response = await sendRequest(
      \`${backendUrl}${editActionBodyPath}\`,
      'PUT',
      bObject
    ).then(
      (response) => {
        ${tmp}
        return redirect(\`${editActionBodyPath}\`);
      },
      // (error) => {
      //   return redirect(\`${editActionBodyPath}/\${bObject['id']}/edit\`);
      // }
    );
    return redirect(\`${editActionBodyRedirectPath}\`);
  } catch (error) {
    throw error;
  }
}
`;
  } else if (mode == 'view') {
    let actionPath = ``
    let viewActionBodyPath = ``
    let viewActionBodyRedirectPath = ``

    if (isRoot) {
      actionPath = `if (fakeAuthProvider['activeProfile']['${primaryKey}']) {
    actionPath = \`/${jpaName}s/\${params['${primaryKey}'] } \`
  } else {
    actionPath = '/${jpaName}s/'
  }`
      viewActionBodyPath = `/${jpaName}s/\${params['${primaryKey}']}`
      viewActionBodyRedirectPath = `/${jpaName}s/\${params['${primaryKey}']}`
    } else {
      actionPath = `if (fakeAuthProvider['activeProfile']['${primaryKey}']) {
    actionPath = \`/${parentJpaName}s/\${params['${targetJpaParentPK}']}/${jpaName}s/\${params['${primaryKey}'] } \`
  } else {
    actionPath = \`/${parentJpaName}s/\${params['${targetJpaParentPK}']}/${jpaName}s\`
  }`
      viewActionBodyPath = `/${parentJpaName}s/\${params['${targetJpaParentPK}']}/${jpaName}s/\${params['${primaryKey}']}`
      viewActionBodyRedirectPath = `/${directParentRoutePath}s/\${params['${targetJpaParentPK}']}/${jpaName}s`
    }
    // actionPath = \`'/${objectName}s/view'\`
    // actionPath = \`${directParentRoutePath}s/:${result['targetJpaParentPK']}/${objectName}s/view\`}\`

    //     if (isRootRoute(jpaName)) {
    //         actionPath = `if (Object.keys(params).length == 0) {
    //   actionPath = \`'/${objectName}s/view'\`
    // } else if (Object.keys(params).length == 1) {
    //   actionPath = \`'/${objectName}s/view'\`
    // }`
    //     } else if (!isRootRoute(jpaName)) {
    //         actionPath = `if (Object.keys(params).length == 0) {
    //   actionPath = \`${directParentRoutePath}s/\${params['${result['targetJpaParentPK']}']}/${objectName}s\`
    // } else if (Object.keys(params).length == 1) {
    //   actionPath = \`${directParentRoutePath}s/\${params['${result['targetJpaParentPK']}']}/${objectName}s\`
    // }`
    //     }

    actionBody += `import axios, { Axios } from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function action({ request, params }) {
  
  let actionPath = \`\`
  ${actionPath}

  try {
        // return redirect(\`\${viewActionBodyPath}/\${bObject['id']}/edit\`);
    return redirect(actionPath);
  } catch (error) {
    throw error;
  }
}
`;

  } else if (mode == 'delete') {
    let deleteActionBodyPath = ``
    let redirectPath = ``

    const columnToSelect =
      virtualPKColumn['title'] == undefined
        ?
        `'${primaryKey}'`
        :
        // `fakeAuthProvider['${result['virtualPKColumn']['title']}'] == '' ? fakeAuthProvider['${result['primaryKey']}'] : fakeAuthProvider['${result['virtualPKColumn']['title']}']`
        `fakeAuthProvider['activeProfile']['${virtualPKColumn['title']}'] == '' 
        ? 
        '${primaryKey}' 
        : 
        '${virtualPKColumn['title']}'`

    // deleteActionBodyPath += `${isRoot ? `/${jpaName}s/\${fakeAuthProvider['activeProfile']['${primaryKey}']}` : `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${targetJpaParentPK}']}/${jpaName}s/\${params['${primaryKey}']}`}`;
    // deleteActionBodyPath += `${isRoot ? `/${jpaName}s/\${params['${primaryKey}']}` : `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${targetJpaParentPK}']}/${jpaName}s/\${params['${primaryKey}']}`}`;
    // deleteActionBodyPath += `${isRoot ? `/${jpaName}s/\${params[${columnToSelect}]}` : `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${targetJpaParentPK}']}/${jpaName}s/\${params[${columnToSelect}]}`}`;

    //  IMPORTANT: actually Root-Level-Route should be deleted via its profile and after deleting a Root-Level-Route, user will be routed to the Top-Level list
    // redirectPath += `${isRoot ? `/${jpaName}s` : `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${targetJpaParentPK}']}/${jpaName}s`}`;

    // We decided NOT to let a Root-Level-Route to be DELETED in Top-Level list
    // redirectPath += `${getRootRoutes().includes(jpaName) ? `/${jpaName}s/\${fakeAuthProvider['activeProfile']['${result['primaryKey']}']}` : `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s`}`;

    if (isRoot) {
      deleteActionBodyPath = `/${jpaName}s/\${params['${primaryKey}']}`
      redirectPath = `/${jpaName}s`
    } else {
      // deleteActionBodyPath = `/${parentJpaName}s/\${fakeAuthProvider['activeProfile']['${targetJpaParentPK}']}/${jpaName}s/\${params[${columnToSelect}]}`
      deleteActionBodyPath = `/${parentJpaName}s/\${params['${targetJpaParentPK}']}/${jpaName}s/\${params['${primaryKey}']}`
      redirectPath = `/${parentJpaName}s/\${params['${targetJpaParentPK}']}/${jpaName}s`
    }

    actionBody = `import axios, { Axios } from 'axios';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function action({ params, request }) {
  try {
    const response = await sendRequest(
      \`${backendUrl}${deleteActionBodyPath}\`,
      'DELETE',
      null
    ).then(
      (response) => {
        return redirect(\`${redirectPath}\`);
      },
      // (error) => {
      //   return redirect(\`/${redirectPath}\`);
      // }
    );
    // fakeAuthProvider.resetActiveProfile();
    return redirect(\`${redirectPath}\`);
  } catch (error) {
    throw error;
  }
}
`;
  } else if (mode == 'report') {
    if (isRoot) {
      actionBody = `import { redirect } from 'react-router-dom';
      import { fakeAuthProvider } from '../../../auth';
      import { sendRequest } from '../../../util/makeRequest';

      export async function action({ request }) {
          let bObject = {};

          const formData = await request.formData();
          bObject = Object.fromEntries(formData);

          try {
              return redirect(\`/${onRowClick}\`);
          } catch (error) {
              throw error;
          }
      }
`
    } else {
      if (jpaName == 'dashboardMasterRpt') {
        actionBody = `import { redirect } from 'react-router-dom';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function action({ request }) {

    let bObject = {};
    //  const formData = await request.formData();
    //  bObject = Object.fromEntries(formData);
    const formData = await request.json();

    try {
        return redirect(\`/${onRowClick}/\${formData['lstTypeCode']}\`);
    } catch (error) {
        throw error;
    }
}
`
      } else if (jpaName == 'dashboardDetailRpt') {
        actionBody = `import { redirect } from 'react-router-dom';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function action({ request }) {

    let bObject = {};
    //  const formData = await request.formData();
    //  bObject = Object.fromEntries(formData);
    const formData = await request.json();

    try {
        fakeAuthProvider['activeProfile']['tafTitle'] = formData['title']
        fakeAuthProvider['activeProfile']['tafCode'] = formData['tafCode']
        fakeAuthProvider['activeProfile']['archiveNumber'] = formData['archiveNumber'] == \`\` ? 1 : formData['archiveNumber']

        // fakeAuthProvider.setActiveProfile(formData['title'], formData['archiveNumber'],formData['tafCode'])
        // return redirect(\`/tafahomInformations/report/dashboardDetailRpts\`);
        if (typeof formData['archiveNumber'] == 'undefined' || formData['archiveNumber'] == \`\`) {
          alert('شماره آرشیو تعریف نشده است.')
          return redirect(\`/tafahomInformations\`);
      } else if (typeof formData['archiveNumber'] != 'undefined' && formData['archiveNumber'] != \`\`) {
          return redirect(\`/tafahomInformations/\${formData[\'archiveNumber\']}\`);
      }
    } catch (error) {
        throw error;
    }
}
`
      } else {
        actionBody = `import { redirect } from 'react-router-dom';
        import { fakeAuthProvider } from '../../../auth';
        import { sendRequest } from '../../../util/makeRequest';
        export async function action({ request }) {
            let bObject = {};
            //  const formData = await request.formData();
            //  bObject = Object.fromEntries(formData);
            const formData = await request.json();
        
            try {
                return redirect(\`/${onRowClick}/\${formData['lstTypeCode']}\`);
            } catch (error) {
                throw error;
            }
        }
        `
      }
    }
  }
  return actionBody
}

exports.generateReportColumnLayout = () => {

}