import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import "../AZStyles/SignIn.scss";
import { FaUserMd, FaUser } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";
import logo from "../assets/logo4.jpg";

const initialState = { email: "", password: "" };

function SignIn() {
  const history = useHistory();
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      setInput(initialState);
      // history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const radios = [
    {
      name: <FaUserMd className="h2" />,
      value: "1",
      title: "doctor",
    },
    { name: <FaUser className="h2" />, value: "2", title: "patient" },
  ];
  const [radioValue, setRadioValue] = useState("1");
  return (
    <Container className="SignIn py-5">
      <Row className="py-3">
        <Col lg="8" className="text-center m-auto">
          <img src={logo} alt="logo" />
          <h3 className="py-4">Sign in</h3>
          <Form onSubmit={handleSubmit}>
            {/* <ButtonGroup toggle className="my-3">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  variant="white"
                  name="radio"
                  // value={radio.value}
                  // checked={radioValue === radio.value}
                  onChange={() => setRadioValue(radio.value)}
                  className={
                    radioValue == radio.value ? "text-primary" : "text-dark"
                  }
                >
                  {radio.name}
                  <p>{radio.title}</p>
                </ToggleButton>
              ))}
            </ButtonGroup> */}
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={input.email}
                autoComplete="off"
                onChange={handleChange}
                name="email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={input.password}
                autoComplete="off"
                onChange={handleChange}
                name="password"
              />
            </Form.Group>
            <Button className="mt-3 px-4 py-2" variant="primary" type="submit">
              Sign In
            </Button>
            <Form.Group controlId="formBasicSignupLink">
              <Form.Text>
                <p className="mt-4 text-muted">
                  Don't have an account{" "}
                  <Link className="Link" to="/signup">
                    Sign Up
                  </Link>{" "}
                </p>
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
