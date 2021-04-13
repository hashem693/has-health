import React from "react";
import AboutImage from '../assets/about1.png';

function AboutText() {
  return (
    <section className="container aboutText">
      <div className="aboutText__header text-center pt-5 pb-3 ">
        <h2>Who We are!</h2>
      </div>
      <div className="row py-3">
        <div className="col-md-6 col-sm-12">
          <p>
            Has-Health Healthcare is dedicated to giving people a healthier
            tomorrow. As one of the nation's leading providers of healthcare
            services, HCA Healthcare is comprised of more than 10 medical Center at Egypt.
          </p>
          <p className="py-4">
            At Has-Health Healthcare, we are excited about the future of medicine. We
            believe we are uniquely positioned to play a leading role in the
            transformation of care.
          </p>
          <p>We are proud of the impact we have in our communities through employment, investment and charitable giving.</p>
        </div>
        <div className="col-md-6 col-sm-12">
            <img className="img-fluid w-100" src={AboutImage} alt="aboutus"/>
        </div>
      </div>
    </section>
  );
}

export default AboutText;
