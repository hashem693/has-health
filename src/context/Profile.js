import React, { useContext, useState, useEffect } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import { AuthContext } from "../context/Auth";
import { db } from "../firebase/firebase";
import { auth } from "../firebase/firebase";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [appoints, setAppoints] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection("Appointments")
      .orderBy("day")
      .onSnapshot((snap) => {
        let fetched = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setAppoints(fetched);
      });
    return unsub;
  }, []);

  return (
    <div className="home container">
      <h1>profile Page</h1>
      <h3>Welcome {user.email}</h3>
      <Accordion>
        {appoints.map((appoint, i) => (
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={i + 1}
                className="bg-light"
              >
                {appoint.day}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={i + 1}>
              <Card.Body>
                <p>Branch: {appoint.location}</p>
                <p>Specialist: {appoint.specialist}</p>
                <p>Time: {appoint.time}</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default Profile;
