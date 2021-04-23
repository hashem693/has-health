import { Accordion, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../firebase/firebase";

function Patientpro() {
  const { id } = useParams();
  const [patient, setpatient] = useState(null);
  useEffect(() => {
    db.collection("patients")
      .doc(id)
      .get()
      .then((doc) => {
        setpatient({ ...doc.data() });
      });
  }, []);

  return (
    <div className="container">
      {patient && patient.firstName}
      <Accordion>
        {patient &&
          patient.appointments.map((appoint, i) => (
            <Card>
              <Card.Header>
                <Accordion.Toggle eventKey={i + 1}>
                  {appoint.day}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={i + 1} className="pl-4">
                <Card.Body>
                  <p>
                    <span>Branch:</span> {appoint.location}
                  </p>
                  <p>
                    <span>Specialist:</span> {appoint.specialist}
                  </p>
                  <p>
                    <span>Time:</span> {appoint.time}
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
      </Accordion>
    </div>
  );
}

export default Patientpro;
