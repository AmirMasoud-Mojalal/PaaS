const process = require('process');
const { firstLetterLowerCase } = require('./util');
const {
  isJpaNameExist,
  isStoredProcedureNameExist,
  isRestServiceNameExist,
} = require('./DomainConfig');
const { contentData } = require('./Data/Content');
const { userData } = require('./Data/User');
const validContetnKeys = {
  appObjectId: '',
  pluralLable: '',
  singularLable: '',
  dataAccessLayer: '',
};
const {
  isValidationRuleNameExist,
  getValidationRuleByName,
} = require('./Data/Validation');
// const { isRouteNameValid } = require('./ContentMapValidator');

const validDataAccessLayerKeys = {
  jpas: '',
  storedProcedures: '',
  restServices: '',
};
const validJpaMethods = {
  saveAll: '',
  findAll: '',
  //  TODO
  //  candidate to be removed
  findById: '',
  findByIndex: '',
  updateByIndex: '',
  updateById: ``,
  deleteById: ``,
};
const validJpaMethodConditions = {
  preConditions: {},
  postConditions: {},
};
const validJpaMethodConditionDetails = {
  validations: {},
  notifications: {},
};

const validCreateMethod = ['saveAll']
const validReadMethod = ['findByIndex']
const validUpdateMethod = ['updateByIndex', 'updateById']
const validDeleteMethod = ['deleteById']
const validListMethod = ['findAll']

exports.content = contentData;
exports.user = userData;

//   account: {
//     appObjectId: 'account',
//     content: [
//       [
//         {
//           name: 'شماره حساب',
//           title: 'accountNumber',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'نام مشتری/ سازمان',
//           title: 'customerName',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//     ],
//   },
//   customersByCustomerId: {
//     appObjectId: 'customersByCustomerId',
//     content: [
//       [
//         {
//           name: 'شماره مشتری',
//           title: 'customerNumber',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'مشتری انتخاب شده',
//           title: 'isSelected',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'boolean',
//               option: 'switch',
//             },
//           },
//         },
//       ],
//     ],
//   },
//   customersNew: {
//     appObjectId: 'customersNew',
//     content: [
//       [
//         {
//           name: 'کدملی/ شناسه ملی',
//           title: 'nationalIdentifier',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'پرداخت از محل',
//           title: 'peymentOrigin',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//               enum: [
//                 'انتخاب کنید',
//                 'پرداخت از محل مبلغ ثابت',
//                 'پرداخت از محل مبلغ معدل',
//                 'پرداخت ازمحل مبلغ ثابت یا معدل',
//               ],
//               option: 'select',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'emptyCell',
//           title: '',
//           value: {
//             type: 'emptyCell',
//             schema: {
//               type: 'emptyCell',
//             },
//           },
//         },
//         {
//           name: 'نوع مشتری',
//           title: 'customerType',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//               enum: ['حقیقی', 'حقوقی'],
//               option: 'radio',
//             },
//           },
//         },
//       ],
//     ],
//   },
//   FinantialStatementAbstract: {
//     appObjectId: 'FinantialStatementAbstract',
//     content: [
//       [
//         {
//           name: 'سرمایه ثبتی شرکت',
//           title: 'capitalAmount',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'بهای تمام شده کالای فروش رفته',
//           title: 'costOfComodity',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'فروش شرکت/ گروه',
//           title: 'soldAmount',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'جمع کل دارایی های غیرجاری شرکت/ گروه',
//           title: 'currentAssetsCost',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'جمع کل دارایی های ثابت',
//           title: 'fixedAssetsCost',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'موجودی کالای شرکت',
//           title: 'inventory',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'موجودی نقدی',
//           title: 'cachAmount',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'سرمایه گذاری کوتاه مدت',
//           title: 'shortInvestment',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'سرمایه گذاری بلندمدت',
//           title: 'longInvestment',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'پیش پرداخت',
//           title: 'prePayAmount',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'اسناد دریافتنی',
//           title: 'recievablesDocs',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'اسناد پرداختنی',
//           title: 'payableDocs',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'جمع حقوق صاحبان سهام شرکت/ گروه',
//           title: 'stakeholdersWage',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'بدهی جاری',
//           title: 'currentLiabilities',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'میزان کل بدهی های جاری شرکت',
//           title: 'totalCurrentLiabilities',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'سرمایه در گردش خالص',
//           title: 'workingCapital',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'تسهیلات کوتاه مدت',
//           title: 'shortTermFacilities',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'سرمایه بلند مدت',
//           title: 'lognTermInvestment',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'سود ناخالص شرکت',
//           title: 'grossInterest',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'سود خالص شرکت',
//           title: 'netInterest',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'نسبت جاری',
//           title: 'currentRatio',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'نسبت آنی',
//           title: 'instantaneousRatio',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'نسبت مالکانه',
//           title: 'proprietaryRatio',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'مقطع زمانی',
//           title: 'semester',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//               enum: [
//                 'انتخاب کنید',
//                 'شش ماه اول ۱۴۰۲',
//                 'شش ماه دوم ۱۴۰۲',
//                 'شش ماه اول  ۱۴۰۳',
//                 'شش ماه دوم ۱۴۰۳',
//               ],
//               option: 'select',
//             },
//           },
//         },
//       ],
//     ],
//   },
//   FinantialStatement: {
//     appObjectId: 'FinantialStatement',
//     content: [
//       [
//         {
//           name: 'فروش خالص',
//           title: 'netSell',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'سرمایه درگردش',
//           title: 'workingCapital',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'دارایی غیرجاری',
//           title: 'nonCurrentAssets',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'میزان داریی ثابت',
//           title: 'fixAssets',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'حقوق صاحبان سهام',
//           title: 'stakeholdersWage',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'موجودی کالای شرکت',
//           title: 'inventory',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'اسناد دریافتنی',
//           title: 'recievableDocs',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'اسناد پرداختنی',
//           title: 'payableDocs',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'بدهی بلند مدت',
//           title: 'longTermDebit',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'موجودی نقد',
//           title: 'liquidity',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'حساب های دریافتنی',
//           title: 'recievable',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'حساب های پرداختنی',
//           title: 'payable',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'بهای تمام شده کالای فروش رفته',
//           title: 'costOfSoldGoods',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'سرمایه گذاری کوتاه مدت',
//           title: 'shortTermInvestment',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'بدهی جاری',
//           title: 'currentLiability',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//         {
//           name: 'مقطع زمانی',
//           title: 'period',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//               enum: ['انتخاب کنید', ''],
//               option: 'select',
//             },
//           },
//         },
//       ],
//     ],
//   },
//   ResourcesAndExpenses: {
//     appObjectId: 'ResourcesAndExpenses',
//     content: [
//       [
//         {
//           name: 'سال',
//           title: 'year',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//               enum: ['انتخاب کنید', 'سال اول', 'سال دوم', 'سال سوم'],
//               option: 'select',
//             },
//           },
//         },
//         {
//           name: 'پیش بینی منابع',
//           title: 'resourceForecast',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'emptyCell',
//           title: '',
//           value: {
//             type: 'emptyCell',
//             schema: {
//               type: 'String',
//               enum: ['انتخاب کنید', 'سال اول', 'سال دوم', 'سال سوم'],
//               option: 'select',
//             },
//           },
//         },
//         {
//           name: 'پیش بینی مصارف',
//           title: 'expenseForecast',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//       [
//         {
//           name: 'emptyCell',
//           title: '',
//           value: {
//             type: 'emptyCell',
//             schema: {
//               type: 'String',
//               enum: ['انتخاب کنید', 'سال اول', 'سال دوم', 'سال سوم'],
//               option: 'select',
//             },
//           },
//         },
//         {
//           name: 'پیش بینی تعهدات',
//           title: 'ObligationsForecast',
//           value: {
//             type: 'primitive',
//             schema: {
//               type: 'String',
//             },
//           },
//         },
//       ],
//     ],
//   },
//   UploadFileRM: {
//     appObjectId: 'UploadFileRM',
//     content: [
//       [
//         {
//           name: 'اساسنامه',
//           title: 'statute',
//           value: {
//             type: 'blob',
//             schema: {
//               type: 'file',
//             },
//           },
//         },
//         {
//           name: 'آخرین روزنامه رسمی شرکت (امضاء داران مجاز اسناد تعهدآور)',
//           title: 'newspaperImage',
//           value: {
//             type: 'blob',
//             schema: {
//               type: 'file',
//             },
//           },
//         },
//       ],
//   //     [
//   //       {
//   //         name: 'استعلام مانده بدهی نزد سیستم بانکی (استخراج شده توسط مدیریت شعب)',
//   //         title: 'debtBalance',
//   //         value: {
//   //           type: 'blob',
//   //           schema: {
//   //             type: 'file',
//   //           },
//   //         },
//   //       },
//   //       {
//   //         name: 'اسکن نامه مشتری مبنی براعلام کتبی بدهی تسهیلاتی به سیستم بانکی',
//   //         title: 'facilityDebt',
//   //         value: {
//   //           type: 'blob',
//   //           schema: {
//   //             type: 'file',
//   //           },
//   //         },
//   //       },
//   //     ],
//   //     [
//   //       {
//   //         name: 'اسکن آخرین صورت های مالی حسابرسی شده',
//   //         title: 'financialStatement',
//   //         value: {
//   //           type: 'blob',
//   //           schema: {
//   //             type: 'file',
//   //           },
//   //         },
//   //       },
//   //       {
//   //         name: 'تایید عایدی ناشی از هزینه فایده منابع مشتری (براساس محاسبات انجام شده قبلی درهنگام مذاکره ویا فعلی دربخش هزینه فایده)',
//   //         title: 'confirmation',
//   //         value: {
//   //           type: 'blob',
//   //           schema: {
//   //             type: 'file',
//   //           },
//   //         },
//   //       },
//   //     ],
//   //     [
//   //       {
//   //         name: 'فایل word پیش نویس تفاهم نامه (تنظیم شده براساس مذاکرات ونیاز سنجی های انجام شده از مشتری)',
//   //         title: 'draft',
//   //         value: {
//   //           type: 'blob',
//   //           schema: {
//   //             type: 'file',
//   //           },
//   //         },
//   //       },
//   //       {
//   //         name: 'اسکن فرم های تکمیل شده ۷ گانه انعقاد تفاهم نامه (فرم اول شامل پیش بینی پیش بینی و نظر کمیته اعتباری مدیریت شعب می باشد)',
//   //         title: 'sevenForms',
//   //         value: {
//   //           type: 'blob',
//   //           schema: {
//   //             type: 'file',
//   //           },
//   //         },
//   //       },
//   //     ],
//   //     [
//   //       {
//   //         name: 'آپلود فایل اسکن شماره حساب های مشتری (ارزی وریالی)',
//   //         title: 'accountNumbers',
//   //         value: {
//   //           type: 'blob',
//   //           schema: {
//   //             type: 'file',
//   //           },
//   //         },
//   //       },
//   //       {
//   //         name: 'مشخصات امضاء داران مجاز شرکت و نقطه تماس به همراه شماره تلفن',
//   //         title: 'contactPoints',
//   //         value: {
//   //           type: 'blob',
//   //           schema: {
//   //             type: 'file',
//   //           },
//   //         },
//   //       },
//   //     ],
//   //   ],
//   // },
//   // Insurence: {
//   //   appObjectId: 'Insurence',
//   //   content: [
//   //     [
//   //       {
//   //         name: 'شرکت بیمه',
//   //         title: 'insurrenceCompany',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //           },
//   //         },
//   //       },
//   //       {
//   //         name: 'نام نمایندگی',
//   //         title: 'insurenceAgencyName',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //           },
//   //         },
//   //       },
//   //     ],
//   //     [
//   //       {
//   //         name: 'کدنمایندگی',
//   //         title: 'agencyCode',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //           },
//   //         },
//   //       },
//   //       {
//   //         name: 'آدرس',
//   //         title: 'address',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //           },
//   //         },
//   //       },
//   //     ],
//   //     [
//   //       {
//   //         name: 'نوع بیمه',
//   //         title: 'insurenceType',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //             enum: [
//   //               'انتخاب کنید',
//   //               'بیمه شخص ثالث',
//   //               'بیمه بدنه',
//   //               'بیمه آتش سوزی',
//   //               'بیمه مسولیت مدنی',
//   //             ],
//   //             option: 'select',
//   //           },
//   //         },
//   //       },
//   //       {
//   //         name: 'تعداد',
//   //         title: 'number',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //           },
//   //         },
//   //       },
//   //     ],
//   //     [
//   //       {
//   //         name: 'درصد تخفیف',
//   //         title: 'discountPercentage',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //           },
//   //         },
//   //       },
//   //       {
//   //         name: 'توضیحات',
//   //         title: 'description',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //           },
//   //         },
//   //       },
//   //     ],
//   //   ],
//   // },
//   // POS: {
//   //   appObjectId: 'POS',
//   //   content: [
//   //     [
//   //       {
//   //         name: 'نوع کارتخوان',
//   //         title: 'posType',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //           },
//   //         },
//   //       },
//   //       {
//   //         name: 'تعداد کارتخوان',
//   //         title: 'posNumber',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //           },
//   //         },
//   //       },
//   //     ],
//   //     [
//   //       {
//   //         name: 'توضیحات',
//   //         title: 'description',
//   //         value: {
//   //           type: 'primitive',
//   //           schema: {
//   //             type: 'String',
//   //           },
//   //         },
//   //       },
//   //     ],
//   //   ],
//   // },
// };

let isValid = true;
let isValidJaps = 0;
let isValidStoredProcedures = 0;
let isValidRestServices = 0;

exports.validate = () => {
  // 'Content' must be an Object
  if (typeof this.content != 'object') {
    isValid = false;
    console.log(`'Content' is expected to be an Object.`);
    process.exit(1);
  }
  // 'Content' must have atleast One key
  if (Object.keys(this.content).length < 1) {
    isValid = false;
    console.log(`'Content' must have atleast One key`);
    process.exit(1);
  }

  Object.keys(this.content).map((entry) => {

    // The Entry must be an object
    if (typeof this.content[entry] != 'object') {
      isValid = false;
      console.log(`Content[${entry}] is expected to be an Object.`);
      process.exit(1);
    }
    // The content entry must have just two keys
    if (Object.keys(this.content[entry]).length != 4) {
      isValid = false;
      console.log(`Content[${entry}] must have just two keys`);
      process.exit(1);
    }
    //  each entry must have both 'appObjId', 'dataAccessLayer' keys
    Object.keys(this.content[entry]).map((entr) => {
      if (!(entr in validContetnKeys)) {
        isValid = false;
        console.log(
          `Content[${entry}] must have both 'appObjId', 'dataAccessLayer', 'pluralLable', and 'singularLable'  keys.`
        );
        process.exit(1);
      }
    });

    // // appObjectId must be exist in 'ContentMap' object.
    // if (!isRouteNameValid(this.content[entry]['appObjectId'])) {
    //   isValid = false;
    //   console.log(
    //     `Content[${entry}][appObjectId] appObjectId name in 'Content' object must have equivalent value in ContentMapValidator! `
    //   );
    //   // process.exit(1);
    // }

    //  -----------------------------------------
    //  |              appObjectId              |
    //  -----------------------------------------
    // appObjectId must be a valid object
    if (this.content[entry]['appObjectId'] == null) {
      isValid = false;
      console.log(`Content[${entry}][appObjectId] must not be null.`);
      process.exit(1);
    }
    // appObjectId must be a valid string
    if (this.content[entry]['appObjectId'].length < 1) {
      isValid = false;
      console.log(`Content[${entry}][appObjectId] must be a valid string.`);
      process.exit(1);
    }
    // appObjectId must start with lowerCase letter
    if (
      this.content[entry]['appObjectId'] !=
      firstLetterLowerCase(this.content[entry]['appObjectId'])
    ) {
      isValid = false;
      console.log(
        `Content[${entry}][appObjectId] must start with lowerCase letter.`
      );
      process.exit(1);
    }

    //  -----------------------------------------
    //  |             dataAccessLayer            |
    //  -----------------------------------------
    // dataAccessLayer keys must have exactly 3 keys
    if (Object.keys(this.content[entry]['dataAccessLayer']).length != 3) {
      isValid = false;
      console.log(
        `Content[${entry}][DataAccessLayer] dataAccessLayer keys must have exactly 3 keys.`
      );
      process.exit(1);
    }
    // dataAccessLayer keys must be one of valid DataAccessLayer
    Object.keys(this.content[entry]['dataAccessLayer']).map((entr) => {
      if (!(entr in validDataAccessLayerKeys)) {
        isValid = false;
        console.log(
          `Content[${entry}][DataAccessLayer] keys must be one of valid DataAccessLayers.`
        );
        process.exit(1);
      }
    });
    //  jpas/storedProcedures/restServices can not be empty at same time
    if (
      Object.keys(this.content[entry]['dataAccessLayer']['jpas']).length == 0 &&
      Object.keys(this.content[entry]['dataAccessLayer']['storedProcedures'])
        .length == 0 &&
      Object.keys(this.content[entry]['dataAccessLayer']['restServices'])
        .length == 0
    ) {
      isValid = false;
      console.log(
        `Content[${entry}][dataAccessLayer] jpas/storedProcedures/restServices can not be empty at same time.`
      );
      process.exit(1);
    }
    //  -----------------------------------------
    //  |        dataAccessLayer/ jpas           |
    //  -----------------------------------------
    Object.keys(this.content[entry]['dataAccessLayer']['jpas']).map(
      (jpaName) => {
        // jpaName must be a valid object
        if (jpaName == null) {
          isValid = false;
          console.log(
            `Content[${entry}][dataAccessLayer][jpas][${jpaName}] must not be null.`
          );
          process.exit(1);
        }
        // jpaName must be a valid string
        if (jpaName.length < 1) {
          isValid = false;
          console.log(
            `Content[${entry}][dataAccessLayer][jpas][${jpaName}] must be a valid string.`
          );
          process.exit(1);
        }
        // jpa name must start with lowerCase letter
        if (jpaName != firstLetterLowerCase(jpaName)) {
          isValid = false;
          console.log(
            `Content[${entry}][dataAccessLayer][jpas][${jpaName}] jpa name must start with lowerCase letter.`
          );
          process.exit(1);
        }
        // jpa name must be exist in 'Domain' object.
        const targetJpa = isJpaNameExist(jpaName);
        if (targetJpa == false) {
          isValid = false;
          console.log(
            `Content[${entry}][dataAccessLayer][jpas][${jpaName}] jpa name in 'Content' object must be exist in 'Domain' object.`
          );
          process.exit(1);
        }

        // jpa methods
        Object.keys(
          this.content[entry]['dataAccessLayer']['jpas'][jpaName]
        ).map((jpaMethodName) => {
          //  jpa method must be one of valid jpa methods e.i. getAll(), getById(), saveAll()
          if (!(jpaMethodName in validJpaMethods)) {
            isValid = false;
            console.log(
              `Content[${entry}][DataAccessLayer][jpas][${jpaName}] jpa method must be one of valid Jpa method names.`
            );
            process.exit(1);
          }
          //  jpa method must have exactly 2 child keys e.i. preCondition & postCondition
          if (
            Object.keys(
              this.content[entry]['dataAccessLayer']['jpas'][jpaName][
              jpaMethodName
              ]
            ).length != 2
          ) {
            console.log(
              `Content[${entry}][DataAccessLayer][jpas][${jpaName}][${jpaMethodName}] jpa method must have exactly 2 child keys`
            );
            process.exit(1);
          }
          //  jpa method preConditions & postConditions
          Object.keys(
            this.content[entry]['dataAccessLayer']['jpas'][jpaName][
            jpaMethodName
            ]
          ).map((jpaMethodCondition) => {
            //  jpa method conditions must have one of valid jpa method conditions  e.i. 'preCondition' or 'postCondition'
            if (!(jpaMethodCondition in validJpaMethodConditions)) {
              console.log(
                `Content[${entry}][DataAccessLayer][jpas][${jpaName}] jpa method must have one of valid Jpa method conditions.`
              );
              process.exit(1);
            }
            //  jpa method conditions must have exactly 2 child keys e.i. validations & notifications
            if (
              Object.keys(
                this.content[entry]['dataAccessLayer']['jpas'][jpaName][
                jpaMethodName
                ][jpaMethodCondition]
              ).length != 2
            ) {
              console.log(
                `Content[${entry}][DataAccessLayer][jpas][${jpaName}][${jpaMethodName}] jpa method condition must have exactly 2 child keys`
              );
              process.exit(1);
            }
            //  jpa method condition detials
            Object.keys(
              this.content[entry]['dataAccessLayer']['jpas'][jpaName][
              jpaMethodName
              ][jpaMethodCondition]
            ).map((jpaMethodConditionDetail) => {
              //  jpa method condition details must have valid jpa method condition details e.i. 'validations' or 'notifications'
              if (
                !(jpaMethodConditionDetail in validJpaMethodConditionDetails)
              ) {
                console.log(
                  `Content[${entry}][DataAccessLayer][jpas][${jpaName}] jpa method condition detils, must have one of valid Jpa method condition details.`
                );
                process.exit(1);
              }
              // jpa method condition details - validations
              if (jpaMethodConditionDetail == 'validations') {
                Object.keys(
                  this.content[entry]['dataAccessLayer']['jpas'][jpaName][
                  jpaMethodName
                  ][jpaMethodCondition][jpaMethodConditionDetail]
                ).map((jpaMethodConditionDetailName) => {
                  // jpa method condition details - validation must start with lowerCase letter
                  if (
                    jpaMethodConditionDetailName !=
                    firstLetterLowerCase(jpaMethodConditionDetailName)
                  ) {
                    isValid = false;
                    console.log(
                      `[${entry}][dataAccessLayer][jpas][${jpaName}] jpa method condition details validation must start with lowerCase letter.`
                    );
                    process.exit(1);
                  }
                  //  jpa method condition details - validation must exist in 'Validation' object.
                  const targetRule = isValidationRuleNameExist(
                    jpaMethodConditionDetailName
                  );
                  if (targetRule == false) {
                    console.log(
                      `Content[${entry}][dataAccessLayer][jpas][${jpaName}] jpa method condition details, must exists in 'Validatioin' object.`
                    );
                    process.exit(1);
                  }
                });
              }
            });
          });
        });
      }
    );

    //  -----------------------------------------
    //  |   dataAccessLayer/ storedProcedures   |
    //  -----------------------------------------
    Object.keys(this.content[entry]['dataAccessLayer']['storedProcedures']).map(
      (storedProcedureName) => {
        // storedProcedure name must be a valid object
        if (storedProcedureName == null) {
          isValid = false;
          console.log(
            `[${entry}][dataAccessLayer][storedProcedures][${storedProcedureName}] storedProcedureName must not be null.`
          );
          process.exit(1);
        }
        // storedProcedure name must be a valid string
        if (storedProcedureName.length < 1) {
          isValid = false;
          console.log(
            `[${entry}][dataAccessLayer][storedProcedures][${storedProcedureName}] storedProcedureName must be a valid string.`
          );
          process.exit(1);
        }

        // storedProcedure name must start with lowerCase letter
        if (storedProcedureName != firstLetterLowerCase(storedProcedureName)) {
          isValid = false;
          console.log(
            `[${entry}][dataAccessLayer][storedProcedures][${storedProcedureName}] storedProcedure name must start with lowerCase letter.`
          );
          process.exit(1);
        }
        // storedProcedure methos
        Object.keys(
          this.content[entry]['dataAccessLayer']['storedProcedures'][
          storedProcedureName
          ]
        ).map((storedProcedureMethodName) => {
          //  jpa method must be one of valid jpa methods e.i. getAll(), getById(), saveAll()
          if (!(storedProcedureMethodName in validJpaMethods)) {
            isValid = false;
            console.log(
              `Content[${entry}][DataAccessLayer][storedProcedures][${storedProcedureName}] storedProcedure method must be one of valid Jpa method names.`
            );
            process.exit(1);
          }
          //  jpa method conditions
          Object.keys(
            this.content[entry]['dataAccessLayer']['storedProcedures'][
            storedProcedureName
            ][storedProcedureMethodName]
          ).map((jpaMethodCondition) => {
            //  jpa method must have one of valid jpa method conditions  e.i. 'preCondition' or 'postCondition'
            if (!(jpaMethodCondition in validJpaMethodConditions)) {
              console.log(
                `Content[${entry}][DataAccessLayer][storedProcedures][${storedProcedureName}] storedProcedure method must have one of valid Jpa method conditions.`
              );
              process.exit(1);
            }
            //  jpa method condition detials
            Object.keys(
              this.content[entry]['dataAccessLayer']['storedProcedures'][
              storedProcedureName
              ][storedProcedureMethodName][jpaMethodCondition]
            ).map((jpaMethodConditionDetail) => {
              //  jpa method must have valid jpa method condition details e.i. 'validations' or 'notifications'

              if (
                !(jpaMethodConditionDetail in validJpaMethodConditionDetails)
              ) {
                console.log(
                  `Content[${entry}][DataAccessLayer][storedProcedures][${storedProcedureName}] storedProcedure method, must have one of valid Jpa method condition details.`
                );
                process.exit(1);
              }

              if (jpaMethodConditionDetail == 'validations') {
                //  each valid jpa method condition must exist in 'Validation' object.
                Object.keys(
                  this.content[entry]['dataAccessLayer']['storedProcedures'][
                  storedProcedureName
                  ][storedProcedureMethodName][jpaMethodCondition][
                  jpaMethodConditionDetail
                  ]
                ).map((jpaMethodConditionDetailName) => {
                  const targetRule = isValidationRuleNameExist(
                    jpaMethodConditionDetailName
                  );
                  if (targetRule == false) {
                    console.log(
                      `Content[${entry}][dataAccessLayer][storedProcedures][${storedProcedureName}] storedProcedure method condition, must exists in 'Validatioin' object.`
                    );
                    process.exit(1);
                  }
                });
              }
            });
          });
        });
        // storedProcedure name must be exist in 'Domain' object.
        const targetStoredProcedure =
          isStoredProcedureNameExist(storedProcedureName);
        if (targetStoredProcedure == false) {
          isValid = false;
          console.log(
            `[${entry}][dataAccessLayer][storedProcedures][${storedProcedureName}] storedProcedure name in 'Content' object must be exist in 'Domain' object.`
          );
          process.exit(1);
        }
      }
    );

    //  -----------------------------------------
    //  |   dataAccessLayer/ RestService   |
    //  -----------------------------------------
    Object.keys(this.content[entry]['dataAccessLayer']['restServices']).map(
      (restServiceName) => {
        // storedProcedure name must be exist in 'Domain' object.
        const targetRest = isRestServiceNameExist(restServiceName);
        if (targetRest == false) {
          isValid = false;
          console.log(
            `[${entry}][dataAccessLayer][restServices][${restServiceName}] restService name must be exist in 'Domain' object.`
          );
          process.exit(1);
        }
      }
    );

    // isValid = false;
  });

  return isValid;
};

//  call in CantentMapValidator.js
exports.isEntryNameValid = (entryName) => {
  let targetEntry = ``;
  let isNameValid = false;
  Object.keys(this.content).map((entry) => {
    if (entryName == this.content[entry]['appObjectId']) {
      targetEntry = `[${entry}]['dataAccessLayer']['jpas']`;
      isNameValid = true;
    }
  });
  return isNameValid;
  // return targetEntry;
};
//  set as a appConfig variable in Generator
//  called in ControllerGenerator
exports.getValidationRuleSetOfContentEntryName = (appObjectId) => {
  let targetValidationRule = {};
  Object.keys(this.content).map((entry) => {
    if (entry == appObjectId) {
      Object.keys(this.content[entry]['dataAccessLayer']['jpas']).map(
        (jpaName) => {
          Object.keys(
            this.content[entry]['dataAccessLayer']['jpas'][jpaName]
          ).map((jpaNameMethod) => {
            if (
              Object.keys(
                this.content[entry]['dataAccessLayer']['jpas'][jpaName][
                jpaNameMethod
                ]['preConditions']['validations']
              ).length > 0
            ) {
              Object.keys(
                this.content[entry]['dataAccessLayer']['jpas'][jpaName][
                jpaNameMethod
                ]['preConditions']['validations']
              ).map((validationRule) => {
                targetValidationRule[validationRule] =
                  getValidationRuleByName(validationRule);
              });
            }
          });
        }
      );
      //  TODO
      //  also check validation rule in storedProcedure & restServices
      Object.keys(
        this.content[entry]['dataAccessLayer']['storedProcedures']
      ).map((storedProcedure) => { });
      Object.keys(this.content[entry]['dataAccessLayer']['restServices']).map(
        (restService) => { }
      );
    }
  });
  return targetValidationRule;
};

//  Called from 'controllerGenerator.js' and
//  Called from 'Generator.js'
exports.getAppObjectIdByJpaName = (targetJpaName) => {
  let appObjectId = ``;
  Object.keys(this.content).map((entry) => {
    // console.log(this.content[entry]['appObjectId']);
    Object.keys(this.content[entry]['dataAccessLayer']['jpas']).map(
      (jpaName) => {
        if (jpaName == targetJpaName) {
          // console.log(this.content[entry]['appObjectId']);
          appObjectId = this.content[entry]['appObjectId'];
        }
      }
    );
  });
  return appObjectId;
};
// console.log(this.getAppObjectIdByJpaName('eghdamat'));

/* 
called from:
  ControllerGenerator
  EntityGenerator
  Generator
  ModelGenerator
  RepositoryGenerator
  ServiceGenerator
  ServiceImplGenerator
  ServiceLogicGenerator
  testGenerator
  ClientProjectEditGenerator
  ClientProjectListGenerator
  ClientProjectNewGenerator
  ClientProjectViewGenerator
 */
exports.getJpaNameByAppObjectId = (appObjectId) => {
  let jpaName = ``;
  Object.keys(this.content).map((entry) => {
    if (entry == appObjectId) {
      jpaName = Object.keys(this.content[entry]['dataAccessLayer']['jpas'])[0];
    }
  });
  return jpaName;
};
// console.log(this.getJpaNameByAppObjectId('tafahomFirstForm'));
// console.log(this.getJpaNameByAppObjectId('eghdamat'));
// console.log(this.getJpaNameByAppObjectId().length);

exports.getAppObjectByAppObjectId = (appObjectId) => {

  let appObject = ``;
  Object.keys(this.content).map((entry) => {
    if (entry == appObjectId) {
      // console.log(Object.keys(this.content[entry])[0]);
      // appObject = Object.entries(this.content[entry]);
      appObject = this.content[entry];
    }
  });
  return appObject;
};
// console.log(this.getAppObjectByAppObjectId('tafahomFirstForm'));
// console.log(this.getAppObjectByAppObjectId('eghdamat'));
// console.log(this.getAppObjectByAppObjectId().length);

// called from ClientProjectRouterGenerator.js
// called from ClientProjectSecurityGenerator.js
exports.listOfObjects = () => {
  appObjects = {};
  jpaNames = {};
  storedProcedureNames = {};
  restServiceNames = {};
  Object.keys(this['content']).map((entry) => {
    appObjects[this['content'][entry]['appObjectId']] = '';
    Object.keys(this['content'][entry]['dataAccessLayer']['jpas']).map(
      (entry) => {
        jpaNames[entry] = '';
      }
    );
    Object.keys(
      this['content'][entry]['dataAccessLayer']['storedProcedures']
    ).map((storedProcedureName) => {
      storedProcedureNames[storedProcedureName] = '';
    });
    Object.keys(this['content'][entry]['dataAccessLayer']['restServices']).map(
      (restServiceName) => {
        restServiceNames[restServiceName] = '';
      }
    );
  });
  return appObjects;
  // console.log(appObjects);
  // console.log(jpaNames);
  // console.log(storedProcedureNames);
  // console.log(restServiceNames);
};
exports.hasAnyValidCreateMethod = (appObjectId) => {
  return Object.keys(this.getAppObjectByAppObjectId(appObjectId)['dataAccessLayer']['jpas'][appObjectId]).some(r => validCreateMethod.includes(r))
}

exports.hasAnyValidReadMethod = (appObjectId) => {
  return Object.keys(this.getAppObjectByAppObjectId(appObjectId)['dataAccessLayer']['jpas'][appObjectId]).some(r => validReadMethod.includes(r))
}

exports.hasAnyValidUpdateMethod = (appObjectId) => {
  return Object.keys(this.getAppObjectByAppObjectId(appObjectId)['dataAccessLayer']['jpas'][appObjectId]).some(r => validUpdateMethod.includes(r))
}

exports.hasAnyValidDeleteMethod = (appObjectId) => {
  return Object.keys(this.getAppObjectByAppObjectId(appObjectId)['dataAccessLayer']['jpas'][appObjectId]).some(r => validDeleteMethod.includes(r))
}

exports.hasAnyValidListMethod = (appObjectId) => {
  return Object.keys(this.getAppObjectByAppObjectId(appObjectId)['dataAccessLayer']['jpas'][appObjectId]).some(r=>validListMethod.includes(r))
}
// console.log(this.hasAnyValidCreateMethod("eghdamat"));
// console.log(this.hasAnyValidReadMethod("eghdamat"));
// console.log(this.hasAnyValidUpdateMethod("eghdamat"));
// console.log(this.hasAnyValidDeleteMethod("eghdamat"));
