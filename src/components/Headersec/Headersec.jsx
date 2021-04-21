import React from "react";
import { Carousel } from "react-bootstrap";
import pic2 from "../../assets/home1.jpg";
import pic1 from "../../assets/home2.jpg";
import pic3 from "../../assets/home3.jpg";
import "./headersec.scss";

function Headersec() {
  return (
    <Carousel fade className=" position-relative">
      <Carousel.Item className="high overlay">

        <img className="img-fluid h-100 w-100" src={pic1} alt="First slide" />
        <Carousel.Caption className="caption position-absolute">
          <h1 className="text-white">Has-Health Family</h1>
          <h2 className="text-white">
          A Full services from Our Family to Our Patient.
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="high overlay ">
        <img className="img-fluid h-100 w-100" src={pic2} alt="Second slide" />

        <Carousel.Caption className="caption position-absolute">
        <h1 className="text-white">Has-Health Family</h1>
          <h2 className="text-white">
          A Full services from Our Family to Our Patient.
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="high overlay">
        <img className="img-fluid h-100 w-100" src={pic3} alt="Third slide" />

        <Carousel.Caption className="caption position-absolute">
        <h1 className="text-white">Has-Health Family</h1>
          <h2 className="text-white">
          A Full services from Our Family to Our Patient.
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Headersec;
