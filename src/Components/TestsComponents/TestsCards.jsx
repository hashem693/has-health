import React from "react";
import "../MedicalTests.scss";
import img1 from "../../assets/service_1.jpg";
import img2 from "../../assets/service_2.jpg";
import img3 from "../../assets/service_3.jpg";
import img4 from "../../assets/service_7.jpg";

function TestsCards() {
  return (
    <section className="MedicalTests__card pb-5">
      <div className="container">
          <div className="MedicalTests__card__header text-center pb-2">
              <p>SERVICES</p>
              <h2>Laboratory Diagnostics</h2>
          </div>
        <div className="row pt-3 pb-4">
          <div className="col-lg-3 col-md-6 col-sm-12 my-3">
            <div className="MedicalTests__card__item">
              <img src={img1} className="w-100 img-fluid" alt="" />
              <div className="MedicalTests__card__item__desc pl-3 py-4">
                  <h5 className="py-1">Biochemistry tests</h5>
                  <p>Routine and stat testing, special biochemical tests, metabolic tests, drug-level monitoring.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3">
            <div className="MedicalTests__card__item">
              <img src={img2} className="w-100 img-fluid" alt="" />
              <div className="MedicalTests__card__item__desc pl-3 py-4">
                  <h5 className="py-1">Microbiology tests</h5>
                  <p>Routine and stat testing, special biochemical tests, metabolic tests, drug-level monitoring.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3">
            <div className="MedicalTests__card__item">
              <img src={img3} className="w-100 img-fluid" alt="" />
              <div className="MedicalTests__card__item__desc pl-3 py-4">
                  <h5 className="py-1">Histopatology tests</h5>
                  <p>Routine and stat testing, special biochemical tests, metabolic tests, drug-level monitoring.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-3">
            <div className="MedicalTests__card__item">
              <img src={img4} className="w-100 img-fluid" alt="" />
              <div className="MedicalTests__card__item__desc pl-3 py-4">
                  <h5 className="py-1">Hemoglobin tests</h5>
                  <p>Routine and stat testing, special biochemical tests, metabolic tests, drug-level monitoring.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestsCards;
