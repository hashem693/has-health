import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import '../AZStyles/XRays.scss';

function XRays() {
    return (
        <Container className={"px-5"} id="XraysPContainer">
            <Row className={"justify-content-around align-items-top mt-5"}>
                <Col lg="4" md="4" sm="8" xs="8">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgP5R_KOXCoBwJ5cvTFOLVY9_traSyPFLSQ&usqp=CAU" alt="" className={"d-block img-fluid w-100"}/>
                </Col>
                <Col lg="8" md="8" sm="10" xs="10" className={"pl-1 pt-3"}>
                    <h3>Bones Department</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Col>
            </Row>

            <Row className={"justify-content-around align-items-top my-5"}>
                <Col sm="8" xs="8" className={" d-lg-none d-md-none d-sm-block d-xs-block "}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgP5R_KOXCoBwJ5cvTFOLVY9_traSyPFLSQ&usqp=CAU" alt="" className={"d-block img-fluid w-100"} />
                </Col>
                <Col lg="8" md="8" sm="10" xs="10" className={"pt-3"} >
                    <h3>Bones Department</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Col>
                <Col lg="4" md="4" className={" d-none d-lg-block d-md-block d-sm-none d-xs-none "}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgP5R_KOXCoBwJ5cvTFOLVY9_traSyPFLSQ&usqp=CAU" alt="" className={"d-block img-fluid w-100"} />
                </Col>
            </Row>

            <Row className={"justify-content-around align-items-top mb-5"}>
                <Col lg="4" md="4" sm="8" xs="8">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgP5R_KOXCoBwJ5cvTFOLVY9_traSyPFLSQ&usqp=CAU" alt="" className={"d-block img-fluid w-100"}/>
                </Col>
                <Col lg="8" md="8" sm="10" xs="10" className={"pl-1 pt-3"}>
                    <h3>Bones Department</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Col>
            </Row>

            <Row className={"justify-content-around align-items-center my-5"}>
                <h3 className={"col-12 text-center text-lg-left text-md-left text-sm-center text-xs-center pl-3 clearfix mb-4"}>Head of Department</h3>
                
                <Col lg="5" md="5" sm="8" xs="8">                    
                    <img src="https://image.freepik.com/free-photo/young-doctor-caucasian-man-sitting-desk-his-working-place-smiling-looking-camera-perfect-medical-service-clinic-happy-future-medicine-healthcare_73740-502.jpg" alt="" className={"d-block mx-auto"} style={{width: '52%', height: '14rem'}}/>                    
                    <div className={"w-75 mx-auto d-none mt-2 justify-content-around align-items-center d-lg-flex d-md-flex d-sm-none d-xs-none px-md-2"} style={{ padding: '0rem 6rem' }}>
                        <a href="#"><FaFacebookF className={"d-block"} /></a>
                        <a href="#"><FaTwitter className={"d-block"} /></a>
                    </div>
                </Col>
                
                <Col lg="7" md="7" sm="10" xs="10">
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
                            <div className={"d-flex justify-content-start  align-items-center d-lg-none d-md-none d-sm-flex d-xs-flex"}>
                                <span className={"d-block mr-4"}>Follow </span> 
                                <a href="#"><FaFacebookF className={"d-block mr-4"} /></a>
                                <a href="#"><FaTwitter className={"d-block mr-4"} /></a>
                            </div>
                        </article>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default XRays;
