import React from "react";
import "./specialistsection.scss";
import { Card } from "react-bootstrap";
import specialistpic from "../../images/Surgical-Hospital.jpg";

function SpecialistCard({ name }) {
  return (
    <div className="col-md-4 col-sm-12">
      <Card className="m-2 girdcenter position-relative ">
        <Card.Img variant="top" src={specialistpic} />

        <div className="girdcenter__overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
          <p className="px-4 py-2">{name}</p>
        </div>
      </Card>
    </div>
  );
}

export default SpecialistCard;
