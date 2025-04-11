import React, { useState } from 'react';
import { FormProvider } from './context/contextProvider2';
import Menu from './context/menu';
import SetColor from './context/setColor';
import { ObjectForm } from './objectForms/objectForm';
import './css/bootstrap.rtl.min.css';
import './css/App.css';
import { objectFormGenerator } from './objectFormsSourceGenerator/objectFormGenerator';
// import { generate } from './Generator/Generator';

// const POS = [
//   //  ************************
//   [
//     {
//       lable: 'نوع کارتخوان',
//       id: 'fName',
//       // isDisabled: true,
//       // message: 'لطفا مقداردهی کنید',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       label: 'نوع منطقه',
//       id: 'regionalType',
//       // isDisabled: true,
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//           enum: ['منطقه عادی', 'منطقه آزاد تجاری - اقتصادی'],
//           option: 'select',
//         },
//       },
//     },
//   ],
//   [
//     {
//       lable: 'توضیحات',
//       id: 'description',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'mlstring',
//           lines: 3,
//         },
//       },
//     },
//     {
//       label: 'تجدید پذیر',
//       id: 'tajdid',
//       // isDisabled: true,
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'boolean',
//           option: 'switch',
//         },
//       },
//     },
//   ],
//   [
//     {
//       label: 'روش محاسبه معدل حساب',
//       id: 'AccAvg',
//       isDisabled: false,
//       inline: false,
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//           enum: {
//             0: 'محاسبه معدل حساب باشیوه استاندارد (روال فعلی)',
//             1: 'محاسبه مابه التفاوت معدل حساب براساس بازه تاریخی بامبداء مشخصی',
//           },
//           // [
//           //   'محاسبه معدل حساب باشیوه استاندارد (روال فعلی)',
//           //   'محاسبه مابه التفاوت معدل حساب براساس بازه تاریخی بامبداء مشخصی',
//           // ],
//           option: 'radio',
//         },
//       },
//     },
//     {
//       label: 'نوع تفاهم نامه',
//       id: 'TafType',
//       isDisabled: false,
//       inline: true,
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//           enum: {
//             0: 'تسهیلات اعتباری',
//             1: 'بیمه',
//             2: 'کارتخوان',
//             3: 'خودپرداز',
//           },
//           option: 'check',
//         },
//       },
//     },
//   ],
//   [
//     {
//       label: 'تاریخ انعقاد',
//       id: 'date',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'date',
//         },
//       },
//     },
//   ],
// ];

const POS = {
  datasourceName: 'localds',
  schema: 'TAFSHMA',
  content: [
    [
      {
        lable: 'نوع کارتخوان',
        title: 'POStype',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'تعداد کارتخوان',
        title: 'POSNumber',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
    [
      {
        lable: 'توضیحات',
        title: 'description',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
  ],
};

const tafahomFinalForm = {
  datasourceName: 'localds',
  schema: 'TAFSHMA',
  content: [
    [
      {
        lable: 'شماره آرشیو',
        title: 'archiveNO',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'عنوان تفاهم نامه',
        title: 'title',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
    [
      {
        lable: 'مدیریت شعب عامل',
        title: 'managementBranch',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },

      {
        lable: 'شعبه عامل',
        title: 'branchNO',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
    [
      {
        lable: 'کدتفاهم نامه',
        title: 'code',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'کارشناس تفاهم نامه',
        title: 'userName',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
    [
      {
        lable: 'شماره مشتری/ سازمان',
        title: 'customerId',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'نام مشتری/ سازمان',
        title: 'customerName',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
    [
      {
        lable: 'تاریخ انعقاد',
        title: 'startDta',
        value: {
          type: 'primitive',
          schema: {
            type: 'Date',
          },
        },
      },
      {
        lable: 'تاریخ انتقضاء',
        title: 'endDate',
        value: {
          type: 'primitive',
          schema: {
            type: 'Date',
          },
        },
      },
    ],
    [
      {
        lable: 'نوع منطقه',
        title: 'regionType',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
            enum: ['منطقه عادی', 'منطقه آزاد تجاری - اقتصادی'],
            option: 'select',
          },
        },
      },
      {
        lable: 'تجدید پذیر',
        title: 'isRecursive',
        value: {
          type: 'primitive',
          schema: {
            type: 'boolean',
            option: 'switch',
          },
        },
      },
    ],
    [
      {
        lable: 'نوع دریافت تسهیلات',
        title: 'amountAllocationType',
        inline: true,
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
            enum: ['مبلغ عددی', 'درصد منابع', 'هردو'],
            option: 'check',
          },
        },
      },
      {
        lable: 'نوع تفاهم نامه',
        title: 'items',
        inline: true,
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
            enum: ['تسهیلات اعتباری', 'بیمه', 'کارتخوان', 'خودپرداز'],
            option: 'check',
          },
        },
      },
    ],
    [
      {
        lable: 'تعداد افراد قابل اعطا',
        title: 'numOfGrantedPerson',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'مبلغ ثابت قابل اعطا',
        title: 'fixAmount',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
    [
      {
        lable: 'درصد و حداکثرجاری قابل تخصیص',
        title: 'jariGrantedAmount',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'درصد و حداکثر قرض الحسنه قابل تخصیص',
        title: 'gharzGrantedAmount',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
    [
      {
        lable: 'درصد وحداکثر کوتاه مدت قابل تخصیص',
        title: 'shortGrantedAmount',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'درصد و حداکثر بلندمدت قابل تخصیص',
        title: 'longGrantedAmount',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
    [
      {
        lable: 'روش محاسبه معدل حساب',
        title: 'calculateAVGType',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
            enum: [
              'محاسبه معدل حساب باشیوه استاندارد (روال فعلی)',
              'محاسبه مابه التفاوت معدل حساب براساس بازه تاریخی بامبداء مشخصی',
            ],
            option: 'radio',
          },
        },
      },
      {
        lable: 'درصد و حداکثر بلندمدت قابل تخصیص',
        title: 'longGrantedAmount2',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
    [
      {
        lable: '',
        title: '',
        value: {
          type: 'emptyCell',
          schema: {
            type: 'emptyCell',
          },
        },
      },
      // {
      //
      //   lable: '',
      //   title: '',
      //   value: {
      //     type: 'emptyCell',
      //     schema: {
      //       type: 'emptyCell',
      //     },
      //   },
      // },
      {
        lable: 'تاریخ',
        title: 'date',
        value: {
          type: 'primitive',
          schema: {
            type: 'Date',
          },
        },
      },
    ],
  ],
};

const search = {
  datasourceName: 'localds',
  schema: 'TAFSHMA',
  content: [
    [
      {
        lable: 'کد تفاهم نامه',
        title: 'archiveNO',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'عنوان تفاهم نامه',
        title: 'title',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'شماره مصوبه',
        title: 'archiveNO',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
    ],
    [
      {
        lable: 'از',
        title: 'archiveNO',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'تا',
        title: 'title',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        name: 'emptyCell',
        title: '',
        value: {
          type: 'emptyCell',
          schema: {
            type: 'emptyCell',
          },
        },
      },
    ],
    [
      {
        lable: 'مدیریت شعب',
        title: 'archiveNO',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        lable: 'شعبه عامل',
        title: 'title',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        name: 'emptyCell',
        title: '',
        value: {
          type: 'emptyCell',
          schema: {
            type: 'emptyCell',
          },
        },
      },
    ],
    [
      {
        lable: 'ادارات کل',
        title: 'archiveNO',
        value: {
          type: 'primitive',
          schema: {
            type: 'String',
          },
        },
      },
      {
        name: 'emptyCell',
        title: '',
        value: {
          type: 'emptyCell',
          schema: {
            type: 'emptyCell',
          },
        },
      },
      {
        name: 'emptyCell',
        title: '',
        value: {
          type: 'emptyCell',
          schema: {
            type: 'emptyCell',
          },
        },
      },
    ],
  ],
};

const userProfile = {
  content: [
    [
      {
        title: 'گزارش فعالیت های کاربر',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'ردیف',
                'تاریخ',
                'شناسه کاربری',
                'نام ',
                'نام خانوادگی',
                'آی پی',
                'نام فعالیت',
                'جزییات فعالیت',
                'نتیجه فعالیت',
              ],
              [
                [
                  '1',
                  '۱۴۰۲/۱۱/۰۱',
                  ' userName',
                  'نام',
                  'نام خانوادگی',
                  '172.0.0.1',
                  'فرم اولیه',
                  '',
                  'موفق',
                ],
              ],
            ],
          },
        },
      },
    ],
  ],
};

const TafahomchangeStatus = [
  //  ************************
  [
    {
      lable: ' فعال سازی تفاهم نامه',
      name: 'fName',
      value: {
        type: 'primitive',
        schema: {
          type: 'boolean',
          option: 'switch',
        },
      },
    },
    {
      name: 'emptyCell',
      title: '',
      value: {
        type: 'emptyCell',
        schema: {
          type: 'emptyCell',
        },
      },
    },
  ],
];

const sendTo = [
  //  ************************
  [
    {
      lable: ' ارسال به اداره کل برنامه ریزی ونظارت اعتباری ',
      name: 'fName',
      value: {
        type: 'primitive',
        schema: {
          type: 'boolean',
          option: 'switch',
        },
      },
    },
    {
      name: 'emptyCell',
      title: '',
      value: {
        type: 'emptyCell',
        schema: {
          type: 'emptyCell',
        },
      },
    },
  ],
];

const RptPOS = [
  [
    {
      name: 'list',
      title: 'اطلاعات کارت خوان',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            ['نوع کارت خوان', 'شماره حساب متصل', 'توضیحات'],
            [['vPOS', '1026853154', '']],
          ],
        },
      },
    },
  ],
];

const RptChangeStatus = [
  [
    {
      name: 'list',
      title: 'فعال/ غیرفعال سازی تفاهم نامه',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            ['عنوان تفاهم نامه', 'کدتفاهم نامه', 'وضعیت'],
            [['دانشگاه علوم پزشکی', '1026853154', 'فعال']],
          ],
        },
      },
    },
  ],
];

const RptSendTo = [
  [
    {
      name: 'list',
      title: 'ارسال به اداره کل برنامه ریزی ونظارت اعتباری',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            ['عنوان تفاهم نامه', 'کدتفاهم نامه', 'وضعیت'],
            [['دانشگاه علوم پزشکی', '1026853154', 'عدم ارسال']],
          ],
        },
      },
    },
  ],
];

const RptInsurence = [
  [
    {
      name: 'list',
      title: 'اطلاعات بیمه',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            ['شرکت بیمه', 'نام نمایندگی', 'کدنمایندگی', 'نوع بیمه'],
            [['بیمه ایران', 'نمایندگی ۱۲۳ ', '۱۲۳', 'بدنه']],
          ],
        },
      },
    },
  ],
];
const RptCostBenefit_Cost1 = [
  [
    {
      name: 'list',
      title: 'گزارش هزینه فایده مشتریان تفاهم نامه',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            [
              'نوع حساب',
              'معدل منابع مشتری(ریال)',
              'نرخ سود/جایزه',
              'سود پرداختی',
              'نرخ سپرده قانونی',
              'حدنقدینگی',
              'مبلغ سپرده قانونی',
              'مبلغ حدنقدینگی',
              'خالص منابع آزادمشتری جهت اعطای تسهیلات',
            ],
            [
              ['جاری', '', '', '', '', '', '', '', ''],
              ['کوتاه مدت عادی', '', '', '', '', '', '', '', ''],
              ['کوتاه مدت ویژه', '', '', '', '', '', '', '', ''],
              ['کوتاه مدت بانرخ ترجیحی', '', '', '', '', '', '', '', ''],
              ['پس انداز', '', '', '', '', '', '', '', ''],
              ['بلندمدت ۱ ساله', '', '', '', '', '', '', '', ''],
              ['جاری دولتی', '', '', '', '', '', '', '', ''],
              ['جمع کل', '', '', '', '', '', '', '', ''],
            ],
          ],
        },
      },
    },
  ],
];
const RptCostBenefit_FreeResource = [
  [
    {
      name: 'list',
      title: 'گزارش هزینه فایده مشتریان تفاهم نامه',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            [
              'نوع حساب',
              'معدل منابع مشتری(ریال)',
              'نرخ سود/جایزه',
              'سود پرداختی',
              'نرخ سپرده قانونی',
              'حدنقدینگی',
              'مبلغ سپرده قانونی',
              'مبلغ حدنقدینگی',
              'خالص منابع آزادمشتری جهت اعطای تسهیلات',
            ],
            [
              ['جاری', '', '', '', '', '', '', '', ''],
              ['کوتاه مدت عادی', '', '', '', '', '', '', '', ''],
              ['کوتاه مدت ویژه', '', '', '', '', '', '', '', ''],
              ['کوتاه مدت بانرخ ترجیحی', '', '', '', '', '', '', '', ''],
              ['پس انداز', '', '', '', '', '', '', '', ''],
              ['بلندمدت ۱ ساله', '', '', '', '', '', '', '', ''],
              ['جاری دولتی', '', '', '', '', '', '', '', ''],
              ['جمع کل', '', '', '', '', '', '', '', ''],
            ],
          ],
        },
      },
    },
  ],
];
//  Old
const RptCostBenefit_Income1 = [
  [
    {
      name: 'list',
      title: 'گزارش هزینه فایده مشتریان تفاهم نامه',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            [
              'نوع حساب',
              'مبلغ سپرده قانونی',
              'جایزه سپرده قانونی',
              'مبلغ جایزه سپرده قانونی',
            ],
            [
              ['جاری', '', '', ''],
              ['کوتاه مدت عادی', '', '', ''],
              ['کوتاه مدت ویژه', '', '', ''],
              ['پس انداز', '', '', ''],
              ['بلندمدت ۱ ساله', '', '', ''],
              ['جمع کل', '', '', ''],
            ],
          ],
        },
      },
    },
  ],
];
//  Old
const RptCostBenefit_Income2 = [
  [
    {
      name: 'list',
      title: 'گزارش هزینه فایده مشتریان تفاهم نامه',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            [
              'تسهیلات پرداختی تقسیطی(۲۰٪ازکل تسهیلات)',
              'سودتسهیلات تقسیطی',
              'تسهیلات پرداختی بازپرداخت یکجا(۸۹٪از کل تسهیلات)',
              'سودتسهیلات بازپرداخت یکجا',
            ],
            [
              ['جاری', '', '', ''],
              ['کوتاه مدت عادی', '', '', ''],
              ['کوتاه مدت ویژه', '', '', ''],
              ['پس انداز', '', '', ''],
              ['بلندمدت ۱ ساله', '', '', ''],
            ],
          ],
        },
      },
    },
  ],
];
const RptCostBenefit_TotalIncome = [
  [
    {
      name: 'list',
      title: 'کل سود حاصله',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            [
              '',
              'مبلغ جایزه سپرده قانونی',
              'سود عقود مشارکتی تدریجی',
              'سود عقود مشارکتی سرمایه درگردش',
              'کارمزد قرض الحسنه',
              'کل سود حاسله',
            ],
            [['مبلغ', '', '', '', '', '']],
          ],
        },
      },
    },
  ],
];
const RptCostBenefit_TotalCost = [
  [
    {
      name: 'list',
      title: 'کل هزینه ها',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            [
              '',
              'خالص منابع جهت اعطای تسهیلات پس از کسرحجم استفاده نشده',
              'ضریب هزینه اقلام مطالباتی',
              'هزینه مطالبات مشکوک الوصول',
              'سود پرداختی به سپرده ها',
              'کل هزینه ها',
            ],
            [['مبلغ', '', '', '', '', '']],
          ],
        },
      },
    },
  ],
];
const RptTotalBenefit = [
  [
    {
      name: 'list',
      title: 'گزارش هزینه فایده منابع مشتری',
      value: {
        type: 'arrayNLevel',
        schema: {
          type: 'array',
          option: [
            [
              '',
              'مبلغ جایزه سپرده قانونی',
              'سود عقود مشارکتی تدریجی',
              'سود عقود مشارکتی سرمایه درگردش',
              'کارمزد قرض الحسنه',
              'کل سود حاسله',
            ],
            [['مبلغ', '', '', '', '', '']],

            [
              '',
              'خالص منابع جهت اعطای تسهیلات پس از کسرحجم استفاده نشده',
              'ضریب هزینه اقلام مطالباتی',
              'هزینه مطالبات مشکوک الوصول',
              'سود پرداختی به سپرده ها',
              'کل هزینه ها',
            ],
            [['مبلغ', '', '', '', '', '']],

            ['عایدی کل', '', '', '', '', ''],
            [['']],
          ],
        },
      },
    },
  ],
];

const listFinantialStatementAbstract = [
  [
    {
      name: 'list',
      title: 'خلاصه وضعیت صورت مالی مشتریان',
      value: {
        type: 'array',
        schema: {
          type: 'array',
          option: [
            ['ردیف', 'تاریخ', 'مقطع زمانی'],
            [
              ['1', '۱۴۰۲/۰۲/۰۹', 'شش ماه دوم سال ۱۴۰۱'],
              ['2', '۱۴۰۲/۰۷/۰۹', 'شش ماه اول سال ۱۴۰۲'],
            ],
          ],
        },
      },
    },
  ],
];

const CustomerStatusSummary = [
  [
    {
      name: 'list',
      title: 'گزارش خلاصه وضعیت شناسه مشتری',
      value: {
        type: 'arrayNLevel',
        schema: {
          type: 'array',
          option: [
            ['اطلاعات اولیه مشتری/ شرکت'],
            [
              [
                'نام مشتری',
                'نوع مشتری',
                'شماره مشتری «شرکت/شرکتهای گروه»',
                'شماره ثبت',
                'شناسه ملی مشتری',
                'رتبه مشتری درسامانه clv',
                'ارزش مشتری درسامانه clv',
              ],
              ['1', '', '', '', '', '', ''],
            ],
            ['خلاصه وضعیت صورتهای مالی'],
            [
              [
                'سرمایه شرکت/گروه',
                'سرمایه ثبتی شرکت',
                'فروش شرکت/گروه',
                'بهای تمام شده کالای فروش رفته',
                'جمع کل دارایی های غیرجاری شرکت/ گروه',
                'جمع کل دارایی هایی شرکت',
                'موجودی کالای شرکت',
                'موجودی نقدی',
                'سرمایه گذاری کوتاه مدت',
                'سرمایه گذاری بلند مدت',
                'پیش پرداخت ها',
              ],
              ['1', '', '', '', '', '', '', '', '', '', ''],
              [
                'اسناددریافتنی',
                'اسناد پرداختنی',
                'جمع حقوق صاحبان سهام شرکت/گروه',
                'میزان کل بدهی های جاری شرکت',
                'سرمایه در گردش خالص',
                'تسهیلات کوتاه مدت',
                'تسهیلات بلندمدت',
                'سودناخالص شرکت',
                'سودخالص شرکت',
              ],
              ['1', '', '', '', '', '', '', '', ''],
            ],
            ['خلاصه وضعیت منابع/مصارف مشتری'],
            [
              [
                'معدل منابع ریالی مشتری',
                'معدل منابع ارزی',
                'تعدادقراردادهای تسهیلات ریالی مشتری/ گروه',
                'جمع کل تسهیلات دریافتی مشتری/گروه',
                'وضعیت و مانده مطالبات ریالی',
                'تعدادقراردادهای تسهیلات ارزی مشتری/گروه',
                'جمع کل تسهیلات ارزی',
                'وضعیت ومانده مطالبات ارزی',
                'نوع وثایق',
                'جمع وثیقه',
                'هزینه فایده منابع',
              ],
              // ['', '', '', '', '', '', '', '', '', '', ''],
              // ['', '', '', '', '', '', '', '', '', '', ''],
              [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'سپرده کوتاه مدت/بلند مدت',
                '',
                '',
              ],
              ['', '', '', '', '', '', '', '', 'غیرمنقول', '', ''],
              ['', '', '', '', '', '', '', '', 'سهام سفته', '', ''],
              [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'قرارداد لازم الاجرا/چک',
                '',
                '',
              ],
              [
                'تعدادقراردادهای تعهدات ریالی مشتری/گروه',
                'جمع تعهدات ریالی مشتری/گروه',
                'وضعیت و بدهی تعهداتی ریالی',
                'تعدادقراردادهای تعهدات ارزی مشتری/گروه',
                'جمع تسهیلات ارزی مشتری/ گروه',
                'وضعیت وبدهی تعهداتی ارزی',
                'پیش بینی منابع',
                'پیش بینی مصارف',
                'پیش بینی تعهدات',
                'نسبت NLP به درصد',
              ],
              ['1', '', '', '', '', '', '', '', '', ''],
            ],
            ['نسبت هاوسایراقلام مالی مشتری'],
            [
              ['نسبت مالکانه', 'نسبت جاری', 'نسبت آنی'],
              ['1', '', ''],
            ],
            ['وضعیت دستگاه کارت خوان و خودپرداز'],
            [
              ['وضعیت کارت خوان', 'تعداد خودپرداز'],
              [
                'تعدادپایانه های پوز',
                'جمع منابع مربتط با پوز',
                'تعدادکل',
                'خودپرداز دیواری',
                'خودپرداز سالنی',
                'خودپرداز غیرنقد',
              ],
              ['1', '', '', '', '', ''],
            ],
            ['درصد دستیابی به اهداف منابع،مصارف وتعهدات'],
            [['%']],
          ],
        },
      },
    },
  ],
];

const customersNew = [
  [
    {
      id: 'melliCode',
      lable: 'کدملی/ شناسه ملی',
      name: '',
      title: '',
      value: {
        type: 'primitive',
        schema: {
          type: 'string',
        },
      },
    },
    {
      id: `payPlace`,
      lable: ` محل پرداخت`,
      name: 'محل پرداخت',
      title: '',
      value: {
        type: 'primitive',
        schema: {
          type: 'string',
          enum: [
            'انتخاب کنید',
            'پرداخت از محل مبلغ ثابت',
            'پرداخت از محل مبلغ معدل',
            'پرداخت ازمحل مبلغ ثابت یا معدل',
          ],
          option: 'select',
        },
      },
    },
  ],
  [
    {
      name: 'emptyCell',
      title: '',
      value: {
        type: 'emptyCell',
        schema: {
          type: 'emptyCell',
        },
      },
    },
    {
      name: 'نوع مشتری',
      title: '',
      value: {
        type: 'primitive',
        schema: {
          type: 'string',
          enum: ['حقیقی', 'حقوقی'],
          option: 'radio',
        },
      },
    },
  ],
];

export const App = () => {
  const defaultValues = {
    formId: 10,
    fName: 'نام هایت ',
    lName: 'نام خانوادگیت',
    mName: 'Ooops',
    birthDAte: '1358/03/28',
    description: 'توضیحات من',
    tajdid: false,
  };
  objectFormGenerator(search['content']);

  return (
    <FormProvider defaultValue={defaultValues}>
      {/* <Menu />
      <SetColor /> */}
      <ObjectForm title="جستجو" fields={userProfile['content']} />
    </FormProvider>
  );
};
