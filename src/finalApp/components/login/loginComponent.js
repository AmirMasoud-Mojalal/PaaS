import React from 'react';
// import { Container } from 'react-bootstrap/Container';
// import { Row } from 'react-bootstrap/Row';
import {
  Container,
  Row,
  Col,
  // Form,
  FloatingLabel,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Form, useLoaderData, redirect } from 'react-router-dom';
import './style.css';
import '../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import axios, { Axios } from 'axios';

export async function action() {
  console.log('action() method is called!');
  const conts = {
    fName: 'ali',
  };
  // solution 2)
  return await axios
    .post('http://localhost:8080/api/v1/auth/signin', {
      email: 'mojalal@behsazan.net',
      password: 'password',
    })
    .then(
      (response) => {
        console.log('response');
        return redirect('/');
      },
      (error) => {
        console.log('error');
        redirect('/login');
      }
    );
  // solution 2)
  // const login = await axios.post( ... )
  // if (login.data.token) {
  //   console.log(login.data.token);
  //   return redirect('/');
  // } else {
  //   console.log(login.data.token);
  //   return redirect('/login');
  // }
}

export function loader() {
  console.log('loader() method is called!');
  const contract = {
    fName: 'masoud',
    lName: 'amir',
  };
  return contract;
}
export default function Login() {
  // console.log(useLoaderData());
  const auth = useLoaderData();
  console.log(auth);

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center border">
      <div className="border-0 rounded-5 p-5 shadow-lg opacity-1 bg-body bg-opacity-50">
        <h3 className="p-3">Login Form</h3>
        <Form method="post">
          <div className="input-group mb-3 align-items-center">
            <div className="form-floating">
              <input
                type="text"
                className="form-control border-0  border-top-right-radius"
                id="floatingInputGroup1"
                placeholder="Username"
              />
              <label htmlFor="floatingInputGroup1" className="text-muted">
                Username
              </label>
            </div>
            <span className="input-group-append bg-white border-0">
              <button
                className="btn bg-white border-0"
                style={{ borderRadius: '0' }}
                type="button"
              >
                <i className="bi bi-person"></i>
              </button>
            </span>
          </div>

          <div className="input-group mb-3">
            <div className="form-floating">
              <input
                type="password"
                className="form-control border-0"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword" className="text-muted">
                Password
              </label>
            </div>
            <span className="input-group-text bg-white border-0">
              <button
                className="btn bg-white border-0"
                style={{ borderRadius: '0' }}
                type="button"
              >
                <i className="bi bi-key"></i>
              </button>
            </span>
          </div>

          <div className="mb-3">
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
          </div>

          <div className="row">
            <div className="col pr-3">
              <div className="mb-3 form-check ">
                <input
                  type="checkbox"
                  className="form-check-input "
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label fs-6 fw-lighter p-0 m-0"
                  htmlFor="exampleCheck1"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div className="col p-0">
              <div className="mb-3 form-check">
                <a href="#" className="link-primary fs-6 fw-lighter">
                  forgot password?
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
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
