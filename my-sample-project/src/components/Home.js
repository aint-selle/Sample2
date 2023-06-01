import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { Nav } from "react-bootstrap";
// import { Navbar } from "react-bootstrap";
// import { Form } from 'react-bootstrap';
// import { Button } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import { Container } from "react-bootstrap";



const Home = () => {
    return (

        <>
            <div className="home-div">
                <Row className="home-row m-0">
                    <Col className="home-main-left col-sm-2 p-0">
                        <Accordion className="accordion-employee">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Employee Details</Accordion.Header>
                                <Accordion.Body>
                                <table className="Employee-table">
                                    <tbody>
                                        <tr><th scope="row"><Nav.Link href="#Detail-1">Detail 1</Nav.Link></th></tr>
                                        <tr><th scope="row"><Nav.Link href="#Detail-2">Detail 2</Nav.Link></th></tr>
                                        <tr><th scope="row"><Nav.Link href="#Detail-3">Detail 3</Nav.Link></th></tr>
                                        <tr><th scope="row"><Nav.Link href="#Detail-4">Detail 4</Nav.Link></th></tr>
                                        <tr><th scope="row"><Nav.Link href="#Detail-5">Detail 5</Nav.Link></th></tr>
                                    </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="accordion-selfservice">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Employee Details</Accordion.Header>
                                <Accordion.Body>
                                <table className="Employee-table">
                                    <tbody>
                                        <tr><th scope="row"><Nav.Link href="#Detail-1">Detail 1</Nav.Link></th></tr>
                                        <tr><th scope="row"><Nav.Link href="#Detail-2">Detail 2</Nav.Link></th></tr>
                                        <tr><th scope="row"><Nav.Link href="#Detail-3">Detail 3</Nav.Link></th></tr>
                                        <tr><th scope="row"><Nav.Link href="#Detail-4">Detail 4</Nav.Link></th></tr>
                                        <tr><th scope="row"><Nav.Link href="#Detail-5">Detail 5</Nav.Link></th></tr>
                                    </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    {/* <div className="home-verical-line2"></div> */}
                    <Col className="home-main-right col-sm-10">
                        <div className="header">
                            <div className="inbox-btn-div">
                                <button type="button" className="inbox-btn">
                                    Inbox
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+</span>
                                </button>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>

    );
};

export default Home;