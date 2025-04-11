import React, { useEffect, useState } from 'react';
// import { Dropdown } from 'react-bootstrap';
import './sidebars.css';

export function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  let menuItems = {};
  const dropdownClass = `dropdown-menu ${
    isOpen === false ? ' show' : ''
  } dropdown-menu-end shadow`;

  menuItems = {
    menuTitle: 'Collapsible',
    menuIconName: '#bootstrap',
    menuLink: '/',
    items: [
      {
        itemTitle: 'Home',
        itemIconName: '#home',
        subItems: [
          { subItemTitle: 'Overview', subItemLink: '#' },
          { subItemTitle: 'Updates', subItemLink: '#' },
          { subItemTitle: 'Reports', subItemLink: '#' },
        ],
      },
      {
        itemTitle: 'Dashboard',
        itemIconName: '#speedometer2',
        subItems: [
          { subItemTitle: 'Overview', subItemLink: '#' },
          { subItemTitle: 'weekly', subItemLink: '#' },
          { subItemTitle: 'Monthly', subItemLink: '#' },
          { subItemTitle: 'Annually', subItemLink: '#' },
        ],
      },
      {
        itemTitle: 'Reports',
        itemIconName: '#table',
        subItems: [
          { subItemTitle: 'New', subItemLink: '#' },
          { subItemTitle: 'Processed', subItemLink: '#' },
          { subItemTitle: 'Shipped', subItemLink: '#' },
          { subItemTitle: 'Returned', subItemLink: '#' },
        ],
      },
      {
        itemTitle: 'Account',
        itemIconName: '#gear',
        subItems: [
          { subItemTitle: 'New', subItemLink: '#' },
          { subItemTitle: 'Profile', subItemLink: '#' },
          { subItemTitle: 'Settings', subItemLink: '#' },
          { subItemTitle: 'Sign out', subItemLink: '#' },
        ],
      },
    ],
  };

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setCoordinates({
        x: e.clientX,
      });
      let box = window.document.getElementById('mainMenu');
      if (box.classList.contains('collapse.show')) {
        box.classList.remove('visuallyHidden');
        // setTimeout(() => {
        //   box.classList.remove('visuallyHidden');
        // }, 20);
        // } else {
      }
      // console.log(Object.values(window.document.getElementById('mainContent')));
      // let mainContent = window.document.getElementById('mainContent');
      // mainContent.classList.push('col-10');
      // let content = window.document.getElementById('mainMenu');
      // content.classList.push('col-2');
    });
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    isOpen === false ? setOpen(true) : setOpen(false);
    // console.log(menuItems);
  };

  const buttonClicked = (e) => {
    e.preventDefault();
    // Object.keys(e.target).map((item)=>{console.log(e.target.value)});
    activeMenu === e.target.value
      ? setActiveMenu('')
      : setActiveMenu(e.target.value);
  };
  return (
    <aside
      className={
        coordinates.x > 1300
          ? 'col-2 flex-column p-0 flex-grow-1 bg-secondary-subtle border border-danger collapse.show visuallyHidden'
          : 'col-2 flex-column p-0 flex-grow-1 bg-secondary-subtle border border-danger  collapse'
      }
      // style={{ opacity: '0' }}
      id="mainMenu"
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
        className="bg-warning shadow-lg rounded-4 me-2 pe-2"
        style={{
          width: '218px',
          height: '750px',
          // transition: 'width 20s, height 2s',
          // transitionDelay: '1s',
        }}
      >
        <a
          href={menuItems['menuLink']}
          className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
        >
          <svg className="bi pe-none ms-2" width="30" height="24">
            <use xlinkHref={menuItems['menuIconName']} />
          </svg>
          <span className="fs-5 fw-semibold">{menuItems['menuTitle']}</span>
        </a>
        <ul className="list-unstyled pe-0">
          {Object.keys(menuItems['items']).map((itemIndex) => {
            return (
              <li
                className="mb-1 btn-header"
                key={itemIndex + menuItems['items'][itemIndex]['itemTitle']}
              >
                <div className="btn-header-div">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#homs-collapse"
                    aria-expanded="true"
                    value={menuItems['items'][itemIndex]['itemTitle']}
                    onClick={buttonClicked}
                  >
                    <svg className="bi pe-none ms-2" width="16" height="16">
                      <use
                        xlinkHref={
                          menuItems['items'][itemIndex]['itemIconName']
                        }
                      />
                    </svg>
                    {menuItems['items'][itemIndex]['itemTitle']}
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
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    {menuItems['items'][itemIndex]['subItems'].map(
                      (subItemIndex) => {
                        return (
                          <li key={subItemIndex + subItemIndex['subItemTitle']}>
                            <a
                              href={subItemIndex['subItemLink']}
                              className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                            >
                              {subItemIndex['subItemTitle']}
                            </a>
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
  );
}

/** sidebar #Worked */
// <div
//   className="flex-shrink-0 p-3 bg-warning"
//   style={{ width: '280px' }}
// >
//   <a
//     href="/"
//     className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
//   >
//     <svg className="bi pe-none ms-2" width="30" height="24">
//       <use xlinkHref="#bootstrap" />
//     </svg>
//     <span className="fs-5 fw-semibold">Collapsible</span>
//   </a>
//   <ul className="list-unstyled ps-0">
//     <li className="mb-1">
//       <button
//         className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//         data-bs-toggle="collapse"
//         data-bs-target="#homs-collapse"
//         aria-expanded="true"
//       >
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#home" />
//         </svg>
//         Home
//       </button>
//       <div className="collapse show" id="homs-collapse">
//         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Overview
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Updates
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Reports
//             </a>
//           </li>
//         </ul>
//       </div>
//     </li>
//     <li className="mb-1">
//       <button
//         className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//         data-bs-toggle="collapse"
//         data-bs-target="#dashboard-collapse"
//         aria-expanded="false"
//       >
//         Dashboard
//       </button>
//       <div className="collapse" id="dashboard-collapse">
//         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Overview
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Weekly
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Monthly
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Annually
//             </a>
//           </li>
//         </ul>
//       </div>
//     </li>
//     <li className="mb-1">
//       <button
//         className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//         data-bs-toggle="collapse"
//         data-bs-target="#orders-collapse"
//         aria-expanded="false"
//       >
//         Orders
//       </button>
//       <div className="collapse" id="orders-collapse">
//         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               New
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Processed
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Shipped
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Returned
//             </a>
//           </li>
//         </ul>
//       </div>
//     </li>
//     <li className="border-top my-3"></li>
//     <li className="mb-1">
//       <button
//         className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//         data-bs-toggle="collapse"
//         data-bs-target="#account-collapse"
//         aria-expanded="false"
//       >
//         Account
//       </button>
//       <div className="collapse" id="account-collapse">
//         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               New...
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Profile
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Settings
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Sign out
//             </a>
//           </li>
//         </ul>
//       </div>
//     </li>
//   </ul>
// </div>;

/** sidebar #2 */
// <div
//   className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
//   style={{ width: '280px' }}
// >
//   <a
//     href="/"
//     className="d-flex align-items-center mb-3 mb-md-0 ms-md-auto link-body-emphasis text-decoration-none"
//   >
//     <svg className="bi pe-none ms-2" width="40" height="32">
//       <use xlinkHref="#bootstrap" />
//     </svg>
//     <span className="fs-4">Sidebar</span>
//   </a>
//   <hr />
//   <ul className="nav nav-pills flex-column mb-auto">
//     <li className="nav-item">
//       <a href="#" className="nav-link active" aria-current="page">
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#home" />
//         </svg>
//         Home
//       </a>
//     </li>
//     <li>
//       <a href="#" className="nav-link link-body-emphasis">
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#speedometer2" />
//         </svg>
//         Dashboard
//       </a>
//     </li>
//     <li>
//       <a href="#" className="nav-link link-body-emphasis">
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#table" />
//         </svg>
//         Orders
//       </a>
//     </li>
//     <li>
//       <a href="#" className="nav-link link-body-emphasis">
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#grid" />
//         </svg>
//         Products
//       </a>
//     </li>
//     <li>
//       <a href="#" className="nav-link link-body-emphasis">
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#people-circle" />
//         </svg>
//         Customers
//       </a>
//     </li>
//   </ul>
//   <hr />
//   <div className="dropdown">
//     <a
//       href="#"
//       className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
//       data-bs-toggle="dropdown"
//       aria-expanded="false"
//     >
//       <img
//         src="https://github.com/mdo.png"
//         alt=""
//         width="32"
//         height="32"
//         className="rounded-circle ms-2"
//       />
//       <strong>mdo</strong>
//     </a>
//     <ul className="dropdown-menu text-small shadow">
//       <li>
//         <a className="dropdown-item" href="#">
//           New project...
//         </a>
//       </li>
//       <li>
//         <a className="dropdown-item" href="#">
//           Settings
//         </a>
//       </li>
//       <li>
//         <a className="dropdown-item" href="#">
//           Profile
//         </a>
//       </li>
//       <li>
//         <hr className="dropdown-divider" />
//       </li>
//       <li>
//         <a className="dropdown-item" href="#">
//           Sign out
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>

// <div className="b-example-divider b-example-vr"></div>

/** sidebar #3 */
// <div
//   className="d-flex flex-column flex-shrink-0 bg-body-tertiary"
//   style={{ width: '4.5rem' }}
// >
//   <a
//     href="/"
//     className="d-block p-3 link-body-emphasis text-decoration-none"
//     title="Icon-only"
//     data-bs-toggle="tooltip"
//     data-bs-placement="right"
//   >
//     <svg className="bi pe-none" width="40" height="32">
//       <use xlinkHref="#bootstrap" />
//     </svg>
//     <span className="visually-hidden">Icon-only</span>
//   </a>
//   <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
//     <li className="nav-item">
//       <a
//         href="#"
//         className="nav-link active py-3 border-bottom rounded-0"
//         aria-current="page"
//         title="Home"
//         data-bs-toggle="tooltip"
//         data-bs-placement="right"
//       >
//         <svg
//           className="bi pe-none"
//           width="24"
//           height="24"
//           role="img"
//           aria-label="Home"
//         >
//           <use xlinkHref="#home" />
//         </svg>
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="nav-link py-3 border-bottom rounded-0"
//         title="Dashboard"
//         data-bs-toggle="tooltip"
//         data-bs-placement="right"
//       >
//         <svg
//           className="bi pe-none"
//           width="24"
//           height="24"
//           role="img"
//           aria-label="Dashboard"
//         >
//           <use xlinkHref="#speedometer2" />
//         </svg>
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="nav-link py-3 border-bottom rounded-0"
//         title="Orders"
//         data-bs-toggle="tooltip"
//         data-bs-placement="right"
//       >
//         <svg
//           className="bi pe-none"
//           width="24"
//           height="24"
//           role="img"
//           aria-label="Orders"
//         >
//           <use xlinkHref="#table" />
//         </svg>
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="nav-link py-3 border-bottom rounded-0"
//         title="Products"
//         data-bs-toggle="tooltip"
//         data-bs-placement="right"
//       >
//         <svg
//           className="bi pe-none"
//           width="24"
//           height="24"
//           role="img"
//           aria-label="Products"
//         >
//           <use xlinkHref="#grid" />
//         </svg>
//       </a>
//     </li>
//     <li>
//       <a
//         href="#"
//         className="nav-link py-3 border-bottom rounded-0"
//         title="Customers"
//         data-bs-toggle="tooltip"
//         data-bs-placement="right"
//       >
//         <svg
//           className="bi pe-none"
//           width="24"
//           height="24"
//           role="img"
//           aria-label="Customers"
//         >
//           <use xlinkHref="#people-circle" />
//         </svg>
//       </a>
//     </li>
//   </ul>
//   <div className="dropdown border-top">
//     <a
//       href="#"
//       className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
//       data-bs-toggle="dropdown"
//       aria-expanded="false"
//     >
//       <img
//         src="https://github.com/mdo.png"
//         alt="mdo"
//         width="24"
//         height="24"
//         className="rounded-circle"
//       />
//     </a>
//     <ul className="dropdown-menu text-small shadow">
//       <li>
//         <a className="dropdown-item" href="#">
//           New project...
//         </a>
//       </li>
//       <li>
//         <a className="dropdown-item" href="#">
//           Settings
//         </a>
//       </li>
//       <li>
//         <a className="dropdown-item" href="#">
//           Profile
//         </a>
//       </li>
//       <li>
//         <hr className="dropdown-divider" />
//       </li>
//       <li>
//         <a className="dropdown-item" href="#">
//           Sign out
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>

// <div className="b-example-divider b-example-vr"></div>

/** sidebar #4 */
// <div className="flex-shrink-0 p-3" style={{ width: '280px' }}>
//   <a
//     href="/"
//     className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
//   >
//     <svg className="bi pe-none ms-2" width="30" height="24">
//       <use xlinkHref="#bootstrap" />
//     </svg>
//     <span className="fs-5 fw-semibold">Collapsible</span>
//   </a>
//   <ul className="list-unstyled ps-0">
//     <li className="mb-1">
//       <button
//         className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//         data-bs-toggle="collapse"
//         data-bs-target="#homs-collapse"
//         aria-expanded="true"
//       >
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#home" />
//         </svg>
//         Home
//       </button>
//       <div className="collapse show" id="homs-collapse">
//         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Overview
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Updates
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Reports
//             </a>
//           </li>
//         </ul>
//       </div>
//     </li>
//     <li className="mb-1">
//       <button
//         className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//         data-bs-toggle="collapse"
//         data-bs-target="#dashboard-collapse"
//         aria-expanded="false"
//       >
//         Dashboard
//       </button>
//       <div className="collapse" id="dashboard-collapse">
//         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Overview
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Weekly
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Monthly
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Annually
//             </a>
//           </li>
//         </ul>
//       </div>
//     </li>
//     <li className="mb-1">
//       <button
//         className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//         data-bs-toggle="collapse"
//         data-bs-target="#orders-collapse"
//         aria-expanded="false"
//       >
//         Orders
//       </button>
//       <div className="collapse" id="orders-collapse">
//         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               New
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Processed
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Shipped
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Returned
//             </a>
//           </li>
//         </ul>
//       </div>
//     </li>
//     <li className="border-top my-3"></li>
//     <li className="mb-1">
//       <button
//         className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//         data-bs-toggle="collapse"
//         data-bs-target="#account-collapse"
//         aria-expanded="false"
//       >
//         Account
//       </button>
//       <div className="collapse" id="account-collapse">
//         <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               New...
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Profile
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Settings
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="link-body-emphasis d-inline-flex text-decoration-none rounded"
//             >
//               Sign out
//             </a>
//           </li>
//         </ul>
//       </div>
//     </li>
//   </ul>
// </div>

// <div className="b-example-divider b-example-vr"></div>

/** sidebar #1 */
// <h1 className="visually-hidden">Sidebars examples</h1>;
// <div
//   className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
//   style={{"width": "280px"}}
// >
//   <a
//     href="/"
//     className="d-flex align-items-center mb-3 mb-md-0 ms-md-auto text-white text-decoration-none"
//   >
//     <svg className="bi pe-none ms-2" width="40" height="32">
//       <use xlinkHref="#bootstrap" />
//     </svg>
//     <span className="fs-4">Sidebar</span>
//   </a>
//   <hr />
//   <ul className="nav nav-pills flex-column mb-auto">
//     <li className="nav-item">
//       <a href="#" className="nav-link active" aria-current="page">
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#home" />
//         </svg>
//         Home
//       </a>
//     </li>
//     <li>
//       <a href="#" className="nav-link text-white">
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#speedometer2" />
//         </svg>
//         Dashboard
//       </a>
//     </li>
//     <li>
//       <a href="#" className="nav-link text-white">
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#table" />
//         </svg>
//         Orders
//       </a>
//     </li>
//     <li>
//       <a href="#" className="nav-link text-white">
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#grid" />
//         </svg>
//         Products
//       </a>
//     </li>
//     <li>
//       <a href="#" className="nav-link text-white">
//         <svg className="bi pe-none ms-2" width="16" height="16">
//           <use xlinkHref="#people-circle" />
//         </svg>
//         Customers
//       </a>
//     </li>
//   </ul>
//   <hr />
//   <div className="dropdown">
//     <a
//       href="#"
//       className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
//       data-bs-toggle="dropdown"
//       aria-expanded="false"
//     >
//       <img
//         src="https://github.com/mdo.png"
//         alt=""
//         width="32"
//         height="32"
//         className="rounded-circle ms-2"
//       />
//       <strong>mdo</strong>
//     </a>
//     <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
//       <li>
//         <a className="dropdown-item" href="#">
//           New project...
//         </a>
//       </li>
//       <li>
//         <a className="dropdown-item" href="#">
//           Settings
//         </a>
//       </li>
//       <li>
//         <a className="dropdown-item" href="#">
//           Profile
//         </a>
//       </li>
//       <li>
//         <hr className="dropdown-divider" />
//       </li>
//       <li>
//         <a className="dropdown-item" href="#">
//           Sign out
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>
// <div className="b-example-divider b-example-vr"></div>

/** sidebar #5 */
// <div className="b-example-divider b-example-vr"></div>

/** bootstrap & react-bootstrap sidebar */
// <div
//   className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary"
//   style={{ width: '380px' }}
// >
//   <a
//     href="/"
//     className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom"
//   >
//     <svg className="bi pe-none ms-2" width="30" height="24">
//       <use xlinkHref="#bootstrap" />
//     </svg>
//     <span className="fs-5 fw-semibold">List group</span>
//   </a>
//   <div className="list-group list-group-flush border-bottom scrollarea">
//     <a
//       href="#"
//       className="list-group-item list-group-item-action active py-3 lh-sm"
//       aria-current="true"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small>Wed</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Tues</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Mon</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>

//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//       aria-current="true"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Wed</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Tues</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Mon</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//       aria-current="true"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Wed</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Tues</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Mon</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//       aria-current="true"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Wed</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Tues</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//     <a
//       href="#"
//       className="list-group-item list-group-item-action py-3 lh-sm"
//     >
//       <div className="d-flex w-100 align-items-center justify-content-between">
//         <strong className="mb-1">List group item heading</strong>
//         <small className="text-body-secondary">Mon</small>
//       </div>
//       <div className="col-10 mb-1 small">
//         Some placeholder content in a paragraph below the heading and
//         date.
//       </div>
//     </a>
//   </div>
// </div>

// <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic" className="">
//     Dropdown Button
//   </Dropdown.Toggle>
//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action1">Action</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
// <div className="dropdown position-fixed buttom-0 end-0 mb-3 ms-3 bd-mode-toggle">
//   <button
//     className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
//     id="bd-theme"
//     type="button"
//     aria-expanded="false"
//     data-bs-toggle="dropdown"
//     aria-label="Toggle theme (auto)"
//     onClick={onClick}
//   >
//     <svg className="bi my-1 thems-icon-active" width="1em" height="1em">
//       <use href="#circle-half"></use>
//     </svg>
//     <span className="visually-hidden" id="bd-thems-text">
//       Toggle theme
//     </span>
//   </button>
//   <ul className={dropdownClass} aria-labelledby="bd-thems-text">
//     <li>
//       <button
//         type="button"
//         className="dropdown-item d-flex align-items-center"
//         data-bs-thems-value="light"
//         aria-pressed="false"
//       >
//         <svg
//           className="bi ms-2 opacity-50 thems-icon"
//           width="1em"
//           height="1em"
//         >
//           <use href="#sun-fill"></use>
//         </svg>
//         Light
//         <svg className="bi ms-auto d-none" width="1em" height="1em">
//           <use href="#check2"></use>
//         </svg>
//       </button>
//     </li>
//     <li>
//       <button
//         type="button"
//         className="dropdown-item d-flex align-items-center"
//         data-bs-thems-value="dark"
//         aria-pressed="false"
//       >
//         <svg
//           className="bi ms-2 opacity-50 thems-icon"
//           width="1em"
//           height="1em"
//         >
//           <use href="#moon-stars-fill"></use>
//         </svg>
//         Dark
//         <svg className="bi ms-auto d-none" width="1em" height="1em">
//           <use href="#check2"></use>
//         </svg>
//       </button>
//     </li>
//     <li>
//       <button
//         type="button"
//         className="dropdown-item d-flex align-items-center active"
//         data-bs-thems-value="auto"
//         aria-pressed="true"
//       >
//         <svg
//           className="bi ms-2 opacity-50 thems-icon"
//           width="1em"
//           height="1em"
//         >
//           <use href="#circle-half"></use>
//         </svg>
//         Auto
//         <svg className="bi ms-auto d-none" width="1em" height="1em">
//           <use href="#check2"></use>
//         </svg>
//       </button>
//     </li>
//   </ul>
// </div>
