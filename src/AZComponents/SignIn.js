import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../AZStyles/SignIn.scss';
import { FaUserMd, FaUser } from 'react-icons/fa';
export class SignIn extends Component {
    constructor(){
        super()
        this.state = { cusClass: 'deActive' }
    }
    handleClick(){
        this.setState( {cusClass: 'onActive'} )
    }
    render() {
        return (
            <Container>
            <Row>
                <Col lg="8" className="text-center">
                    <img src="" alt="logo"/>
                    <h3>Sign in as</h3>     
                    {/*<section>
                        <div className={this.state.cusClass} onClick={() => this.handleClick.bind(this)}><FaUserMd />  <p>Doctor</p></div>
                        <div className={this.state.cusClass} onClick={() => this.handleClick.bind(this)}><FaUser />  <p>Visitor</p></div>
                    </section>*/}
                    <Form>
                        <Form.Group as={Row}>                            
                            <Col lg={8}>
                                {/*<Form.Check type="radio"    label={<FaUser />}    name="formHorizontalRadios"   id="formHorizontalRadios2"         checked  inline/>*/}
                                <Form.Check type="radio"    name="formHorizontalRadios"
                                            id="formHorizontalRadios1"         inline/>
                                <label htmlFor="formHorizontalRadios1" className={this.state.cusClass} onClick={() => this.handleClick()}> 
                                    <FaUserMd /> <p>Doctor</p> </label>

                                <Form.Check type="radio"    name="formHorizontalRadios"
                                            id="formHorizontalRadios2"         inline/>
                                <label htmlFor="formHorizontalRadios2"> <FaUser /> <p>Visitor</p> </label> 
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPasswordForget">
                            <Form.Text className="text-left">Forget Password</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>
                        <Form.Group controlId="formBasicSignupLink">
                            <Form.Text>don't have an account sign up</Form.Text>
                        </Form.Group>
                    </Form>
                </Col>                
            </Row>
        </Container>
        )
    }
}

export default SignIn