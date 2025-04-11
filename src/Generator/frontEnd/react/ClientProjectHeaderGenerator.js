const { isPathExists, createFile } = require('../../util');
const {
  getRootRoutes,
  isRouteNameValid,
  getRoutePathString,
  getRoutePathVariable,
} = require('../../ContentMapValidator');

const domainConfig = require('../../DomainConfig');
const ClientProjectHeaderGenerator = (feedContent, ConfigObject) => {
  // const sourcePath = ConfigObject.getClientSourcePath();
  // const sidebarPath = ConfigObject.getClientComponentSidebarPath();
  const headerPath = ConfigObject.getClientComponentHeaderPath();

  isPathExists(headerPath);

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
            { subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']}', subItemLink: \`/${directParentRoutePath}s/report/${objectName}s\`},`;
          }

        } else {
          if (getRootRoutes().includes(objectName)) {
            listOfSidebarHomeLinks += `
            { subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
              }', subItemLink: \`/${objectName}s/\${fakeAuthProvider['activeProfile']['${result['primaryKey']}']}\` }${end}`;
          } else {
            if (objectName == 'search') {
              listOfSidebarHomeLinks += `
          { subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']}', subItemLink: \`/${directParentRoutePath}s/${objectName}s\`}`;
            } else {
              listOfSidebarHomeLinks += `
          { subItemTitle: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']}', subItemLink: \`/${directParentRoutePath}s/${objectName}s\`}`;
            }
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
   *                        Header component
   ********************************************************************************/
  injectedContent = `import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fakeAuthProvider } from '../../auth';
import headerPage from './headerLable_fa';
import { getTodayDate } from '../../util/Date';
import bankMellatLogo from '../../icon/logo.690fe601.png';
// import './sidebar.css';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState('');

  let user = fakeAuthProvider.getCredential();
  const todayFa = getTodayDate()

  const BMLogo = new Image();
  BMLogo.src = bankMellatLogo;

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

  return (
    <header className="row flex-shrink-0 m-0 p-0">
      <div className="pt-3" style={{ background: '#58595b' }}>
        <div className="px-4 d-flex flex-wrap">
          <div className="col-2"></div>
          <div className="col-8">
            {/* <a
              href="http://www.bankmellat.ir"
              className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none justify-content-center"
            > */}
              <img src={bankMellatLogo} className="mx-auto d-block" />
            {/* </a> */}
          </div>
          <div className="col-2 d-flex flex-wrap align-items-center justify-content-lg-end text-end">
            {user.isAuthenticated === false ? (
              <>
                {/** 
                  <Link
                    to={\`/\`}
                    data-bs-toggle="tooltip"
                    title={headerPage.home}
                    container="body"
                    className="mb-2 mb-lg-0 text-white text-decoration-none heartbeat"
                  >
                    <i className="bi bi-house-door fs-4 text-warning pe-2" />
                  </Link>
                  <Link
                    to={\`/login\`}
                    data-bs-toggle="tooltip"
                    title={headerPage.login}
                    container="body"
                    className="mb-2 mb-lg-0 text-white text-decoration-none heartbeat"
                  >
                    <i className="bi bi-box-arrow-in-left fs-4 text-warning  text-opacity-100 pe-2" />
                  </Link>
                */}
              </>
            ) : (
              <>
                {/* <Link
                  to="/"
                  data-bs-toggle="tooltip"
                  title={headerPage.login}
                  container="body"
                  className="heartbeat"
                  style={
                    {
                      // '--bs-icon-link-transform': 'translate3d(.125rem,0, 0)',
                      // animation: 'heartbeat 1s infinite',
                      // 'a.icon-link:hover': { animation: 'heartbeat 1s infinite' },
                      // animation: 'heartbeat 1s infinite',
                    }
                  }
                >
                  <i className="bi bi-box-arrow-in-left fs-4 text-warning text-opacity-100 pe-2" />
                </Link> */}
                <Link
                  to="dashboard"
                  data-bs-toggle="tooltip"
                  title={headerPage.home}
                  className="heartbeat"
                >
                  <i className="bi bi-house-door fs-4 text-warning pe-2" />
                </Link>
                {/*
                <Link
                  to="settings"
                  data-bs-toggle="tooltip"
                  title={headerPage.setting}
                  className="heartbeat"
                >
                  <i className="bi bi-sliders fs-4 text-warning pe-2" />
                </Link>
                */}
                <Link
                  to="users"
                  data-bs-toggle="tooltip"
                  title={headerPage.profile}
                  className="heartbeat"
                >
                  <i className="bi bi-person fs-4 text-warning pe-2" />
                </Link>
                <Link
                  to="logout"
                  data-bs-toggle="tooltip"
                  title={headerPage.logout}
                  className="heartbeat"
                >
                  <i className="bi bi-box-arrow-left fs-4 text-warning pe-2" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className="p-0 py-1"
        style={{
          background: 'rgb(231, 231, 231)',
          boxShadow: '0 1px 7px 0 rgba(24, 24, 25, 0.68)',
        }}
      >
        <div className="px-4 d-flex flex-wrap">
          <div className="col-2">
            {user.isAuthenticated === false ? (
              <></>
            ) : (
              <span>
                {headerPage.currentUser}:&nbsp;
                {fakeAuthProvider.firstName}&nbsp;
                {fakeAuthProvider.lastName}&nbsp;
                {/* {headerPage.welcome} */}
              </span>
            )}
          </div>
          <div className="col-8 d-flex justify-content-center">
            <span className="text-body-secondary fw-semibold">
              {headerPage.portal}
            </span>
          </div>
          <div className="col-2 px-4 text-start">
            {user.isAuthenticated === false ? (
              <></>
            ) : (
              <span>
                {todayFa.dayWeek} {todayFa.day} {todayFa.monthTitle}{' '}
                {todayFa.year}
              </span>
            )}
          </div>
        </div>
      </div>
      {user.isAuthenticated === false && fakeAuthProvider.activeProfile.tafCode === '' ? (
        <></>
      ) : (
        <div className="d-flex px-4 flex-wrap">
          <div className="col-3">
            {/* Sidebar Menu */}
            <div className="col-3">
              <a className="btn btn-link" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                <i className='bi bi-list fs-2 text-muted heartbeat'></i>
              </a>
              {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                Button with data-bs-target
              </button> */}

              <div className="offcanvas offcanvas-start bg-secondary-subtle" data-bs-backdrop="true" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                <div className="offcanvas-header">
                  <div className='col-1'></div>
                  <div className='col-1'>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className='col-8 border-bottom border-warning pb-3'>
                    <h5 className="offcanvas-title text-center" id="offcanvasMenuLabel">{menuItems['menuTitle']}</h5>
                  </div>
                  <div className='col-1'></div>
                  <div className='col-1'></div>
                </div>
                <div className="offcanvas-body mb-0">
                  {Object.keys(menuItems['items']).map((itemIndex) => {
                    return (
                      <ul className='list-unstyled mb-0'
                        key={itemIndex + menuItems['items'][itemIndex]['itemTitle']}
                      >
                        <li
                          className="mb-1 btn-header"
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
                            <ul className="btn-toggle-nav list-unstyled fw-lighter pb-1 px-0 pe-3 small">
                              {menuItems['items'][itemIndex]['subItems'].map(
                                (subItemIndex) => {
                                  return (
                                    <li className="px-0 pe-3 py-1" key={subItemIndex + subItemIndex['subItemTitle']}>
                                      <Link
                                        to={subItemIndex['subItemLink']}
                                        className="link-body-emphasis d-inline-flex text-decoration-none rounded px-3 mx-0 me-3"
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
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            {(
              fakeAuthProvider.activeProfile['archiveNumber'] != '' &&
              fakeAuthProvider.activeProfile['tafCode'] != ''
            )
              ? (

                <div className="row mx-1 my-1 align-items-center justify-content-center border border-top-0 rounded-4 rounded-top" style={{
                  background: 'rgb(231, 231, 231)',
                  boxShadow: '0 1px 7px 0 rgba(24, 24, 25, 0.68)',
                }}>
                  <div className="d-flex justify-content-center">
                    <span className="text-body-secondary fw-bolder">عنوان تفاهم نامه: </span>
                    <span className="text-decoration-underline fw-light">{fakeAuthProvider.activeProfile.tafTitle}</span>
                    <span className="text-body-secondary fw-bolder fw-light" style={{ "fontSize": "smaller" }}>(</span>
                    <span className="text-body-secondary fw-bolder" style={{ "fontSize": "smaller" }}>کد تفاهم نامه: </span>
                    <span className="text-decoration-underline fw-light" style={{ "fontSize": "smaller" }}>{fakeAuthProvider.activeProfile.tafCode}</span>
                    <span className="text-body-secondary fw-bolder fw-light" style={{ "fontSize": "smaller" }}>)</span>
                  </div>
                  {/* <div className="col-6">
                <span className="text-body-secondary fw-bolder">کد تفاهم نامه: </span>
                <span className="text-decoration-underline">{fakeAuthProvider.activeProfile.tafCode}</span>
              </div> */}
                </div>
              )
              : ''
            }
          </div>
          <div className="col-3"></div>
        </div>
      )}
    </header>
  )
}
`;

  createFile(`${headerPath}`, `${'header'}.jsx`, injectedContent);

  injectedContent = `const headerPage = {
    login: 'ورود',
    home: 'خانه',
    setting: 'تنظیمات',
    profile: 'پروفایل',
    logout: 'خروج',
    currentUser: 'کاربرجاری',
    welcome: 'خوش آمدید.',
    remainingTime: 'زمان باقیمانده',
    portal: 'پورتال تفاهم نامه های بانک ملت',
  };
  
  module.exports = headerPage;`;
  createFile(`${headerPath}`, `headerLable_fa.js`, injectedContent);
};
module.exports = ClientProjectHeaderGenerator;
