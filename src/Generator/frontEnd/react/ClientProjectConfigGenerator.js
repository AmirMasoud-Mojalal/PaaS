const {
  isPathExists,
  createFile,
  firstLetterCaptalize,
  datasourceBuilder,
  copyFontFiles,
  copyIconFiles,
} = require('../../util');

const ClientProjectConfigGenerator = (ConfigObjects) => {
  const utilPath = ConfigObjects.getUtilPath();
  const actualPath = ConfigObjects.getClientActualPath();
  const sourcePath = ConfigObjects.getClientSourcePath();
  const stylePath = ConfigObjects.getClientStylePath();
  const componentPath = ConfigObjects.getClientComponentPath();
  const layoutPath = ConfigObjects.getClientComponentLayoutPath();
  const publicPath = ConfigObjects.getClientComponentPublicPath();
  const dashboardPath = ConfigObjects.getClientComponentDashboradPath();
  const footerPath = ConfigObjects.getClientComponentFooterPath();
  const gridPath = ConfigObjects.getClientComponentGridPath();
  const headerPath = ConfigObjects.getClientComponentHeaderPath();
  const loginPath = ConfigObjects.getClientComponentLoginPath();
  const sidebarPath = ConfigObjects.getClientComponentSidebarPath();
  const userPath = ConfigObjects.getClientComponentUserPath();
  const breadcrumbPath = ConfigObjects.getClientComponentBreadCrumbPath();
  const modalPath = ConfigObjects.getClientComponentModalPath();

  const userListPath = `${userPath}\\list`;
  const userViewPath = `${userPath}\\view`;
  const userEditPath = `${userPath}\\edit`;
  const userDeletePath = `${userPath}\\delete`;
  const fontSrcPath = ConfigObjects.getFontSourcePath();
  const fontDstPath = ConfigObjects.getClientFontPath();
  const iconSrcPath = ConfigObjects.getIconSourcePath();
  const iconDstPath = ConfigObjects.getClientIconPath();
  const clientUtilPath = ConfigObjects.getClientUtilPath();

  let injectedContent = ``;
  isPathExists(sourcePath);
  isPathExists(fontDstPath);
  isPathExists(iconDstPath);
  isPathExists(stylePath);
  isPathExists(componentPath);
  isPathExists(layoutPath);
  isPathExists(publicPath);
  isPathExists(loginPath);
  isPathExists(dashboardPath);
  isPathExists(footerPath);
  isPathExists(gridPath);
  isPathExists(headerPath);
  isPathExists(loginPath);
  isPathExists(sidebarPath);
  isPathExists(userPath);
  isPathExists(userListPath);
  isPathExists(userViewPath);
  isPathExists(userEditPath);
  isPathExists(userDeletePath);
  isPathExists(clientUtilPath);
  // isPathExists(breadcrumbPath);
  isPathExists(modalPath);

  /********************************************************************************
   *                        dashboard component
   ********************************************************************************/
  injectedContent = `export * from './route';`;
  createFile(`${dashboardPath}`, `${'index'}.js`, injectedContent);

  injectedContent = `import * as React from 'react';

import Dashboard from './dashboard';
import { loader as dashboardLoader } from './dashboardLoader';
import { action as dashboardAction } from './dashboardAction';
export const route = {
  path: 'dashboard',
  element: <Dashboard />,
  errorElement: <div>Error Occured!</div>,
  action: null,
  loader: null,
};`;
  createFile(`${dashboardPath}`, `${'route'}.js`, injectedContent);

  injectedContent = `import * as React from 'react';
import { fakeAuthProvider } from '../../auth';

export default function Dashboard() {
  console.log(fakeAuthProvider);
  return <>Dashboard Page</>;
}
`;
  createFile(`${dashboardPath}`, `${'dashboard'}.jsx`, injectedContent);

  injectedContent = `import { fakeAuthProvider } from '../../auth';
import { redirect } from 'react-router-dom';

export function loader({ request }) {
  // If the user is not logged in and tries to access \`/protected\`, we redirect
  // them to \`/login\` with a \`from\` parameter that allows login to redirect back
  // to this page upon successful authentication
  if (!fakeAuthProvider.isAuthenticated) {
    console.log('dashboard is not authenticated!');
    let params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }
  console.log('dashboard is authenticated!');
  return null;
}
`;
  createFile(`${dashboardPath}`, `${'dashboardLoader'}.jsx`, injectedContent);

  injectedContent = `import { fakeAuthProvider } from '../../auth';
import axios, { Axios } from 'axios';
import { redirect } from 'react-router-dom';

export async function action({ request }) {
  let formData = await request.formData();
  // let username = formData.get('username');
  // let password = formData.get('password');

  // Validate our form inputs and return validation errors via useActionData()
  // if (!username) {
  //   return {
  //     error: 'You must provide a username to log in',
  //   };
  // }

  // return await axios
  //   .post('http://localhost:8080/api/v1/...', {
  //     email: username,
  //     password: password,
  //   })
  //   .then(
  //     (response) => {
  //       let redirectTo = formData.get('redirectTo');
  //       fakeAuthProvider.signin(username);
  //       ...
  //       return redirect(redirectTo || '/...');
  //     },
  //     (error) => {
  //       return redirect('/...');
  //     }
  //   );
}
`;
  createFile(`${dashboardPath}`, `${'dashboardAction'}.jsx`, injectedContent);
  /********************************************************************************
   *                        footer component
   ********************************************************************************/
  injectedContent = `const footerPage = {
  copyright: 'کلیه حقوق این سایت متعلق به بانک ملت می باشد.'
};
module.exports = footerPage;
`;
  createFile(`${footerPath}`, `${'footerLable_fa'}.js`, injectedContent);

  injectedContent = `import React from 'react';
//import footerImage from './footer-bottom-bg.png';
//import headerImage from './header_bg.jpg';
//import aparatIcon from './logo--color-black@16px.png';
//import './footer.css';
import footerPage from './footerLable_fa';

const footerColumns = [
  {
    columnTitle: 'سامانه های پرکاربرد',
    items: [
      {
        itemTitle: 'سامانه دبیرخانه محرمانه بانک',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه جامع منابع انسانی',
        itemLink: '',
      },
      {
        itemTitle: 'بانکداری اینترنتی',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه اتوماسیون اداری',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه ستاک',
        itemLink: '',
      },
      {
        itemTitle: 'سهام عدالت',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه تیکتینک',
        itemLink: '',
      },
    ],
  },
  {
    columnTitle: 'لینک های مفید',
    items: [
      {
        itemTitle: 'بخشنامه ها و اطلاعیه ها',
        itemLink: '',
      },
      {
        itemTitle: 'راهنمای تلفن ادارات',
        itemLink: '',
      },
      {
        itemTitle: 'راهنمای تلفن مدیریت شعب',
        itemLink: '',
      },
      {
        itemTitle: 'راهنمای تلفن شعب',
        itemLink: '',
      },
      {
        itemTitle: 'بانک ملت در بورس',
        itemLink: '',
      },
      {
        itemTitle: 'پست الکترونیک بانک',
        itemLink: '',
      },
      {
        itemTitle: 'باشگاه مشتریان',
        itemLink: '',
      },
    ],
  },
  {
    columnTitle: 'سایر لینک ها',
    items: [
      {
        itemTitle: 'منشور اخلاقی',
        itemLink: '',
      },
      {
        itemTitle: 'مضامین استراتژیک بانک ملت',
        itemLink: '',
      },
      {
        itemTitle: 'نظام پیشنهادها',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه جامع شعب (Branch)',
        itemLink: '',
      },
      {
        itemTitle: 'سامانه مدیریت پروژه',
        itemLink: '',
      },
      {
        itemTitle: 'وب سایت اینترنتی بانک',
        itemLink: '',
      },
      {
        itemTitle: 'پورتال اینترانت قدیمی',
        itemLink: '',
      },
    ],
  },
];

export default function Footer() {
  return (
    // <>
    //   <div className="border">
    // <footer className="fixed-bottom mt-5">
    <footer className="d-flex p-3 justify-content-center align-items-center border-top" style={{ backgroundColor: \`#58595b\` }}>

        &copy; {footerPage.copyright}
    </footer>
  );
}

        // {footerColumns.map((column) => {
        //   return (
        //     <div className="col-4 mb-3" key={column['columnTitle']}>
        //       <h5 className="text-white border-bottom border-dark-subtle py-2 fs-6 fw-normal">
        //         {column['columnTitle']}
        //       </h5>
        //       <ul className="nav flex-column">
        //         {column['items'].map((item) => {
        //           return (
        //             <li
        //               className="nav-item mb-2 border-bottom border-1 border-dark-subtle"
        //               key={item['itemTitle']}
        //             >
        //               <a
        //                 href="#"
        //                 className="nav-link p-0 fs-7 fw-lighter icon-link icon-link-hover"
        //                 style={{ 'a:hover': 'font-weight: 900' }}
        //               >
        //                 {item['itemTitle']}
        //               </a>
        //             </li>
        //           );
        //         })}
        //       </ul>
        //     </div>
        //   );
        // })}

        // <ul className="list-unstyled d-flex">
        //   <li className="ms-3">
        //     <a
        //       className="link-body-emphasis"
        //       href="www.aparat.com/bankmellat.official"
        //       // style={{ 'background-image': \`url(\${aparatIcon})\` }}
        //       //style={{ backgroundImage: \`url(\${aparatIcon})\` }}
        //     >
        //       {/* <svg className="bi" width="24" height="24">
        //             <use xlinkHref="#twitter" />
        //           </svg> */}
        //     </a>
        //   </li>
        //   <li className="ms-3">
        //     <a className="link-body-emphasis" href="#">
        //       <svg className="bi" width="24" height="24">
        //         <use xlinkHref="#instagram" />
        //       </svg>
        //     </a>
        //   </li>
        //   <li className="ms-3">
        //     <a className="link-body-emphasis" href="#">
        //       <svg className="bi" width="24" height="24">
        //         <use xlinkHref="#facebook" />
        //       </svg>
        //     </a>
        //   </li>
        // </ul>


// {
//   columnTitle: 'درباره ملت',
//   items: [
//     {
//       itemTitle: 'ساختار سازمانی',
//       itemLink: 'https://www.bankmellat.ir/Organizational_Structure.aspx',
//     },
//     {
//       itemTitle: 'آرشیو اخبار',
//       itemLink: 'https://www.bankmellat.ir/newsarchive.aspx',
//     },
//     {
//       itemTitle: 'افتخارات ملی و بین المللی',
//       itemLink: 'https://www.bankmellat.ir/Letter_of_commendation.aspx',
//     },
//     {
//       itemTitle: 'ملت در بورس',
//       itemLink:
//         'http://www.tsetmc.com/loader.aspx?partree=151311&i=778253364357513',
//     },
//     {
//       itemTitle: 'رسیدگی به شکایات',
//       itemLink: 'https://www.bankmellat.ir/Complaints.aspx',
//     },
//   ],
// },
// {
//   columnTitle: 'شعب و واحدها',
//   items: [
//     {
//       itemTitle: 'شعب داخلی',
//       itemLink: 'https://www.bankmellat.ir/Local_branches.aspx',
//     },
//     {
//       itemTitle: 'واحدها، بخش ها و باجه های ارزی',
//       itemLink: 'https://www.bankmellat.ir/Currency_units.aspx',
//     },
//     {
//       itemTitle: 'شعب ارائه دهنده خدمات بیمه ما',
//       itemLink: 'https://www.bankmellat.ir/bimehma_services.aspx',
//     },
//     {
//       itemTitle: 'ادارات کل و مدیریت های شعب',
//       itemLink:
//         'https://www.bankmellat.ir/Branches_of_administration_and_management.aspx',
//     },
//     {
//       itemTitle: 'مرکز ارتباط ملت',
//       itemLink: 'https://www.bankmellat.ir/mellat_contact_center.aspx',
//     },
//   ],
// },
`;
  createFile(`${footerPath}`, `${'footer'}.jsx`, injectedContent);
  /********************************************************************************
   *                        header component
   ********************************************************************************/
//   injectedContent = `import * as React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import bankMellatLogo from '../../icon/logo.690fe601.png';
// import headerPage from './headerLable_fa';
// import { fakeAuthProvider } from '../../auth';
// import { getTodayDate } from '../../util/Date';


// export default function Header() {
//   let user = fakeAuthProvider.getCredential();
//   let navigate = useNavigate();

//   const BMLogo = new Image();
//   BMLogo.src = bankMellatLogo;

//   const today = user.date;

//   const todayFa = getTodayDate()

//   return (
//     <header className="row flex-shrink-0 m-0 p-0">
//       <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
//         <symbol id="bootstrap" viewBox="0 0 118 94">
//           <title>Bootstrap</title>
//           <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
//           ></path>
//         </symbol>
//         <symbol id="home" viewBox="0 0 16 16">
//           <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
//         </symbol>
//         <symbol id="speedometer2" viewBox="0 0 16 16">
//           <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
//           <path
//             fillRule="evenodd"
//             d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
//           />
//         </symbol>
//         <symbol id="table" viewBox="0 0 16 16">
//           <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
//         </symbol>
//         <symbol id="people-circle" viewBox="0 0 16 16">
//           <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//           <path
//             fillRule="evenodd"
//             d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
//           />
//         </symbol>
//         <symbol id="grid" viewBox="0 0 16 16">
//           <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
//         </symbol>
//         <symbol id="boxArrowInLeft" viewBox="0 0 16 16">
//           <title>BoxArrwInLeft</title>
//           <path
//             fillRule="evenodd"
//             d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
//           ></path>
//           <path
//             fillRule="evenodd"
//             d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
//           ></path>
//         </symbol>
//       </svg>
//       <div className="pt-3" style={{ background: '#58595b' }}>
//         <div className="px-4 d-flex flex-wrap">
//           <div className="col-2"></div>
//           <div className="col-8">
//             <a
//               href="http://www.bankmellat.ir"
//               className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none justify-content-center"
//             >
//               <img src={bankMellatLogo} className="" />
//             </a>
//           </div>
//           <div className="col-2 d-flex flex-wrap align-items-center justify-content-lg-end text-end">
//             {user.isAuthenticated === false ? (
//               <>
//                 <Link
//                   to={\`/\`}
//                   data-bs-toggle="tooltip"
//                   title={headerPage.home}
//                   container="body"
//                   className="mb-2 mb-lg-0 text-white text-decoration-none heartbeat"
//                 >
//                   <i className="bi bi-house-door fs-4 text-warning pe-2" />
//                 </Link>
//                 <Link
//                   to={\`/login\`}
//                   data-bs-toggle="tooltip"
//                   title={headerPage.login}
//                   container="body"
//                   className="mb-2 mb-lg-0 text-white text-decoration-none heartbeat"
//                 >
//                   {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="40"
//                   height="32"
//                   fill="currentColor"
//                   className="bi bi-box-arrow-in-left shadow"
//                   viewBox="0 0 16 16"
//                   role="img"
//                   aria-label="boxArrowInLeft"
//                 >
//                   <use xlinkHref="#boxArrowInLeft" />
//                 </svg> */}
//                   {/* <i className="bi bi-house-door fs-4 text-warning pe-2" /> */}
//                   <i className="bi bi-box-arrow-in-left fs-4 text-warning  text-opacity-100 pe-2" />
//                 </Link>
//               </>
//             ) : (
//               <>
//                 {/* <Link
//                   to="/"
//                   data-bs-toggle="tooltip"
//                   title={headerPage.login}
//                   container="body"
//                   className="heartbeat"
//                   style={
//                     {
//                       // '--bs-icon-link-transform': 'translate3d(.125rem,0, 0)',
//                       // animation: 'heartbeat 1s infinite',
//                       // 'a.icon-link:hover': { animation: 'heartbeat 1s infinite' },
//                       // animation: 'heartbeat 1s infinite',
//                     }
//                   }
//                 >
//                   <i className="bi bi-box-arrow-in-left fs-4 text-warning text-opacity-100 pe-2" />
//                 </Link> */}
//                 <Link
//                   to="dashboard"
//                   data-bs-toggle="tooltip"
//                   title={headerPage.home}
//                   className="heartbeat"
//                 >
//                   <i className="bi bi-house-door fs-4 text-warning pe-2" />
//                 </Link>
//                 {/*
//                 <Link
//                   to="settings"
//                   data-bs-toggle="tooltip"
//                   title={headerPage.setting}
//                   className="heartbeat"
//                 >
//                   <i className="bi bi-sliders fs-4 text-warning pe-2" />
//                 </Link>
//                 */}
//                 <Link
//                   to="users"
//                   data-bs-toggle="tooltip"
//                   title={headerPage.profile}
//                   className="heartbeat"
//                 >
//                   <i className="bi bi-person fs-4 text-warning pe-2" />
//                 </Link>
//                 <Link
//                   to="logout"
//                   data-bs-toggle="tooltip"
//                   title={headerPage.logout}
//                   className="heartbeat"
//                 >
//                   <i className="bi bi-box-arrow-left fs-4 text-warning pe-2" />
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       <div
//         className="p-0 py-1"
//         style={{
//           background: 'rgb(231, 231, 231)',
//           boxShadow: '0 1px 7px 0 rgba(24, 24, 25, 0.68)',
//         }}
//       >
//         <div className="px-4 d-flex flex-wrap">
//           <div className="col-2">
//             {user.isAuthenticated === false ? (
//               <></>
//             ) : (
//               <span>
//                 {headerPage.currentUser}:&nbsp;
//                 {fakeAuthProvider.firstName}&nbsp;
//                 {fakeAuthProvider.lastName}&nbsp;
//                 {/* {headerPage.welcome} */}
//               </span>
//             )}
//           </div>
//           <div className="col-8 d-flex justify-content-center">
//             <span className="text-body-secondary fw-semibold">
//               {headerPage.portal}
//             </span>
//           </div>
//           <div className="col-2 px-4 text-start">
//             {user.isAuthenticated === false ? (
//               <></>
//             ) : (
//               <span>
//                 {todayFa.dayWeek} {todayFa.day} {todayFa.monthTitle}{' '}
//                 {todayFa.year}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//       {user.isAuthenticated === false && fakeAuthProvider.activeProfile.tafCode === '' ? (
//         <></>
//       ) : (
//         <div className="d-flex px-4 flex-wrap">
//           <div className="col-3">
//             {/* Sidebar Menu */}
//             <div className="col-3">
//               <a className="btn btn-link" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
//                 <i className='bi bi-list fs-5  heartbeat' style={{ 'color': 'black' }}></i>
//               </a>
//               {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
//                 Button with data-bs-target
//               </button> */}

//               <div className="offcanvas offcanvas-start" data-bs-backdrop="true" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
//                 <div className="offcanvas-header">
//                   <div className='col-1'></div>
//                   <div className='col-1'>
//                     <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                   </div>
//                   <div className='col-10'>
//                     <h5 className="offcanvas-title text-center" id="offcanvasMenuLabel">Offcanvas</h5>
//                   </div>
//                 </div>
//                 <div className="offcanvas-body">
//                   <div>
//                     Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
//                   </div>
//                   <div className="dropdown mt-3">
//                     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
//                       Dropdown button
//                     </button>
//                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                       <li><a className="dropdown-item" href="#">Action</a></li>
//                       <li><a className="dropdown-item" href="#">Another action</a></li>
//                       <li><a className="dropdown-item" href="#">Something else here</a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-6 ">
//             <div className="row mx-1 my-1 align-items-center justify-content-center border border-top-0 rounded-4 rounded-top" style={{
//               background: 'rgb(231, 231, 231)',
//               boxShadow: '0 1px 7px 0 rgba(24, 24, 25, 0.68)',
//             }}>
//               <div className="d-flex justify-content-center">
//                 <span className="text-body-secondary fw-bolder">عنوان تفاهم نامه: </span>
//                 <span className="text-decoration-underline fw-light">{fakeAuthProvider.activeProfile.tafTitle}</span>
//                 <span className="text-body-secondary fw-bolder fw-light" style={{"fontSize":"smaller"}}>(</span>
//                 <span className="text-body-secondary fw-bolder" style={{"fontSize":"smaller"}}>کد تفاهم نامه: </span>
//                 <span className="text-decoration-underline fw-light" style={{"fontSize":"smaller"}}>{fakeAuthProvider.activeProfile.tafCode}</span>
//                 <span className="text-body-secondary fw-bolder fw-light" style={{"fontSize":"smaller"}}>)</span>
//               </div>
//               {/* <div className="col-6">
//                 <span className="text-body-secondary fw-bolder">کد تفاهم نامه: </span>
//                 <span className="text-decoration-underline">{fakeAuthProvider.activeProfile.tafCode}</span>
//               </div> */}
//             </div>
//           </div>
//           <div className="col-3"></div>
//         </div>
//       )}
//     </header>
//   );
// }

// // <div className="row">
// //   <div className="col-10 text-sm-center fs-6">
// //     <span>
// //       {todayFa.dayWeek} {todayFa.day} {todayFa.monthTitle}{' '}
// //       {todayFa.year}
// //     </span>
// //   </div>
// //   <div className="col-2">
// //     <div className="row">1</div>
// //     <div className="row fs-6">زمان باقیمانده</div>
// //   </div>
// // </div>;

// {
//   /* <div>
//                 <div className="row">
                  
//                 </div>
//                 <div className="row">
//                   <span>salam</span>
//                 </div>
//               </div> */
// }
// `;
//   createFile(`${headerPath}`, `${'header'}.jsx`, injectedContent);

//   injectedContent = `const headerPage = {
//   login: 'ورود',
//   home: 'خانه',
//   setting: 'تنظیمات',
//   profile: 'پروفایل',
//   logout: 'خروج',
//   currentUser: 'کاربرجاری',
//   welcome: 'خوش آمدید.',
//   remainingTime: 'زمان باقیمانده',
//   portal: 'پورتال تفاهم نامه های بانک ملت',
// };

// module.exports = headerPage;`;
//   createFile(`${headerPath}`, `headerLable_fa.js`, injectedContent);

  /********************************************************************************
   *                        layout component
   ********************************************************************************/
  injectedContent = `import Layout from './layout';

export default Layout;`;
  createFile(`${layoutPath}`, `${'index'}.js`, injectedContent);

  injectedContent = `import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useRouteLoaderData } from 'react-router-dom';
import './layout.css';
import { fakeAuthProvider } from '../../auth';
import { useIdleTimer } from 'react-idle-timer';

export default function Layout() {
  let { user } = useRouteLoaderData('root');
  const navigate = useNavigate()
  
  const onIdle = () => {
    fakeAuthProvider.signout()
    navigate('/logout')
  }

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    timeout: ${ConfigObjects.globalSetting.allowedIdleTime},
    throttle: 500
  })

  /*
  useEffect(() => {
    setInterval(() => {
      fakeAuthProvider.resetActiveProfile()
      navigate('/logout')
    }, ${ConfigObjects.token.tokenLifeLong});
  }, [])
  */

  return (
    <div className="" style={{ backgroundColor: '#f2f2f2' }}>
      <Header />
      <div
        className="d-flex mx-2 my-3"
        style={{ flex: '1 0 auto', height: '750px' }}
      >
        {/* {user === null ? null : <Sidebar /> */}

        <div
          className="d-flex flex-column flex-grow-1"
          // style={{ backgroundColor: 'white' }}
          id="mainContent"
        >
          {/* <div className="container m-0 p-0"> */}
            {/* <div className="col border-bottom p-4 justify-content-end">
              <button className="btn-close" aria-label="close"></button>
            </div> */}
          {/* </div> */}
          <Outlet />
        </div>
      </div>
      {/* <Footer />; */}
    </div>
  );
}
`;
  createFile(`${layoutPath}`, `${'layout'}.jsx`, injectedContent);

  injectedContent = `html, body {
  /* height: 100%; */
  min-height: 100vh;
  /* min-height: -webkit-fill-available; */
}

/* html {
  height: -webkit-fill-available;
} */

#root {
  /* height: 100%; */
  min-height: 100vh;
  overflow: auto;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  /* flex: 1 0 auto; */
}
`;
  createFile(`${layoutPath}`, `${'layout'}.css`, injectedContent);

  /********************************************************************************
   *                        public component
   ********************************************************************************/
  injectedContent = `export * from './route';`;
  createFile(`${publicPath}`, `${'index'}.js`, injectedContent);

  injectedContent = `import * as React from 'react';

import Public from './public';
// import { loader as publicLoader } from './loader';
// import { action as publicAction } from './action';
import { Navigate } from 'react-router-dom';

export const route = {
  // path: 'public',
  index: true,
  element: <Navigate to="login" replace />
  // element: <Public />,
  // errorElement: <div>Error Occured!</div>,
  // action: null,
  // loader: null,
};`;
  createFile(`${publicPath}`, `${'route'}.js`, injectedContent);

  injectedContent = `import * as React from 'react';

export default function Public() {
  return <>Public Page</>;
}
`;
  createFile(`${publicPath}`, `${'public'}.jsx`, injectedContent);

  // injectedContent = ``;
  // createFile(`${gridPath}`, `.js`, injectedContent);

  /********************************************************************************
   *                        breadcrumb component
   ********************************************************************************/

  /*   injectedContent = `import React, { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import breadcrumbLable from './breadcrumbLable_fa';
  
  export function Breadcrumb({ path }) {
    return (
      <div className="row border-bottom mx-1 my-1 align-items-center justify-content-center">
        <div className="col-6 text-end">
          <nav
            // style={{ '--bs-breadcrumb-divider': ':' }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              {Object.keys(path).map((pathLink, index) => {
                return (
                  <li
                    className={
                      index >= Object.keys(path).length - 1
                        ? 'breadcrumb-item active'
                        : 'breadcrumb-item'
                    }
                    key={index}
                  >
                    {index === Object.keys(path).length - 1 ? (
                      <span>{pathLink}</span>
                    ) : (
                      <Link to={path[pathLink]}>{pathLink}</Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
        <div className="col-6 text-start">
          <Link
            to={Object.values(path)[Object.keys(path).length - 2]}
            data-bs-toggle="tooltip"
            title={Object.keys(path)[Object.keys(path).length - 2]}
            container="body"
            className="heartbeat"
          >
            <i className="bi bi-arrow-return-right fs-4 pe-2" />
          </Link>
        </div>
      </div>
    );
  }
          // <button
          //   className="border-0 bg-light-subtle heartbeat"
          //   aria-label="close"
          //   data-bs-toggle="tooltip"
          //   title={breadcrumbLable.close}
          // >
          //   <i className="bi bi-x fs-3"></i>
          // </button>
  `; */
  // createFile(`${breadcrumbPath}`, `breadcrumb.jsx`, injectedContent);

  /*   injectedContent = `const breadcrumbLable = {
    close: 'بازگشت',
  };
  
  export default breadcrumbLable;
  `; */
  // createFile(`${breadcrumbPath}`, `breadcrumbLable_fa.js`, injectedContent);

  /********************************************************************************
   *                        modal component
   ********************************************************************************/
  /*   injectedContent = `import React, { useState } from 'react';
  import { Link, useNavigate, useSubmit } from 'react-router-dom';
  import * as bootstrap from 'bootstrap';
  
  export default function CustomModal({ path, lable }) {
    const navigate = useNavigate();
    const submit = useSubmit();
  
    const onButtonClicked = () => {
      const elem = document.getElementById('exampleModal');
  
      const mod = bootstrap.Modal.getInstance(elem);
      mod.hide();
      // redirect(\`/users/\${path}/delete\`);
      // navigate(\`/users/\${path}/delete\`);
      submit(null, {
        method: 'POST',
        action: \`\${path}\`,
      });
    };
  
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                حذف {lable}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">آیا از حذف {lable} اطمینان دارید؟</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                انصراف
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onButtonClicked}
              >
                تایید
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  `; */
  // createFile(`${modalPath}`, `customModal.jsx`, injectedContent);
};
module.exports = ClientProjectConfigGenerator;
