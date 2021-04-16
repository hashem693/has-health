import React from "react";
import { Card } from "react-bootstrap";
import specializedClinics from "../../images/specializedClinics.jpg";

function Card1(props) {
  return (
    <Card
      style={{ width: "20rem" }}
      className="m-3 border-0 shadow  mb-5 bg-white rounded"
    >
      <Card.Img variant="top" src={specializedClinics} />
      <Card.Body>
        <Card.Title>
          {props.firstName} {props.lastname}
        </Card.Title>
        <Card.Text className="text-primary">{props.specialist}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Card1;
