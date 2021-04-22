import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Examination() {
    return (
        <Container>
            <Row className={"justify-content-around align-items-top mt-5"}>
                <Col lg="5" sm="8">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgP5R_KOXCoBwJ5cvTFOLVY9_traSyPFLSQ&usqp=CAU" alt="" className={"d-block img-fluid w-75 mx-auto"}/>                    
                </Col>
                <Col lg="7" sm="10" className={"pl-1 pt-3"}>
                    <h3>Bones Department</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Col>
            </Row>
            <Row className={"justify-content-around align-items-center my-5"}>
                <Col lg="5" sm="8">
                    <h3 className={"text-center mb-4"}>Head of Department</h3>
                    <img src="https://image.freepik.com/free-photo/young-doctor-caucasian-man-sitting-desk-his-working-place-smiling-looking-camera-perfect-medical-service-clinic-happy-future-medicine-healthcare_73740-502.jpg" alt="" className={"d-block mx-auto"} style={{width: '52%', height: '14rem'}}/>                    
                </Col>
                <Col lg="7" sm="10">
                    <section className={"pr-5"}>
                        <h4 className={"mt-4"}>Dr. Greg House</h4>
                        <p>Cardiac Surgeon</p>
                        <p>M.D. valid license to practice medicine. 10+ years’ experience in clinical medicine. 5+ years’ experience in a hospital administration role. Excellent verbal and written communication skills</p>
                        <article className={"clearfix"}>
                            <div className={"d-flex justify-content-between"}>
                                <p>Phone</p>     <p>+800 1234 45 67</p>
                            </div>
                            <div className={"d-flex justify-content-between"}>
                                <p>Years in Practice</p>     <p>6-7 years</p>
                            </div>
                            <div className={"d-flex justify-content-between"}>
                                <p>Mail</p>     <p>info@beclinic.com</p>
                            </div>
                        </article>
                    </section>
                </Col>
            </Row>
            <Row className={"justify-content-around align-items-center mb-5"}>
                <h3 className={"col-12 text-center clearfix"}>Read More</h3>
                <Col lg="4" sm="10" className={"mb-sm-4 mb-xs-4"}>
                    <Link to="./contactus">                
                        <Card style={{ width: '100%', cursor: 'pointer' }}>
                            <Card.Img variant="top" src="data:image/jpeg;base64,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" style={{minHeight: '234px'}}/>
                            <Card.Body>
                                <Card.Title>Dermal Department</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg="4" sm="10" className={"mb-sm-4 mb-xs-4"}>
                    <Link to="./contactus">                
                        <Card style={{ width: '100%', cursor: 'pointer' }}>
                            <Card.Img variant="top" src="https://images01.military.com/sites/default/files/media/global/newscred/2017/02/child-dentist-office-happy-08-feb-2017.jpeg"  style={{minHeight: '234px'}}/>
                            <Card.Body>
                                <Card.Title>Dental Department</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col lg="4" sm="10" className={"mb-sm-4 mb-xs-4"}>
                    <Link to="./contactus">                
                        <Card style={{ width: '100%', cursor: 'pointer' }}>
                            <Card.Img variant="top" src="https://www.novomed.com/wp-content/uploads/2020/05/Novomind-Mental-Health-1000x1000.jpg"  style={{minHeight: '234px', maxHeight: '234px'}}/>
                            <Card.Body>
                                <Card.Title>Mental Health</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Examination;
