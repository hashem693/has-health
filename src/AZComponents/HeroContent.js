import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Container} from 'react-bootstrap';

function HeroContent() {
    return (
        <Jumbotron fluid className="pb-0">
            <Container className="pl-0">
                <h3>GET IN TOUCH</h3>
                <hr className="float-left clearfix"/>
                <p>
                    You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our medical center personally.
                    <br /> We would be happy to answer your questions.
                    </p>
            </Container>
        </Jumbotron>
    )
}

export default HeroContent;