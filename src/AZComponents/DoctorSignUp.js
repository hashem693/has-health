import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
function DoctorSignUp() {
    return (
        <Container>
            <Row className="mt-4">
                <Col lg="12" className="text-center">
                <img src="" alt="Logo"/>
                </Col>
                <Col lg="12">
                <Form>
                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="text" placeholder="Name *" />
                            </Form.Group>
                        </Col>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formBasicPhone">
                                <Form.Control type="text" placeholder="Phone *" />
                            </Form.Group>
                        </Col>
                        </Form.Row>
                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formBasicGender">
                                <Form.Control type="text" placeholder="Gender *" />
                            </Form.Group>
                        </Col><Col lg="6" md="10">
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
                        </Col><Col lg="6" md="10">
                            <Form.Group controlId="formBasicConfirmPassword">
                                <Form.Control type="password" placeholder="Confirm Password *" />
                            </Form.Group>
                        </Col>
                        </Form.Row>
                        <Form.Group as={Row}>
                            <Col lg="12" md="10">
                                <Button type="submit" block>Sign Up</Button>
                            </Col>
                        </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default DoctorSignUp;
