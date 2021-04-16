import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { FaMapMarkerAlt } from "react-icons/fa";
import './locatincard.scss'; 


function LocationCard() {
    return (
        <Card className="text-center px-4 py-3 m-2 cardb border-0">
        <Card.Body>
          <Card.Title><FaMapMarkerAlt className="MapMarker" /></Card.Title>
          <Card.Text className="branch-name pb-2">
            alexandria branch{' '}
          </Card.Text>
          <Card.Text>
            address: 6th floor somoha street{' '}
          </Card.Text>
          <Card.Text>
            phone: 0345648697{' '}
          </Card.Text>
          <Button className="buttonb">Get Directions</Button>{' '}
        </Card.Body>
      </Card>
    )
}

export default LocationCard
