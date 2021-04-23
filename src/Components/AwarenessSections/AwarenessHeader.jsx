import React from "react";
import bg from "../../assets/home-banner-bg.jpg";
import img from "../../assets/home-banner-cleaner.svg";
import "../Awareness.scss";
import { AiOutlineFileProtect } from "react-icons/ai";
import {BiPulse} from "react-icons/bi";
import {GiNothingToSay} from "react-icons/gi";
import {BiSpreadsheet} from "react-icons/bi";


function AwarenessHeader() {
  return (
    <section
      className="py-5 Awareness__header"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="mb-5">
            <span>Stop COVID-19</span>
            <h2 className="my-4">How can we fight together against Coronavirus?</h2>
            <p className="pt-1 first">
              It’s never been clearer that we’re all global citizens, and we all
              have a part to play. The novel strain of coronavirus, has
              officially reached pandemic proportions.
            </p>
            </div>
            <div className="row pt-3">
              <div className="col-md-6 col-sm-12 py-3 d-flex">
                <div className="w-15 pr-3 icon">
                  <AiOutlineFileProtect className="h2" />
                </div>
                <div className="w-85">
                  <h6>Protection</h6>
                  <p>How to protect yourself</p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 py-3 d-flex">
                <div className="w-15 pr-3 icon">
                  <BiPulse className="h2" />
                </div>
                <div className="w-85">
                  <h6>Symptoms</h6>
                  <p>Check basic symptoms</p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 py-3 d-flex">
                <div className="w-15 pr-3 icon">
                  <GiNothingToSay className="h2" />
                </div>
                <div className="w-85">
                  <h6>Appointment</h6>
                  <p>Get online consultation</p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 py-3 d-flex">
                <div className="w-15 pr-3 icon">
                  <BiSpreadsheet className="h2" />
                </div>
                <div className="w-85">
                  <h6>About COVID-19</h6>
                  <p>Read more about coronavirus</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 text-center">
            <img src={img} className="img-fluid " alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwarenessHeader;
