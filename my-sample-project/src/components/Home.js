import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { Nav } from "react-bootstrap";
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {Modal} from 'react-bootstrap';
// import { render } from 'react-dom';
// import { component } from 'react-dom';
// import { Navbar } from "react-bootstrap";
// import { Form } from 'react-bootstrap';
// import { Container } from "react-bootstrap";

        function MyVerticallyCenteredModal(props) {
            return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            );
        }

        // function DigiClock() {
      
const Home = () => {
        const [modalShow, setModalShow] = React.useState(false);

        // const [currentDate, setCurrentDate] = useState('');
    const [date, setDate] = useState(new Date());
    // useEffect(() => {
    //     var dateToday = new Date().getDate(); //Current Date
    //     var month = new Date().getMonth() + 1; //Current Month
    //     var year = new Date().getFullYear(); //Current Year
    //       var hours = new Date().getHours(); //Current Hours
    //       var min = new Date().getMinutes(); //Current Minutes
    //       var sec = new Date().getSeconds(); //Current Seconds
    //     setCurrentDate(
    //         dateToday + '/' + month + '/' + year

    //     );

    useEffect(() => {
        var dateToday = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        
          const intervalId = setInterval(() => {
                  setDate(new Date());
                }, 1000)
          
                return () => dateToday + '/' + month + '/' + year + clearInterval(intervalId);
        }, []);
        
        // useEffect(() => {
        //    
        //   }, [])
        
    return (
        <>
            <div className="home-div">
                <Row className="home-row m-0">
{/* ---------------------------------------- 1st Column Body Left ---------------------------------------- */}
                    <Col className="home-main-left col-sm-2 p-0">
                        <div className="home-logo">
                            <img className="home-img-logo" src="./images/SEDA HOME.PNG" alt='Logo'></img>
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
{/* ---------------------------------------- Bundee Clock Div---------------------------------------- */}
                        <div className="home-div-bundee-welcome">
                        <Card className="bundee-clock">
                            <Card.Header id="bundee-clock-header">
                                    <div id="date-time-div">
                                        <p className="date">Date: {date.toDateString()}</p>
                                        <p className="time">Time: {date.toLocaleTimeString()}</p>
                                    </div>
                            </Card.Header>
                            <Card.Body className="bundee-clock-body">
                                <Card.Title className="bundee-clock-title">Attendance
                                    <Card.Text className="bundee-clock-text">Don't forget to record your attendance</Card.Text>
                                </Card.Title>
                                <div>
                                    <Button className="bundee-buttons" variant="">Punch In</Button>
                                    <span className="punch-span">No Time In recorded</span>
                                </div>
                                <div>
                                    <Button className="bundee-buttons" variant="">Punch Out</Button>
                                    <span className="punch-span">No Time Out recorded</span>
                                </div>
                            </Card.Body>
                        </Card>
{/* ---------------------------------------- End Bundee Clock ---------------------------------------- */}
{/* ---------------------------------------- Announcement Card ---------------------------------------- */}
                        <Card className="welcome-card">
                            <Card.Body className="welcome-body">
                                <Card.Title className="welcome-title">Welcome!</Card.Title>
                                    <Card.Text className="welcome-text">Don't forget to check some important announcement for today.</Card.Text>
                                    <Card.Text className="welcome-text">
                                        “Positive thinking is a valuable tool that can help you overcome obstacles, deal with pain, and reach new goals.” — Amy Morin,
                                    </Card.Text>
                                    <div className="announcement-button-div">
                                        <Button id="see-announcements-button" variant="" onClick={() => setModalShow(true)}><u>See announcements..</u></Button>
                                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                                    </div>
                            </Card.Body>
                        </Card>
{/* ---------------------------------------- End Announcement Card ---------------------------------------- */}
{/* ---------------------------------------- Leave credits Card ---------------------------------------- */}
                        <Card className="calendar-card">
                        <Card.Header id="calendar-header">Calendar</Card.Header>
                            <Card.Body className="calendar-body">
                                <Card.Title className="calendar-title">Upcoming Holidays</Card.Title>
                                    <Card.Text className="calendar-text">this is calendar.</Card.Text>
                                    <div className='calendar-div'>
                                    <Button id="calendar-seemore-button" variant="" onClick={() => setModalShow(true)}><u>See more..</u></Button>
                                    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                                    </div>
                            </Card.Body>
                        </Card>
{/* ---------------------------------------- End Leave credits Card ---------------------------------------- */}
                        </div>
{/* ---------------------------------------- End Bundee Clock Div---------------------------------------- */}
{/* ---------------------------------------- Announcements Div---------------------------------------- */}
                        <div className="attendace-leave-credits-div">
{/* ---------------------------------------- Announcements card ---------------------------------------- */}
                            <Card className="attendace-card">
                            <Card.Header id="attendace-header">Announcement</Card.Header>
                                <Card.Body className="attendace-body">
                                    <Card.Title className="attendace-title">Announcement</Card.Title>
                                        <Card.Text className="attendace-text">this are the list of current announcements.</Card.Text>
                                        <div className='attendace-div'>
                                        <Button id="attendace-seemore-button" variant="" onClick={() => setModalShow(true)}><u>See announcements..</u></Button>
                                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                                        </div>
                                </Card.Body>
                            </Card>
{/* ---------------------------------------- End Announcements card ---------------------------------------- */}
{/* ---------------------------------------- Leave credits card ---------------------------------------- */}
                            <Card className="Leave-credits-card">
                            <Card.Header id="Leave-credits-header">Leave Credits</Card.Header>
                                <Card.Body className="Leave-credits-body">
                                    <Card.Title className="Leave-credits-title">2023 Leave Credits</Card.Title>
                                        <Card.Text className="Leave-credits-text">this is your leave credits for the remaining months.</Card.Text>
                                        <div className='Leave-credits-div'>
                                        <Button id="Leave-credits-seemore-button" variant="" onClick={() => setModalShow(true)}>View Leave Summary</Button>
                                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                                        </div>
                            </Card.Body>
                            </Card>
{/* ---------------------------------------- Leave credits card ---------------------------------------- */}
                        </div>
{/* ---------------------------------------- End Announcements Div---------------------------------------- */}

                    </Col>
{/* ---------------------------------------- End 2nd Column Body Left ---------------------------------------- */}
                </Row>
            </div>
        </>

    );
};

export default Home;