import React from "react";
import bg from "../../assets/tracker-map-bg.png";
import "../Awareness.scss";
import icon1 from "../../assets/corona-red-1.png";
import icon2 from "../../assets/corona-black-1.png";
import icon3 from "../../assets/corona-green-1.png";
import icon4 from "../../assets/corona-yellow-1.png";

function AwarenessCases() {
  return (
    <section className="Awareness__cases py-5 mb-5">
      <div style={{ backgroundImage: `url(${bg})` }} className="container py-3">
        <div className="text-center">
          <p className="distincit">Worldwide Tracker</p>
          <h2>Confirmed Coronavirus Cases</h2>
          <p className="font-italic text-muted">Last updated: April 08, 2020, 01:43 GMT</p>
        </div>
        <div className="row py-5 ">
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex py-3">
            <div className="w-15 pr-3">
              <img className="img-fluid " src={icon1} alt="" />
            </div>
            <div className="w-85">
              <h4>145,248,560</h4>
              <p className="text-muted">Total Cases</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 d-flex py-3">
            <div className="w-15 pr-3">
              <img className="img-fluid " src={icon2} alt="" />
            </div>
            <div className="w-85">
              <h4>3,082,945</h4>
              <p className="text-muted">Total Deaths</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 d-flex py-3">
            <div className="w-15 pr-3">
              <img className="img-fluid " src={icon3} alt="" />
            </div>
            <div className="w-85">
              <h4>123,499,070</h4>
              <p className="text-muted">Recovered</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 d-flex py-3">
            <div className="w-15 pr-3">
              <img className="img-fluid " src={icon4} alt="" />
            </div>
            <div className="w-85">
              <h4>816,172</h4>
              <p className="text-muted">New Cases</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AwarenessCases;
