import React from "react";
import { Card } from "react-bootstrap";
import DC1 from "../../images/DC1.jpg";

function Card1(props) {
  return (
    <div className="col-md-4 col-12">
      <Card className=" border-0 shadow text-center  mb-5 bg-white rounded">
        <Card.Img variant="top" src={DC1} />
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
