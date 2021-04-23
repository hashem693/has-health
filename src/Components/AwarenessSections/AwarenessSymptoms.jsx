import React from "react";
import "../Awareness.scss";
import bg from "../../assets/symptoms-bg.jpg";
import img1 from "../../assets/symptoms-1.png";
import img2 from "../../assets/symptoms-2.png";
import img3 from "../../assets/symptoms-3.png";
import img4 from "../../assets/symptoms-4.png";

function AwarenessSymptoms() {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="Awareness__Symptoms mt-5 py-5"
    >
      <div className="container">
        <div className="Awareness__Symptoms__header">
          <h5 className="distincit my-4">Symptoms of COVID-19</h5>
          <h2>What are the basic symptoms?</h2>
        </div>
        <div className="row py-4">
          <div className="col-md-6 col-sm-12 py-3">
            <div className="Awareness__Symptoms__item d-flex px-3">
              <img className="img-fluid mr-5" src={img1} alt="" />
              <div className="py-3">
                <h3>High fever</h3>
                <p className="text-muted mt-3">
                  Fever is a key symptom, experts say. Don't fixate on a number,
                  but know it's not a fever until temperature reaches at least
                  39°C.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 py-3">
            <div className="Awareness__Symptoms__item d-flex px-3">
              <img className="img-fluid mr-5" src={img2} alt="" />
              <div className="py-3">
                <h3>Sortness of Breath</h3>
                <p className="text-muted mt-3">
                  You feel hot to touch on your chest or back It is a common
                  sign and also may appear in 2-10 days if you affected.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 py-3">
            <div className="Awareness__Symptoms__item d-flex px-3">
              <img className="img-fluid mr-5" src={img3} alt="" />
              <div className="py-3">
                <h3>Dry Cough</h3>
                <p className="text-muted mt-3">
                  Coughing is another key symptom, but it's not just any cough,
                  said Schaffner. It should be a dry cough that you feel in your
                  chest.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 py-3">
            <div className="Awareness__Symptoms__item d-flex px-3">
              <img className="img-fluid mr-5" src={img4} alt="" />
              <div className="py-3">
                <h3>Headache</h3>
                <p className="text-muted mt-3">
                Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwarenessSymptoms;
