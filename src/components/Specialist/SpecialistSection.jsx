import React from "react";
import SpecialistCard from "./SpecialistCard";

function SpecialistSection() {
  return (
    <section className="py-5 specialbg">
      <div className="container">
        <h2>Specialties</h2>
        <div className="row justify-content-center">
          <SpecialistCard />
          <SpecialistCard />
          <SpecialistCard />
        </div>
      </div>
    </section>
  );
}

export default SpecialistSection;
