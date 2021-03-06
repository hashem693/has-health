import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { useFirestore } from "../firebase/useFirestore";
import "../AZStyles/Appointment.scss";
import { AuthContext } from "../context/Auth";
import firebase from "firebase/app";
import { db } from "../firebase/firebase";

const initialState = {
  location: "",
  day: "",
  time: "",
  specialist: "",
};

function Appointmentz() {
  const [values, setvalues] = useState(initialState);
  const { addDoctor } = useFirestore();

  const handlechange = ({ target }) => {
    setvalues({ ...values, [target.name]: target.value });
  };
  const { user } = useContext(AuthContext);
  const handlesubmit = async (e, usertype) => {
    e.preventDefault();
    await addDoctor(values, usertype);
    setvalues(initialState);
    await db
      .collection("patients")
      .doc(user.uid)
      .update({
        appointments: firebase.firestore.FieldValue.arrayUnion({ ...values }),
      });
  };

  return (
    <Container className="appointmentz py-5">
      <Row className=" py-2">
        <Col lg="12" className="text-center">
          <h2>Request an appointment now</h2>
          <p className="text-muted">
            Fill in you details below and we will contact you to confirm
          </p>
        </Col>
        <Col lg="12">
          <Form
            onSubmit={(e) => {
              handlesubmit(e, "Appointments");
            }}
            className="pt-4"
          >
            <Form.Row>
              <Col lg="6" md="10">
                <Form.Group controlId="formGridSpecialist">
                  <Form.Control
                    as="select"
                    defaultValue="Specialist *"
                    name="specialist"
                    onChange={handlechange}
                    value={values.specialist}
                  >
                    <option class="d-none">Specialist *</option>
                    <option> Bones </option>
                    <option> Dermal </option>
                    <option> Rays </option>
                    <option> Analyzes </option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col lg="6" md="10">
                <Form.Group controlId="formGridLocation">
                  <Form.Control
                    as="select"
                    defaultValue="Preferred Location *"
                    name="location"
                    onChange={handlechange}
                    value={values.location}
                  >
                    <option class="d-none">Preferred Location *</option>
                    <option> Alex </option>
                    <option> Tanta </option>
                    <option> Cairo </option>
                    <option> Giza </option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col lg="6" md="10">
                <Form.Group controlId="formGridApptDt">
                  <Form.Control
                    type="date"
                    placeholder="Appointment Date *"
                    name="day"
                    onChange={handlechange}
                    value={values.day}
                  />
                </Form.Group>
              </Col>
              <Col lg="6" md="10">
                <Form.Group controlId="formGridApptTm">
                  <Form.Control
                    as="select"
                    defaultValue="Appointment Time *"
                    name="time"
                    onChange={handlechange}
                    value={values.time}
                  >
                    <option class="d-none">Appointment Time *</option>
                    <option> Mon???Fri: 8:00am ??? 6:00pm </option>
                    <option> Sat: 9:00am ??? 3:00pm </option>
                    <option> Sun: 10:00am ??? 2:00pm </option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group as={Row}>
              <Col lg="12" md="10">
                <Button type="submit" block>
                  Request Now
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Appointmentz;
