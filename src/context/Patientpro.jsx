import { Accordion, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../firebase/firebase";
import "./Patientpro.scss";

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
    <div className="container Patient__profile py-5">
      <p className="distinct">Welcome {patient && patient.firstName},</p>

      <div className="row">
        <div className="col-md-6 col-sm-12 my-2 Patient__profile__text">
          <h6 className="mb-4">This is some information of you to be confirmed.</h6>
          <p><strong>Your full name is:</strong> {patient && patient.firstName} {patient && patient.lastname}</p>    
          <p><strong>Your phone number:</strong> {patient && patient.phone}</p>       
        </div>
        <div className="col-md-6 col-sm-12 my-2 Patient__profile__accordion">
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
      </div>
    </div>
  );
}

export default Patientpro;
