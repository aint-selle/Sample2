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

const EmploymentDetails = () => {
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
{/* ---------------------------------------- Header Div---------------------------------------- */}
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
                                    <Card.Title className="main-body-title">Position Details</Card.Title>
{/* ---------------------------------------- Main Body Div---------------------------------------- */}
                                        <div className="main-body-div">
{/* ---------------------------------------- First Div---------------------------------------- */}
                                            <div className="employment-details-first-div">
                                                <div className="employee-id-div">
                                                    <label className="employee-id-label">Employee ID</label>
                                                    <InputGroup className="employee-id">
                                                        <Form.Control
                                                        className="employee-id-form"
                                                        aria-label="Default"
                                                        aria-describedby="inputGroup-sizing-default"
                                                        />
                                                    </InputGroup>
                                                </div>
                                                <div className="position-div">
                                                <label className="position-label">Position</label>
                                                <Form.Select className="position-form" aria-label="Default select position">
                                                    <option value="admin">Admin</option> 
                                                    <option value="payroll-manager">Payroll Manager</option> 
                                                    <option value="finance">Finance</option> 
                                                    <option value="hr">HR</option> 
                                                    <option value="employee">Employee</option> 
                                                </Form.Select>
                                                </div>
                                                <div className="employment-type-div">
                                                <label className="employment-type-label">Emplyment Type</label>
                                                <Form.Select className="employment-type-form" aria-label="Default select employment-type">
                                                    <option value="internship">Internship</option> 
                                                    <option value="probationary">Probationary</option> 
                                                    <option value="regular">Regular</option> 
                                                    <option value="fixed-term">Fixed Term</option> 
                                                    <option value="project-based">Project Based</option> 
                                                </Form.Select>
                                                </div>
                                                <div className="department-div">
                                                <label className="department-label">Department</label>
                                                <Form.Select className="department-form" aria-label="Default select department">
                                                    <option value="department1">Department 1</option> 
                                                    <option value="department2">Department 2</option> 
                                                    <option value="department3">Department 3</option> 
                                                    <option value="department4">department 4</option> 
                                                    <option value="department5">Department 5</option> 
                                                </Form.Select>
                                                </div>
                                                <div className="division-div">
                                                <label className="division-label">Division</label>
                                                <Form.Select className="division-form" aria-label="Default select division">
                                                    <option value="division1">Division 1</option> 
                                                    <option value="division2">Division 2</option> 
                                                    <option value="division3">Division 3</option> 
                                                    <option value="division4">Division 4</option> 
                                                    <option value="division5">Division 5</option> 
                                                </Form.Select>
                                                </div>
                                            </div>
{/* ---------------------------------------- End First Div---------------------------------------- */}
{/* ---------------------------------------- Second Div---------------------------------------- */}
                                        <div className="employment-details-second-div">
                                            <div className="company-email-div">
                                            <label className="company-email-label">Company Email</label>
                                                <InputGroup className="company-email">
                                                    <Form.Control
                                                    type="email"
                                                    placeholder="username@gmail.com"
                                                    className="company-email-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="work-arrangement-div">
                                                <label className="work-arrangement-label">Work Arrangement</label>
                                                <Form.Select className="work-arrangement-form" aria-label="Default select work-arrangement">
                                                    <option value="work-from-home">Work Form Home</option> 
                                                    <option value="on-site">On Site</option> 
                                                </Form.Select>
                                            </div>
                                            <div className="employment-status-div">
                                                <label className="employment-status-label">Employment Status</label>
                                                <Form.Select className="employment-status-form" aria-label="Default select employment-status">
                                                    <option value="active">Active</option> 
                                                    <option value="inactive">Inactive</option> 
                                                </Form.Select>
                                            </div>
                                            <div className="work-location-div">
                                                <label className="work-location-label">Work Location</label>
                                                <Form.Select className="work-location-form" aria-label="Default select work-location">
                                                    <option value="location 1">Location 1</option> 
                                                    <option value="location 2">Location 2</option> 
                                                    <option value="location 3">Location 3</option> 
                                                    <option value="location 4">Location 4</option> 
                                                    <option value="location 5">Location 5</option> 
                                                </Form.Select>
                                            </div>
                                        </div>
{/* ---------------------------------------- End Second Div---------------------------------------- */}
{/* ---------------------------------------- Third Div---------------------------------------- */}
                                        <div className="employment-details-third-div">
                                            <div className="hire-date-div">
                                                <label className="hire-date-label">Hire Date</label><br/>
                                                <input type="date" id="hire-date" class="hire-date"></input>
                                            </div>
                                            <div className="regularization-date-div">
                                                <label className="regularization-date-label">Regularization Date</label><br/>
                                                <input type="date" id="regularization-date" class="regularization-date"></input>
                                            </div>
                                            <div className="resigned-date-div">
                                                <label className="resigned-date-label">Resigned Date</label><br/>
                                                <input type="date" id="resigned-date" class="resign-date"></input>
                                            </div>
                                            <div className="resigned-remark-div">
                                                <label for="exampleFormControlTextarea1" className="resigned-remark-label">Resigned Remark</label>
                                                <textarea class="form-control" id="resigned-remark" rows="5"></textarea>
                                            </div>
                                        </div>
{/* ---------------------------------------- End Third Div---------------------------------------- */}
{/* ---------------------------------------- Fourth Div---------------------------------------- */}
                                        <h3 className="approvers-header">Approvers</h3>
{/* ---------------------------------------- End Fourth Div---------------------------------------- */}
{/* ---------------------------------------- Fifth Div---------------------------------------- */}
                                        <div className="employment-details-fifth-div">
                                            <div className="first-approver-empid-div">
                                                <label className="first-approver-empid-label">Approver EmpID</label>
                                                <InputGroup className="first-approver-empid">
                                                    <Form.Control
                                                    className="first-approver-empid-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="first-approver-name-div">
                                                <label className="first-approver-name-label">First Approver Name</label>
                                                <InputGroup className="first-approver-name">
                                                    <Form.Control
                                                    className="first-approver-name-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="second-approver-empid-div">
                                                <label className="second-approver-empid-label">Approver EmpID</label>
                                                <InputGroup className="second-approver-empid">
                                                    <Form.Control
                                                    className="second-approver-empid-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                            <div className="second-approver-name-div">
                                                <label className="second-approver-name-label">Second Approver Name</label>
                                                <InputGroup className="second-approver-name">
                                                    <Form.Control
                                                    className="second-approver-name-form"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </InputGroup>
                                            </div>
                                        </div>
{/* ---------------------------------------- End Fifth Div---------------------------------------- */}
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

export default EmploymentDetails;