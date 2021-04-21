import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.scss";
import { FiLogIn } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/logo4.jpg";
import { AuthContext } from "../context/Auth";
import { auth } from "../firebase/firebase";
import { Link } from "@material-ui/core";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const { user } = useContext(AuthContext);

  return (
    <Navbar className="container-fluid px-3" expand="lg">
      <Navbar.Brand>
        <img className="img-fluid mr-2" src={Logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto pt-1">
          <Nav.Link>
            <NavLink className="link text-decoration-none" to="/">
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
                Medical X-rays
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="drop-item">
              <NavLink className="link text-decoration-none" to="/tests">
                Medical Tests
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <NavLink className="link text-decoration-none" to="/insurance">
              Insurance
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink className="link text-decoration-none" to="/awareness">
              Awareness
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink className="link text-decoration-none" to="/contactus">
              Contact Us
            </NavLink>
          </Nav.Link>
        </Nav>
        <Nav.Link className="btn btn-outline-primary book__appointment">
          <NavLink className="link text-decoration-none" to="/appointment">
            Book an Appointment
          </NavLink>
        </Nav.Link>
        {user ? (
          <Nav.Link>
            <Link to="/"
              className="btn profile__Signout btn-primary text-decoration-none"
              onClick={() => auth.signOut()}
            >
              Sign Out <FiLogIn className=" login__icon rounded" />
            </Link>
          </Nav.Link>
        ) : (
          <Nav.Link>
            <NavLink
              className="profile__SignIn py-2 px-4 btn btn-primary text-decoration-none"
              to="/login"
            >
              Sign In
              {/* <FiLogIn className="h2 login__icon rounded mt-2"></FiLogIn> */}
            </NavLink>
          </Nav.Link>
        )}
        {user?.email == "has@gmail.com" && (
          <Nav.Link>
            <NavLink className="link text-decoration-none" to="/profile">
              <FaUserCircle className="h3 mt-2" />
            </NavLink>
          </Nav.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
