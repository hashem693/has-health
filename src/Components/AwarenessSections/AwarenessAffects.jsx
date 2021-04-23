import React from "react";
import { Link } from "react-router-dom";
import "../Awareness.scss";

function AwarenessAffects() {
  return (
    <section className="Awareness__affects py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-12">
            <h3 className="pb-2">Think you might be affected?</h3>
            <p>
              Try our simple coronavirus checker to find out what you need to
              do.
            </p>
          </div>
          <div className="col-md-3 col-sm-12 mt-2">
            <Link className="btn px-4 py-2" to="/appointment">
              Check now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwarenessAffects;
