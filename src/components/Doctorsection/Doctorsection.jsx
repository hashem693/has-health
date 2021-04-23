import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import Card1 from "../Card/Card1";
import "../Card/Card1.scss";
import { NavLink } from "react-router-dom";

function Doctorsection() {
  const [doctorsthree, setdoctorsthree] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection("doctors")
      .limit(3)
      .onSnapshot((snap) => {
        let fetched = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setdoctorsthree(fetched);
      });
    return unsub;
  }, []);

  return (
    <section className="py-5 doctorsec">
      <h2 className="text-center">Doctors</h2>
      <div className="container">
        <div className="row justify-content-center">
          {doctorsthree.map((doctor) => (
            <Card1
              firstName={"Dr/ " +doctor.firstName}
              lastname={doctor.lastname}
              specialist={doctor.specialist}
              key={doctor.id}
            />
          ))}
        </div>
        <div className="text-center">
          <NavLink to="/doctors">
            <Button className="px-4 py-2 viewbtn">View All</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Doctorsection;
