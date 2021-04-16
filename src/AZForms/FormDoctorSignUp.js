import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UseForm from './useForm';
import FormValidate from './formValidate';
import { FaUserMd } from 'react-icons/fa';
function FormDoctorSignUp({ submitForm }) {
    const { handleChange, values, handleSubmit, errors } = UseForm(submitForm, FormValidate);
    return (
        <Container>
            <Row className="mt-4">
                <Col lg="12" className="text-center">
                {/*<img src="" alt="Logo"/>*/}
                <h2>Has health <FaUserMd /> </h2>
                </Col>
                <Col lg="12">
                <Form onSubmit={handleSubmit} className="w-75 mx-auto mt-3">
                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formFirstName">
                                <Form.Control type="text" placeholder="First Name" name="dcfnm"   value={values.dcfnm}  onChange={handleChange}/>
                                {errors.dcfnm && <p className="alert alert-danger" role="alert">{errors.dcfnm}</p>}
                            </Form.Group>
                        </Col>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formLastName">
                                <Form.Control type="text" placeholder="Last Name" name="dclnm"   value={values.dclnm}  onChange={handleChange}/>
                                {errors.dclnm && <p className="alert alert-danger" role="alert">{errors.dclnm}</p>}
                            </Form.Group>
                        </Col>
                        </Form.Row>

                        <Form.Row>
                        <Col lg="6" md="10">
                        <Form.Group controlId="formGender">
                                <Form.Control as="select" defaultValue="Gender" name="dcg"   value={values.dcg}  onChange={handleChange}>
                                    <option class="d-none">Gender</option>
                                    <option> Male </option>
                                    <option> Female </option>
                                </Form.Control>
                                {errors.dcg && <p className="alert alert-danger" role="alert">{errors.dcg}</p>}
                            </Form.Group>
                        </Col>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formPhone">
                                <Form.Control type="text" placeholder="Phone *" name="dcph"   value={values.dcph}  onChange={handleChange}/>
                                {errors.dcph && <p className="alert alert-danger" role="alert">{errors.dcph}</p>}
                            </Form.Group>
                        </Col>
                        </Form.Row>
                        
                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formSpecialist">
                                <Form.Control as="select" defaultValue="Specialist" name="dcspc"   value={values.dcspc}  onChange={handleChange}>
                                    <option class="d-none">Specialist</option>
                                    <option> Bones </option>
                                    <option> Dermal </option>
                                    <option> Rays </option>
                                    <option> Analyzes </option>
                                </Form.Control>
                                {errors.dcspc && <p className="alert alert-danger" role="alert">{errors.dcspc}</p>}
                            </Form.Group>
                        </Col>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formBranch">                                
                                    <Form.Control as="select" defaultValue="Branch" name="dcb"   value={values.dcb}  onChange={handleChange}>
                                        <option class="d-none">Branch</option>
                                        <option> Alex </option>
                                        <option> Tanta </option>
                                        <option> Cairo </option>
                                        <option> Giza </option>                                
                                    </Form.Control>
                                    {errors.dcb && <p className="alert alert-danger" role="alert">{errors.dcb}</p>}
                            </Form.Group>
                        </Col>
                        </Form.Row>

                        <Form.Row>
                        <Col lg="6" md="10">
                            <Form.Group controlId="formLicense">
                                <Form.Control type="text" placeholder="license" name="dclcs"   value={values.dclcs}  onChange={handleChange}/>
                                {errors.dclcs && <p className="alert alert-danger" role="alert">{errors.dclcs}</p>}
                            </Form.Group>
                        </Col><Col lg="6" md="10">
                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="Email *" name="dceml"   value={values.dceml}  onChange={handleChange}/>
                                {errors.dceml && <p className="alert alert-danger" role="alert">{errors.dceml}</p>}
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

export default FormDoctorSignUp;
