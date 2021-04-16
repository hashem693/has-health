import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "../customhooks/useForm";

function DoctorSignUp() {
  const { handlechange, handlesubmit, values } = useForm();

  return (
    <Container>
      <Row className="mt-4">
        <Col lg="12" className="text-center">
          <img src="" alt="Logo" />
        </Col>
        <h2 className="text-center">SignUp</h2>

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
                </Form.Group>
              </Col>
              <Col lg="6" md="10">
                <Form.Group controlId="formBasiclicense">
                  <Form.Control
                    type="number"
                    placeholder="license *"
                    name="license"
                    value={values.license}
                    onChange={handlechange}
                  />
                </Form.Group>
              </Col>
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
            </Form.Row>
            <Form.Row>
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
              <Col lg="6" md="10">
                <Form.Group controlId="formBranch">
                  <Form.Control
                    as="select"
                    defaultValue="Branch"
                    name="branch"
                    value={values.branch}
                    onChange={handlechange}
                  >
                    <option class="d-none">Branch</option>
                    <option> Alex </option>
                    <option> Tanta </option>
                    <option> Cairo </option>
                    <option> Giza </option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col lg="6" md="10">
                <Form.Group controlId="formSpecialist">
                  <Form.Control
                    as="select"
                    defaultValue="Specialist"
                    name="specialist"
                    value={values.specialist}
                    onChange={handlechange}
                  >
                    <option class="d-none">Specialist</option>
                    <option> Bones </option>
                    <option> Dermal </option>
                    <option> Rays </option>
                    <option> Analyzes </option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col lg="6" md="10">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email *" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col lg="6" md="10">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password *" />
                </Form.Group>
              </Col>
              <Col lg="6" md="10">
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password *"
                  />
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
