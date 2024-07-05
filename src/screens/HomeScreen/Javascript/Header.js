import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
  Image,
  Container,
} from "react-bootstrap";
import iitrlogo from "../../../Images/iitrlogo.png";
import ubalogo from "../../../Images/ubalogo.png";
import "../css/Header.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const [expanded, setExpanded] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/admin");
      setEmail("");
      setPassword("");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Welcome
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <header className="kuchbhi2" style={{ justifyContent: "center" }}>
        <Container className="kuchbhi2" fluid>
          <Row
            className="header-part"
            style={{ background: "#03506f", height: "1rem" }}
          ></Row>
          <Container className="my-3">
            <Row>
              <Col className="text-center" md={3}>
                <a href="https://www.iitr.ac.in/">
                  <img src={iitrlogo} alt="logo img" />
                </a>
              </Col>
              <Col md={6}>
                <Row className="text-center">
                  <h3>UNNAT BHARAT ABHIYAN</h3>{" "}
                </Row>
                <Row className="text-center">
                  <h3>IIT Roorkee</h3>{" "}
                </Row>
              </Col>
              <Col className="text-center" md={3}>
                <a to="/home">
                  <img src={ubalogo} alt="logo img" />
                </a>
              </Col>
            </Row>
          </Container>
        </Container>
        <Navbar
          className="navBar"
          style={{
            background: "#ecc731",
            justifyContent: "center",
            margin: "0 auto",
          }}
          expand="lg"
          expanded={expanded}
        >
          <Container className="navContainer">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="mx-3" href="/">
                  Home
                </Nav.Link>
                <NavDropdown
                  className="mx-3"
                  title="Initiatives"
                  id="initiatives-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="/education">
                    Education
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/health">Health</NavDropdown.Item>
                  <NavDropdown.Item href="/agriculture">
                    Agriculture
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/waste_management">
                    Waste Management
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/shgs">SHGs</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="mx-3"
                  title="Clusters"
                  id="clusters-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="/beladi">Beladi</NavDropdown.Item>
                  <NavDropdown.Item href="/rithaura">
                    Rithaura-Grunt
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/gopalpur">Gopalpur</NavDropdown.Item>
                  <NavDropdown.Item href="/meerpur">Meerpur</NavDropdown.Item>
                  <NavDropdown.Item href="/puranpur">Puranpur</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="mx-3" href="/events">
                  Events
                </Nav.Link>
                <NavDropdown
                  className="mx-3"
                  title="Teams"
                  id="teams-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="/faculty">Faculty</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown title="Student Teams" id="nested-dropdown">
                    <NavDropdown.Item href="/studentteam">
                      Team 2023-24
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Studentteam22_23">
                      Team 2022-23
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Studentteam21_22">
                      Team 2021-22
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Studentteam20_21">
                      Team 2020-21
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <Nav.Link className="mx-3" href="/contact">
                  Contact
                </Nav.Link>
                {isAuthenticated ? (
                  <div className="dropdown mx-3">
                    <button
                      className="btn btn-info dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Admin
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/admin">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/"
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <button
                    style={{ marginLeft: "15px" }}
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Login
                  </button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
