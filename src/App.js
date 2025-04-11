// import logo from './logo.svg';
// import './App.css';
import './css/bootstrap.rtl.min.css';
// import './css/bootstrap.rtl.css'
import './css/App.css';

import { ObjectForm } from './objectForms/objectForm';
// import { Container } from './components/container.js';
import OffcanvasExample from './components/navbar';

export const App = () => {
  // const formFields = { fName: 'fNmaed', lName: 'lNameed' };

  const tafahomFinalFormTst = [
    //  ************************
    [
      {
        name: 'نام',
        title: 'fName',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'نام خانوادگی',
        title: 'fName',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },

      // {
      //   name: '',
      //   title: '',
      //   value: {
      //     type: 'emptyCell',
      //     schema: {
      //       type: 'emptyCell',
      //     },
      //   },
      // },
    ],
    //  ************************

    //  Date
    // [
    //   {
    //     name: 'تاریخ انعقاد',
    //     title: '',
    //     value: {
    //       type: 'primitive',
    //       schema: {
    //         type: 'date',
    //       },
    //     },
    //   },
    //   {
    //     name: 'تاریخ انتقضاء',
    //     title: '',
    //     value: {
    //       type: 'primitive',
    //       schema: {
    //         type: 'date',
    //       },
    //     },
    //   },
    // ],

    //  Combobox & Switch
    // [
    //   {
    //     name: 'نوع منطقه',
    //     title: '',
    //     value: {
    //       type: 'primitive',
    //       schema: {
    //         type: 'string',
    //         enum: ['منطقه عادی', 'منطقه آزاد تجاری - اقتصادی'],
    //         option: 'select',
    //       },
    //     },
    //   },
    //   {
    //     name: 'تجدید پذیر',
    //     title: '',
    //     value: {
    //       type: 'primitive',
    //       schema: {
    //         type: 'boolean',
    //         option: 'switch',
    //       },
    //     },
    //   },
    // ],

    //  Checkbox
    // [
    //   {
    //     name: 'نوع دریافت تسهیلات',
    //     title: '',
    //     value: {
    //       type: 'primitive',
    //       schema: {
    //         type: 'string',
    //         enum: ['مبلغ عددی', 'درصد منابع', 'هردو'],
    //         option: 'check',
    //       },
    //     },
    //   },
    //   {
    //     name: 'نوع تفاهم نامه',
    //     title: '',
    //     value: {
    //       type: 'primitive',
    //       schema: {
    //         type: 'string',
    //         enum: ['تسهیلات اعتباری', 'بیمه', 'کارتخوان', 'خودپرداز'],
    //         option: 'check',
    //       },
    //     },
    //   },
    // ],

    //  ************************
    //  TextBox

    // [
    //   {
    //     name: 'درصد وحداکثر کوتاه مدت قابل تخصیص',
    //     title: '',
    //     value: {
    //       type: 'primitive',
    //       schema: {
    //         type: 'string',
    //       },
    //     },
    //   },

    //   {
    //     name: 'درصد و حداکثر بلندمدت قابل تخصیص',
    //     title: '',
    //     value: {
    //       type: 'primitive',
    //       schema: {
    //         type: 'string',
    //       },
    //     },
    //   },
    // ],
    //  ************************

    //RadioBox

    // [
    //   {
    //     name: 'روش محاسبهمعدل حساب',
    //     title: '',
    //     value: {
    //       type: 'primitive',
    //       schema: {
    //         type: 'string',
    //         enum: [
    //           'محاسبه معدل حساب باشیوه استاندارد (روال فعلی)',
    //           'محاسبه مابه التفاوت معدل حساب براساس بازه تاریخی بامبداء مشخصی',
    //         ],
    //         option: 'radio',
    //       },
    //     },
    //   },
    // ],
  ];

  const formFields2 = [
    [
      {
        name: 'fName1',
        title: 'firstName',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'gender',
        title: 'Gender',
        value: {
          type: 'primitive',
          schema: {
            type: 'boolean',
            // option: 'radio'
          },
        },
      },
      {
        name: 'nationality',
        title: 'Nationality',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['DE', 'JP'],
            option: 'check',
          },
        },
      },
    ],
    // [
    //   {
    //     name: 'fName2',
    //     title: 'fNmaed2',
    //   },
    //   {
    //     name: 'lName2',
    //     title: 'lNamed2',
    //   },
    //   {
    //     name: 'fName3',
    //     title: 'fNmaed3',
    //   },
    // ],
  ];
  const tasParameterNerkheSoudJayeze = [
    [
      {
        name: 'حساب جاری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب کوتاه مدت عادی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب کوتاه مدت ویژه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب کوتاه مدت با نرخ ترجیحی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب پس انداز',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب بلندمدت یکساله',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب جاری دولتی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
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
  const tasParameterNerkheSepordeGhanouni = [
    [
      {
        name: 'حساب جاری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب کوتاه مدت عادی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب کوتاه مدت ویژه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب کوتاه مدت با نرخ ترجیحی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب پس انداز',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب بلندمدت یکساله',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب جاری دولتی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
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
  const tasParameterHadeNaghdinegi = [
    [
      {
        name: 'حساب جاری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب کوتاه مدت عادی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب کوتاه مدت ویژه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب کوتاه مدت با نرخ ترجیحی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب پس انداز',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب بلندمدت یکساله',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب جاری دولتی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
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
  const tasParameterJayezeSepordeGhanouni = [
    [
      {
        name: 'حساب جاری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب کوتاه مدت عادی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب کوتاه مدت ویژه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },

      {
        name: 'حساب پس انداز',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب بلندمدت یکساله',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
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
  const tasParameter = [
    [
      {
        name: 'سود تسهیلات عقود مشارکتی تدریجی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'سود تسهیلات عقود سرمایه درگردش',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'ضریب هزینه مطالبات مشکوک الوصول',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'نرخ کارمزد تسهیلات قرض الحسنه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
  ];
  const smsParameter = [
    [
      {
        name: 'عنوان پیامک',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'تاریخ بروزرسانی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'date',
          },
        },
      },
    ],
    [
      {
        name: 'متن پیامک',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'نوع ارسال',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['انتخاب کنید', 'ارسال موردی'],
            option: 'select',
          },
        },
      },
      {
        name: 'مقطع زمانی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['انتخاب کنید', 'تغییر وضعیت تفاهم نامه'],
            option: 'select',
          },
        },
      },
    ],
  ];
  const notificationParameter = [
    [
      {
        name: 'عنوان پیام',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'درصد منابع به مصارف',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'محتوی پیام',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
  ];
  const login = [
    [
      {
        name: 'نام کاربری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'کلمه عبور',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
  ];
  const userManagement = [
    [
      {
        name: 'نام',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'نام خانوادگی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
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
        name: 'نام کاربری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'کلمه عبور',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'ایجاد کلمه عبور',
        title: '',
        value: {
          type: 'control',
          schema: {
            type: 'button',
          },
        },
      },
    ],
    [
      {
        name: 'نقش',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: [
              'انتخاب کنید',
              'واحد تفاهم نامه های اداره کل بانکداری شرکتی',
              'مدیریت شعب',
              'مدیرارشد',
              'کاربرارشد',
            ],
            option: 'select',
          },
        },
      },
      {
        name: 'تکرار کلمه عبور',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
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
  const tafahomFirstForm = [
    [
      {
        name: 'شماره آرشیو',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },

      {
        name: 'تاریخ درخواست',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'date',
          },
        },
      },
    ],
    [
      {
        name: 'عنوان تفاهم نامه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'نوع تفاهم نامه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['انتخاب کنید', 'کشوری', 'استانی', 'تخصیصی'],
            option: 'select',
          },
        },
      },
    ],
    [
      {
        name: 'مدیریت شعب',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'شعبه عامل',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'ناحیه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'ادارات کل',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'کارشناس تفاهم نامه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['انتخاب کنید', 'کشوری', 'استانی', 'تخصیصی'],
            option: 'select',
          },
        },
      },
      {
        name: 'وضعیت تفاهم نامه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['انتخاب کنید', 'دردست اقدام', 'بلااقدام', 'نافذ'],
            option: 'select',
          },
        },
      },
    ],
  ];
  const eghdamat = [
    [
      {
        name: 'عنوان',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
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
        name: 'تاریخ',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'date',
          },
        },
      },
    ],
    [
      {
        name: 'شرح اقدام',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
  ];
  const tafahomFinalForm = [
    [
      {
        name: 'شماره آرشیو',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'عنوان تفاهم نامه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'مدیریت شعب عامل',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },

      {
        name: 'شعبه عامل',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'کدتفاهم نامه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'کارشناس تفاهم نامه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],

    [
      {
        name: 'شماره مشتری/ سازمان',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'نام مشتری/ سازمان',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'تاریخ انعقاد',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'date',
          },
        },
      },
      {
        name: 'تاریخ انتقضاء',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'date',
          },
        },
      },
    ],
    [
      {
        name: 'نوع منطقه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['منطقه عادی', 'منطقه آزاد تجاری - اقتصادی'],
            option: 'select',
          },
        },
      },
      {
        name: 'تجدید پذیر',
        title: '',
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
        name: 'نوع دریافت تسهیلات',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['مبلغ عددی', 'درصد منابع', 'هردو'],
            option: 'check',
          },
        },
      },
      {
        name: 'نوع تفاهم نامه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['تسهیلات اعتباری', 'بیمه', 'کارتخوان', 'خودپرداز'],
            option: 'check',
          },
        },
      },
    ],
    [
      {
        name: 'تعداد افراد قابل اعطا',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },

      {
        name: 'مبلغ ثابت قابل اعطا',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'درصد و حداکثرجاری قابل تخصیص',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },

      {
        name: 'درصد و حداکثر قرض الحسنه قابل تخصیص',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'درصد وحداکثر کوتاه مدت قابل تخصیص',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },

      {
        name: 'درصد و حداکثر بلندمدت قابل تخصیص',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'روش محاسبه معدل حساب',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: [
              'محاسبه معدل حساب باشیوه استاندارد (روال فعلی)',
              'محاسبه مابه التفاوت معدل حساب براساس بازه تاریخی بامبداء مشخصی',
            ],
            option: 'radio',
          },
        },
      },

      {
        name: 'درصد و حداکثر بلندمدت قابل تخصیص',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
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
      // {
      //   name: 'emptyCell',
      //   title: '',
      //   value: {
      //     type: 'emptyCell',
      //     schema: {
      //       type: 'emptyCell',
      //     },
      //   },
      // },
      {
        name: 'تاریخ',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'date',
          },
        },
      },
    ],
  ];
  const uploadFile = [
    [
      {
        name: 'عنوان سند',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'فایل سند',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
    ],
    [
      {
        name: 'شرح',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
  ];
  const agent = [
    [
      {
        name: 'نام',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'نام خانوادگی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'سمت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: [
              'انتخاب کنید',
              'مدیرعامل سازمان طرف تفاهم نامه',
              'نماینده سازمان طرف تفاهم نامه',
              'عضوهیات مدیره',
              'مدیرمالی',
              'مدیراداری',
            ],
            option: 'select',
          },
        },
      },
      {
        name: 'شماره تلفن',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'ارسال پیام',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['بلی', 'خیر'],
            option: 'check',
          },
        },
      },
      {
        name: 'ایمیل',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'شماره تلفن ثابت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'شماره تلفن همراه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'توضیحات',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
  ];
  const account = [
    [
      {
        name: 'شماره حساب',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'نام مشتری/ سازمان',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
  ];
  const customersByCustomerId = [
    [
      {
        name: 'شماره مشتری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'مشتری انتخاب شده',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'boolean',
            option: 'switch',
          },
        },
      },
    ],
  ];
  const customersNew = [
    [
      {
        name: 'کدملی/ شناسه ملی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'پرداخت از محل',
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
  const FinantialStatementAbstract = [
    [
      {
        name: 'سرمایه ثبتی شرکت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'بهای تمام شده کالای فروش رفته',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'فروش شرکت/ گروه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'جمع کل دارایی های غیرجاری شرکت/ گروه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'جمع کل دارایی های ثابت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'موجودی کالای شرکت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'موجودی نقدی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'سرمایه گذاری کوتاه مدت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'سرمایه گذاری بلندمدت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'پیش پرداخت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'اسناد دریافتنی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'اسناد پرداختنی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'جمع حقوق صاحبان سهام شرکت/ گروه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'بدهی جاری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'میزان کل بدهی های جاری شرکت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'سرمایه در گردش خالص',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'تسهیلات کوتاه مدت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'سرمایه بلند مدت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'سود ناخالص شرکت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'سود خالص شرکت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'نسبت جاری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'نسبت آنی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'نسبت مالکانه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'مقطع زمانی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: [
              'انتخاب کنید',
              'شش ماه اول ۱۴۰۲',
              'شش ماه دوم ۱۴۰۲',
              'شش ماه اول ۱۴۰۳',
              'شش ماه دوم ۱۴۰۳',
            ],
            option: 'select',
          },
        },
      },
    ],
  ];
  const FinantialStatement = [
    [
      {
        name: 'فروش خالص',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'سرمایه درگردش',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'دارایی غیرجاری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'میزان داریی ثابت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حقوق صاحبان سهام',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'موجودی کالای شرکت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'اسناد دریافتنی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'اسناد پرداختنی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'بدهی بلند مدت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'موجودی نقد',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'حساب های دریافتنی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'حساب های پرداختنی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'بهای تمام شده کالای فروش رفته',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'سرمایه گذاری کوتاه مدت',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'بدهی جاری',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'مقطع زمانی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['انتخاب کنید', ''],
            option: 'select',
          },
        },
      },
    ],
  ];
  const ResourcesAndExpenses = [
    [
      {
        name: 'سال',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: ['انتخاب کنید', 'سال اول', 'سال دوم', 'سال سوم'],
            option: 'select',
          },
        },
      },
      {
        name: 'پیش بینی منابع',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
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
            type: 'string',
            enum: ['انتخاب کنید', 'سال اول', 'سال دوم', 'سال سوم'],
            option: 'select',
          },
        },
      },
      {
        name: 'پیش بینی مصارف',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
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
            type: 'string',
            enum: ['انتخاب کنید', 'سال اول', 'سال دوم', 'سال سوم'],
            option: 'select',
          },
        },
      },
      {
        name: 'پیش بینی تعهدات',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
  ];
  const UploadFileRM = [
    [
      {
        name: 'اساسنامه',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
      {
        name: 'آخرین روزنامه رسمی شرکت (امضاء داران مجاز اسناد تعهدآور)',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
    ],
    [
      {
        name: 'استعلام مانده بدهی نزد سیستم بانکی (استخراج شده توسط مدیریت شعب)',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
      {
        name: 'اسکن نامه مشتری مبنی براعلام کتبی بدهی تسهیلاتی به سیستم بانکی',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
    ],
    [
      {
        name: 'اسکن آخرین صورت های مالی حسابرسی شده',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
      {
        name: 'تایید عایدی ناشی از هزینه فایده منابع مشتری (براساس محاسبات انجام شده قبلی درهنگام مذاکره ویا فعلی دربخش هزینه فایده)',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
    ],
    [
      {
        name: 'فایل word پیش نویس تفاهم نامه (تنظیم شده براساس مذاکرات ونیاز سنجی های انجام شده از مشتری)',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
      {
        name: 'اسکن فرم های تکمیل شده ۷ گانه انعقاد تفاهم نامه (فرم اول شامل پیش بینی پیش بینی و نظر کمیته اعتباری مدیریت شعب می باشد)',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
    ],
    [
      {
        name: 'آپلود فایل اسکن شماره حساب های مشتری (ارزی وریالی)',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
      {
        name: 'مشخصات امضاء داران مجاز شرکت و نقطه تماس به همراه شماره تلفن',
        title: '',
        value: {
          type: 'blob',
          schema: {
            type: 'file',
          },
        },
      },
    ],
  ];
  const Insurence = [
    [
      {
        name: 'شرکت بیمه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'نام نمایندگی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'کدنمایندگی',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'آدرس',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'نوع بیمه',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
            enum: [
              'انتخاب کنید',
              'بیمه شخص ثالث',
              'بیمه بدنه',
              'بیمه آتش سوزی',
              'بیمه مسولیت مدنی',
            ],
            option: 'select',
          },
        },
      },
      {
        name: 'تعداد',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'درصد تخفیف',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'توضیحات',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
  ];
  const POS = [
    [
      {
        name: 'نوع کارتخوان',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
      {
        name: 'تعداد کارتخوان',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
    [
      {
        name: 'توضیحات',
        title: '',
        value: {
          type: 'primitive',
          schema: {
            type: 'string',
          },
        },
      },
    ],
  ];

  // ***

  const listUploadFiles = [
    [
      {
        name: 'list',
        title: 'اسناد بارگزاری شده',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              ['عنوان سند', 'فایل سند', 'شرح', 'تاریخ بارگزاری'],
              [
                [
                  'اساسنامه',
                  'c:\\users\\user\\Desktop\\draft.pdf',
                  'اساسنامه مدیران ضمیمه گردید',
                  '۱۴۰۲/۰۲/۰۹',
                ],
                [
                  'آخرین روزنامه رسمی شرکت (امضاداران مجاز اسناد تعهد آور)',
                  'c:\\users\\user\\Desktop\\draft.pdf',
                  'آخرین روزنامه رسمی ضمیمه گردید',
                  '۱۴۰۲/۰۲/۰۹',
                ],
                [
                  'استعلام مانده بدهی نزدسیستم بانکی',
                  'c:\\users\\user\\Desktop\\draft.pdf',
                  'مانده بدهی ضمیمه گردید',
                  '۱۴۰۲/۰۲/۰۹',
                ],
                [
                  'اسکن نامه مشتری مبنی بر اعلام کتبی بدهی تسهیلاتی به سیستم بانکی',
                  'c:\\users\\user\\Desktop\\draft.pdf',
                  'درخواست مشتری ضمیمه گردید',
                  '۱۴۰۲/۰۲/۰۹',
                ],
                [
                  'اسکن آخرین صورت های مالی حسابرسی شده',
                  'c:\\users\\user\\Desktop\\draft.pdf',
                  'صورت های مالی ضمیمه گردید',
                  '۱۴۰۲/۰۲/۰۹',
                ],
                [
                  'تایید عایدی ناشی از هزینه فایده منابع مشتری',
                  'c:\\users\\user\\Desktop\\draft.pdf',
                  'تایید عایدی ضمیمه گردید',
                  '۱۴۰۲/۰۲/۰۹',
                ],
                [
                  'پیش نویس تفاهم نامه',
                  'c:\\users\\user\\Desktop\\draft.pdf',
                  'پیش نویس تفاهم نامه ضمیمه گردید',
                  '۱۴۰۲/۰۲/۰۹',
                ],
                [
                  'اسکن فرم های تکمیل شده ۷گانه انعقاد تفاهم نامه',
                  'c:\\users\\user\\Desktop\\draft.pdf',
                  'فرم های ۷گانه ضمیمه گردید',
                  '۱۴۰۲/۰۲/۰۹',
                ],
                [
                  'آپلود فایل اکسل شماره حساب های مشتری (ارزی و ریالی)',
                  'c:\\users\\user\\Desktop\\draft.pdf',
                  'فایل اکسل شماره حساب ضمیمه گردید',
                  '۱۴۰۲/۰۲/۰۹',
                ],
              ],
            ],
          },
        },
      },
    ],
  ];
  const listAccounts = [
    [
      {
        name: 'list',
        title: 'اطلاعات حساب',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'ردیف',
                'شماره مشتری',
                'شماره حساب',
                'عنوان حساب',
                'نام مشتری',
                'وضعیت حساب',
                'شعبه',
                'معدل',
                'معدل درصدی',
                'مانده',
              ],
              [
                [
                  '1',
                  '300001629524',
                  '4874828952',
                  'جاري اشخاص حقوقي	معاونت غذا و دارو اعتبارات جاري	باز',
                  '62059',
                  '89',
                  '752',
                  '000',
                  '0',
                  '46817507',
                ],
              ],
            ],
          },
        },
      },
    ],
  ];
  const RptInProgress = [
    [
      {
        name: 'list',
        title: 'گزارش تفاهم نامه های دردست اقدام',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'ردیف',
                'شماره آرشیو',
                'تاریخ درخواست',
                'نوع تفاهم نامه',
                'عنوان تفاهم نامه',
                'ناحیه',
                'مدیریت شعب',
                'شعبه عامل',
                'ادارات کل',
                'تاریخ آخرین تغییروضعیت',
                'کارشناس تفاهم نامه',
              ],
              [
                [
                  '1',
                  '300001629524',
                  '1402/02/06',
                  'نوع اول',
                  'عنوان',
                  'ناحیه',
                  'اداره کل اعتبارات',
                  'نارنجستان پاسداران',
                  'ادارات کل',
                  '1402/02/05',
                  'امیرمسعود مجلل',
                ],
              ],
            ],
          },
        },
      },
    ],
  ];
  const RptBlocked = [
    [
      {
        name: 'list',
        title: 'گزارش تفاهم نامه های بلااقدام (راکد)',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'ردیف',
                'شماره آرشیو',
                'تاریخ درخواست',
                'نوع تفاهم نامه',
                'عنوان تفاهم نامه',
                'ناحیه',
                'مدیریت شعب',
                'شعبه عامل',
                'ادارات کل',
                'تاریخ آخرین تغییروضعیت',
                'کارشناس تفاهم نامه',
              ],
              [
                [
                  '1',
                  '300001629524',
                  '1402/02/06',
                  'نوع اول',
                  'عنوان',
                  'ناحیه',
                  'اداره کل اعتبارات',
                  'نارنجستان پاسداران',
                  'ادارات کل',
                  '1402/02/05',
                  'امیرمسعود مجلل',
                ],
              ],
            ],
          },
        },
      },
    ],
  ];
  const RptEghdam = [
    [
      {
        name: 'list',
        title: 'گزارش اقدامات انجام شده',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              ['ردیف', 'عنوان', 'تاریخ', 'شرح'],
              [['1', 'عنوان اقدام', ' تاریخ اقدام', 'شرح اقدام']],
            ],
          },
        },
      },
    ],
  ];
  const RptActive = [
    [
      {
        name: 'list',
        title: 'گزارش تفاهم نامه های نافذ',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'ردیف',
                'شماره آرشیو',
                'تاریخ درخواست',
                'نوع تفاهم نامه',
                'عنوان تفاهم نامه',
                'ناحیه',
                'مدیریت شعب',
                'شعبه عامل',
                'ادارات کل',
                'تاریخ آخرین تغییروضعیت',
                'کارشناس تفاهم نامه',
              ],
              [
                [
                  '1',
                  '300001629524',
                  '1402/02/06',
                  'نوع اول',
                  'عنوان',
                  'ناحیه',
                  'اداره کل اعتبارات',
                  'نارنجستان پاسداران',
                  'ادارات کل',
                  '1402/02/05',
                  'امیرمسعود مجلل',
                ],
              ],
            ],
          },
        },
      },
    ],
  ];
  const RptTas = [
    [
      {
        name: 'list',
        title: 'گزارش تسهیلات پرداخت شده',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'ردیف',
                'شماره قرارداد',
                'شماره مشتری',
                'شناسه ملی مشتری',
                'نام گیرنده تسهیلات',
                'مرجع تصویب کننده',
                'مدیریت شعب اعطا کننده',
                'شعبه اعطا کننده',
                'پرداخت از محل',
                'وضعیت تسهیلات',
                'عنوان پیشنهاد',
                'نوع عقدتسهیلات',
                'کدنوع تسهیلات',
                'نرخ تسهیلات',
                'مبلغ تسهیلات',
                'اصل+سودتسهیلات',
                'مانده+سود تسهیلات',
                'مانده مطالبات',
                'سرفصل مطالباتی',
                'نوع وثیقه',
                'مبلغ تخصیص داده شده از وثیقه',
                'ازمحل/خارج ازمحل',
              ],
              [
                [
                  '1',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                ],
              ],
            ],
          },
        },
      },
    ],
  ];
  const RptRialRsrcBalance = [
    [
      {
        name: 'list',
        title: 'گزارش منابع ریالی مشتریان براساس مانده حساب',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'عنوان تفاهم نامه',
                'مانده حساب های جاری',
                'مانده حساب های قرض الحسنه',
                'مانده حساب های کوتاه مدت',
                'مانده حساب های بلندمدت',
                'مانده گواهی سپرده',
                'جمع کل مانده سپرده ها + گواهی سپرده',
              ],
              [['1', '', '', '', '', '', '']],
            ],
          },
        },
      },
    ],
  ];
  const RptRialRsrcAverage = [
    [
      {
        name: 'list',
        title: 'گزارش منابع ریالی مشتریان براساس معدل حساب',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'عنوان تفاهم نامه',
                'معدل حساب های جاری',
                'معدل حساب های قرض الحسنه',
                'معدل حساب های کوتاه مدت',
                'معدل حساب های بلندمدت',
                'جمع کل معدل حساب ها',
              ],
              [['1', '', '', '', '', '']],
            ],
          },
        },
      },
    ],
  ];
  const RptArzRsrcBalance = [
    [
      {
        name: 'list',
        title: 'گزارش منابع ارزی مشتریان براساس مانده حساب',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'عنوان تفاهم نامه',
                'مانده حساب های جاری',
                'مانده حساب های قرض الحسنه',
                'مانده حساب های کوتاه مدت',
                'مانده حساب های بلندمدت',
                'جمع کل مانده حساب ها',
              ],
              [['1', '', '', '', '', '']],
            ],
          },
        },
      },
    ],
  ];
  const RptArzRsrcAverage = [
    [
      {
        name: 'list',
        title: 'گزارش منابع ارزی مشتریان براساس معدل حساب',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'عنوان تفاهم نامه',
                'معدل حساب های جاری',
                'معدل حساب های قرض الحسنه',
                'معدل حساب های کوتاه مدت',
                'معدل حساب های بلندمدت',
                'جمع کل معدل حساب ها',
              ],
              [['1', '', '', '', '', '']],
            ],
          },
        },
      },
    ],
  ];
  const RptCommitments = [
    [
      {
        name: 'list',
        title: 'گزارش تعهدات مشتریان تفاهم نامه',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'شماره قرارداد',
                'شماره مشتری',
                'نام گیرنده',
                'مبلغ اعتباراسنادی',
                'نوع اعتباراسنادی - ارزی/ریالی',
                'وضعیت اعتباراسنادی',
                'مبلغ ضمانتنامه',
                'نوع ضمانتنامه - ارزی/ریالی',
                'وضعیت ضمانتنامه',
              ],
              [['1', '', '', '', '', '', '', '', '']],
            ],
          },
        },
      },
    ],
  ];
  const RptCostBenefitBenefit1 = [
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
  const RptCostBenefitFreeResource = [
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
  const RptCostBenefit2 = [
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
              ],
            ],
          },
        },
      },
    ],
  ];
  const RptCostBenefit3 = [
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
                  'جمع کل دارایی های شرکت',
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
  const RptTotalIncome = [
    [
      {
        name: 'list',
        title: 'گزارش هزینه فایده منابع مشتری',
        value: {
          type: 'arrayNLevel',
          schema: {
            type: 'array',
            option: [
              ['عایدی کل'],
              [
                [
                  'نرخ تسهیلات',
                  'تسهیلات پرداختی تقسیطی (۲۰٪ از کل)',
                  'سود تسهیلات تقسیطی',
                ],
                ['۱۸٪', '۱۰۱۷۶۰۰۰۰', '۱۰۱۹۲۲۷۳'],
              ],
              [
                'نرخ تسهیلات',
                'تسهیلات پرداختنی بازپرداخت یکجا (۸۰٪ از کل)',
                'سود تسهیلات با بازپرداخت یکجا',
              ],
              [['۱۸٪', '۴۰۷۰۴۰۰۰۰', '۷۳۲۶۷۲۰۰']],
              ['نرخ کارمزد', 'تسهیلات قرض الحسنه', 'کارمزد قرض الحسنه'],
              [['۴٪', '۸۷۰۰۰۰۰', '۳۴۸۰۰۰']],
            ],
          },
        },
      },
    ],
  ];
  const RptActiveTimely = [
    [
      {
        name: 'list',
        title: 'گزارش وضعیت تفاهم نامه های نافذ مقطع فعلی',
        value: {
          type: 'arrayNLevel',
          schema: {
            type: 'array',
            option: [
              ['وضعیت تفاهم نامه های نافذ مقطع فعلی'],
              [
                [
                  'ردیف',
                  'عنوان تفاهم نامه',
                  'تاریخ انعقاد',
                  'تاریخ انقضاء',
                  'عاملیت',
                  'ناحیه',
                  'نوع تفاهم نامه',
                ],
                ['۱', 'تفاهم نامه ۱', '', '', '', '', ''],
                ['۲', 'تفاهم نامه ۲', '', '', '', '', ''],
              ],
              ['منابع مشتری'],
              [
                ['ریالی', 'ارزی', 'گواهی سپرده'],
                ['1', '', ''],
              ],
              ['مصارف مشتری'],
              [
                ['ریالی', 'ارزی'],
                ['1', ''],
              ],
              ['تعهدات'],
              [
                ['ریالی', 'ارزی'],
                ['1', ''],
              ],
              ['مطالبات'],
              [
                ['معوق', 'سررسیدگذشته', 'مشکوک الوصول'],
                ['1', '', ''],
              ],
              ['وضعیت کارت خوان'],
              [
                ['تعداد کل', 'جمع منابع مرتبط با کارت خوان'],
                ['1', ''],
              ],
              ['تعداد خودپرداز'],
              [
                ['خودپرداز دیواری', 'خودپرداز سالنی', 'خودپرداز غیرنقد'],
                ['1', '', ''],
              ],
            ],
          },
        },
      },
    ],
  ];
  const RptResourcesAndExpenses = [
    [
      {
        name: 'list',
        title: 'گزارش وضعیت تفاهم نامه های نافذ مقطع فعلی',
        value: {
          type: 'arrayNLevel',
          schema: {
            type: 'array',
            option: [
              ['', 'پیش بینی منابع', 'پیش بینی مصارف', 'پیش بینی تعهدات'],
              [
                ['سال اول', '', '', ''],
                ['سال دوم', '', '', ''],
                ['سال سوم', '', '', ''],
              ],
            ],
          },
        },
      },
    ],
  ];
  const RptTasParameters = [
    [
      {
        name: 'list',
        title: 'پارامترهای تسهیلات',
        value: {
          type: 'arrayNLevel',
          schema: {
            type: 'array',
            option: [
              ['پارامترهای تسهیلات'],
              [
                [
                  'پارامترهای تسهیلات',
                  'نرخ سود/جایزه',
                  'حدنقدینگی',
                  'نرخ سپرده قانونی',
                  'جایزه سپرده قانونی',
                ],
              ],
            ],
          },
        },
      },
    ],
  ];
  const RptSMSParameters = [
    [
      {
        name: 'list',
        title: 'پارامترهای پیامک',
        value: {
          type: 'arrayNLevel',
          schema: {
            type: 'array',
            option: [
              ['پارامترهای پیامک'],
              [
                [
                  'تاریخ',
                  'عنوان پیامک',
                  'متن پیامک',
                  'نوع ارسال',
                  'مقطع زمانی',
                ],
              ],
            ],
          },
        },
      },
    ],
  ];
  const RptNotificationParameters = [
    [
      {
        name: 'list',
        title: 'پارامترهای هشدار',
        value: {
          type: 'arrayNLevel',
          schema: {
            type: 'array',
            option: [
              ['پارامترهای هشدار'],
              [['تاریخ', 'عنوان پیام', 'متن پیام', 'درصد منابع به مصارف']],
            ],
          },
        },
      },
    ],
  ];
  const listUsers = [
    [
      {
        name: 'list',
        title: 'کاربران',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              ['ردیف', 'نام', 'نام خانوادگی', 'نام کاربری', 'نقش'],
              [['1', 'x', 'y', 'xyz', 'کارشناس واحد تفاهم نامه ها']],
            ],
          },
        },
      },
    ],
  ];
  const listEghdamat = [
    [
      {
        name: 'list',
        title: 'اقدامات',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              ['ردیف', 'تاریخ', 'عنوان', 'شرح اقدام'],
              [['1', '۱۴۰۲/۰۲/۰۹', 'پیگیری', 'شرح پیگیری']],
            ],
          },
        },
      },
    ],
  ];
  const listAgents = [
    [
      {
        name: 'list',
        title: 'نمایندگان سازمان',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              ['ردیف', 'تاریخ', 'نام', 'نام خانوادگی', 'سمت', 'شماره تلفن'],
              [['1', '۱۴۰۲/۰۲/۰۹', 'x', 'y', 'مدیرعامل', '021-27314455']],
            ],
          },
        },
      },
    ],
  ];
  const listCustomers = [
    [
      {
        name: 'list',
        title: 'معرفی شدگان تسهیلات',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              [
                'ردیف',
                'تاریخ',
                'کدملی/ شناسه ملی',
                'نوع مشتری',
                'پرداخت ازمحل',
              ],
              [['1', '۱۴۰۲/۰۲/۰۹', '0014939823', 'حقیقی', 'ازمحل تفاهم نامه']],
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
  const listFinantialStatement = [
    [
      {
        name: 'list',
        title: 'صورت مالی مشتریان',
        value: {
          type: 'array',
          schema: {
            type: 'array',
            option: [
              ['ردیف', 'تاریخ', 'مقطع زمانی'],
              [
                ['1', '۱۴۰۲/۰۲/۰۹', 'سال ۱۴۰۱'],
                ['2', '۱۴۰۲/۰۷/۰۹', 'سال ۱۴۰۲'],
              ],
            ],
          },
        },
      },
    ],
  ];
  return (
    <ObjectForm
      title="صورت مالی مشتریان"
      // fields={agent}
      // fields={tafahomFinalFormTst}
      // fields={listUploadFiles}
      // fields={RptTotalIncome}
      // fields={tafahomFinalFormTst}
      // fields={customersNew}
    ></ObjectForm>
  );
};

// ,/
// [{ fName2: 'fNmaed2' }, { lName2: 'lNamed2' }],

//  <Container />;

// <OffcanvasExample />
