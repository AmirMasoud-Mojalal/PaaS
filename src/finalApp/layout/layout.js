import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Sidebar } from '../components/sdiebar/sidebar';
import Footer from '../components/footer/footer';
import './layout.css';
import { Col, Row } from 'react-bootstrap';

export default function Layout() {
  return (
    <>
      <div className="row bg-warning flex-shrink-0">Header</div>
      <div
        className="row flex-grow-1 m-1"
        style={{ flex: '1 0 auto', height: '750px' }}
      >
        <Sidebar />
        <div
          className="col-10 flex-column flex-grow-1 bg-info"
          // style={{ height: '750px' }}
          id="mainContent"
        >
          <Outlet />
        </div>
      </div>
      <Footer />;
    </>
  );
}

/** worked */
// <Row className="">Header</Row>
// <Row className="" style={{ flex: '1 0 auto' }}>
//   <Col className="col-lg-4 ps-0 ">
//     nav
//     {/* <Sidebar /> */}
//   </Col>
//   <Col className="col-lg-8">
//     <Outlet />
//   </Col>
// </Row>
// <Row className="" style={{ 'flex-shrink': 0 }}>
//   Footer
//   {/* <Footer />; */}
// </Row>

/** worked */
// <div class="h-100">
//   <div class="h-100 container-fluid d-flex flex-column">
//     <div class="row bg-warning">
//       <div class="col-12 py-4">Top Bar</div>
//     </div>

//     <div class="row no-gutter flex-grow">
//       <div class="col-3 bg-primary">
//         <div class="sidebar-item">Sidebar</div>
//       </div>

//       <div class="col-9 px-0 d-flex flex-column">
//         <div class="canvas-wrapper">
//           <div class="canvas bg-success">Canvas</div>
//         </div>
//         <div class="bg-danger py-3">Canvas Footer</div>
//       </div>
//     </div>

//     <div class="row bg-warning">
//       <div class="col-12 py-2">Overall Footer</div>
//     </div>
//   </div>
// </div>;

// module.exports = Layout;
