import React from 'react';
import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import HeroContent from '../AZComponents/HeroContent';
import MsgForm from '../AZComponents/MsgForm';
import SideBar from '../AZComponents/SideBar';
import '../AZStyles/ContactInfo.scss';
import {FaFacebookF, FaTwitter, FaGooglePlusG, FaRss, FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt, FaRegEnvelope} from 'react-icons/fa';
const sd1icc = [ <FaFacebookF />, <FaTwitter />, <FaGooglePlusG />, <FaRss /> ];
const ContactInfo = () => {
    return (
        <Container className="text-left">
            <Row>
                <Col lg="8" md="12">
                    <HeroContent />
                    <MsgForm />
                </Col>
                <Col lg="4" md="12" className="pt-5">
                    <SideBar head="SOCIALS">
                        <ListGroup horizontal>
                            { sd1icc.map( ic => <ListGroup.Item> <a href=""> {ic} </a> </ListGroup.Item> ) }
                        </ListGroup>
                    </SideBar>

                    <SideBar head="ADDRESS">
                        <FaMapMarkerAlt className="float-left mt-1 mr-1"/>
                        <p className="float-left"><a href=""> 2130 Fulton Street San Diego, <br/> CA 94117-1080 USA </a></p>                    
                    </SideBar>                    
                    
                    <SideBar head="OPENING HOURS">
                        <FaCalendarAlt className="float-left mt-1 mr-1"/>
                        <p  className="float-left">Mon–Fri: 8:00am–6:00pm <br/> Sat: 9:00am–3:00pm <br/> Sun: 10:00am–2:00pm</p>
                    </SideBar>

                    <SideBar head="PHONES">
                        <FaPhoneAlt className="float-left mt-1 mr-1"/>
                        <p  className="float-left"><a href=""> 1-800-1234-567 </a> <br/> <a href=""> 1-800-7654-876 </a></p>                    
                    </SideBar> 

                    <SideBar head="E-MAIL">
                        <FaRegEnvelope className="float-left mr-1"/>
                        <p  className="float-left"><a href=""> info@demolink.org </a></p>
                    </SideBar>  
                </Col>
            </Row>
        </Container>
    );
};

export default ContactInfo;