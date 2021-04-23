import React from "react";
import "../Awareness.scss";
import img from "../../assets/home-ab-img.png";

function AwarenessAbout() {
  return (
    <section className="Awareness__About py-5">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6 col-sm-12 text-center py-3">
            <img src={img} alt="" />
          </div>
          <div className="col-md-6 col-sm-12 py-3">
            <p className="distincit">COVID-19 the disease</p>
            <div className="pt-2">
              <h3 className="pb-2">About the Coronavirus</h3>
              <p className="text-muted">
                Coronavirus disease 2019 (COVID-19) is an infectious disease
                caused by severe acute respiratory syndrome coronavirus 2. The
                disease was first identified in 2019 in Wuhan, the capital of
                Hubei, China, and has since spread globally, resulting in the
                2019–2020 coronavirus pandemic.
              </p>
            </div>
            <div className="pt-3">
              <h3 className="pb-2">What is the COVID-19?</h3>
              <p className="text-muted">
                COVID-19 is a new strain of coronavirus that has not been
                previously identified in humans. It was first identified in
                Wuhan, Hubei Province, China, where it has caused a large and
                ongoing outbreak. It has since spread more widely in China.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwarenessAbout;
