import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../LocationCard/locatincard.scss";

function LocationCard({ name, address, phone }) {
  return (
    <Card className="text-center px-4 py-3 mb-5 cardb mx-2 border-0">
      <Card.Body>
        <Card.Title>
          <FaMapMarkerAlt className="MapMarker" />
        </Card.Title>
        <Card.Text className="branch-name pb-2">{name} </Card.Text>
        <Card.Text>address: {address}</Card.Text>
        <Card.Text>phone: {phone} </Card.Text>
        <Button className="buttonb">Get Directions</Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
