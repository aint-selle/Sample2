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

const PersonalInformationSecondPage = () => {
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
                                            <div className="second-page-first-div">
                                                <div className="citizenship-div">
                                                <label className="citizenship-label">Citizenship</label>
                                                <Form.Select className="citizenship-form" aria-label="Default select citizenship">
                                                    <option value="Afghan">Afghan</option> 
                                                    <option value="Albanian">Albanian</option> 
                                                    <option value="Algerian">Algerian</option> 
                                                    <option value="American">American</option> 
                                                    <option value="Andorran">Andorran</option> 
                                                    <option value="Angolan">Angolan</option> 
                                                    <option value="Anguillan">Anguillan</option> 
                                                    <option value="Citizen-of-Antigua-and-Barbuda">Citizen of Antigua and Barbuda</option> 
                                                    <option value="Argentine">Argentine</option> 
                                                    <option value="Armenian">Armenian</option> 
                                                    <option value="Australian">Australian</option> 
                                                    <option value="Austrian">Austrian</option> 
                                                    <option value="Azerbaijani">Azerbaijani</option> 
                                                    <option value="Bahamian">Bahamian</option> 
                                                    <option value="Bahraini">Bahraini</option> 
                                                    <option value="Bangladeshi">Bangladeshi</option> 
                                                    <option value="Barbadian">Barbadian</option> 
                                                    <option value="Belarusian">Belarusian</option> 
                                                    <option value="Belgian">Belgian</option> 
                                                    <option value="Belizean">Belizean</option> 
                                                    <option value="Beninese">Beninese</option> 
                                                    <option value="Bermudian">Bermudian</option> 
                                                    <option value="Bhutanese">Bhutanese</option> 
                                                    <option value="Bolivian">Bolivian</option> 
                                                    <option value="Citizen-of-Bosnia-and-Herzegovina">Citizen of Bosnia and Herzegovina</option> 
                                                    <option value="Botswanan">Botswanan</option> 
                                                    <option value="Brazilian">Brazilian</option> 
                                                    <option value="British">British</option> 
                                                    <option value="British-Virgin-Islander">British Virgin Islander</option> 
                                                    <option value="Bruneian">Bruneian</option> 
                                                    <option value="Bulgarian">Bulgarian</option> 
                                                    <option value="Burkinan">Burkinan</option> 
                                                    <option value="Burmese">Burmese</option> 
                                                    <option value="Burundian">Burundian</option> 
                                                    <option value="Cambodian">Cambodian</option> 
                                                    <option value="Cameroonian">Cameroonian</option> 
                                                    <option value="Canadian">Canadian</option> 
                                                    <option value="Cape-Verdean">Cape Verdean</option> 
                                                    <option value="Cayman-Islander">Cayman Islander</option> 
                                                    <option value="Central-African">Central African</option> 
                                                    <option value="Chadian">Chadian</option> 
                                                    <option value="Chilean">Chilean</option> 
                                                    <option value="Chinese">Chinese</option> 
                                                    <option value="Colombian">Colombian</option> 
                                                    <option value="Comoran">Comoran</option> 
                                                    <option value="Congolese-Congo">Congolese (Congo)</option> 
                                                    <option value="Congolese-DRC">Congolese (DRC)</option> 
                                                    <option value="Cook-Islander">Cook Islander</option> 
                                                    <option value="Costa-Rican">Costa Rican</option> 
                                                    <option value="Croatian">Croatian</option> 
                                                    <option value="Cuban">Cuban</option> 
                                                    <option value="Cymraes">Cymraes</option> 
                                                    <option value="Cymro">Cymro</option> 
                                                    <option value="Cypriot">Cypriot</option> 
                                                    <option value="Czech">Czech</option> 
                                                    <option value="Danish">Danish</option> 
                                                    <option value="Djiboutian">Djiboutian</option> 
                                                    <option value="Dominican">Dominican</option> 
                                                    <option value="Citizen-of-the-Dominican-Republic">Citizen of the Dominican Republic</option> 
                                                    <option value="Dutch">Dutch</option> 
                                                    <option value="East-Timorese">East Timorese</option> 
                                                    <option value="Ecuadorean">Ecuadorean</option> 
                                                    <option value="Egyptian">Egyptian</option> 
                                                    <option value="Emirati">Emirati</option> 
                                                    <option value="English">English</option> 
                                                    <option value="Equatorial-Guinean">Equatorial Guinean</option> 
                                                    <option value="Eritrean">Eritrean</option> 
                                                    <option value="Estonian">Estonian</option> 
                                                    <option value="Ethiopian">Ethiopian</option> 
                                                    <option value="Faroese">Faroese</option> 
                                                    <option value="Fijian">Fijian</option> 
                                                    <option value="Filipino">Filipino</option> 
                                                    <option value="Finnish">Finnish</option> 
                                                    <option value="French">French</option> 
                                                    <option value="Gabonese">Gabonese</option> 
                                                    <option value="Gambian">Gambian</option> 
                                                    <option value="Georgian">Georgian</option> 
                                                    <option value="German">German</option> 
                                                    <option value="Ghanaian">Ghanaian</option> 
                                                    <option value="Gibraltarian">Gibraltarian</option> 
                                                    <option value="Greek">Greek</option> 
                                                    <option value="Greenlandic">Greenlandic</option> 
                                                    <option value="Grenadian">Grenadian</option> 
                                                    <option value="Guamanian">Guamanian</option> 
                                                    <option value="Guatemalan">Guatemalan</option> 
                                                    <option value="Citizen-of-Guinea-Bissau">Citizen of Guinea-Bissau</option> 
                                                    <option value="Guinean">Guinean</option> 
                                                    <option value="Guyanese">Guyanese</option> 
                                                    <option value="Haitian">Haitian</option> 
                                                    <option value="Honduran">Honduran</option> 
                                                    <option value="Hong-Konger">Hong Konger</option> 
                                                    <option value="Hungarian">Hungarian</option> 
                                                    <option value="Icelandic">Icelandic</option> 
                                                    <option value="Indian">Indian</option> 
                                                    <option value="Indonesian">Indonesian</option> 
                                                    <option value="Iranian">Iranian</option> 
                                                    <option value="Iraqi">Iraqi</option> 
                                                    <option value="Irish">Irish</option> 
                                                    <option value="Israeli">Israeli</option> 
                                                    <option value="Italian">Italian</option> 
                                                    <option value="Ivorian">Ivorian</option> 
                                                    <option value="Jamaican">Jamaican</option> 
                                                    <option value="Japanese">Japanese</option> 
                                                    <option value="Jordanian">Jordanian</option> 
                                                    <option value="Kazakh">Kazakh</option> 
                                                    <option value="Kenyan">Kenyan</option> 
                                                    <option value="Kittitian">Kittitian</option> 
                                                    <option value="Citizen-of-Kiribati">Citizen of Kiribati</option> 
                                                    <option value="Kosovan">Kosovan</option> 
                                                    <option value="Kuwaiti">Kuwaiti</option> 
                                                    <option value="Kyrgyz">Kyrgyz</option> 
                                                    <option value="Lao">Lao</option> 
                                                    <option value="Latvian">Latvian</option> 
                                                    <option value="Lebanese">Lebanese</option> 
                                                    <option value="Liberian">Liberian</option> 
                                                    <option value="Libyan">Libyan</option> 
                                                    <option value="Liechtenstein-citizen">Liechtenstein citizen</option> 
                                                    <option value="Lithuanian">Lithuanian</option> 
                                                    <option value="Luxembourger">Luxembourger</option> 
                                                    <option value="Macanese">Macanese</option> 
                                                    <option value="Macedonian">Macedonian</option> 
                                                    <option value="Malagasy">Malagasy</option> 
                                                    <option value="Malawian">Malawian</option> 
                                                    <option value="Malaysian">Malaysian</option> 
                                                    <option value="Maldivian">Maldivian</option> 
                                                    <option value="Malian">Malian</option> 
                                                    <option value="Maltese">Maltese</option> 
                                                    <option value="Marshallese">Marshallese</option> 
                                                    <option value="Martiniquais">Martiniquais</option> 
                                                    <option value="Mauritanian">Mauritanian</option> 
                                                    <option value="Mauritian">Mauritian</option> 
                                                    <option value="Mexican">Mexican</option> 
                                                    <option value="Micronesian">Micronesian</option> 
                                                    <option value="Moldovan">Moldovan</option> 
                                                    <option value="Monegasque">Monegasque</option> 
                                                    <option value="Mongolian">Mongolian</option> 
                                                    <option value="Montenegrin">Montenegrin</option> 
                                                    <option value="Montserratian">Montserratian</option> 
                                                    <option value="Moroccan">Moroccan</option> 
                                                    <option value="Mosotho">Mosotho</option> 
                                                    <option value="Mozambican">Mozambican</option> 
                                                    <option value="Namibian">Namibian</option> 
                                                    <option value="Nauruan">Nauruan</option> 
                                                    <option value="Nepalese">Nepalese</option> 
                                                    <option value="New-Zealander">New Zealander</option> 
                                                    <option value="Nicaraguan">Nicaraguan</option> 
                                                    <option value="Nigerian">Nigerian</option> 
                                                    <option value="Nigerien">Nigerien</option> 
                                                    <option value="Niuean">Niuean</option> 
                                                    <option value="North-Korean">North Korean</option> 
                                                    <option value="Northern-Irish">Northern Irish</option> 
                                                    <option value="Norwegian">Norwegian</option> 
                                                    <option value="Omani">Omani</option> 
                                                    <option value="Pakistani">Pakistani</option> 
                                                    <option value="Palauan">Palauan</option> 
                                                    <option value="Palestinian">Palestinian</option> 
                                                    <option value="Panamanian">Panamanian</option> 
                                                    <option value="Papua-New-Guinean">Papua New Guinean</option> 
                                                    <option value="Paraguayan">Paraguayan</option> 
                                                    <option value="Peruvian">Peruvian</option> 
                                                    <option value="Pitcairn-Islander">Pitcairn Islander</option> 
                                                    <option value="Polish">Polish</option> 
                                                    <option value="Portuguese">Portuguese</option> 
                                                    <option value="Prydeinig">Prydeinig</option> 
                                                    <option value="Puerto-Rican">Puerto Rican</option> 
                                                    <option value="Qatari">Qatari</option> 
                                                    <option value="Romanian">Romanian</option> 
                                                    <option value="Russian">Russian</option> 
                                                    <option value="Rwandan">Rwandan</option> 
                                                    <option value="Salvadorean">Salvadorean</option> 
                                                    <option value="Sammarinese">Sammarinese</option> 
                                                    <option value="Samoan">Samoan</option> 
                                                    <option value="Sao-Tomean">Sao Tomean</option> 
                                                    <option value="Saudi-Arabian">Saudi Arabian</option> 
                                                    <option value="Scottish">Scottish</option> 
                                                    <option value="Senegalese">Senegalese</option> 
                                                    <option value="Serbian">Serbian</option> 
                                                    <option value="Citizen-of-Seychelles">Citizen of Seychelles</option> 
                                                    <option value="Sierra-Leonean">Sierra Leonean</option> 
                                                    <option value="Singaporean">Singaporean</option> 
                                                    <option value="Slovak">Slovak</option> 
                                                    <option value="Slovenian">Slovenian</option> 
                                                    <option value="Solomon-Islander">Solomon Islander</option> 
                                                    <option value="Somali">Somali</option> 
                                                    <option value="South-African">South African</option> 
                                                    <option value="South-Korean">South Korean</option> 
                                                    <option value="South-Sudanese">South Sudanese</option> 
                                                    <option value="Spanish">Spanish</option> 
                                                    <option value="Sri-Lankan">Sri Lankan</option> 
                                                    <option value="St-Helenian">St Helenian</option> 
                                                    <option value="St-Lucian">St Lucian</option> 
                                                    <option value="Stateless">Stateless</option> 
                                                    <option value="Sudanese">Sudanese</option> 
                                                    <option value="Surinamese">Surinamese</option> 
                                                    <option value="Swazi">Swazi</option> 
                                                    <option value="Swedish">Swedish</option> 
                                                    <option value="Swiss">Swiss</option> 
                                                    <option value="Syrian">Syrian</option> 
                                                    <option value="Taiwanese">Taiwanese</option> 
                                                    <option value="Tajik">Tajik</option> 
                                                    <option value="Tanzanian">Tanzanian</option> 
                                                    <option value="Thai">Thai</option> 
                                                    <option value="Togolese">Togolese</option> 
                                                    <option value="Tongan">Tongan</option> 
                                                    <option value="Trinidadian">Trinidadian</option> 
                                                    <option value="Tristanian">Tristanian</option> 
                                                    <option value="Tunisian">Tunisian</option> 
                                                    <option value="Turkish">Turkish</option> 
                                                    <option value="Turkmen">Turkmen</option> 
                                                    <option value="Turks-and-Caicos-Islander">Turks and Caicos Islander</option> 
                                                    <option value="Tuvaluan">Tuvaluan</option> 
                                                    <option value="Ugandan">Ugandan</option> 
                                                    <option value="Ukrainian">Ukrainian</option> 
                                                    <option value="Uruguayan">Uruguayan</option> 
                                                    <option value="Uzbek">Uzbek</option> 
                                                    <option value="Vatican-citizen">Vatican citizen</option> 
                                                    <option value="Citizen-of-Vanuatu">Citizen of Vanuatu</option> 
                                                    <option value="Venezuelan">Venezuelan</option> 
                                                    <option value="Vietnamese">Vietnamese</option> 
                                                    <option value="Vincentian">Vincentian</option> 
                                                    <option value="Wallisian">Wallisian</option> 
                                                    <option value="Welsh">Welsh</option> 
                                                    <option value="Yemeni">Yemeni</option> 
                                                    <option value="Zambian">Zambian</option> 
                                                    <option value="Zimbabwean">Zimbabwean</option> 
                                                </Form.Select>
                                                </div>
                                                <div className="nationality-div">
                                                <label className="nationality-label">Nationality</label>
                                                <Form.Select className="nationality-form" aria-label="Default select natioality">
                                                    <option value="Afghan">Afghan</option> 
                                                    <option value="Albanian">Albanian</option> 
                                                    <option value="Algerian">Algerian</option> 
                                                    <option value="American">American</option> 
                                                    <option value="Andorran">Andorran</option> 
                                                    <option value="Angolan">Angolan</option> 
                                                    <option value="Anguillan">Anguillan</option> 
                                                    <option value="Citizen-of-Antigua-and-Barbuda">Citizen of Antigua and Barbuda</option> 
                                                    <option value="Argentine">Argentine</option> 
                                                    <option value="Armenian">Armenian</option> 
                                                    <option value="Australian">Australian</option> 
                                                    <option value="Austrian">Austrian</option> 
                                                    <option value="Azerbaijani">Azerbaijani</option> 
                                                    <option value="Bahamian">Bahamian</option> 
                                                    <option value="Bahraini">Bahraini</option> 
                                                    <option value="Bangladeshi">Bangladeshi</option> 
                                                    <option value="Barbadian">Barbadian</option> 
                                                    <option value="Belarusian">Belarusian</option> 
                                                    <option value="Belgian">Belgian</option> 
                                                    <option value="Belizean">Belizean</option> 
                                                    <option value="Beninese">Beninese</option> 
                                                    <option value="Bermudian">Bermudian</option> 
                                                    <option value="Bhutanese">Bhutanese</option> 
                                                    <option value="Bolivian">Bolivian</option> 
                                                    <option value="Citizen-of-Bosnia-and-Herzegovina">Citizen of Bosnia and Herzegovina</option> 
                                                    <option value="Botswanan">Botswanan</option> 
                                                    <option value="Brazilian">Brazilian</option> 
                                                    <option value="British">British</option> 
                                                    <option value="British-Virgin-Islander">British Virgin Islander</option> 
                                                    <option value="Bruneian">Bruneian</option> 
                                                    <option value="Bulgarian">Bulgarian</option> 
                                                    <option value="Burkinan">Burkinan</option> 
                                                    <option value="Burmese">Burmese</option> 
                                                    <option value="Burundian">Burundian</option> 
                                                    <option value="Cambodian">Cambodian</option> 
                                                    <option value="Cameroonian">Cameroonian</option> 
                                                    <option value="Canadian">Canadian</option> 
                                                    <option value="Cape-Verdean">Cape Verdean</option> 
                                                    <option value="Cayman-Islander">Cayman Islander</option> 
                                                    <option value="Central-African">Central African</option> 
                                                    <option value="Chadian">Chadian</option> 
                                                    <option value="Chilean">Chilean</option> 
                                                    <option value="Chinese">Chinese</option> 
                                                    <option value="Colombian">Colombian</option> 
                                                    <option value="Comoran">Comoran</option> 
                                                    <option value="Congolese-Congo">Congolese (Congo)</option> 
                                                    <option value="Congolese-DRC">Congolese (DRC)</option> 
                                                    <option value="Cook-Islander">Cook Islander</option> 
                                                    <option value="Costa-Rican">Costa Rican</option> 
                                                    <option value="Croatian">Croatian</option> 
                                                    <option value="Cuban">Cuban</option> 
                                                    <option value="Cymraes">Cymraes</option> 
                                                    <option value="Cymro">Cymro</option> 
                                                    <option value="Cypriot">Cypriot</option> 
                                                    <option value="Czech">Czech</option> 
                                                    <option value="Danish">Danish</option> 
                                                    <option value="Djiboutian">Djiboutian</option> 
                                                    <option value="Dominican">Dominican</option> 
                                                    <option value="Citizen-of-the-Dominican-Republic">Citizen of the Dominican Republic</option> 
                                                    <option value="Dutch">Dutch</option> 
                                                    <option value="East-Timorese">East Timorese</option> 
                                                    <option value="Ecuadorean">Ecuadorean</option> 
                                                    <option value="Egyptian">Egyptian</option> 
                                                    <option value="Emirati">Emirati</option> 
                                                    <option value="English">English</option> 
                                                    <option value="Equatorial-Guinean">Equatorial Guinean</option> 
                                                    <option value="Eritrean">Eritrean</option> 
                                                    <option value="Estonian">Estonian</option> 
                                                    <option value="Ethiopian">Ethiopian</option> 
                                                    <option value="Faroese">Faroese</option> 
                                                    <option value="Fijian">Fijian</option> 
                                                    <option value="Filipino">Filipino</option> 
                                                    <option value="Finnish">Finnish</option> 
                                                    <option value="French">French</option> 
                                                    <option value="Gabonese">Gabonese</option> 
                                                    <option value="Gambian">Gambian</option> 
                                                    <option value="Georgian">Georgian</option> 
                                                    <option value="German">German</option> 
                                                    <option value="Ghanaian">Ghanaian</option> 
                                                    <option value="Gibraltarian">Gibraltarian</option> 
                                                    <option value="Greek">Greek</option> 
                                                    <option value="Greenlandic">Greenlandic</option> 
                                                    <option value="Grenadian">Grenadian</option> 
                                                    <option value="Guamanian">Guamanian</option> 
                                                    <option value="Guatemalan">Guatemalan</option> 
                                                    <option value="Citizen-of-Guinea-Bissau">Citizen of Guinea-Bissau</option> 
                                                    <option value="Guinean">Guinean</option> 
                                                    <option value="Guyanese">Guyanese</option> 
                                                    <option value="Haitian">Haitian</option> 
                                                    <option value="Honduran">Honduran</option> 
                                                    <option value="Hong-Konger">Hong Konger</option> 
                                                    <option value="Hungarian">Hungarian</option> 
                                                    <option value="Icelandic">Icelandic</option> 
                                                    <option value="Indian">Indian</option> 
                                                    <option value="Indonesian">Indonesian</option> 
                                                    <option value="Iranian">Iranian</option> 
                                                    <option value="Iraqi">Iraqi</option> 
                                                    <option value="Irish">Irish</option> 
                                                    <option value="Israeli">Israeli</option> 
                                                    <option value="Italian">Italian</option> 
                                                    <option value="Ivorian">Ivorian</option> 
                                                    <option value="Jamaican">Jamaican</option> 
                                                    <option value="Japanese">Japanese</option> 
                                                    <option value="Jordanian">Jordanian</option> 
                                                    <option value="Kazakh">Kazakh</option> 
                                                    <option value="Kenyan">Kenyan</option> 
                                                    <option value="Kittitian">Kittitian</option> 
                                                    <option value="Citizen-of-Kiribati">Citizen of Kiribati</option> 
                                                    <option value="Kosovan">Kosovan</option> 
                                                    <option value="Kuwaiti">Kuwaiti</option> 
                                                    <option value="Kyrgyz">Kyrgyz</option> 
                                                    <option value="Lao">Lao</option> 
                                                    <option value="Latvian">Latvian</option> 
                                                    <option value="Lebanese">Lebanese</option> 
                                                    <option value="Liberian">Liberian</option> 
                                                    <option value="Libyan">Libyan</option> 
                                                    <option value="Liechtenstein-citizen">Liechtenstein citizen</option> 
                                                    <option value="Lithuanian">Lithuanian</option> 
                                                    <option value="Luxembourger">Luxembourger</option> 
                                                    <option value="Macanese">Macanese</option> 
                                                    <option value="Macedonian">Macedonian</option> 
                                                    <option value="Malagasy">Malagasy</option> 
                                                    <option value="Malawian">Malawian</option> 
                                                    <option value="Malaysian">Malaysian</option> 
                                                    <option value="Maldivian">Maldivian</option> 
                                                    <option value="Malian">Malian</option> 
                                                    <option value="Maltese">Maltese</option> 
                                                    <option value="Marshallese">Marshallese</option> 
                                                    <option value="Martiniquais">Martiniquais</option> 
                                                    <option value="Mauritanian">Mauritanian</option> 
                                                    <option value="Mauritian">Mauritian</option> 
                                                    <option value="Mexican">Mexican</option> 
                                                    <option value="Micronesian">Micronesian</option> 
                                                    <option value="Moldovan">Moldovan</option> 
                                                    <option value="Monegasque">Monegasque</option> 
                                                    <option value="Mongolian">Mongolian</option> 
                                                    <option value="Montenegrin">Montenegrin</option> 
                                                    <option value="Montserratian">Montserratian</option> 
                                                    <option value="Moroccan">Moroccan</option> 
                                                    <option value="Mosotho">Mosotho</option> 
                                                    <option value="Mozambican">Mozambican</option> 
                                                    <option value="Namibian">Namibian</option> 
                                                    <option value="Nauruan">Nauruan</option> 
                                                    <option value="Nepalese">Nepalese</option> 
                                                    <option value="New-Zealander">New Zealander</option> 
                                                    <option value="Nicaraguan">Nicaraguan</option> 
                                                    <option value="Nigerian">Nigerian</option> 
                                                    <option value="Nigerien">Nigerien</option> 
                                                    <option value="Niuean">Niuean</option> 
                                                    <option value="North-Korean">North Korean</option> 
                                                    <option value="Northern-Irish">Northern Irish</option> 
                                                    <option value="Norwegian">Norwegian</option> 
                                                    <option value="Omani">Omani</option> 
                                                    <option value="Pakistani">Pakistani</option> 
                                                    <option value="Palauan">Palauan</option> 
                                                    <option value="Palestinian">Palestinian</option> 
                                                    <option value="Panamanian">Panamanian</option> 
                                                    <option value="Papua-New-Guinean">Papua New Guinean</option> 
                                                    <option value="Paraguayan">Paraguayan</option> 
                                                    <option value="Peruvian">Peruvian</option> 
                                                    <option value="Pitcairn-Islander">Pitcairn Islander</option> 
                                                    <option value="Polish">Polish</option> 
                                                    <option value="Portuguese">Portuguese</option> 
                                                    <option value="Prydeinig">Prydeinig</option> 
                                                    <option value="Puerto-Rican">Puerto Rican</option> 
                                                    <option value="Qatari">Qatari</option> 
                                                    <option value="Romanian">Romanian</option> 
                                                    <option value="Russian">Russian</option> 
                                                    <option value="Rwandan">Rwandan</option> 
                                                    <option value="Salvadorean">Salvadorean</option> 
                                                    <option value="Sammarinese">Sammarinese</option> 
                                                    <option value="Samoan">Samoan</option> 
                                                    <option value="Sao-Tomean">Sao Tomean</option> 
                                                    <option value="Saudi-Arabian">Saudi Arabian</option> 
                                                    <option value="Scottish">Scottish</option> 
                                                    <option value="Senegalese">Senegalese</option> 
                                                    <option value="Serbian">Serbian</option> 
                                                    <option value="Citizen-of-Seychelles">Citizen of Seychelles</option> 
                                                    <option value="Sierra-Leonean">Sierra Leonean</option> 
                                                    <option value="Singaporean">Singaporean</option> 
                                                    <option value="Slovak">Slovak</option> 
                                                    <option value="Slovenian">Slovenian</option> 
                                                    <option value="Solomon-Islander">Solomon Islander</option> 
                                                    <option value="Somali">Somali</option> 
                                                    <option value="South-African">South African</option> 
                                                    <option value="South-Korean">South Korean</option> 
                                                    <option value="South-Sudanese">South Sudanese</option> 
                                                    <option value="Spanish">Spanish</option> 
                                                    <option value="Sri-Lankan">Sri Lankan</option> 
                                                    <option value="St-Helenian">St Helenian</option> 
                                                    <option value="St-Lucian">St Lucian</option> 
                                                    <option value="Stateless">Stateless</option> 
                                                    <option value="Sudanese">Sudanese</option> 
                                                    <option value="Surinamese">Surinamese</option> 
                                                    <option value="Swazi">Swazi</option> 
                                                    <option value="Swedish">Swedish</option> 
                                                    <option value="Swiss">Swiss</option> 
                                                    <option value="Syrian">Syrian</option> 
                                                    <option value="Taiwanese">Taiwanese</option> 
                                                    <option value="Tajik">Tajik</option> 
                                                    <option value="Tanzanian">Tanzanian</option> 
                                                    <option value="Thai">Thai</option> 
                                                    <option value="Togolese">Togolese</option> 
                                                    <option value="Tongan">Tongan</option> 
                                                    <option value="Trinidadian">Trinidadian</option> 
                                                    <option value="Tristanian">Tristanian</option> 
                                                    <option value="Tunisian">Tunisian</option> 
                                                    <option value="Turkish">Turkish</option> 
                                                    <option value="Turkmen">Turkmen</option> 
                                                    <option value="Turks-and-Caicos-Islander">Turks and Caicos Islander</option> 
                                                    <option value="Tuvaluan">Tuvaluan</option> 
                                                    <option value="Ugandan">Ugandan</option> 
                                                    <option value="Ukrainian">Ukrainian</option> 
                                                    <option value="Uruguayan">Uruguayan</option> 
                                                    <option value="Uzbek">Uzbek</option> 
                                                    <option value="Vatican-citizen">Vatican citizen</option> 
                                                    <option value="Citizen-of-Vanuatu">Citizen of Vanuatu</option> 
                                                    <option value="Venezuelan">Venezuelan</option> 
                                                    <option value="Vietnamese">Vietnamese</option> 
                                                    <option value="Vincentian">Vincentian</option> 
                                                    <option value="Wallisian">Wallisian</option> 
                                                    <option value="Welsh">Welsh</option> 
                                                    <option value="Yemeni">Yemeni</option> 
                                                    <option value="Zambian">Zambian</option> 
                                                    <option value="Zimbabwean">Zimbabwean</option> 
                                                </Form.Select>
                                                </div>
                                                <div className="language-div">
                                                <label className="language-label">Language Spoken</label>
                                                <Form.Select className="language-form" aria-label="Default select language">
                                                    <option value="American Sign Language">American Sign Language</option> 
                                                    <option value="Amharic (Ethiopia)">Amharic (Ethiopia)</option> 
                                                    <option value="Amoy">Amoy</option> 
                                                    <option value="Arabic">Arabic</option> 
                                                    <option value="Armenian">Armenian</option> 
                                                    <option value="Azerbaijani">Azerbaijani</option> 
                                                    <option value="Belarusian">Belarusian</option> 
                                                    <option value="Bengali">Bengali</option> 
                                                    <option value="Bikol">Bikol</option> 
                                                    <option value="Bosnian">Bosnian</option> 
                                                    <option value="Braille">Braille</option> 
                                                    <option value="Brazilian Portuguese">Brazilian Portuguese</option> 
                                                    <option value="Bulgarian">Bulgarian</option> 
                                                    <option value="Burmese">Burmese</option> 
                                                    <option value="Canadian French">Canadian French</option> 
                                                    <option value="Cantonese">Cantonese</option> 
                                                    <option value="Catalan">Catalan</option> 
                                                    <option value="Cebuano">Cebuano</option> 
                                                    <option value="Cham">Cham</option> 
                                                    <option value="Chamorro-Guam">Chamorro (Guam)</option> 
                                                    <option value="Chinese">Chinese</option> 
                                                    <option value="Chinese-Simplified">Chinese Simplified</option> 
                                                    <option value="Chinese-Traditional">Chinese Traditional</option> 
                                                    <option value="Chiu Chow">Chiu Chow</option> 
                                                    <option value="Chow Jo">Chow Jo</option> 
                                                    <option value="Croatian">Croatian</option> 
                                                    <option value="Czech">Czech</option> 
                                                    <option value="Danish">Danish</option> 
                                                    <option value="Dari">Dari</option> 
                                                    <option value="Dinka-Sudan">Dinka (Sudan)</option> 
                                                    <option value="Dutch">Dutch</option> 
                                                    <option value="English">English</option> 
                                                    <option value="Esperanto">Esperanto</option> 
                                                    <option value="Estonian">Estonian</option> 
                                                    <option value="Faroese">Faroese</option> 
                                                    <option value="Farsi">Farsi</option> 
                                                    <option value="Fijian">Fijian</option> 
                                                    <option value="Finnish">Finnish</option> 
                                                    <option value="Flemish">Flemish</option> 
                                                    <option value="French">French</option> 
                                                    <option value="French-Creole">French Creole</option> 
                                                    <option value="Fukienese">Fukienese</option> 
                                                    <option value="Georgian">Georgian</option> 
                                                    <option value="German">German</option> 
                                                    <option value="Greek">Greek</option> 
                                                    <option value="Gujarati-India">Gujarati (India)</option> 
                                                    <option value="Hainanese">Hainanese</option> 
                                                    <option value="Haitian-Creole">Haitian Creole</option> 
                                                    <option value="Hakka-(China)">Hakka (China)</option> 
                                                    <option value="Hebrew">Hebrew</option> 
                                                    <option value="Hindi">Hindi</option> 
                                                    <option value="Hmong">Hmong</option> 
                                                    <option value="Hungarian">Hungarian</option> 
                                                    <option value="Ibo-Nigeria">Ibo (Nigeria)</option> 
                                                    <option value="Icelandic">Icelandic</option> 
                                                    <option value="Ilocano">Ilocano</option> 
                                                    <option value="Ilongo">Ilongo</option> 
                                                    <option value="Indonesian">Indonesian</option> 
                                                    <option value="Italian">Italian</option> 
                                                    <option value="Japanese">Japanese</option> 
                                                    <option value="Kazakh">Kazakh</option> 
                                                    <option value="Khmer-Cambodia">Khmer (Cambodia)</option> 
                                                    <option value="Kinyarwanda">Kinyarwanda</option> 
                                                    <option value="Kirundi">Kirundi</option> 
                                                    <option value="Kmhmu-Laos">Kmhmu (Laos)</option> 
                                                    <option value="Korean">Korean</option> 
                                                    <option value="Kurdish">Kurdish</option> 
                                                    <option value="Laotian">Laotian</option> 
                                                    <option value="Latin">Latin</option> 
                                                    <option value="Latvian">Latvian</option> 
                                                    <option value="Limited-Resources-Available">Limited Resources Available</option> 
                                                    <option value="Lithuanian">Lithuanian</option> 
                                                    <option value="Macedonian">Macedonian</option> 
                                                    <option value="Malay">Malay</option> 
                                                    <option value="Malayalam">Malayalam</option> 
                                                    <option value="Mandarin">Mandarin</option> 
                                                    <option value="Mandinka">Mandinka</option> 
                                                    <option value="Marathi-India">Marathi (India)</option> 
                                                    <option value="Marshallese">Marshallese</option> 
                                                    <option value="Mien">Mien</option> 
                                                    <option value="Mongolian">Mongolian</option> 
                                                    <option value="Navajo">Navajo</option> 
                                                    <option value="Nepali">Nepali</option> 
                                                    <option value="Norwegian">Norwegian</option> 
                                                    <option value="Nuer-Nilo-Saharan">Nuer (Nilo-Saharan)</option> 
                                                    <option value="Oromo-Ethiopia">Oromo (Ethiopia)</option> 
                                                    <option value="Palauan*">Palauan</option> 
                                                    <option value="Pampangan">Pampangan</option> 
                                                    <option value="Pangasinan">Pangasinan</option> 
                                                    <option value="Pashtu">Pashtu</option> 
                                                    <option value="Phonetic">Phonetic</option> 
                                                    <option value="Polish">Polish</option> 
                                                    <option value="Portuguese">Portuguese</option> 
                                                    <option value="Punjabi">Punjabi</option> 
                                                    <option value="Quechua">Quechua</option> 
                                                    <option value="Real-Time-and-Remote-Captioning">Real Time & Remote Captioning</option> 
                                                    <option value="Romanian">Romanian</option> 
                                                    <option value="Russian">Russian</option> 
                                                    <option value="Samoan">Samoan</option> 
                                                    <option value="Serbian">Serbian</option> 
                                                    <option value="Shanghainese*">Shanghainese</option> 
                                                    <option value="Sherpa*">Sherpa</option> 
                                                    <option value="Shona-Zimbabwe">Shona (Zimbabwe)</option> 
                                                    <option value="Slovak">Slovak</option> 
                                                    <option value="Slovenian">Slovenian</option> 
                                                    <option value="Somali">Somali</option> 
                                                    <option value="Spanish">Spanish</option> 
                                                    <option value="Spanish">Spanish</option> 
                                                    <option value="Swahili">Swahili</option> 
                                                    <option value="Swedish">Swedish</option> 
                                                    <option value="Tactile">Tactile</option> 
                                                    <option value="Tagalog">Tagalog</option> 
                                                    <option value="Taishanese">Taishanese</option> 
                                                    <option value="Taiwanese">Taiwanese</option> 
                                                    <option value="Tamil">Tamil</option> 
                                                    <option value="Thai">Thai</option> 
                                                    <option value="Tibetan">Tibetan</option> 
                                                    <option value="Tigrigna-Ethiopia">Tigrigna (Ethiopia)</option> 
                                                    <option value="Tongan">Tongan</option> 
                                                    <option value="Trukese-Micronesia">Trukese (Micronesia)</option> 
                                                    <option value="Turkish">Turkish</option> 
                                                    <option value="Turkmen">Turkmen</option> 
                                                    <option value="UK English-British English">UK English / British English</option> 
                                                    <option value="Ukrainian">Ukrainian</option> 
                                                    <option value="Urdu-Pakistan">Urdu (Pakistan)</option> 
                                                    <option value="Uzbek">Uzbek</option> 
                                                    <option value="Vietnamese">Vietnamese</option> 
                                                    <option value="Visayan">Visayan</option> 
                                                    <option value="Wolof">Wolof</option> 
                                                    <option value="Xhosa">Xhosa</option> 
                                                    <option value="Yoruba">Yoruba</option> 
                                                    <option value="Zulu">Zulu</option> 
                                                </Form.Select>
                                                </div>
                                                <div className="blood-type-div">
                                                <label className="blood-type-label">Blood Type</label>
                                                <Form.Select className="blood-type-form" aria-label="Default select blood-type">
                                                    <option value="A+">A+</option> 
                                                    <option value="A-">A-</option> 
                                                    <option value="B+">B+</option> 
                                                    <option value="B-">B-</option> 
                                                    <option value="O+">O+</option> 
                                                    <option value="O-">O-</option>
                                                    <option value="AB+">AB+</option>
                                                    <option value="AB-">AB-</option>
                                                </Form.Select>
                                                </div>
                                            </div>
{/* ---------------------------------------- End First Div---------------------------------------- */}
{/* ---------------------------------------- Second Div---------------------------------------- */}
                                            <h3 className="emergency-concact-header">Emergency Contact</h3>
{/* ---------------------------------------- End Second Div---------------------------------------- */}
{/* ---------------------------------------- Third Div---------------------------------------- */}
                                            <div className="second-page-third-div">
                                                <div className="emergency-name-div">
                                                    <label className="emergency-name-label">Name</label>
                                                    <InputGroup className="emergency-name">
                                                        <Form.Control
                                                        className="emergency-name-form"
                                                        aria-label="Default"
                                                        aria-describedby="inputGroup-sizing-default"
                                                        />
                                                    </InputGroup>
                                                </div>
                                                <div className="emergency-address-div">
                                                    <label className="emergency-address-label">Current Address</label>
                                                    <InputGroup className="emergency-address">
                                                        <Form.Control
                                                        className="emergency-address-form"
                                                        aria-label="Default"
                                                        aria-describedby="inputGroup-sizing-default"
                                                        />
                                                    </InputGroup>
                                                </div>
                                                <div className="relationship-div">
                                                    <label className="relationship-label">Relationship</label>
                                                    <InputGroup className="relationship">
                                                        <Form.Control
                                                        className="relationship-form"
                                                        aria-label="Default"
                                                        aria-describedby="inputGroup-sizing-default"
                                                        />
                                                    </InputGroup>
                                                </div>
                                                <div className="emergency-contact-number-div">
                                                    <label className="emergency-contact-number-label">Contact Number</label>
                                                    <InputGroup className="emergency-contact-number">
                                                        <Form.Control
                                                        className="emergency-contact-number-form"
                                                        aria-label="Default"
                                                        aria-describedby="inputGroup-sizing-default"
                                                        />
                                                    </InputGroup>
                                                </div>
                                            </div>
{/* ---------------------------------------- End Third Div---------------------------------------- */}
{/* ---------------------------------------- Fourth Div---------------------------------------- */}
                                            <h3 className="government-contribution-header">Government Contribution Numbers</h3>
{/* ---------------------------------------- End Fourth Div---------------------------------------- */}
{/* ---------------------------------------- Fifth Div---------------------------------------- */}
                                            <div className="second-page-fifth-div">
                                                <div className="pag-ibig-div">
                                                    <label className="pag-ibig-label">PAG-IBIG</label>
                                                    <InputGroup className="pag-ibig">
                                                        <Form.Control
                                                        className="pag-ibig-form"
                                                        aria-label="Default"
                                                        aria-describedby="inputGroup-sizing-default"
                                                        />
                                                    </InputGroup>
                                                </div>
                                                <div className="philhealth-div">
                                                    <label className="philhealth-label">PHILHEALTH</label>
                                                    <InputGroup className="philhealth">
                                                        <Form.Control
                                                        className="philhealth-form"
                                                        aria-label="Default"
                                                        aria-describedby="inputGroup-sizing-default"
                                                        />
                                                    </InputGroup>
                                                </div>
                                                <div className="sss-no-div">
                                                    <label className="sss-no-label">SSS NO.</label>
                                                    <InputGroup className="sss-no">
                                                        <Form.Control
                                                        className="sss-no-form"
                                                        aria-label="Default"
                                                        aria-describedby="inputGroup-sizing-default"
                                                        />
                                                    </InputGroup>
                                                </div>
                                                <div className="tin-no-div">
                                                    <label className="tin-no-label">TIN NO.</label>
                                                    <InputGroup className="tin-no">
                                                        <Form.Control
                                                        className="tin-no-form"
                                                        aria-label="Default"
                                                        aria-describedby="inputGroup-sizing-default"
                                                        />
                                                    </InputGroup>
                                                </div>
                                            </div>
{/* ---------------------------------------- End Fifth Div---------------------------------------- */}
{/* ---------------------------------------- Sixth Div---------------------------------------- */}
                                            <div className="prev-btn-div">
                                                <button type="button" className="prev-btn">Previous</button>
                                            </div>
{/* ---------------------------------------- End Sixth Div---------------------------------------- */}
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

export default PersonalInformationSecondPage;