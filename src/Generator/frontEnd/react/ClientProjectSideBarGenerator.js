const { isPathExists, createFile } = require('../../util');
const {
  getRootRoutes,
  isRouteNameValid,
  getRoutePathString,
  getRoutePathVariable,
} = require('../../ContentMapValidator');

const domainConfig = require('../../DomainConfig');
const ClientProjectSideBarGenerator = (feedContent, ConfigObject) => {
  const sourcePath = ConfigObject.getClientSourcePath();
  const sidebarPath = ConfigObject.getClientComponentSidebarPath();

  isPathExists(sidebarPath);

  let injectedContent = ``;

  const listOfObjects = feedContent.listOfObjects();

  let listOfSidebarHomeLinks = ``;
  let listOfSidebarProfileLinks = ``;
  let listOfSidebarOperationLinks = ``;
  let listOfSidebarReportLinks = ``;
  let listOfSidebarSettingLinks = ``;
  // objectOfSidebarLinks = {};
  let end;
  const length = Object.keys(listOfObjects).length;
  Object.keys(listOfObjects).map((objectName, index) => {
    end =
      index + 1 <= length
        ? `,`
        : ``;
    if (isRouteNameValid(objectName) === true) {
      const routePathString = getRoutePathString(objectName);
      // console.log(routePathString)
      const [first, ...completeRoutePathArray] = routePathString.split('/');
      // console.log(completeRoutePathArray);

      const directParentRoutePath =
        completeRoutePathArray.length > 1
          ? completeRoutePathArray[completeRoutePathArray.length - 2]
          : '';

      const parentJpaName =
        directParentRoutePath.length > 1
          ? feedContent.getJpaNameByAppObjectId(directParentRoutePath)
          : '';

      const result = domainConfig.getJpaByJpaName(objectName, parentJpaName);

      if (result['finalJpa']['menuTitle'] == 'home') {
        // console.log(objectName);
        // console.log('1');
        if (objectName.slice(-3) == 'Rpt') {
          if (getRootRoutes().includes(objectName)) {
            listOfSidebarHomeLinks += `
            ...fakeAuthProvider.activeProfile['${result['virtualPKColumn']['title']}'] != '' ? [{ subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
              }', subItemLink: \`report/${objectName}s\`}${end}] : [],`;
          } else {
            listOfSidebarHomeLinks += `
            { subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']}', subItemLink: \`/${directParentRoutePath}s/report/${objectName}s\`}`;
          }

        } else {
          if (getRootRoutes().includes(objectName)) {
            listOfSidebarHomeLinks += `
            { subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
              }', subItemLink: \`/${objectName}s/\${fakeAuthProvider['activeProfile']['${result['primaryKey']}']}\` }${end}`;
          } else {
            listOfSidebarHomeLinks += `
            { subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']}', subItemLink: \`/${directParentRoutePath}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s\`}`;
          }
        }
      } else if (result['finalJpa']['menuTitle'] == 'profile') {
        // console.log(objectName);
        // console.log('1');
        if (getRootRoutes().includes(objectName)) {
          listOfSidebarProfileLinks += `
          { subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
            }', subItemLink: \`/${objectName}s/\${fakeAuthProvider['activeProfile']['${result['primaryKey']}']}\` }${end}`;
        } else {
          listOfSidebarProfileLinks += `
          ...fakeAuthProvider.activeProfile['${result['virtualPKColumn']['title']}'] != '' ? [{
            subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
            }', subItemLink: \`/${directParentRoutePath}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s\`
          }${end}] : [],`;
        }
      } else if (result['finalJpa']['menuTitle'] == 'operation') {
        listOfSidebarOperationLinks += `...fakeAuthProvider.activeProfile['${result['virtualPKColumn']['title']}'] != '' ? [{ subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
          }', subItemLink: \`/${directParentRoutePath}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s\` }${end}] : [],`
      } else if (result['finalJpa']['menuTitle'] == 'report') {
        if (getRootRoutes().includes(objectName)) {
          listOfSidebarReportLinks += `...fakeAuthProvider.activeProfile['${result['virtualPKColumn']['title']}'] != '' ? [{ subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
            }', subItemLink: \`/${directParentRoutePath}s/report/${objectName}s\`${end} }] : [],`
        } else {
          if (objectName != 'dashboardDetailRpt') {
            listOfSidebarReportLinks += `...fakeAuthProvider.activeProfile['${result['virtualPKColumn']['title']}'] != '' ? [{ subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
              }', subItemLink: \`/${directParentRoutePath}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s\`${end} }] : [],`
          }
        }
      } else if (result['finalJpa']['menuTitle'] == 'setting') {
        // console.log(objectName);
        // console.log('2');
        listOfSidebarSettingLinks += `...fakeAuthProvider.hasRole('ROLE_${objectName.toUpperCase()}') ? [{ subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
          }', subItemLink: '/${objectName}s' }] : []${end}`;
      } else {
        console.log('menuTitle is not defined in JPA :)');
      }
      // listOfSidebarProfileLinks
      // listOfSidebarSettingLinks
      // listOfSidebarOperationLinks

      // if (getRootRoutes().includes(objectName)) {
      //   //  Root routes
      //   if (domainConfig.getJpaDomain(objectName) == 'baseInformation') {
      //     //  jpa goes to 'Setting' menu
      //     //  in casee jpa belongs to 'baseInformation' domain
      //     listOfSidebarSettingLinks += `
      //     ...fakeAuthProvider.hasRole('ROLE_${objectName.toUpperCase()}') ? [{ subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
      //       }', subItemLink: '/${objectName}s' }] : []${end}`;
      //   }
      //   else {
      //     //  jpa goes to 'Profile' menu
      //     //  in casee jpa belongs to other Domains
      //     listOfSidebarProfileLinks += `
      //     { subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
      //       }', subItemLink: \`/${objectName}s/\${fakeAuthProvider['activeProfile']['${result['primaryKey']}']}\` }${end}`;
      //   }
      // } else {
      //   //  non-root routes
      //   if (result['finalJpa']['menuTitle'] == 'operation') {
      //     listOfSidebarOperationLinks += `
      //     ...fakeAuthProvider.activeProfile['${result['virtualPKColumn']['title']}'] != '' ? [{ subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
      //       }', subItemLink: \`/${directParentRoutePath}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s\` }${end}] : [],`
      //   }
      //   //  non-Root routes
      //   //  in case non-Root routes has explict 'pathVariable'
      //   if (getRoutePathVariable(objectName).length > 0) {
      //     listOfSidebarProfileLinks += `
      //     ...fakeAuthProvider.activeProfile['${result['virtualPKColumn']['title']}'] != '' ? [{ subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
      //       }', subItemLink: \`/${directParentRoutePath}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s\` }${end}] : [],`;
      //   } else {
      //     //  in case non-Root routes does'nt have any 'pathVariable'
      //     listOfSidebarProfileLinks += `
      //     ...fakeAuthProvider.activeProfile['${result['virtualPKColumn']['title']}'] != '' ? [{ subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
      //       }', subItemLink: \`/${directParentRoutePath}s/\${fakeAuthProvider['activeProfile']['${result['targetJpaParentPK']}']}/${objectName}s\` }${end}] : [],`;
      //   }
      // }
    } else {
      console.log(
        `ClientProjectSideBarGenerator.js:: appObjectId ${objectName} of  is NOT valid route name in contentMap`
      );
    }
  });
  // console.log(listOfSidebarReportLinks);
  // console.log(listOfSidebarProfileLinks);
  // console.log(listOfSidebarProfileLinks);
  // console.log(listOfSidebarSettingLinks);
  /********************************************************************************
   *                        sidebar component
   ********************************************************************************/
  injectedContent = `import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fakeAuthProvider } from '../../auth';
import './sidebar.css';

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  let menuItems = {};

  menuItems = {
    menuTitle: 'تفاهم نامه های بانک ملت',
    menuIconName: 'bi-list',
    menuLink: '/',
    items: [
      {
        itemTitle: 'خانه/ داشبورد',
        itemIconName: 'bi-house-door',
        subItems: [
          { subItemTitle: 'ایجاد', subItemLink: '/tafahomInformations/new' },
          ${listOfSidebarHomeLinks}
        ],
      },
      ...fakeAuthProvider.activeProfile['archiveNumber'] != '' ? [{
        itemTitle: 'پروفایل تفاهم نامه',
        itemIconName: 'bi-speedometer2',
        subItems: [${listOfSidebarProfileLinks}
        ],
      }] : [],
      ...fakeAuthProvider.activeProfile['archiveNumber'] != '' ? [{
        itemTitle: 'عملیات',
        itemIconName: 'bi-activity',
        subItems: [
          ${listOfSidebarOperationLinks}
        ]
      }] : [],
      {
        itemTitle: 'گزارش',
        itemIconName: 'bi-table',
        subItems: [
          ${listOfSidebarReportLinks}
        ],
      },
      ...fakeAuthProvider.hasRole('ROLE_USER') || fakeAuthProvider.hasRole('ROLE_TASPARAMETER') || fakeAuthProvider.hasRole('ROLE_SMSPARAMETER') || fakeAuthProvider.hasRole('ROLE_NOTIFICATIONPARAMETER') ? [{
        itemTitle: 'تنظیمات',
        itemIconName: 'bi-sliders',
        subItems: [
          ...fakeAuthProvider.hasRole('ROLE_USER') ? [{ subItemTitle: 'کاربران', subItemLink: '/users' }] : [],
          ${listOfSidebarSettingLinks}
        ],
      }] : [],
      {
        itemTitle: 'سیستم',
        itemIconName: 'bi-gear',
        subItems: [{ subItemTitle: 'خروج', subItemLink: '/logout' }],
      },
    ],
  };

  let user = fakeAuthProvider.getCredential();

  useEffect(() => {
    // window.addEventListener('mousemove', (e) => {
    window.addEventListener('click', (e) => {
      setCoordinates({
        x: e.clientX,
      });
      let box = window.document.getElementById('mainMenu');
      if (user.isAuthenticated && !!box && box.classList.contains('collapse.show')) {
        box.classList.remove('visuallyHidden');
      }
      e.clientX > 1568 ? setOpen(true) : 'setOpen(false)';
      e.clientX < 1260 ? setOpen(false) : 'setOpen(true)';
    });
  }, [user.isAuthenticated]);

  const buttonClicked = (e) => {
    e.preventDefault();
    activeMenu === e.target.value
      ? setActiveMenu('')
      : setActiveMenu(e.target.value);
  };
  return (
    user.isAuthenticated === true && (
      open
        ?
        <aside
          className={
            open
              ? 'd-flex flex-column p-0 m-0 ms-2 bg-secondary-subtle border border-light-subtle rounded collapse.show visuallyHidden'
              : 'd-flex flex-column p-0 bg-secondary-subtle border  collapse'
          }
          id="mainMenu"
          style={{
            boxShadow: 'rgba(24, 24, 25, 0.68) 0px 1px 7px 0px',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
            <symbol id="check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </symbol>
            <symbol id="circle-half" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
            </symbol>
            <symbol id="moon-stars-fill" viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
            </symbol>
            <symbol id="sun-fill" viewBox="0 0 16 16">
              <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </symbol>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
            <symbol id="bootstrap" viewBox="0 0 118 94">
              <title>Bootstrap</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
              ></path>
            </symbol>
            <symbol id="home" viewBox="0 0 16 16">
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
            </symbol>
            <symbol id="speedometer2" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
              <path
                fillRule="evenodd"
                d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
              />
            </symbol>
            <symbol id="table" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
            </symbol>
            <symbol id="people-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </symbol>
            <symbol id="grid" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
            </symbol>
            <symbol id="gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
            </symbol>
          </svg>
          <div
            className="rounded-4 me-2 p-2"
            style={{
              height: '750px',
            }}
          >
            <div>
              <a
                // href={menuItems['menuLink']}
                className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom border-warning"
                style={{ border: '#FCB648', cursor: 'pointer' }}
                onClick={() => { open == true ? setOpen((prev) => { false }) : setOpen((prev) => { true }) }}
              >
                <i className={\`\${menuItems['menuIconName']}\`} />
                <span className="fw-bolder fs-6 ms-3" style={{}}>
                  {menuItems['menuTitle']}
                </span>
              </a>
            </div>
            <ul className="list-unstyled pe-0">
              {Object.keys(menuItems['items']).map((itemIndex) => {
                return (
                  <li
                    className="mb-1 btn-header"
                    key={itemIndex + menuItems['items'][itemIndex]['itemTitle']}
                  >
                    <div className="btn-header-div">
                      <button
                        className="btn btn-toggle d-inline-flex align-items-center rounded"
                        data-bs-toggle="toggle"
                        data-bs-target="#homs-collapse"
                        aria-expanded="true"
                        value={menuItems['items'][itemIndex]['itemTitle']}
                        onClick={() => {
                          setActiveMenu(menuItems['items'][itemIndex]['itemTitle']);
                        }}
                        style={{
                          '--bs-btn-border-width': 'none',
                        }}
                      >
                        {/* <svg className="bi pe-none ms-2" width="16" height="16">
                          <use
                            xlinkHref={
                              menuItems['items'][itemIndex]['itemIconName']
                            }
                          />
                        </svg> */}
                        <i
                          className={\`bi \${menuItems['items'][itemIndex]['itemIconName']} fs-5  heartbeat\`}
                          value={menuItems['items'][itemIndex]['itemTitle']}
                        />
                        <span
                          className="text-body-secondary pe-2"
                          value={menuItems['items'][itemIndex]['itemTitle']}
                        >
                          {menuItems['items'][itemIndex]['itemTitle']}
                        </span>
                      </button>
                    </div>
                    <div
                      className={
                        activeMenu === menuItems['items'][itemIndex]['itemTitle']
                          ? 'collapse show'
                          : 'collapse'
                      }
                      id="homs-collapse"
                    >
                      <ul className="btn-toggle-nav list-unstyled fw-lighter pb-1 small">
                        {menuItems['items'][itemIndex]['subItems'].map(
                          (subItemIndex) => {
                            return (
                              <li key={subItemIndex + subItemIndex['subItemTitle']}>
                                <Link
                                  to={subItemIndex['subItemLink']}
                                  className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                >
                                  {subItemIndex['subItemTitle']}
                                </Link>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
        :
        <aside
          className={
            !open
              ? 'd-flex flex-column p-0 m-0 ms-2 bg-secondary-subtle border border-light-subtle rounded collapse.show'
              : 'd-flex flex-column p-0 bg-secondary-subtle border  collapse'
          }
          id="mainMenu"
          style={{
            boxShadow: 'rgba(24, 24, 25, 0.68) 0px 1px 7px 0px',
          }}
        >
          <div
            className="rounded-4 me-2 p-2"
            style={{
              height: '750px',
            }}
          >
            <a
              // href={menuItems['menuLink']}
              // href={() => open == true ? setOpen(false) : setOpen(true)}
              onClick={() => open == true ? setOpen(false) : setOpen(true)}
              className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom border-warning"
              style={{ border: '#FCB648', cursor: 'pointer' }}
            >
              <i className={menuItems['menuIconName']} />
            </a>
            {Object.keys(menuItems['items']).map((itemIndex, index) => {
              return (
                <a
                  key={index}
                  // href={menuItems['menuLink']}
                  // href={() => open == true ? setOpen(false) : setOpen(true)}
                  onClick={() => open == true ? setOpen(false) : setOpen(true)}
                  className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none"
                  style={{ border: '#FCB648', cursor: 'pointer' }}
                >
                  <i
                    // className={menuItems['items'][itemIndex]['itemIconName']} 
                    className={\` \${menuItems['items'][itemIndex]['itemIconName']} heartbeat\`}
                  />
                </a>
              )
            })}
          </div>
        </aside>
    )
  );
}
`;

  createFile(`${sidebarPath}`, `${'sidebar'}.jsx`, injectedContent);

  injectedContent = `.visuallyHidden {
  opacity: 0;
}

aside {
  transition: all 0s ease-in;
}

.dropdown-toggle {
  outline: 0;
}

.btn-toggle {
  padding: 0.25rem 0.5rem;
  /* font-weight: 600; */
  /* color: var(--bs-emphasis-color); */
  background-color: transparent;
}
/*
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(var(--bs-emphasis-color-rgb), 0.85);
  background-color: var(--bs-tertiary-bg);
}
*/

.btn-header .btn-header-div:hover,
.btn-header .btn-header-div:focus {
  margin-right: 2px;
  margin-left: 2px;
  background-color: var(--bs-tertiary-bg);
  border-radius: 15px;
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  /* content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e"); */
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}

[data-bs-theme='dark'] .btn-toggle::before {
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%28255,255,255,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
}

.btn-toggle[aria-expanded='true'] {
  color: rgba(var(--bs-emphasis-color-rgb), 0.85);
}
.btn-toggle[aria-expanded='true']::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  margin-left: 1.25rem;
}
.btn-toggle-nav li:hover,
.btn-toggle-nav li:focus {
  margin-left: 2px;
  background-color: var(--bs-tertiary-bg);
  border-radius: 15px;
}

.scrollarea {
  overflow-y: auto;
}

/** Section 2 */
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}
`;
  createFile(`${sidebarPath}`, `${'sidebar'}.css`, injectedContent);
};
module.exports = ClientProjectSideBarGenerator;
