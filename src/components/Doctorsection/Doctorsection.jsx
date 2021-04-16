import { Button } from "react-bootstrap";
import { useFirestore } from "../../firebase/useFirestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import Card1 from "../Card/Card1";

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
    <section className="py-5">
      <div className="container">
        <h2 className="text-center">Doctors</h2>
        <div className="row justify-content-center">
          {doctorsthree.map((doctor) => (
            <Card1 name={doctor.name} key={doctor.id} />
          ))}
        </div>
        <div className="text-center">
          <Button className="px-4 py-2" style={{ backgroundColor: "#22a7f0" }}>
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Doctorsection;
