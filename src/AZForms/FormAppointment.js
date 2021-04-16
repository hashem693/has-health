import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UseForm from './useForm';
import FormValidate from './formValidate';
import 'bootstrap/dist/css/bootstrap.min.css';
function FormAppointment({ submitForm }) {

    const { handleChange, values, handleSubmit, errors } = UseForm(submitForm, FormValidate);
    return (
        <Container>
            <Row>
                <Col lg="12">
                    <h2 className="text-center">Request an appointment now</h2>
                    <p className="text-center">Fill in you details below and we will contact you to confirm</p>
                </Col>
                <Col lg="12">
                    <Form onSubmit={handleSubmit} className="w-75 mx-auto mt-3">
                    <Form.Row>
                    <Col lg="6" md="10">
                        <Form.Group controlId="formGridSpecialist">
                            <Form.Control as="select" defaultValue="Specialist *" name="apptspec"   value={values.apptspec}  onChange={handleChange}>
                                <option class="d-none">Specialist *</option>
                                <option> Bones </option>
                                <option> Dermal </option>
                                <option> Rays </option>
                                <option> Analyzes </option>
                            </Form.Control>
                            {errors.apptspec && <p className="alert alert-danger" role="alert">{errors.apptspec}</p>}
                        </Form.Group>
                    </Col>
                    <Col lg="6" md="10">
                        <Form.Group controlId="formGridLocation">                                
                                <Form.Control as="select" defaultValue="Preferred Location *" name="apptprloc"   value={values.apptprloc}  onChange={handleChange}>
                                    <option class="d-none">Preferred Location *</option>
                                    <option> Alex </option>
                                    <option> Tanta </option>
                                    <option> Cairo </option>
                                    <option> Giza </option>                                
                                </Form.Control>
                                {errors.apptprloc && <p className="alert alert-danger" role="alert">{errors.apptprloc}</p>}
                        </Form.Group>
                    </Col>
                    </Form.Row>
                    <Form.Row>
                    <Col lg="6" md="10">
                        <Form.Group controlId="formGridApptDt">                                
                                <Form.Control type="date" placeholder="Appointment Date *" name="apptdt"   value={values.apptdt}  onChange={handleChange}/>
                                {errors.apptdt && <p className="alert alert-danger" role="alert">{errors.apptdt}</p>}
                        </Form.Group>
                    </Col>
                    <Col lg="6" md="10">
                        <Form.Group controlId="formGridApptTm">                                
                                <Form.Control as="select" defaultValue="Appointment Time *" name="appttm"   value={values.appttm}  onChange={handleChange}>
                                    <option class="d-none">Appointment Time *</option>
                                    <option> Mon–Fri: 8:00am – 6:00pm </option>
                                    <option> Sat: 9:00am – 3:00pm </option>
                                    <option> Sun: 10:00am – 2:00pm </option>                                
                                </Form.Control>
                                {errors.appttm && <p className="alert alert-danger" role="alert">{errors.appttm}</p>}
                        </Form.Group>
                    </Col>
                    </Form.Row>
                    <Form.Group as={Row}>
                        <Col lg="12" md="10">
                            <Button type="submit" block>Request Now</Button>
                        </Col>
                    </Form.Group>
                    <div className="successMsd px-5 justify-content-end align-items-center d-none">
                        <Form.Text className="text-success mr-2 h5">Data send</Form.Text>
                        <Button variant="danger" className="h6" onClick={() => {
                                    document.querySelector(".successMsd").classList.remove("d-flex");
                                    //document.querySelector(".successMsd").classList.add("d-none"); 
                                    //document.querySelector(".successMsd").classList.toggle("d-none", "d-flex");                                   
                            }}>X</Button>
                    </div>
                </Form>
                
                </Col>
            </Row>
        </Container>
    )
}

export default FormAppointment;
