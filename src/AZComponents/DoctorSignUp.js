import React,{useState} from 'react';
import { useFirestore } from "../firebase/useFirestore";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const initialdoc = { name: "", phone: "" ,gender:""};


function DoctorSignUp() {
    const [doctor, setdoctor] = useState(initialdoc);
    const { addDoctor } = useFirestore();

    const handlechange = ({ target }) => {
        setdoctor({ ...doctor, [target.name]: target.value });
      };

      const handlesubmit = async (e) => {
        e.preventDefault();
        await addDoctor(doctor);
        setdoctor(initialdoc);
      };

    return (
        <Container>
            <Row className="mt-4">
                <Col lg="12" className="text-center">
                <img src="" alt="Logo"/>
                </Col>
                <Col lg="12">
                <Form onSubmit={handlesubmit}>
                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="text" placeholder="Name *" name="name" value={doctor.name} onChange={handlechange}/>
                            </Form.Group>
                        </Col>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formBasicPhone">
                                <Form.Control type="text" placeholder="Phone *" name="phone" value={doctor.phone} onChange={handlechange}/>
                            </Form.Group>
                        </Col>
                        </Form.Row>
                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formBasicGender">
                                <Form.Control type="text" placeholder="Gender *" name="gender" value={doctor.gender} onChange={handlechange}/>
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
