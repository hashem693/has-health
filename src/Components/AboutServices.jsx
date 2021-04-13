import React from "react";
import { Link } from "react-router-dom";
import aboutServicesImg from '../assets/servicescardio.jpg'

function AboutServices() {
  return (
    <section className="container aboutServices py-5">
        <div className="aboutServices pb-2 pt-5 text-center">
            <h2>Our Services</h2>
        </div>
      <div className="row pb-5">
        <div className="col-md-6 mt-4">
          <p>
            No matter what your specialty or service line, we are committed to
            giving physicians the ability to practice medicine the way it was
            intended: patient-centered, constantly evolving, constantly
            improving. Below you will find information on a few of our
            specialties.
          </p>
          <ul className="py-3">
              <li>Behavioral Health</li>
              <li>Orthopaedic Services</li>
              <li>Surgery</li>
              <li>Oncology</li>
              <li>Cardiovascular ... ect.</li>
          </ul>
          <Link className="text-decoration-none about__link px-4 py-2 rounded" to="/services">Read More</Link>
        </div>
        <div className="col-md-6 text-center mt-4">
            <img className="img-fluid w-75" src={aboutServicesImg} alt=""/>
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
