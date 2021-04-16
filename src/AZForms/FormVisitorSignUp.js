import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UseForm from './useForm';
import FormValidate from './formValidate';
import { FaUser } from 'react-icons/fa';
function FormVisitorSignUp({ submitForm }) {
    const { handleChange, values, handleSubmit, errors } = UseForm(submitForm, FormValidate);
    return (
        <Container>
            <Row>
                <Col lg="12" className="text-center">
                {/*<img src="" alt="Logo"/>*/}
                <h2>Has health <FaUser /> </h2>
                </Col>
                <Col lg="12">
                <Form onSubmit={handleSubmit} className="w-75 mx-auto mt-3">
                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formName">
                                <Form.Control type="text" placeholder="Name *" name="vnm"   value={values.vnm}  onChange={handleChange}/>
                                {errors.vnm && <p className="alert alert-danger" role="alert">{errors.vnm}</p>}
                            </Form.Group>
                        </Col>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formAddress">
                                <Form.Control type="text" placeholder="Address" name="vadd"   value={values.vadd}  onChange={handleChange}/>
                                {errors.vadd && <p className="alert alert-danger" role="alert">{errors.vadd}</p>}
                            </Form.Group>
                        </Col>
                        </Form.Row>

                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="Email *" name="dceml"   value={values.dceml}  onChange={handleChange}/>
                                {errors.dceml && <p className="alert alert-danger" role="alert">{errors.dceml}</p>}
                            </Form.Group>
                        </Col><Col lg="6" md="10">
                            <Form.Group controlId="formPhone">
                                <Form.Control type="text" placeholder="Phone *" name="dcph"   value={values.dcph}  onChange={handleChange}/>
                                {errors.dcph && <p className="alert alert-danger" role="alert">{errors.dcph}</p>}
                            </Form.Group>
                        </Col>
                        </Form.Row>
                        
                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formGender">
                                <Form.Control as="select" defaultValue="Gender" name="dcg" value={values.dcg} onChange={handleChange}>
                                    <option class="d-none">Gender</option>
                                    <option> Male </option>
                                    <option> Female </option>
                                </Form.Control>
                                {errors.dcg && <p className="alert alert-danger" role="alert">{errors.dcg}</p>}
                            </Form.Group>
                        </Col><Col lg="6" md="10">
                            <Form.Group controlId="formDateBirth">
                                <Form.Control type="date" placeholder="Date of Birth *" name="vdb"   value={values.vdb}  onChange={handleChange}/>
                                {errors.vdb && <p className="alert alert-danger" role="alert">{errors.vdb}</p>}
                            </Form.Group>
                        </Col>
                        </Form.Row>

                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formPassword">
                                <Form.Control type="password" placeholder="Password *" name="dcpass"   value={values.dcpass}  onChange={handleChange}/>
                                {errors.dcpass && <p className="alert alert-danger" role="alert">{errors.dcpass}</p>}
                            </Form.Group>
                        </Col><Col lg="6" md="10">
                            <Form.Group controlId="formConfirmPassword">
                                <Form.Control type="password" placeholder="Confirm Password *" name="dcpassconf"   value={values.dcpassconf}  onChange={handleChange}/>
                                {errors.dcpassconf && <p className="alert alert-danger" role="alert">{errors.dcpassconf}</p>}
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

export default FormVisitorSignUp;
