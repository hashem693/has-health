import React from "react";
import { useFirestore } from "../firebase/useFirestore";
import Card1 from "./Card/Card1";

const Doctors = () => {
  const { doctors } = useFirestore();

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center">Doctors</h2>
        <div className="row justify-content-center">
          {doctors.map((doctor) => (
            <Card1 key={doctor.id} name={doctor.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
