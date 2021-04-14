import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import "./NavBar.scss";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <Navbar className="container-fluid py-4 px-3" expand="lg">
      <Navbar.Brand>Has Health</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link>
            <NavLink className="link text-decoration-none" exact to="/">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink className="link text-decoration-none" to="/about">
              About
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink className="link text-decoration-none" to="/doctors">
              Doctors
            </NavLink>
          </Nav.Link>
          <NavDropdown
            className="link"
            title="Specialties"
            id="basic-nav-dropdown"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <NavDropdown.Item className="drop-item">
              <NavLink className="link text-decoration-none" to="/examination">
                Medical Examination
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-item">
              <NavLink className="link text-decoration-none" to="/x-rays">
                X-rays
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-item">
              <NavLink className="link text-decoration-none" to="/tests">
                Tests
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <NavLink className="link text-decoration-none" to="/insurance">
              Insurance
            </NavLink>{" "}
          </Nav.Link>
          <Nav.Link>
            <NavLink className="link text-decoration-none" to="/awareness">
              Awareness
            </NavLink>{" "}
          </Nav.Link>
          <Nav.Link>
            <NavLink className="link text-decoration-none" to="/contactus">
              Contact Us
            </NavLink>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav.Link className="btn book__appointment">
          <NavLink className="link text-decoration-none" to="/appointment">
            Book an Appointment
          </NavLink>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
