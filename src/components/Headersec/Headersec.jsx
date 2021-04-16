import React from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "../../images/nurses-patients-care-procedures.jpg";
import pic2 from "../../images/WCH_Landing_Surgical_Program.7eea0cddef5edc7011b32ef11fd97ad1.jpg";
import pic3 from "../../images/surgery-landing-hero_0.jpg";
import "./headersec.scss";

function Headersec() {
  return (
    <Carousel fade className=" position-relative">
      <Carousel.Item className="high overlay">

        <img className="img-fluid h-100 w-100" src={pic1} alt="First slide" />
        <Carousel.Caption>
          <h1>Has health</h1>
          <p className="text-white">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="high overlay">
        <img className="img-fluid h-100 w-100" src={pic2} alt="Second slide" />

        <Carousel.Caption>
          <h1>Has health</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="high overlay">
        <img className="img-fluid h-100 w-100" src={pic3} alt="Third slide" />

        <Carousel.Caption>
          <h1>Has health</h1>
          <p className="text-white">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Headersec;
