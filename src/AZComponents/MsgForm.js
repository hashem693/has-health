import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';

function MsgForm() {
    return (
        <div>
            <h6>TELL US WITH SUGGESTION OR FEEDBACK</h6>
            <Form>
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
    )
}

export default MsgForm;