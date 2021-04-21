import React from "react";
import SpecialistCard from "./SpecialistCard";
import "./specialistsection.scss";

function SpecialistSection() {
  return (
    <section className="py-5 specialbg">
      <h2 className="text-center">Specialties</h2>
      <div className="container pt-3 pb-5">
        <div className="row">
          <SpecialistCard name="Bones" />
          <SpecialistCard name="Teeth" />
          <SpecialistCard name="Brain & Nerves" />
        </div>
      </div>
    </section>
  );
}

export default SpecialistSection;
