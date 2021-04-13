import React from "react";
import "./specialistsection.scss";
import { Card, Button } from "react-bootstrap";

import specialistpic from "../../images/Surgical-Hospital.jpg";

function SpecialistCard() {
  return (
    <Card
      style={{ width: "19rem" }}
      className="m-2 girdcenter position-relative "
    >
      <Card.Img variant="top" src={specialistpic} />

      <Button className="position-absolute btnbg">Specialist name</Button>
    </Card>
  );
}

export default SpecialistCard;
