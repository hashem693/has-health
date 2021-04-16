import React from "react";
import {
  Col,
  Container,
  Row,
  Jumbotron,
  ListGroup,
  Form,
  Button,
} from "react-bootstrap";

import "../AZStyles/ContactInfo.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaRss,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
const ContactInfo = () => {
  return (
    <Container className="pt-5 contact">
      <Row className="py-2">
        <Col lg="8" md="12">
          <Jumbotron fluid>
            <Container>
              <h3>GET IN TOUCH</h3>
              <hr className="float-left clearfix" />
              <p>
                You can contact us any way that is convenient for you. We are
                available 24/7 via fax or email. You can also use a quick
                contact form below or visit our medical center personally.
                <br /> We would be happy to answer your questions.
              </p>
            </Container>
          </Jumbotron>

          <div>
            <h6>TELL US WITH SUGGESTION OR FEEDBACK</h6>
            <Form className="py-4">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit" className="px-4">
                SEND MESSAGE
              </Button>
            </Form>
          </div>
        </Col>
        <Col lg="4" md="12" className="pt-5">
          <div className="clearfix mb-5">
            <h6>SOCIALS</h6>
            <hr />
            <ListGroup horizontal>
              <ListGroup.Item>
                {" "}
                <a href="">
                  {" "}
                  <FaFacebookF />{" "}
                </a>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href="">
                  {" "}
                  <FaTwitter />{" "}
                </a>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href="">
                  {" "}
                  <FaGooglePlusG />{" "}
                </a>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href="">
                  {" "}
                  <FaRss />{" "}
                </a>{" "}
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div className="clearfix mb-5">
            <h6>ADDRESS</h6>
            <hr />
            <FaMapMarkerAlt className="float-left mt-1 mr-2" />
            <p className="float-left">
                2130 Fulton Street San Diego, <br /> CA 94117-1080 USA
            </p>
          </div>

          <div className="clearfix mb-5">
            <h6>OPENING HOURS</h6>
            <hr />
            <FaCalendarAlt className="float-left mt-1 mr-2" />
            <p className="float-left">
              Mon–Fri: 8:00am–6:00pm <br /> Sat: 9:00am–3:00pm <br /> Sun:
              10:00am–2:00pm
            </p>
          </div>

          <div className="clearfix mb-5">
            <h6>PHONES</h6>
            <hr />
            <FaPhoneAlt className="float-left mt-1 mr-2" />
            <p className="float-left">
             1-800-1234-567<br />{" "}
               1-800-7654-876 
            </p>
          </div>

          <div className="clearfix mb-5">
            <h6>E-MAIL</h6>
            <hr />
            <FaRegEnvelope className="float-left mr-2" />
            <p >
              <a href="">has-health@gmail.com</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
