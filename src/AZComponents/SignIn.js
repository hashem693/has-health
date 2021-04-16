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
import { Link } from "react-router-dom";
import SignUp from "../components/signUp/SignUp";

function SignIn() {
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
    <Container>
      <Row>
        <Col lg="8" className="text-center">
          <img src="" alt="logo" />
          <h3>Sign in as</h3>
          <Form>
            <ButtonGroup toggle className="my-3">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  variant="white"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  className={radio.value ? "text-primary" : "text-white"}
                >
                  {radio.name}
                  <p>{radio.title}</p>
                </ToggleButton>
              ))}
            </ButtonGroup>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordForget">
              <Form.Text className="text-left">Forget Password</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
            <Form.Group controlId="formBasicSignupLink">
              <Form.Text>
                don't have an account <Link to="/signup">sign up</Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
