import React from 'react';
import {Card} from 'react-bootstrap';
import specializedClinics from '../../images/specializedClinics.jpg'

function Card1() {
  return (
    <Card style={{ width: '20rem' }} className="m-3 border-0 shadow  mb-5 bg-white rounded">
    <Card.Img variant="top" src={specializedClinics} />
      <Card.Body>
     <Card.Title>Doctors Name</Card.Title>
     <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
     </Card.Text>
     </Card.Body>
    </Card>
  )
}

export default Card1
