import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form } from 'react-bootstrap';
function AppointmentSlct(props) {
    return (
            // ApptSlctControlId,  ApptSlctdefaultValue,  ApptSlctOptions 
            <Form.Group as={Col} controlId={props.ApptSlctControlId}>
                <Form.Control as="select" defaultValue={props.ApptSlctdefaultValue}>
                    <option className="d-none">{props.ApptSlctdefaultValue}</option>
                    { props.ApptSlctOptions.map(itm => <option> {itm} </option>) }
                </Form.Control>
            </Form.Group>
    )
}

export default AppointmentSlct;
