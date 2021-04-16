import React from "react";
import { Card } from "react-bootstrap";
import specializedClinics from "../../images/specializedClinics.jpg";

function Card1(props) {
  return (
    <div className="col-md-4 col-sm-12">
      <Card className="m-3 border-0 shadow text-center  mb-5 bg-white rounded">
        <Card.Img variant="top" src={specializedClinics} />
        <Card.Body>
          <Card.Title>
            {props.firstName} {props.lastname}
          </Card.Title>
          <Card.Text className="text-primary">{props.specialist}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card1;
