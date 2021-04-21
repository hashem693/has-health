import React from "react";
import { useFirestore } from "../firebase/useFirestore";
import Card1 from "./Card/Card1";
import "./Doctors.scss";
import DoctorsHeader from "./Doctorsection/DoctorsHeader";

const Doctors = () => {
  const { doctors } = useFirestore();

  return (
    <section className="doctors">
      <DoctorsHeader />
      <section className="py-5 ">
        <div className="container">
          <h2 className="text-center">Our Doctors</h2>
          <div className="row justify-content-center">
            {doctors.map((doctor) => (
              <Card1
                key={doctor.id}
                firstName={doctor.firstName}
                lastname={doctor.lastname}
                specialist={doctor.specialist}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Doctors;
