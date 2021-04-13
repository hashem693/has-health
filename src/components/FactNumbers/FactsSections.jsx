import React from "react";
import FactNumbers from "./FactNumbers";

function FactsSections() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-center flex-wrap">
          <FactNumbers num="10" fact="Locations" />
          <FactNumbers num="35+" fact="Departments" />
          <FactNumbers num="100+" fact="Specialists" />
          <FactNumbers num="550+" fact="Employees" />
        </div>
      </div>
    </section>
  );
}

export default FactsSections;
