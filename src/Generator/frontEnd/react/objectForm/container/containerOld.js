import React, { useState } from 'react';
import { Offcanvas, Button, Navbar, Nav, NavLink, NavDropdown } from 'react-bootstrap';

export const ContainerOld = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button onClick={handleShow} variant='outline-secondary'>Launch</Button>
            <Button className='navbar-toggler '>
                <svg viewBox="-13 -10 100 80" width="40" height="40">
                    <rect id="rect" width="70" height="10"></rect>
                    <rect id="rect" y="25" width="70" height="10"></rect>
                    <rect id="rect" y="50" width="70" height="10"></rect>
                </svg>
            </Button>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title id='id={`offcanvasNavbarLabel-expand-false'>داشبورد</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Navbar key={false} bg="light" expand={false} className="mb-3">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id={`offcanvasNavbarDropdown-expand-${false}`}
                            >
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                    <Button variant='link'>click</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}