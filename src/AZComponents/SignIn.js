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
import logo from '../assets/logo4.jpg';
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
    <Container className="SignIn py-5">
      <Row className="py-3">
        <Col lg="8" className="text-center m-auto">
          <img src={logo} alt="logo" />
          <h4 className="py-4">Sign In As</h4>
          <Form>
            <ButtonGroup toggle >
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
                <p className="mt-4 text-muted">Don't have an account <Link className="Link" to="/signup">Sign Up</Link> </p>
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
