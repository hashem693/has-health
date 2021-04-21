import React from "react";
import Background from "../../assets/team-group.jpg";
import "../Doctors.scss";

function DoctorsHeader() {
  return (
    <section
      className="py-5 doctors__header position-relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container py-5">
        <div className="py-5 position-absolute doctors__header__caption text-center h-100">
          <p className="px-3 py-4">Our Team Of Medical Professionals </p>
        </div>
      </div>
    </section>
  );
}

export default DoctorsHeader;
