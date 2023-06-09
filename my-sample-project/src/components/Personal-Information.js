import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Nav } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import {Modal} from "react-bootstrap";
// import { useState } from "react";
// import { useEffect } from "react";
// import { render } from "react-dom";
// import { component } from "react-dom";
// import { Navbar } from "react-bootstrap";
// import { Container } from "react-bootstrap";

// function MyVerticallyCenteredModal(props) {
//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Modal heading
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <h4>Centered Modal</h4>
//                 <p>
//                     Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//                     dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//                     consectetur ac, vestibulum at eros.
//                 </p>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick={props.onHide}>Close</Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }

const PersonalInformation = () => {
    // const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className="home-div">
                <Row className="home-row m-0">
{/* ---------------------------------------- 1st Column Body Left ---------------------------------------- */}
                    <Col className="home-main-left col-sm-2 p-0">
                        <div className="home-logo">
                            <img className="home-img-logo" src="./images/SEDA HOME.PNG" alt="Logo"></img>
                        </div>
{/* ---------------------------------------- Accordion Body ---------------------------------------- */}
                        <Accordion className="accordion-all">
{/* ---------------------------------------- Accordion Item 1 - Employee Details ---------------------------------------- */}
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Employee Details</Accordion.Header>
                                <Accordion.Body className="accordion-tab-body">
                                    <table>
                                        <tbody>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-1">Personal Information</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-2">Employment Details</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-3">Leave Credits</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-4">Salary Information</Nav.Link></th></tr>
                                        </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>
{/* ---------------------------------------- END Accordion Item 1 - Employee Details ---------------------------------------- */}
{/* ---------------------------------------- Accordion Item 2 - Attendance Details ---------------------------------------- */}
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Attendance Details</Accordion.Header>
                                <Accordion.Body className="accordion-tab-body">
                                    <table className="attendance-table">
                                        <tbody>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-1">View Attendance</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-2">Shift Details</Nav.Link></th></tr>
                                        </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>
{/* ---------------------------------------- END Accordion Item 2 - Attendance Details ---------------------------------------- */}
{/* ---------------------------------------- Accordion Item 3 - My People ---------------------------------------- */}
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>My People</Accordion.Header>
                                <Accordion.Body className="accordion-tab-body">
                                    <table className="my-people-table">
                                        <tbody>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-1">My Deputy</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-2">View List of Current Application</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-3">My Peoples Attendance</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-4">Upload Application</Nav.Link></th></tr>
                                        </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>
{/* ---------------------------------------- END Accordion Item  3- My People ---------------------------------------- */}
{/* ---------------------------------------- Accordion Item 4 - Requests ---------------------------------------- */}
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Requests</Accordion.Header>
                                <Accordion.Body className="accordion-tab-body">
                                    <table className="requests-table">
                                        <tbody>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-1">Apply Certificate of Attendance</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-2">Apply Change Shift</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-3">Apply Leave Request</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-4">Apply Official Business Authorization Slip</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Apply OT/CTO Request</Nav.Link></th></tr>
                                        </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>
{/* ---------------------------------------- END Accordion Item 4 - Requests ---------------------------------------- */}
{/* ---------------------------------------- Accordion Item 5 - Reports ---------------------------------------- */}
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Reports</Accordion.Header>
                                <Accordion.Body className="accordion-tab-body">
                                    <table className="reports-table">
                                        <tbody>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-1">Application Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-2">Attrition Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-3">Employee Master File</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-4">Exception Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Gender Age Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Leave Balance Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Monthly Manpower Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Offense Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Rank Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Source of Application Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Tardiness Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Title Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Training Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Transfer Report</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Time and Attendance Report</Nav.Link></th></tr>
                                        </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>
{/* ---------------------------------------- END Accordion Item 5 - Reports ---------------------------------------- */}
{/* ---------------------------------------- Accordion Item 6 - Admin Maintenance ---------------------------------------- */}
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Admin Maintenance</Accordion.Header>
                                <Accordion.Body className="accordion-tab-body">
                                    <table className="admin-maintenance-table">
                                        <tbody>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-1">Detail 1</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-2">Detail 2</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-3">Detail 3</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-4">Detail 4</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Detail 5</Nav.Link></th></tr>
                                        </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>
{/* ---------------------------------------- END Accordion Item 6 - Admin Maintenance ---------------------------------------- */}
{/* ---------------------------------------- Accordion Item 7 - Help ---------------------------------------- */}
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Help</Accordion.Header>
                                <Accordion.Body className="accordion-tab-body">
                                    <table className="help-table">
                                        <tbody>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-1">Detail 1</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-2">Detail 2</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-3">Detail 3</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-4">Detail 4</Nav.Link></th></tr>
                                            <tr className="accordion-body-row"><th scope="row"><Nav.Link href="#Detail-5">Detail 5</Nav.Link></th></tr>
                                        </tbody>
                                    </table>
                                </Accordion.Body>
                            </Accordion.Item>
{/* ---------------------------------------- END Accordion Item 7 - Help ---------------------------------------- */}
                        </Accordion>
{/* ---------------------------------------- END Accordion Body ---------------------------------------- */}
                    </Col>
{/* ---------------------------------------- End 1st Column Body Left ---------------------------------------- */}
{/* ---------------------------------------- 2nd Column Body Left ---------------------------------------- */}
                    <Col className="home-main-right col-sm-10 p-0">
{/* ---------------------------------------- End Header Div---------------------------------------- */}
                        <div className="header">
                            <div className="menu-header-div">
                                <button type="button" className="home-btn">Home</button>
                                <button type="button" className="inbox-btn">
                                    Inbox
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+</span>
                                </button>
{/* ---------------------------------------- Menu Button ---------------------------------------- */}
                                <DropdownButton id="menu-button" title="Menu">
                                    <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                                </DropdownButton>
{/* ---------------------------------------- End Menu Button ---------------------------------------- */}
                            </div>
                        </div>
{/* ---------------------------------------- End Header Div---------------------------------------- */}
{/* ---------------------------------------- New Div---------------------------------------- */}
                        <div>
                        <Card className="main-body-card">
                            <Card.Header id="main-body-header">Employee Details</Card.Header>
                                <Card.Body className="main-body-body">
                                    <Card.Title className="main-body-title">Personal Information</Card.Title>
{/* ---------------------------------------- Main Body Div---------------------------------------- */}
                                        <div className="main-body-div">
{/* ---------------------------------------- First Div---------------------------------------- */}
                                        <div className="first-div">
                                            <div className="first-name-div">
                                            <label className="first-name-label">First Name</label>
                                            <InputGroup className="first-name">
                                                <Form.Control
                                                className="first-name-form"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                />
                                            </InputGroup>
                                            </div>
                                            <div className="middle-name-div">
                                            <label className="middle-name-label">Middle Name</label>
                                            <InputGroup className="middle-name">
                                                <Form.Control
                                                className="middle-name-form"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                />
                                            </InputGroup>
                                            </div>
                                            <div className="last-name-div">
                                            <label className="last-name-label">Last Name</label>
                                            <InputGroup className="last-name">
                                                <Form.Control
                                                className="last-name-form"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                />
                                            </InputGroup>
                                            </div>
                                            <div className="suffix-div">
                                            <label className="suffix-name-label">Suffix Name</label>
                                            <Form.Select className="suffix-name-form" aria-label="Default select suffix">
                                                <option value="Jr">Jr.</option>
                                                <option value="Sr">Sr.</option>
                                                <option value="I">I</option>
                                                <option value="II">II</option>
                                                <option value="III">III</option>
                                            </Form.Select>
                                            </div>
                                            <div className="nickname-div">
                                            <label className="nickname-label">Nickname</label>
                                            <InputGroup className="nickname">
                                                <Form.Control
                                                className="nickname-form"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                />
                                            </InputGroup>
                                            </div>
                                        </div>
{/* ---------------------------------------- End First Div---------------------------------------- */}
{/* ---------------------------------------- Second Div---------------------------------------- */}
                                        <div className="second-div">
                                            <div className="gender-div">
                                                <label className="gender-label">Gender</label>
                                                <Form.Select className="gender-form" aria-label="Default select gender">
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </Form.Select>
                                            </div>
                                            <div className="birthdate-div">
                                                <label className="birthdate-label">Birthdate</label><br/>
                                                <input type="date" id="birthdate" class="birthdaytime"></input>
                                            </div>
                                            <div className="contact-number-div">
                                            <label className="contact-number-label">Contact Number</label>
                                            <InputGroup className="contact-number">
                                                <Form.Control
                                                className="contact-number-form"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                />
                                            </InputGroup>
                                            </div>
                                            <div className="email-div">
                                            <label className="email-label">Email Address</label>
                                            <InputGroup className="email">
                                                <Form.Control
                                                type="email"
                                                placeholder="username@gmail.com"
                                                className="email-form"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                />
                                            </InputGroup>
                                            </div>
                                        </div>
{/* ---------------------------------------- End Second Div---------------------------------------- */}
{/* ---------------------------------------- Third Div---------------------------------------- */}
                                        <div className="third-div">
                                            <div className="place-of-birth-div">
                                                <label className="place-of-birth-label">Place of Birth</label>
                                                <InputGroup className="place-of-birth">
                                                    <Form.Control
                                                    className="place-of-birth-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="country-of-birth-div">
                                                <label className="country-of-birth-label">Country of Birth</label>
                                                <InputGroup className="country-of-birth">
                                                    <Form.Control
                                                    className="country-of-birth-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="marital-status-div">
                                            <label className="marital-status-label">Marital Status</label>
                                            <Form.Select className="marital-status-form" aria-label="Default select marital status">
                                                <option value="single">Single</option>
                                                <option value="married">Married</option>
                                                <option value="solo-parent">Solo Parent</option>
                                            </Form.Select>
                                        </div>
                                        </div>
{/* ---------------------------------------- End Third Div---------------------------------------- */}
{/* ---------------------------------------- Fourth Div---------------------------------------- */}
                                        <div className="fourth-div">
                                            <div className="father-name-div">
                                                <label className="father-name-label">Father's Name</label>
                                                <InputGroup className="father-name">
                                                    <Form.Control
                                                    className="father-name-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="mother-name-div">
                                                <label className="mother-name-label">Mother's Name</label>
                                                <InputGroup className="mother-name">
                                                    <Form.Control
                                                    className="mother-name-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="ethnic-group-div">
                                                <label className="ethnic-group-label">Ethnic Group</label>
                                                <InputGroup className="ethnic-group">
                                                    <Form.Control
                                                    className="ethnic-group-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="religion-div">
                                                <label className="religion-label">Religion</label>
                                                <InputGroup className="religion">
                                                    <Form.Control
                                                    className="religion-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                        </div>
{/* ---------------------------------------- End Fourth Div---------------------------------------- */}
{/* ---------------------------------------- End Fourth Div---------------------------------------- */}
                                        <div className="fifith-div">
                                            <div className="current-address-div">
                                                <label className="current-address-label">Current Address</label>
                                                <InputGroup className="current-address">
                                                    <Form.Control
                                                    className="current-address-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="zip-code-div">
                                                <label className="zip-code-label">Zip Code</label>
                                                <InputGroup className="zip-code">
                                                    <Form.Control
                                                    className="zip-code-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="next-btn-div">
                                                <button type="button" className="next-btn">Next</button>
                                            </div>
                                            </div>
{/* ---------------------------------------- End Fourth Div---------------------------------------- */}
{/* ---------------------------------------- End Main Body Div---------------------------------------- */}
                                </div>
                            </Card.Body>
                            </Card>
                        </div>
{/* ---------------------------------------- New Div---------------------------------------- */}
                    </Col>
{/* ---------------------------------------- End 2nd Column Body Left ---------------------------------------- */}
                </Row>
            </div>
        </>

    );
};

export default PersonalInformation;