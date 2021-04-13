import React from "react";
import Background from "../assets/AboutBg.jpg";

function AboutBg() {
  return (
    <section className="py-5 about__bg" style={{ backgroundImage: `url(${Background})` }}>
      <div className="container py-5 position-relative">
        <div className="py-5 position-absolute about__bg__caption h-100">
          <p className="p-3">A Team Of Medical Professionals </p>
          <p className="p-3 second">To Take Care Of Your Health</p>
        </div>
      </div>
    </section>
  );
}

export default AboutBg;
