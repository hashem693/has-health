import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "../customhooks/useForm";
import "../AZStyles/DoctorsSignUp.scss";
import logo from "../assets/logo4.jpg";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { db } from "../firebase/firebase";
import validation from "../customhooks/validation/validation";

const initialState = {
  firstName: "",
  lastname: "",
  phone: "",
  gender: "",
  email: "",
  password: "",
  confirmpassword: "",
  appointments: [],
};

function DoctorSignUp() {
  const [values, setvalues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handlechange = ({ target }) => {
    setvalues({ ...values, [target.name]: target.value });
  };
  const addpatient = async (user) => {
    const { firstName, lastname, phone, gender } = values;
    await db
      .collection("patients")
      .doc(user.uid)
      .set({ firstName, lastname, phone, gender });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(values));
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      setvalues(initialState);
      // history.push("/");
      addpatient(user);
    } catch (err) {
      // setError(err.message);
    }
    await addpatient(values);
    setvalues(initialState);
  };

  return (
    <Container className="py-5 SignUp">
      <Row className="py-3">
        <Col lg="12" className="text-center mb-4">
          <img src={logo} alt="Logo" />
          <h4 className=" py-4">Sign Up</h4>
        </Col>
        <Col lg="12">
          <Form
            onSubmit={(e) => {
              handlesubmit(e, "doctors");
            }}
          >
            <Form.Row>
              <Col lg="6" md="10">
                <Form.Group controlId="formBasicfirstName">
                  <Form.Control
                    type="text"
                    placeholder="first name *"
                    name="firstName"
                    value={values.firstName}
                    onChange={handlechange}
                  />
                  {errors.firstName && (
                    <p className="text-danger text-left mt-2 ml-2">
                      {errors.firstName}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col lg="6" md="10">
                <Form.Group controlId="formBasiclastName">
                  <Form.Control
                    type="text"
                    placeholder="last name *"
                    name="lastname"
                    value={values.lastname}
                    onChange={handlechange}
                  />
                  {errors.lastname && (
                    <p className="text-danger text-left mt-2 ml-2">
                      {errors.lastname}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col lg="6" md="10">
                <Form.Group controlId="formBasicPhone">
                  <Form.Control
                    type="text"
                    placeholder="Phone *"
                    name="phone"
                    value={values.phone}
                    onChange={handlechange}
                  />
                </Form.Group>
              </Col>
              <Col lg="6" md="10">
                <Form.Group controlId="formGender">
                  <Form.Control
                    as="select"
                    defaultValue="Gender"
                    name="gender"
                    value={values.gender}
                    onChange={handlechange}
                  >
                    <option class="d-none">Gender</option>
                    <option> Male </option>
                    <option> Female </option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col lg="12" md="10">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email *"
                    autoComplete="off"
                    value={values.email}
                    onChange={handlechange}
                    name="email"
                  />
                  {errors.email && (
                    <p className="text-danger text-left mt-2 ml-2">
                      {errors.email}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col lg="6" md="10">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password *"
                    autoComplete="off"
                    value={values.password}
                    onChange={handlechange}
                    name="password"
                  />
                  {errors.password && (
                    <p className="text-danger text-left mt-2 ml-2">
                      {errors.password}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col lg="6" md="10">
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password *"
                    value={values.confirmpassword}
                    onChange={handlechange}
                    name="confirmpassword"
                  />
                  {errors.confirmpassword && (
                    <p className="text-danger text-left mt-2 ml-2">
                      {errors.confirmpassword}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group as={Row}>
              <Col lg="12" md="10">
                <Button type="submit" block>
                  Sign Up
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DoctorSignUp;
