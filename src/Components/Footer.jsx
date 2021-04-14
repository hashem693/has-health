import React from "react";
import "./Footer.scss";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// style={ {backgroundImage:`url(${Background})`} }
function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 col-sm-12 footer__about">
            <h5 className="pb-3">Has Health</h5>
            <p>
              Our medical specialists care about you & your family’s health.
            </p>
            <p className="py-1">
              We are looking forward to doing well services for you.
            </p>
            <p>Be carefull for yourself.</p>
            <ul className="list-unstyled">
              <li>
                <span>Email: </span>has-health@gmail.com
              </li>
              <li>
                <span>Phone: </span>0282506458
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 footer__hours">
            <h5 className="pb-3">Working Hours</h5>
            <ul className="list-unstyled">
              <li>
                <p>Saturday — Monday</p>
                <p>9:00am — 09:00pm</p>
              </li>
              <li>
                <p>Wednesday</p>
                <p>2:00pm — 10:00pm</p>
              </li>
              <li>
                <p>Thursday</p>
                <p>9:00am — 06:00pm</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 footer__main">
            <h5 className="pb-3">Main</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link exact className="text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none" to="/about">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none" to="/doctors">
                  Doctors
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none" to="/appointment">
                  Make an Appointment
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-12 footer__follow">
            <h5 className="pb-3">Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="mr-2">
                <FaFacebook></FaFacebook>
              </li>
              <li className="mr-2">
                <FaYoutube></FaYoutube>
              </li>
              <li className="mr-2">
                <FaTwitter></FaTwitter>
              </li>
              <li className="mr-2">
                <FaWhatsapp></FaWhatsapp>
              </li>
              <li className="mr-2">
                <FaTelegram></FaTelegram>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyrights text-center">
        <div className="container py-3">
          (C) Copyright 2018 - Has-Health . All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
