// import React, { useState } from 'react';
// import { FormProvider } from './context/contextProvider';
// import Menu from './context/menu';
// import SetColor from './context/setColor';
import { ObjectForm } from './objectForms/objectForm';
import './css/bootstrap.rtl.min.css';
import './css/App.css';

// const tafahomFinalFormTst = [
//   //  ************************
//   [
//     {
//       lable: 'نام',
//       name: 'fName',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       lable: 'نام خانوادگی',
//       name: 'lName',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
// ];

// const FinantialStatementAbstract = [
//   [
//     {
//       name: 'سرمایه ثبتی شرکت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'بهای تمام شده کالای فروش رفته',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'فروش شرکت/ گروه',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'جمع کل دارایی های غیرجاری شرکت/ گروه',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'جمع کل دارایی های ثابت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'موجودی کالای شرکت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'موجودی نقدی',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'سرمایه گذاری کوتاه مدت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'سرمایه گذاری بلندمدت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'پیش پرداخت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'اسناد دریافتنی',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'اسناد پرداختنی',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'جمع حقوق صاحبان سهام شرکت/ گروه',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'بدهی جاری',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'میزان کل بدهی های جاری شرکت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'سرمایه در گردش خالص',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'تسهیلات کوتاه مدت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'سرمایه بلند مدت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'سود ناخالص شرکت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'سود خالص شرکت',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'نسبت جاری',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'نسبت آنی',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//   ],
//   [
//     {
//       name: 'نسبت مالکانه',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//         },
//       },
//     },
//     {
//       name: 'مقطع زمانی',
//       title: '',
//       value: {
//         type: 'primitive',
//         schema: {
//           type: 'string',
//           enum: [
//             'انتخاب کنید',
//             'شش ماه اول ۱۴۰۲',
//             'شش ماه دوم ۱۴۰۲',
//             'شش ماه اول ۱۴۰۳',
//             'شش ماه دوم ۱۴۰۳',
//           ],
//           option: 'select',
//         },
//       },
//     },
//   ],
// ];

export const App = () => {
  // const ctx = {
  //   themeContext: {
  //     color: 'yellow',
  //     setColor: (clr) => {
  //       setData({
  //         themeContext: {
  //           ...data.themeContext,
  //           color: clr,
  //         },
  //         dataContext: {
  //           ...data.dataContext,
  //         },
  //       });
  //     },
  //   },
  //   dataContext: {
  //     fName: 'نام خانوادگی',
  //     lName: 'alaik',
  //     setValue: (name, value) => {
  //       setData({
  //         themeContext: {
  //           ...data.themeContext,
  //         },
  //         dataContext: {
  //           ...data.dataContext,
  //           [name]: value,
  //         },
  //       });
  //     },
  //   },
  // };
  // const [data, setData] = useState(ctx);
  // console.log(data);
  return (
    <ObjectForm title="صورت مالی مشتریان" fields={FinantialStatementAbstract} />
  );
};
// <FormProvider ctx={data}>
// <Menu />
/* <SetColor /> */
// </FormProvider>
