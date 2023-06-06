import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import {NavLink} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Form} from 'react-bootstrap';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Carousel} from "react-bootstrap";
import Home from './Home';
// import {Routes, Route, useNavigate} from 'react-router-dom';
// import {Nav} from "react-bootstrap";
// import {Navbar} from "react-bootstrap";
// import {Container} from "react-bootstrap";
// import {NavDropdown} from "react-bootstrap";


function Login() {
  return (
    <>
    {/* <Container fluid>
      <Row>
        <Col sm={12} style={{ padding: '0px' }}>
          <div className="App">
            <header>
                <Navbar collapseOnSelect id="navbarall" expand="lg" variant="dark">
                    <div className="Logo">
                      <img className="image-logo" src="./images/Seda.PNG" alt='Logo'></img>
                    </div>
                    <Navbar.Brand>My Sample Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <NavDropdown title="Select Company" id="collasible-nav-dropdown">
                          <NavDropdown.Item href="#AHRC/3.1">AHRC</NavDropdown.Item>
                          <NavDropdown.Item href="#EHVI/3.2">EHVI</NavDropdown.Item>
                          <NavDropdown.Item href="#ERVI/3.3">ERVI</NavDropdown.Item>
                          <NavDropdown.Item href="#MNHVI/3.4">MNHVI</NavDropdown.Item>
                          <NavDropdown.Item href="#NTHVI/3.5">NTHVI</NavDropdown.Item>
                          <NavDropdown.Item href="#SENTERA/3.6">SENTERA</NavDropdown.Item>
                          <NavDropdown.Divider></NavDropdown.Divider>
                          <NavDropdown.Item href="#OTHERS/3.7">OTHERS</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                      <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"></Form.Control>
                        <Button id="search-button">Search</Button>
                      </Form>
                    </Navbar.Collapse>
                </Navbar>
            </header>
          </div>
      </Col>
      </Row>
      </Container>  */}
      <Card id="card">
        <div className="logo">
            <img className="image-logo" src="./images/Seda.PNG" alt='Logo'></img>
        </div>
        <Row className="row">
          <Col className="col-md-8">
          <Carousel className="carousel text-center">
                <Carousel.Item>
                  <img
                    className="carousel-image-1"
                    src="./images/SEDA/OurHotels-CapitolCentral.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA Capitol Central, Bacolod</h3>
                    <p>Lacson Street cor. North Capitol Road, Bacolod City 6100, Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-image-2"
                    src="./images/SEDA/15390-Seda-Centrio-01Exterior COD.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA Centrio, Cagayan De Oro</h3>
                    <p>C.M. Recto cor. Corrales Avenue, Cagayan de Oro City 9000, Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-image-3"
                    src="./images/SEDA/OurHotels-SedaAyalaCenterCebu.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA Ayala Center, Cebu</h3>
                    <p>Cardinal Rosales Avenue Cebu Business Park,Cebu City 6000, Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-image-4"
                    src="./images/SEDA/Brand-Seda-Central-Bloc-Cebu02.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA Central Bloc, Cebu</h3>
                    <p>Cebu I.T. Park, Padriga Street, Apas Cebu City 6000, Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-image-5"
                    src="./images/SEDA/22013-SedaAbreeza-01Facade.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA Abreeza, Davao</h3>
                    <p>J.P. Laurel Avenue, Bajada, Davao City 8000, Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-image-6"
                    src="./images/SEDA/Atria-Facade.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA Atria, Iloilo</h3>
                    <p>Pison Avenue, Atria Park District, San Rafael, Mandurriao Iloilo City 5000, Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-image-7"
                    src="./images/SEDA/18310-SedaNuvali_02Facade.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA Nuvali, Laguna</h3>
                    <p>Lakeside Evozone, NUVALI Sta. Rosa, Laguna 4026, Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-image-8"
                    src="./images/SEDA/SedaResidencesMakati_OurHotels.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA Residences, Makati</h3>
                    <p>Ayala Avenue Corner Salcedo Street Legazpi Village, Makati, 1229 Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-image-9"
                    src="./images/SEDA/OurHotels-SedaLio.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA Lio, Palawan</h3>
                    <p>Lio Tourism Estate, Bgy. Villa Libertad El Nido, Palawan 5313, Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-image-10"
                    src="./images/SEDA/22013-SedaVertisNorth-02Facade.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA Vertis North, Quezon City</h3>
                    <p>Astra cor. Lux Drives, Vertis North Quezon City 1105, Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-image-11"
                    src="./images/SEDA/OurHotels-SedaBGC.webp"
                    alt=""
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>SEDA BGC, Taguig</h3>
                    <p>30th Street cor. 11th Avenue Taguig City 1634, Philippines</p>
                    <NavLink href="#seemore">See more...</NavLink>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
          </Col>
          <Col className="col-md-4">
            <div className="card-body">
                <Form className="login-form">
                  <Form.Group className="email" controlId="formGroupEmail">
                  <div className="verical-line"></div>
                    <div className="introduction">
                      <h5>Hello!</h5>
                      <h8>Welcome back, Please Login your account.</h8>
                      <p></p>
                    </div>
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="password" controlId="formGroupPassword">
                    <Form.Label></Form.Label>
                    <p></p>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form>
                {/* <Container>
                <Row className="password-login">
                  <Col className="forgot-password">
                    <Button variant="link" style={{color: "white"}} className="forgot-password-btn btn-sm">Forgot Password</Button>
                  </Col>
                  <Col className="login">
                    <Button onClick={Home} variant="outline-light" style={{color: "white"}} className="login-btn btn-sm">
                        Log In
                    </Button>
                  </Col>
                </Row>
              </Container> */}
              <div className="forgot-password-and-login-div">
                <Button variant="link" style={{color: "white"}} className="forgot-password-btn btn-sm">Forgot Password</Button>
                <Button onClick={Home} variant="outline-light" style={{color: "white"}} className="login-btn btn-sm">
                        Log In
                </Button>
              </div>
              <Container>
                <div className="copyright-text">
                  <p>Copyright © 2023|Powered by HCX Tech Team</p>
                </div>
              </Container>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Login;
