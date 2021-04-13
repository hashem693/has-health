import React from 'react';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import '../AZStyles/Appointment.scss';
import AppointmentSlct from '../AZComponents/AppointmentSlct';
const SpecialistLst = [ 'Bones', 'Dermal', 'Rays', 'Analyzes' ],
      LocationLst = [ 'Alex', 'Tanta', 'Cairo', 'Giza' ],
      ApptTmLst = [ 'Mon–Fri: 8:00am – 6:00pm', 'Sat: 9:00am – 3:00pm', 'Sun: 10:00am – 2:00pm' ];

class Appointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <Container>
            <Row>
                <Col lg="12">
                <h1 className="text-center">Request an appointment now</h1>
                <p className="text-center">Fill in you details below and we will contact you to confirm</p>
                </Col>
                <Col lg="12">
                <Form>
                    <Form.Row>
                        <Col lg="6" md="10">
                            <AppointmentSlct ApptSlctControlId="formGridSpecialist"  ApptSlctdefaultValue="Specialist *"  ApptSlctOptions={SpecialistLst}/>
                        </Col>
                        <Col lg="6" md="10">                            
                            <AppointmentSlct ApptSlctControlId="formGridLocation"  ApptSlctdefaultValue="Preferred Location *"  ApptSlctOptions={LocationLst}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg="6" md="10">
                            <AppointmentSlct ApptSlctControlId="formGridApptDt"  ApptSlctdefaultValue="Appointment Date *"  ApptSlctOptions={["7/7/1996"]}/>
                        </Col>
                        <Col lg="6" md="10">                            
                            <AppointmentSlct ApptSlctControlId="formGridApptTm"  ApptSlctdefaultValue="Appointment Time *"  ApptSlctOptions={ApptTmLst}/>
                        </Col>
                    </Form.Row>
                    <Form.Group as={Row}>
                        <Col lg="12" md="10">
                            <Button type="submit" block>Request Now</Button>
                        </Col>
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>            
        );
    }
}

export default Appointment;