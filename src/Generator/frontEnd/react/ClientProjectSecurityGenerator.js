const {
  isPathExists,
  createFile,
  firstLetterCaptalize,
  datasourceBuilder,
  copyFontFiles,
  copyIconFiles,
} = require('../../util');
const process = require('process');

const {
  isRouteNameValid,
  getRoutePathString,
} = require('../../ContentMapValidator');

const ClientProjectSecurityGenerator = (feedContent, ConfigObjects) => {
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
  const logoutPath = ConfigObjects.getClientComponentLogoutPath();
  const sidebarPath = ConfigObjects.getClientComponentSidebarPath();
  const userPath = ConfigObjects.getClientComponentUserPath();
  const userNewPath = `${userPath}\\new`;
  const userListPath = `${userPath}\\list`;
  const userViewPath = `${userPath}\\view`;
  const userEditPath = `${userPath}\\edit`;
  const userDeletePath = `${userPath}\\delete`;
  const fontSrcPath = ConfigObjects.getFontSourcePath();
  const fontDstPath = ConfigObjects.getClientFontPath();
  const iconSrcPath = ConfigObjects.getIconSourcePath();
  const iconDstPath = ConfigObjects.getClientIconPath();
  const clientUtilPath = ConfigObjects.getClientUtilPath();
  const backendURI = ConfigObjects.getBackendURI();
  const version = ConfigObjects.version
  const globalBaseInformation = ConfigObjects['globalBaseInformation'];

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
  isPathExists(logoutPath);
  isPathExists(sidebarPath);
  isPathExists(userPath);
  isPathExists(userNewPath);
  isPathExists(userListPath);
  isPathExists(userViewPath);
  isPathExists(userEditPath);
  isPathExists(userDeletePath);
  isPathExists(clientUtilPath);

  const listOfObjects = feedContent.listOfObjects();
  listOfRoleNames = ``;
  let end;
  const length = Object.keys(listOfObjects).length;
  let globalBaseInformationBody = ``;
  Object.keys(listOfObjects).map((objectName, index) => {
    // Provide global infornation on login page
    if (globalBaseInformation.length != 0 && objectName == globalBaseInformation) {
      const globalBaseInformationObject = feedContent.getAppObjectByAppObjectId(objectName)
      Object.keys(globalBaseInformationObject['dataAccessLayer']['jpas']).map((globalBaseInformationObjectName) => {
        // console.log(globalBaseInformationObjectName);
      })
      Object.keys(globalBaseInformationObject['dataAccessLayer']['storedProcedures']).map((storedProcedureName) => {
        // console.log(storedProcedureName);
        globalBaseInformationBody += `const call${firstLetterCaptalize(storedProcedureName)}Response = await sendRequest(
          \`${backendURI}/${objectName}s/${storedProcedureName}/?page=\${
            page ? Number(page) - 1 : 0
          }&size=2\`,
          'GET',
          null
        );
      `
      })
      Object.keys(globalBaseInformationObject['dataAccessLayer']['restServices']).map((globalBaseInformationObjectName) => {
        // console.log(globalBaseInformationObjectName);
      })
    }
    // console.log(feedContent.getAppObjectByAppObjectId(objectName))
    end =
      index + 1 <= length
        ? `,
          `
        : ``;
    if (isRouteNameValid(objectName) === true) {
      const routePathString = getRoutePathString(objectName);
      // console.log(routePathString)
      // const [first, ...completeRoutePathArray] = routePathString.split('/');

      listOfRoleNames += `
          {
            id: ${index + 1},
            name: 'ROLE_${objectName.toUpperCase()}',
            nameFarsi: '${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']
        }',
            users: null,
          }${end}
        `;
    } else {
      console.log(
        `appObjectId ${objectName} of  is NOT valid route name in contentMap`
      );
      process.exit(1);
    }
  });

  listOfRoleNames += `
          {
            id: ${Object.keys(listOfObjects).length + 1},
            name: 'ROLE_USER',
            nameFarsi: 'کاربران',
            users: null,
          }${end}
`;
  // console.log(listOfRoleNames);

  /********************************************************************************
   *                        login component
   ********************************************************************************/
  injectedContent = `const loginLable = {
  login: 'فرم لاگین',
  username: 'نام کاربری',
  password: 'کلمه عبور',
  rememberme: 'مرابخاطربسپار',
  forgotpassword: 'فراموشی کلمه عبور',
  loginbutton: 'ورود',

  emailSouldNotBeEmpty: 'فیلد نام کاربری نمی تواند خالی باشد',
  passwordSouldNotBeEmpty: 'فیلد کلمه عبور نمی تواند خالی باشد.',
  serverError: 'نام کاربری ویا کلمه عبور اشتباه می باشد.',
};

module.exports = loginLable;
`;
  createFile(`${loginPath}`, `${'loginLable_fa'}.js`, injectedContent);

  injectedContent = `export * from './route';
`;
  createFile(`${loginPath}`, `${'index'}.js`, injectedContent);

  injectedContent = `import * as React from 'react';

import Login from './login';
import { loader as loginLoader } from './loader';
import { action as loginAction } from './action';

export const route = {
  path: 'login',
  element: <Login />,
  // errorElement: <div>Error Occured! in login</div>,
  action: loginAction,
  // loader: loginLoader,
};`;
  createFile(`${loginPath}`, `${'route'}.js`, injectedContent);

  injectedContent = `import { fakeAuthProvider } from '../../auth';
import { redirect } from 'react-router-dom';

export function loader() {
  if (fakeAuthProvider.isAuthenticated) {
    return redirect('/');
  }
  return null;
}
`;
  createFile(`${loginPath}`, `${'loader'}.js`, injectedContent);

  injectedContent = `import { fakeAuthProvider } from '../../auth';
import axios, { Axios } from 'axios';
import { json, redirect } from 'react-router-dom';
import loginLable from './loginLable_fa';
// import useRequest from '../../hooks/use-request';
// import useRequest from '../../hooks/sendRequest';
import { sendRequest } from '../../util/makeRequest';

export async function action({ request }) {
  let formData = await request.formData();
  let username = formData.get('username');
  let password = formData.get('password');
  let errors = {};

  // Validate our form inputs and return validation errors via useActionData()
  if (!username) {
    // return {
    //   error: loginLable.emailSouldNotBeEmpty,
    // };
    errors.username = loginLable.emailSouldNotBeEmpty;
  }
  if (!password) {
    // return {
    //   error: loginLable.passwordSouldNotBeEmpty,
    // };
    errors.password = loginLable.passwordSouldNotBeEmpty;
  }

  if (Object.keys(errors).length) {
    return errors;
  } else {
    try {
      const response = await axios.post(
        '${backendURI}/signin',
        {
          email: username,
          password: password,
        }
      );
      fakeAuthProvider.signin(response.data);
      ${globalBaseInformationBody}
      let redirectTo = formData.get('redirectTo');
      return redirect(redirectTo || '/tafahomInformations/report/dashboardMasterRpts');
    } catch (error) {
      const response = error?.response
      const request = error?.request
      const config = error?.config //here we have access the config used to make the api call (we can make a retry using this conf)
      if (response) {
        const status = error?.response?.status || null
        if (status == 400) {
          return Promise.reject(
            JSON.stringify({
              status: status,
              message: 'خطا در مقادیر ارسال شده - 400',
            })
          )
        }
        if (status == 401) {
          return Promise.reject(
            JSON.stringify({
              status: status,
              message: 'خطای شبکه در اتصال به سرور - 401',
            })
          )
          // throw (json({
          //   status: status,
          //   message: 'خطای شبکه در اتصال به سرور - 401',
          // }))
        } else if (status == 403) {
          return Promise.reject(
            JSON.stringify({
              status: status,
              message: 'خطای شبکه در اتصال به سرور - 403',
            })
          )
          // throw (json({
          //   status: status,
          //   message: 'خطای شبکه در اتصال به سرور - 403',
          // }))
        } else {
          return Promise.reject(
            JSON.stringify({
              status: 0,
              message: 'خطای ناشناخته',
            })
          )
        }
      } else if (request) {
        //The request was made but no response was received, \`error.request\` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
        if (error.code === 'ERR_NETWORK') {
          // console.log('connection problems..')
          throw (JSON.stringify({
            status: 0,
            message: 'خطا در اتصال به سرور تفاهم نامه ها',
          }))
        } else if (error.code === 'ERR_CANCELED') {
          // console.log('connection canceled..')
          throw (JSON.stringify({
            status: 1,
            message: 'خطا در ارسال مقادیر به سرور',
          }))
        }
      }
      // setErrors(err.response.data.errors);
      // errors.serverError = loginLable.serverError;
      //  AXIOS Error
      // throw err;
    }
  }
}`;
  createFile(`${loginPath}`, `${'action'}.js`, injectedContent);

  injectedContent = `import React from 'react';
import { Form, useLoaderData, redirect, useActionData } from 'react-router-dom';
import axios, { Axios } from 'axios';
import loginLable, { login } from './loginLable_fa';

export default function LoginPage() {
  const errors = useActionData();
  const auth = useLoaderData();
  return (
      <>
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
          <div className="border-0 rounded-5 p-5 shadow-lg opacity-1 bg-body bg-opacity-50">
            <h3 className="pb-3 mb-4 border-bottom text-body-secondary fs-4">
              {loginLable.login}
            </h3>
            <Form method="post">
              <div className="input-group mb-3">
                <div className="form-floating">
                  <input
                    name="username"
                    type="text"
                    className="form-control border-0 border-bottom rounded-pill"
                    id="username"
                    placeholder="Username@bankmellat.ir"
                    autoComplete="username"
                  />
                  <label htmlFor="username" className="text-muted">
                    {loginLable.username}
                  </label>
                </div>
                {/* <span className="input-group-append bg-opacity-50 border-0">
                  <button
                    className="btn border-0"
                    style={{ borderRadius: '0' }}
                    type="button"
                  >
                    <i className="bi bi-person fs-5"></i>
                  </button>
                </span> */}
              </div>
              <div>{errors?.username && <span>{errors.username}</span>}</div>

              <div className="input-group mb-3">
                <div className="form-floating">
                  <input
                    name="password"
                    type="password"
                    className="form-control border-0 border-bottom rounded-pill"
                    id="password"
                    placeholder="password"
                    autoComplete="current-password"
                  />
                  <label htmlFor="password" className="text-muted">
                    {loginLable.password}
                  </label>
                </div>
                {/* <span className="input-group-append bg-opacity-50 border-0 rounded">
                  <button
                    className="btn border-0"
                    style={{ borderRadius: '0' }}
                    type="button"
                  >
                    <i className="bi bi-key fs-5"></i>
                  </button>
                </span> */}
              </div>
              <div>{errors?.password && <span>{errors.password}</span>}</div>
              <div>{errors?.serverError && <span>{errors.serverError}</span>}</div>

              {/* <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>

                <div className="input-group">
                  <input
                    className="form-control border-end-0 border"
                    type="text"
                    // value="email address"
                    id="example-search-input"
                  />
                  <span className="input-group-append">
                    <button
                      className="btn bg-white border-start-0 border ms-n5"
                      style={{ borderRadius: '0' }}
                      type="button"
                    >
                      <i className="bi bi-envelope"></i>
                    </button>
                  </span>
                </div>
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                  <span className="input-group-append">
                    <button
                      className="btn bg-white border-start-0 border ms-n5"
                      style={{ borderRadius: '0' }}
                      type="button"
                    >
                      <i className="bi bi-key"></i>
                    </button>
                  </span>
                </div>
              </div> */}

              {/* <div className="row">
                <div className="col pr-3">
                  <div className="mb-3 form-check ">
                    <label
                      className="form-check-label fs-6 fw-lighter p-0 m-0"
                      htmlFor="exampleCheck1"
                    >
                      {loginLable.rememberme}
                    </label>
                    <input
                      type="checkbox"
                      className="form-check-input "
                      id="exampleCheck1"
                    />
                  </div>
                </div>
                <div className="col p-0">
                  <div className="mb-3 form-check">
                    <a href="#" className="link-primary fs-6 fw-lighter">
                      {loginLable.forgotpassword}?
                    </a>
                  </div>
                </div>
              </div> */}
              <div className="row pt-3">
                <button type="submit" className="btn btn-primary">
                  {loginLable.loginbutton}
                </button>
              </div>
            </Form>
          </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <span className='small text-muted'>{\`نسخه ${version}\`}</span>
      </div>
    </>
  );
}

// <Container className="min-vh-100 d-flex justify-content-center border"></Container>;

// <fieldset className="reset rounded p-5 shadow">
//   <legend className="reset">Login</legend>
//   <Form method="post">
//     <Row>
//       {auth.fName}
//       <Col>
//         <FloatingLabel
//           controlId="floatingInput23"
//           label="Email address"
//           className="mb-3"
//         >
//           <FormControl type="email" placeholder="name@example.com" />
//         </FloatingLabel>
//       </Col>
//     </Row>
//     <Row>
//       <Col>
//         <FloatingLabel
//           controlId="floatingInput23"
//           label="Email address"
//           className="mb-3"
//         >
//           <FormControl type="email" placeholder="name@example.com" />
//         </FloatingLabel>
//       </Col>
//     </Row>
//     <Row className="justify-content-end">
//       <Col>
//         <Button type="submit">Login</Button>
//       </Col>
//     </Row>
//   </Form>
// </fieldset>;

// <Container className="w-25 mt-5">
//   <fieldset className="reset rounded p-5 shadow">
//     <legend className="reset">Login</legend>
//     <Form method="post">
//       <Row>
//         {auth.fName}
//         <Col>
//           <FloatingLabel
//             controlId="floatingInput23"
//             label="Email address"
//             className="mb-3"
//           >
//             <FormControl type="email" placeholder="name@example.com" />
//           </FloatingLabel>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <FloatingLabel
//             controlId="floatingInput23"
//             label="Email address"
//             className="mb-3"
//           >
//             <FormControl type="email" placeholder="name@example.com" />
//           </FloatingLabel>
//         </Col>
//       </Row>
//       <Row className="justify-content-end">
//         <Col>
//           <Button type="submit">Login</Button>
//         </Col>
//       </Row>
//     </Form>
//   </fieldset>
// </Container>;

// <div className="row justify-content-center">
//   <div className="abc"></div>
// </div>
// <div>Login Page</div>

// <div className="row justify-content-center">
//   <div className="col-lg-4">
//     <form action="">
//       <div>
//         <input type="text" name="username" />
//       </div>
//       <div>
//         <input type="password" name="password" />
//       </div>
//       <div>
//         <input type="login" name="submit" />
//       </div>
//     </form>
//   </div>
// </div>;

// <Container className='mt-5 p-5 border'>
//   <Row className="pt-3">
//     <Col md={4} lg={3} xl={2}>
//       <FloatingLabel
//         controlId="floatingInput11"
//         label="Email address"
//         className="mb-3"
//       >
//         <FormControl type="email" placeholder="name@example.com" />
//       </FloatingLabel>
//     </Col>
//     <Col md={4} lg={6} xl={8}>
//       <FloatingLabel
//         controlId="floatingInput12"
//         label="Email address"
//         className="mb-3"
//       >
//         <FormControl type="email" placeholder="name@example.com" />
//       </FloatingLabel>
//     </Col>
//     <Col md={4} lg={3} xl={2}>
//       <FloatingLabel
//         controlId="floatingInput13"
//         label="Email address"
//         className="mb-3"
//       >
//         <FormControl type="email" placeholder="name@example.com" />
//       </FloatingLabel>
//     </Col>
//   </Row>
//   <Row className="pt-3">
//     <Col md={4} lg={3} xl={2}>
//       <FloatingLabel
//         controlId="floatingInput21"
//         label="Email address"
//         className="mb-3"
//       >
//         <FormControl type="email" placeholder="name@example.com" />
//       </FloatingLabel>
//     </Col>
//     <Col md={4} lg={6} xl={8}>
//       <FloatingLabel
//         controlId="floatingInput22"
//         label="Email address"
//         className="mb-3"
//       >
//         <FormControl type="email" placeholder="name@example.com" />
//       </FloatingLabel>
//     </Col>
//     <Col md={4} lg={3} xl={2}>
//       <FloatingLabel
//         controlId="floatingInput23"
//         label="Email address"
//         className="mb-3"
//       >
//         <FormControl type="email" placeholder="name@example.com" />
//       </FloatingLabel>
//     </Col>
//   </Row>
// </Container>
`;
  createFile(`${loginPath}`, `${'login'}.jsx`, injectedContent);

  /********************************************************************************
   *                        logout component
   ********************************************************************************/
  injectedContent = `export * from './route';
`;
  createFile(`${logoutPath}`, `${'index'}.js`, injectedContent);

  injectedContent = `import * as React from 'react';
import Public from '../public/public';
// import Public from './public';
import { loader as logoutLoader } from './loader';

export const route = {
  path: 'logout',
  loader: logoutLoader,
  element: <Public />,
  // errorElement: <div>Error Occured!</div>,
};
`;
  createFile(`${logoutPath}`, `${'route'}.js`, injectedContent);

  injectedContent = `import { fakeAuthProvider } from '../../auth';
import { redirect } from 'react-router-dom';
import axios, { Axios } from 'axios';

export async function loader() {
  try {
    //TODO
    //  complete spring side code
    // const response = await axios.post(
    //   'http://localhost:8080/api/v1/mutualUnderstanding/signout',
    //   {
    //     // email: 'mojalal@behsazan.net',
    //     email: username,
    //     password: password,
    //     // password: '',
    //   }
    // );
    fakeAuthProvider.signout();
    return redirect('/');
  } catch (err) {
    return errors;
  }
}
`;
  createFile(`${logoutPath}`, `${'loader'}.js`, injectedContent);

  /********************************************************************************
   *                        user component
   ********************************************************************************/
  injectedContent = `import { userNewRoute } from './new/userNewRoute';
import { userListRoute } from './list/userListRoute';
import { userViewRoute } from './view/userViewRoute';
import { userEditRoute } from './edit/userEditRoute';
import { userDeleteRoute } from './delete/userDeleteRoute';

const userRoute = [
  userNewRoute,
  userListRoute,
  userViewRoute,
  userEditRoute,
  userDeleteRoute,
];
export { userRoute };
`;
  createFile(`${userPath}`, `index.js`, injectedContent);

  injectedContent = `const userOperationLables = {
  id: 'ردیف',
  firstName: 'نام',
  lastName: 'نام خانوادگی',
  email: 'ایمیل',
  username: 'نام کاربری',
  password: 'کلمه عبور',
  telNumber: 'شماره تلفن همراه',
  operation: 'عملیات',

  generatePassword: 'تولید کلمه عبور',

  userRoles: 'دسترسی ها',
  confirm: 'تایید',
};

module.exports = userOperationLables;
`;
  createFile(`${userPath}`, `userOperationLables_fa.js`, injectedContent);

  injectedContent = `export function multiStepFormScript() {
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
            if (e.target.classList.contains("card")) {
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
}`;
  createFile(`${userPath}`, `userScript.js`, injectedContent);

  injectedContent = `.card {
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

.card.active {
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
}`;
  createFile(`${userPath}`, `userStyle.css`, injectedContent);

  /********************************************************************************
  *                          UserNew operation
  ********************************************************************************/

  injectedContent = `import * as React from 'react';

   import UserNew from './userNew';
   import { loader as userNewLoader } from './userNewLoader';
   import { action as userNewAction } from './userNewAction';
   
   export const userNewRoute = {
     path: 'users/new',
     element: <UserNew />,
     // errorElement: <div>Error Occured!</div>,
     loader: userNewLoader,
     action: userNewAction,
   };
   `;
  createFile(`${userNewPath}`, `userNewRoute.js`, injectedContent);

  injectedContent = `import { redirect, json } from 'react-router-dom';
import axios from 'axios';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function loader({ params }) {
  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }
  try {
    const response = {};
    response['data'] = {
      // id: 1,
      firstName: '',
      lastName: '',
      telNumber: '',
      email: '',
      userName: '',
      password: '',
      date: '',
      owner: 'owner',
      roles: [],
    };

    // const availableRoles = await sendRequest(
    //   \`${backendURI}/roles\`,
    //   'GET',
    //   null
    // );

    const availableRoles = {
      data: {
        content: [
          ${listOfRoleNames}
        ],

        currentPage: 0,
        totalItems: ${listOfRoleNames.length},
        totalPages: 1,
      },
    };

    return { data: response.data, roles: availableRoles.data };
  } catch (err) {
    //  AXIOS Error
    throw err;
  }
}
`;
  createFile(`${userNewPath}`, `userNewLoader.js`, injectedContent);

  injectedContent = `import axios, { Axios } from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function action({ request }) {
  let obj = {};

  const formData = await request.formData();
  obj = Object.fromEntries(formData);

  let roles = [];
  let bObject = {};
  Object.keys(obj).find((o) => {
    o.startsWith('ROLE_') ? roles.push({ id: obj[o] }) : (bObject[o] = obj[o]);
  });
  const { repeatPassword, ...rest } = bObject;
  // bObject = { ...rest };
  obj = {
    ...rest,
    roles: roles,
  };

  try {
    const response = await sendRequest(
      \`${backendURI}/users\`,
      'POST',
      obj
    ).then(
      (response) => {
        return redirect('/users');
      },
      // (error) => {
      //   return redirect(\`/users/\${obj['id']}/edit\`);
      // }
    );
    return redirect('/users');
  } catch (error) {
    throw error;
  }
}
`;
  createFile(`${userNewPath}`, `userNewAction.js`, injectedContent);

  injectedContent = `import React, { useState, useEffect } from 'react';
import {
  Link,
  Form,
  useLoaderData,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { Breadcrumb } from '../../UIComponent/breadcrumb/Breadcrumb';
import userOperationLables from '../userOperationLables_fa';
import { action } from './userNewAction';
import { multiStepFormScript } from '../userScript';
import '../userStyle.css';

export default function UserNew() {
  const [name, setName] = useState('');

  const [state, setState] = useState({});
  const [roles, setRoles] = useState({});

  const loaderData = useLoaderData();

  const navigation = useNavigation();
  const isSubmitting = navigation.formAction == '/users/new';

  const actionData = useActionData();

  useEffect(() => {
    setState({ ...loaderData.data });
    setRoles(loaderData.roles.content);
    multiStepFormScript()
  }, []);

  // const updateRoles = (roleName) => {
  //   const firstTouch = roles.filter((role, index, roles) => {
  //     if (role.name === roleName) {
  //       const tmp = {
  //         id: role.id,
  //         name: role.name,
  //         nameFarsi: role.nameFarsi,
  //         checked: true,
  //       };
  //       setRoles([...roles, tmp]);
  //     }
  //     return role;
  //   });
  // };

  const onChangeData = (e) => {
    setState({
      //  Computed property name
      ...state,
      [\`\${e.target.id}\`]: e.target.value,
    });
  };

  const onChangeStatus = (e, nameFarsi) => {
    checkAvailability(e.target.name) === undefined
      ? setState({
        ...state,
        roles: [
          ...state.roles,
          {
            id: Number(e.target.id),
            name: e.target.name,
            nameFarsi: nameFarsi,
            owner: null,
            authority: e.target.name,
          },
        ],
      })
      : setState({
        ...state,
        roles: [
          ...state.roles.filter((role) => {
            return role.name !== e.target.name;
          }),
        ],
      });
  };

  const checkAvailability = (roleName) => {
    const firstTouch = state.roles.find((role) => {
      return role.name === roleName;
    });
    return firstTouch;
  };

  const stateChangedIndex = () => {
    return Object.keys(state).findIndex(item => loaderData['data'][item] != state[item])
  }

  return (
    <div className=" border rounded-3 shadow-sm p-0 me-2 bg-light-subtle">
      {/* ********* */}
      <Breadcrumb
        path={{
          خانه: '/dashboard',
          'مدیریت کاربران': '/users',
          'ایجاد کاربر': '/users/',
        }}
        isVisible={true}
        />
      <Form data-multi-step className="multi-step-form" method="post">
        <div className='cards data-step active' data-step>
          <div className="row mx-1 my-1 align-items-center justify-content-center">
            <div className="col-2 text-end" >
              {/*
                <a
                  title='قبلی'
                  container="body"
                  data-bs-toggle="tooltip"
                  className="icon-link heartbeat data-next"
                >
                  <i className="bi bi-fast-forward-circle fs-4 pe-2" data-previous />
                </a>
              */}
            </div>
            <div className="col-8 text-start">
              <h3 className='step-title'></h3>
            </div>
            <div className="col-2 text-start">
              <a
                title='بعدی'
                container="body"
                data-bs-toggle="tooltip"
                className="icon-link"
              >
                <small style={{ cursor: 'pointer' }} data-next>صفحه بعد</small><i className="bi bi-arrow-left fs-4" data-next />
              </a>
            </div>
          </div>
          <div className="row mx-1 my-1 align-items-center justify-content-center">
            <div className="col-5">
              <fieldset className="reset">
                <legend className="reset">مشخصات کاربر</legend>
                <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                  <input
                    type="hidden"
                    // className="form-control border-0"
                    id="owner"
                    name="owner"
                    value={\`\${state.owner}\`}
                    onChange={onChangeData}
                    disabled={false}
                  />
                  <input
                    type="hidden"
                    // className="form-control border-0"
                    id="date"
                    name="date"
                    value={\`\${state.date}\`}
                    onChange={onChangeData}
                    disabled={false}
                  />
                  <input
                    type="text"
                    className="form-control border-0"
                    id="firstName"
                    name="firstName"
                    placeholder="name@benkmellat.ir"
                    value={\`\${state.firstName}\`}
                    onChange={onChangeData}
                    disabled={false}
                    autoComplete="given-name"
                  />
                  <label htmlFor="firstName">{userOperationLables.firstName}</label>
                </div>
                <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control border-0"
                    id="lastName"
                    placeholder="name@benkmellat.ir"
                    value={\`\${state.lastName}\`}
                    onChange={onChangeData}
                    disabled={false}
                    autoComplete="family-name"
                  />
                  <label htmlFor="lastName">{userOperationLables.lastName}</label>
                </div>
                <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                <input
                  type="text"
                  name="telNumber"
                  className="form-control border-0"
                  id="telNumber"
                  placeholder="name@benkmellat.ir"
                  value={\`\${state.telNumber}\`}
                  onChange={onChangeData}
                  disabled={false}
                  autoComplete="tel"
                />
                <label htmlFor="telNumber">{userOperationLables.telNumber}</label>
              </div>
                <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                  <input
                    type="email"
                    className="form-control border-0"
                    id="email"
                    name="email"
                    placeholder="name@benkmellat.ir"
                    value={\`\${state.email}\`}
                    onChange={onChangeData}
                    disabled={false}
                    autoComplete="email"
                  />
                  <label htmlFor="email">{userOperationLables.email}</label>
                </div>
                <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                  <input
                    type="text"
                    className="form-control border-0"
                    id="userName"
                    name="userName"
                    placeholder="name@benkmellat.ir"
                    value={\`\${state.userName}\`}
                    onChange={onChangeData}
                    disabled={false}
                    autoComplete="username"
                  />
                  <label htmlFor="userName">{userOperationLables.username}</label>
                </div>
                <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                  <input
                    type="password"
                    className="form-control border-0"
                    id="password"
                    name="password"
                    placeholder="name@benkmellat.ir"
                    value={\`\${state.password}\`}
                    onChange={onChangeData}
                    disabled={false}
                    autoComplete="new-password"
                  />
                  <label htmlFor="password">{userOperationLables.password}</label>
                </div>
                <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                  <input
                    type="password"
                    className="form-control border-0"
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="name@benkmellat.ir"
                    value={\`\${name}\`}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    disabled={false}
                    autoComplete="new-password"
                  />
                  <label htmlFor="repeatPassword">{userOperationLables.password}</label>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div className='cards data-step' data-step>
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
              <h3 className='step-title'></h3>
            </div>
            <div className="col-2 text-end">
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
          </div>
          <div className="row mx-1 my-1 align-items-center justify-content-center">
            <div className="col-5">
              {/* <fieldset class="border rounded-3 p-3" legend className="reset float-none w-auto px-3"> */}
              {/* <fieldset className="reset" disabled={props.fields[0].disabled}> */}
              {/* <span className="form-check-label">
              {userOperationLables.userRoles}
              </span> 
            */}
              <fieldset className="reset">
                <legend className="reset">{userOperationLables.userRoles}</legend>
                {Object.entries(roles).map(([id, name]) => {
                  return (
                    <div className="form-check form-switch" key={id}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        // data-bs-toggle
                        name={name.name}
                        id={name.id}
                        value={name.id}
                        onChange={(e) => onChangeStatus(e, name.nameFarsi)}
                        checked={checkAvailability(name.name) ? true : false}
                        disabled={false}
                      />
                      <label className="form-check-label" htmlFor={id}>
                        {name.nameFarsi}
                      </label>
                    </div>
                  );
                })}
              </fieldset>
            </div>
          </div>
          <div className="row mx-1 my-1 align-items-center justify-content-center">
            <div className="d-grid col text-center">
              <button
                type="submit"
                className={\`btn \${stateChangedIndex() > -1 ? "btn-outline-primary btn-sm" : "btn-outline-secondary btn-sm"}\`}
                disabled={stateChangedIndex() > -1 ? false : true}
              >
                {isSubmitting ? 'saving...' : userOperationLables.confirm}
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
`;
  createFile(`${userNewPath}`, `userNew.jsx`, injectedContent);

  //   injectedContent = `const userNewLables = {
  //   id: 'ردیف',
  //   firstName: 'نام',
  //   lastName: 'نام خانوادگی',
  //   email: 'ایمیل',
  //   username: 'نام کاربری',
  //   password: 'کلمه عبور',
  //   operation: 'عملیات',

  //   generatePassword: 'تولید کلمه عبور',

  //   userRoles: 'نقش ها',
  //   confirm: 'تایید',
  // };

  // module.exports = userNewLables;
  // `;
  //   createFile(`${userNewPath}`, `userNewLable_fa.js`, injectedContent);

  /********************************************************************************
  *                          UserList operation
  ********************************************************************************/
  injectedContent = `import * as React from 'react';

import UserList from './userList';
import { loader as userListLoader } from './userListLoader';

export const userListRoute = {
  // {
  path: 'users',
  element: <UserList />,
  loader: userListLoader,
};
`;
  createFile(`${userListPath}`, `userListRoute.js`, injectedContent);

  injectedContent = `import * as React from 'react';
import {
  useParams,
  useLoaderData,
} from 'react-router-dom';
import Grid from '../../UIComponent/grid/grid';
import { Breadcrumb } from '../../UIComponent/breadcrumb/Breadcrumb';

export default function UsersList() {
  const data = useLoaderData();
  const params = useParams();
  const gridLayout = [
    {
      name: 'id',
      largeBreakpointWidth: 1,
      label: 'شناسه',
      isPrimaryKey: true,
    },
    {
      name: 'firstName',
      largeBreakpointWidth: 2,
      label: 'نام',
      isPrimaryKey: false,
    },
    {
      name: 'lastName',
      largeBreakpointWidth: 3,
      label: 'نام خانوادگی',
      isPrimaryKey: false,
    },
    {
      name: 'email',
      largeBreakpointWidth: 4,
      label: 'ایمیل',
      isPrimaryKey: false,
    },
  ]
  const primaryKeyName = gridLayout.find((col) => col['isPrimaryKey'] == true);

  const routePath = {
    title: 'users',
    lable: 'اطلاعات کاربران',
    numberLable: 'کد کاربر',
    isRoot: true,
    columnToSelect: 'id'
  }

  return (
    data && (
      <div className=" border rounded-3 shadow-sm p-0 me-2 bg-light-subtle">
        <Breadcrumb
          path={{
            خانه: '/dashboard',
            'مدیریت کاربران': '/users',
          }}
          isVisible={true}
          />
        <Grid
          gridLayout={gridLayout}
          data={data}
          params={params}
          isVisible={true}
          showPagination={true}
          // routePath={{'کاربر':'/users'}}
          routePath={routePath}
          primaryKeyName={primaryKeyName['name']}
          isCreateIconRendered={true}
          isReadIconRendered={true}
          isUpdateIconRendered={true}
          isDeleteIconRendered={true}
        />
      </div>
    )
  );
}
`;
  createFile(`${userListPath}`, `userList.jsx`, injectedContent);

  injectedContent = `import axios from 'axios';
import { fakeAuthProvider } from '../../../auth';
import { redirect, useSearchParams, json } from 'react-router-dom';
import { sendRequest } from '../../../util/makeRequest';

export async function loader({ request, params }) {
  // If the user is not logged in and tries to access \`/protected\`, we redirect
  // them to \`/login\` with a \`from\` parameter that allows login to redirect back
  // to this page upon successful authentication
  // const a = useSearchParams.get('page');
  // console.log(a);
  const url = new URL(request.url);
  const page = url.searchParams.get('page');

  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }

  try {
    const response = await sendRequest(
      \`${backendURI}/users?page=\${
        page ? Number(page) - 1 : 0
      }&size=10&sort=id,ASC\`,
      'GET',
      null
    );
    return response.data;
  } catch (err) {
    //  AXIOS Error
    throw err;
  }
}
`;
  createFile(`${userListPath}`, `userListLoader.js`, injectedContent);

  /********************************************************************************
   *                          UserView operation
  ********************************************************************************/
  injectedContent = `import * as React from 'react';
import { loader } from './userViewLoader';
import UserView from './userView';

export const userViewRoute = {
  path: 'users/:userId/view',
  element: <UserView />,
  loader: loader,
};
`;
  createFile(`${userViewPath}`, `userViewRoute.js`, injectedContent);

  injectedContent = `import axios from 'axios';
import { fakeAuthProvider } from '../../../auth';
import { redirect, json } from 'react-router-dom';
import { sendRequest } from '../../../util/makeRequest';

export async function loader({ params }) {
  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }
  try {
    const response = await sendRequest(
      \`${backendURI}/users/\${params.userId}\`,
      'GET',
      null
    );

    // const availableRoles = await sendRequest(
    //   \`${backendURI}/roles\`,
    //   'GET',
    //   null
    // );

    const availableRoles = {
      data: {
        content: [
          ${listOfRoleNames}
        ],

        currentPage: 0,
        totalItems: ${listOfRoleNames.length},
        totalPages: 1,
      },
    };

    return { data: response.data, roles: availableRoles.data };
  } catch (err) {
    //  AXIOS Error
    throw err;
  }
}

`;
  createFile(`${userViewPath}`, `userViewLoader.js`, injectedContent);

  injectedContent = `import React, { useState, useEffect } from 'react';
import {
  Link,
  Form,
  useLoaderData,
  redirect,
  useActionData,
} from 'react-router-dom';
import { Breadcrumb } from '../../UIComponent/breadcrumb/Breadcrumb';
import userOperationLables from '../userOperationLables_fa';
import { multiStepFormScript } from '../userScript';
import '../userStyle.css';

export default function UserView() {
  const [name, setName] = useState('');

  const [state, setState] = useState({});
  const [roles, setRoles] = useState({});

  const loaderData = useLoaderData();

  useEffect(() => {
    setState({ ...loaderData.data });
    setRoles(loaderData.roles.content);
    multiStepFormScript();
  }, []);

  const updateRoles = (roleName) => {
    const firstTouch = roles.filter((role, index, roles) => {
      if (role.name === roleName) {
        const tmp = {
          id: role.id,
          name: role.name,
          nameFarsi: role.nameFarsi,
          checked: true,
        };
        setRoles([...roles, tmp]);
      }
      return role;
    });
  };

  const onChangeData = (e) => {
    setState({
      //  Computed property name
      ...state,
      [\`\${e.target.id}\`]: e.target.value,
    });
  };

  const onChangeStatus = (e, nameFarsi) => {
    console.log(e.target.value);
    console.log(...state.roles);
    checkAvailability(e.target.value) === undefined
      ? setState({
        ...state,
        roles: [
          ...state.roles,
          {
            id: 1,
            name: e.target.value,
            nameFarsi: nameFarsi,
            owner: null,
            authority: e.target.value,
          },
        ],
      })
      : setState({
        ...state,
        roles: [
          ...state.roles.filter((role) => {
            return role.name !== e.target.value;
          }),
        ],
      });
    console.log(state.roles);

    //  if roles is js Array
    // setRoles(
    // ...roles
    // [e.target.id]:
    // {
    //   ...roles[e.target.id],
    //   selected: !!!roles[e.target.id]['selected'],
    // },
    // );
    // console.log(e.target.id);

    // updateRoles(e.target.id);

    //  if roles is js Object
    // setRoles({
    //   ...roles,
    //   [e.target.id]: {
    //     ...roles[e.target.id],
    //     selected: !!!roles[e.target.id]['selected'],
    //   },
    // });
    // console.log(roles);
  };

  const checkAvailability = (roleName) => {
    const firstTouch = state.roles.find((role) => {
      return role.name === roleName;
    });
    return firstTouch;
  };

  const stateChangedIndex = () => {
    return Object.keys(state).findIndex(item => loaderData['data'][item] != state[item])
  }

  return (
    <div className=" border rounded-3 shadow-sm p-0 me-2 bg-light-subtle">
      <Breadcrumb path={{ 'خانه': '/dashboard', 'مدیریت کاربران': '/users', 'نمایش کاربر': '/users/' }} isVisible={true} />
      <div data-multi-step className="multi-step-form">
        <div className='cards data-step active' data-step>
          <div className="row mx-1 my-1 align-items-center justify-content-center">
            <div className="col-2 text-end" >
              {/*
                <a
                  title='قبلی'
                  container="body"
                  data-bs-toggle="tooltip"
                  className="icon-link heartbeat data-next"
                >
                  <i className="bi bi-fast-forward-circle fs-4 pe-2" data-previous />
                </a>
              */}
            </div>
            <div className="col-8 text-start">
              <h3 className='step-title'></h3>
            </div>
            <div className="col-2 text-start">
              <a
                title='بعدی'
                container="body"
                data-bs-toggle="tooltip"
                className="icon-link"
              >
                <small style={{ cursor: 'pointer' }} data-next>صفحه بعد</small><i className="bi bi-arrow-left fs-4" data-next />
              </a>
            </div>
          </div>
          <div className="row mx-1 my-1 align-items-center justify-content-center">
            <div className="col-5">
              <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                <input
                  type="text"
                  className="form-control border-0"
                  id="firstName"
                  placeholder="name@benkmellat.ir"
                  value={\`\${state.firstName}\`}
                  onChange={onChangeData}
                  disabled={true}
                  autoComplete="given-name"
                />
                <label htmlFor="firstName">{userOperationLables.firstName}</label>
              </div>
              <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                <input
                  type="text"
                  className="form-control border-0"
                  id="lastName"
                  placeholder="name@benkmellat.ir"
                  value={\`\${state.lastName}\`}
                  onChange={onChangeData}
                  disabled={true}
                  autoComplete="family-name"
                />
                <label htmlFor="lastName">{userOperationLables.lastName}</label>
              </div>
              <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                <input
                  type="text"
                  className="form-control border-0"
                  id="email"
                  name="email"
                  placeholder="name@benkmellat.ir"
                  value={\`\${state.email}\`}
                  onChange={onChangeData}
                  disabled={true}
                  autoComplete="email"
                />
                <label htmlFor="email">{userOperationLables.email}</label>
              </div>
              <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                <input
                  type="text"
                  className="form-control border-0"
                  id="userName"
                  name="userName"
                  placeholder="name@benkmellat.ir"
                  value={\`\${state.userName}\`}
                  onChange={onChangeData}
                  disabled={true}
                  autoComplete="username"
                />
                <label htmlFor="password">{userOperationLables.username}</label>
              </div>
              <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                <input
                  type="password"
                  className="form-control border-0"
                  id="password"
                  name="password"
                  placeholder="name@benkmellat.ir"
                  value={\`\${state.password}\`}
                  onChange={onChangeData}
                  disabled={true}
                  autoComplete="new-password"
                />
                <label htmlFor="password">{userOperationLables.password}</label>
              </div>
              <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                <input
                  type="password"
                  className="form-control border-0"
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="name@benkmellat.ir"
                  value={\`\${state.password}\`}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  disabled={true}
                  autoComplete="new-password"
                />
                <label htmlFor="repeatPassword">
                  {userOperationLables.password}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='cards data-step' data-step>
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
              <h3 className='step-title'></h3>
            </div>
            <div className="col-2 text-end" style={{ transform: 'rotate(180deg)' }}>
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
          </div>
          <div className="row mx-1 my-1 align-items-center justify-content-center">
            <div className="col-5">
              {/* <fieldset class="border rounded-3 p-3" legend className="reset float-none w-auto px-3"> */}
              {/* <fieldset className="reset" disabled={props.fields[0].disabled}> */}
              <fieldset className="reset">
                <legend className="reset">{userOperationLables.userRoles}</legend>
                {Object.entries(roles).map(([id, name]) => {
                  return (
                    <div className="form-check form-switch" key={id}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        // data-bs-toggle
                        id={name.id}
                        value={name.name}
                        onChange={(e) => onChangeStatus(e, name.nameFarsi)}
                        checked={checkAvailability(name.name) ? true : false}
                        disabled={true}
                      />
                      <label className="form-check-label" htmlFor={id}>
                        {name.nameFarsi}
                      </label>
                    </div>
                  );
                })}
              </fieldset>
            </div>
          </div>
          <div className="row mx-1 my-1 align-items-center justify-content-center">
            <div className="d-grid col text-center">
              <button
                type="button"
                className={\`btn \${stateChangedIndex() > -1 ? "btn-outline-primary btn-sm" : "btn-outline-secondary btn-sm"}\`}
                disabled={stateChangedIndex() > -1 ? false : true}
              >
                {userOperationLables.confirm}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
  createFile(`${userViewPath}`, `userView.jsx`, injectedContent);
  /********************************************************************************
   *                          UserEdit operation
  ********************************************************************************/
  injectedContent = `import * as React from 'react';
import { loader as userEditLoader } from './userEditLoader';
import { action as userEditAction } from './userEditAction';
import UserEdit from './userEdit';

export const userEditRoute = {
  path: 'users/:userId/edit',
  element: <UserEdit />,
  loader: userEditLoader,
  action: userEditAction,
};
`;
  createFile(`${userEditPath}`, `userEditRoute.js`, injectedContent);

  injectedContent = `import { redirect, json } from 'react-router-dom';
import axios from 'axios';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function loader({ params }) {
  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }
  try {
    const response = await sendRequest(
      \`${backendURI}/users/\${params.userId}\`,
      'GET',
      null
    );

    // const availableRoles = await sendRequest(
    //   \`${backendURI}/roles\`,
    //   'GET',
    //   null
    // );

    const availableRoles = {
      data: {
        content: [
          ${listOfRoleNames}
        ],

        currentPage: 0,
        totalItems: ${listOfRoleNames.length},
        totalPages: 1,
      },
    };

    return { data: response.data, roles: availableRoles.data };
  } catch (err) {
    //  AXIOS Error
    throw err;
  }
}
`;
  createFile(`${userEditPath}`, `userEditLoader.js`, injectedContent);

  injectedContent = `import axios, { Axios } from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function action({ request }) {
  // const navigate = useNavigate();

  let obj = {};
  // obj = await request.json();

  const formData = await request.formData();
  obj = Object.fromEntries(formData);

  // Validate our form inputs and return validation errors via useActionData()
  // if (!username) {
  //   return {
  //     error: 'You must provide a username to log in',
  //   };
  // }

  // return { result: 'sucessfull' };

  // const data = { some: 'thing' };
  // return new Response(JSON.stringify(data), {
  //   status: 200,
  //   headers: {
  //     'Content-Type': 'application/json; utf-8',
  //   },
  // });

  let roles = [];
  let bObject = {};
  Object.keys(obj).find((o) => {
    o.startsWith('ROLE_') ? roles.push({ id: obj[o] }) : (bObject[o] = obj[o]);
  });
  obj = {
    ...bObject,
    roles: roles,
  };

  try {
    const response = await sendRequest(
      \`${backendURI}/users/\${obj['id']}\`,
      'PUT',
      obj
    ).then(
      (response) => {
        return redirect('/users');
      },
      // (error) => {
      //   return redirect(\`/users/\${obj['id']}/edit\`);
      // }
    );
    return redirect('/users');
  } catch (error) {
    throw error;
  }
}

`;
  createFile(`${userEditPath}`, `userEditAction.js`, injectedContent);

  injectedContent = `import React, { useState, useEffect } from 'react';
import {
  Link,
  Form,
  useLoaderData,
  redirect,
  useActionData,
  useSubmit,
  useNavigate,
  useNavigation,
  useFetcher,
} from 'react-router-dom';
import { action } from './userEditAction';
import { Breadcrumb } from '../../UIComponent/breadcrumb/Breadcrumb';
import userOperationLables from '../userOperationLables_fa';
import { multiStepFormScript } from '../userScript';
import '../userStyle.css';

export default function UserEdit() {
  const [name, setName] = useState('');

  const [state, setState] = useState({});
  const [roles, setRoles] = useState({});

  const loaderData = useLoaderData();

  const submit = useSubmit();
  const navigate = useNavigate();
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.formAction == '/users/2/edit';
  const fetcher = useFetcher();

  let actionData = null;
  actionData = useActionData();

  useEffect(() => {
    setState({ ...loaderData.data });
    setRoles(loaderData.roles.content);
    multiStepFormScript()
  }, []);

  // const updateRoles = (roleName) => {
  //   const firstTouch = roles.filter((role, index, roles) => {
  //     if (role.name === roleName) {
  //       const tmp = {
  //         id: role.id,
  //         name: role.name,
  //         nameFarsi: role.nameFarsi,
  //         checked: true,
  //       };
  //       setRoles([...roles, tmp]);
  //     }
  //     return role;
  //   });
  // };

  const onChangeData = (e) => {
    setState({
      //  Computed property name
      ...state,
      [\`\${e.target.id}\`]: e.target.value,
    });
  };

  const onChangeStatus = (e, nameFarsi) => {
    checkAvailability(e.target.name) === undefined
      ? setState({
          ...state,
          roles: [
            ...state.roles,
            {
              id: Number(e.target.id),
              name: e.target.name,
              nameFarsi: nameFarsi,
              owner: null,
              authority: e.target.name,
            },
          ],
        })
      : setState({
          ...state,
          roles: [
            ...state.roles.filter((role) => {
              return role.name !== e.target.name;
            }),
          ],
        });
    // console.log(state.roles);

    //  if roles is js Array
    // setRoles(
    // ...roles
    // [e.target.id]:
    // {
    //   ...roles[e.target.id],
    //   selected: !!!roles[e.target.id]['selected'],
    // },
    // );
    // console.log(e.target.id);

    // updateRoles(e.target.id);

    //  if roles is js Object
    // setRoles({
    //   ...roles,
    //   [e.target.id]: {
    //     ...roles[e.target.id],
    //     selected: !!!roles[e.target.id]['selected'],
    //   },
    // });
    // console.log(roles);
  };

  const checkAvailability = (roleName) => {
    const firstTouch = state.roles.find((role) => {
      return role.name === roleName;
    });
    return firstTouch;
  };

  const onFormSubmit = () => {
    // const data = { redirectTo: '/users' };
    // const response = fetcher.submit(JSON.stringify(state), {
    // const response = fetcher.submit(data, {
    // method: 'post',
    // encType: 'application/json',
    // });
    // submit(state, {
    //   method: 'post',
    //   navigate: false,
    // encType: 'application/json',
    // action: '/users/:userId/edit',
    // encType: 'application/x-www-form-urlencoded',
    // });
  };

  const stateChangedIndex = () => {
    return Object.keys(state).findIndex(item => loaderData['data'][item] != state[item])
  }
  
  return (
    <div className=" border rounded-3 shadow-sm p-0 me-2 bg-light-subtle">
      <Breadcrumb
        path={{
          'خانه': '/dashboard',
          'مدیریت کاربران': '/users',
          'ویرایش کاربر': '/users/',
        }}
        isVisible={true} 
      />{' '}
      {/* <div className="row border-bottom mx-1 my-1 align-items-center justify-content-center">
        <div className="col-6 text-end">
          <label>BreadCrumb </label>
        </div>
        <div className="col-6 text-start">
          <button
            className="border-0 bg-light-subtle heartbeat"
            aria-label="close"
            data-bs-toggle="tooltip"
            title={userOperationLables.close}
          >
            <i className="bi bi-x fs-3"></i>
          </button>
        </div>
      </div> */}
      {/* <Form onSubmit={onFormSubmit}> */}
      {/* <Form action="/users/2/edit" method="post"> */}
      <Form  data-multi-step className="multi-step-form"  method="post">
      <div className='cards data-step active' data-step>
            <div className="row mx-1 my-1 align-items-center justify-content-center">
              <div className="col-2 text-end" >
                {/*
                  <a
                    title='قبلی'
                    container="body"
                    data-bs-toggle="tooltip"
                    className="icon-link heartbeat data-next"
                  >
                    <i className="bi bi-fast-forward-circle fs-4 pe-2" data-previous />
                  </a>
                */}
              </div>
              <div className="col-8 text-start">
                <h3 className='step-title'></h3>
              </div>
              <div className="col-2 text-end">
                <a
                  title='بعدی'
                  container="body"
                  data-bs-toggle="tooltip"
                  className="icon-link"
                >
                  <small style={{ cursor: 'pointer' }} data-next>صفحه بعد</small><i className="bi bi-arrow-left fs-4" data-next />
                </a>
              </div>
            </div>
            <div className="row mx-1 my-1 align-items-center justify-content-center">
              <div className="col-5">
                <fieldset className="reset">
                  <legend className="reset">مشخصات کاربر</legend>
                  <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                    <input
                      type="hidden"
                      // className="form-control border-0"
                      id="id"
                      name="id"
                      value={\`\${ state.id }\`}
                      onChange={onChangeData}
                      disabled={false}
                    />
                    <input
                      type="hidden"
                      // className="form-control border-0"
                      id="owner"
                      name="owner"
                      value={\`\${state.owner}\`}
                      onChange={onChangeData}
                      disabled={false}
                    />
                    <input
                      type="hidden"
                      // className="form-control border-0"
                      id="date"
                      name="date"
                      value={\`\${state.date}\`}
                      onChange={onChangeData}
                      disabled={false}
                    />
                    <input
                      type="text"
                      className="form-control border-0"
                      id="firstName"
                      name="firstName"
                      placeholder="name@benkmellat.ir"
                      value={\`\${state.firstName}\`}
                      onChange={onChangeData}
                      disabled={false}
                      autoComplete="given-name"
                    />
                    <label htmlFor="firstName">{userOperationLables.firstName}</label>
                  </div>
                  <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control border-0"
                      id="lastName"
                      placeholder="name@benkmellat.ir"
                      value={\`\${state.lastName}\`}
                      onChange={onChangeData}
                      disabled={false}
                      autoComplete="family-name"
                    />
                    <label htmlFor="lastName">{userOperationLables.lastName}</label>
                  </div>
                  <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                  <input
                    type="text"
                    name="telNumber"
                    className="form-control border-0"
                    id="telNumber"
                    placeholder="name@benkmellat.ir"
                    value={\`\${state.telNumber}\`}
                    onChange={onChangeData}
                    disabled={false}
                    autoComplete="tel"
                  />
                  <label htmlFor="telNumber">{userOperationLables.telNumber}</label>
                </div>
                  <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                    <input
                      type="email"
                      className="form-control border-0"
                      id="email"
                      name="email"
                      placeholder="name@benkmellat.ir"
                      value={\`\${state.email}\`}
                      onChange={onChangeData}
                      disabled={false}
                      autoComplete="email"
                    />
                    <label htmlFor="email">{userOperationLables.email}</label>
                  </div>
                  <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                    <input
                      type="text"
                      className="form-control border-0"
                      id="userName"
                      name="userName"
                      placeholder="name@benkmellat.ir"
                      value={\`\${state.userName}\`}
                      onChange={onChangeData}
                      disabled={false}
                      autoComplete="username"
                    />
                    <label htmlFor="userName">{userOperationLables.username}</label>
                  </div>
                  <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                    <input
                      type="password"
                      className="form-control border-0"
                      id="password"
                      name="password"
                      placeholder="name@benkmellat.ir"
                      value={\`\${state.password}\`}
                      onChange={onChangeData}
                      disabled={false}
                      autoComplete="new-password"
                    />
                    <label htmlFor="password">{userOperationLables.password}</label>
                  </div>
                  <div className="form-floating mb-3 p-0 border-0 border-bottom border-warning">
                    <input
                      type="password"
                      className="form-control border-0"
                      id="repeatPassword"
                      name="repeatPassword"
                      placeholder="name@benkmellat.ir"
                      value={\`\${name}\`}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      disabled={false}
                      autoComplete="new-password"
                    />
                    <label htmlFor="repeatPassword">{userOperationLables.password}</label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div className='cards data-step' data-step>
            <div className="row mx-1 my-1 align-items-center justify-content-center">
              <div className="col-2 text-end" >
                {/*
                            <a
                              title='بعدی'
                              container="body"
                              data-bs-toggle="tooltip"
                              className="icon-link heartbeat"
                            >
                              <i className="bi bi-fast-forward-circle fs-4 pe-2" data-next />
                            </a>
                          */}
              </div>
              <div className="col-8 text-start">
                <h3 className='step-title'></h3>
              </div>
              <div className="col-2 text-end" style={{ transform: 'rotate(180deg)' }}>
                <a
                  title='قبلی'
                  container="body"
                  data-bs-toggle="tooltip"
                  className="icon-link heartbeat data-next"
                >
                  <i className="bi bi-fast-forward-circle fs-4 pe-2" data-previous />
                </a>
              </div>
            </div>
            <div className="row mx-1 my-1 align-items-center justify-content-center">
              <div className="col-5">
                {/* <fieldset class="border rounded-3 p-3" legend className="reset float-none w-auto px-3"> */}
                {/* <fieldset className="reset" disabled={props.fields[0].disabled}> */}
                {/* <span className="form-check-label">
                {userOperationLables.userRoles}
                </span> 
              */}
                <fieldset className="reset">
                  <legend className="reset">{userOperationLables.userRoles}</legend>
                  {Object.entries(roles).map(([id, name]) => {
                    return (
                      <div className="form-check form-switch" key={id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          // data-bs-toggle
                          name={name.name}
                          id={name.id}
                          value={name.id}
                          onChange={(e) => onChangeStatus(e, name.nameFarsi)}
                          checked={checkAvailability(name.name) ? true : false}
                          disabled={false}
                        />
                        <label className="form-check-label" htmlFor={id}>
                          {name.nameFarsi}
                        </label>
                      </div>
                    );
                  })}
                </fieldset>
              </div>
            </div>
            <div className="row mx-1 my-1 align-items-center justify-content-center">
              <div className="d-grid col text-center">
                <button
                  type="submit"
                  className={\`btn \${stateChangedIndex() > -1 ? "btn-outline-primary btn-sm" : "btn-outline-secondary btn-sm"}\`}
                  disabled={stateChangedIndex() > -1 ? false : true}
                >
                  {isSubmitting ? 'saving...' : userOperationLables.confirm}
                </button>
              </div>
            </div>
          </div>
      </Form>
    </div>
  );
}
`;
  createFile(`${userEditPath}`, `userEdit.jsx`, injectedContent);

  injectedContent = `import * as React from 'react';
import { action as userDeleteAction } from './userDeleteAction';

export const userDeleteRoute = {
  path: 'users/:id/delete',
  element: <></>,
  action: userDeleteAction,
};
`;
  createFile(`${userDeletePath}`, `userDeleteRoute.js`, injectedContent);
  /********************************************************************************
   *                          UserDelete operation
  ********************************************************************************/
  injectedContent = `import axios, { Axios } from 'axios';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { fakeAuthProvider } from '../../../auth';
import { sendRequest } from '../../../util/makeRequest';

export async function action({ params, request }) {
  try {
    const response = await sendRequest(
      \`${backendURI}/users/\${params['id']}\`,
      'DELETE',
      null
    ).then(
      (response) => {
        return redirect('/users');
      },
      // (error) => {
      //   console.log('error-1');
      //   console.log(error);
      //   return redirect(\`/users/\${params['id']}/edit\`);
      // }
    );
    return redirect('/users');
  } catch (error) {
    throw error;
  }
}
`;
  createFile(`${userDeletePath}`, `userDeleteAction.js`, injectedContent);
};

module.exports = ClientProjectSecurityGenerator;
