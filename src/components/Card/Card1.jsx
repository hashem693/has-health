import React from 'react';
import {Card} from 'react-bootstrap';
import specializedClinics from '../../images/specializedClinics.jpg'

function Card1() {
  return (
    <div className="col-md-4 col-sm-12">
      <Card className="m-3 border-0 shadow text-center  mb-5 bg-white rounded">
    <Card.Img variant="top" src={specializedClinics} />
      <Card.Body>
     <Card.Title>Doctors Name</Card.Title>
     <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
     </Card.Text>
     </Card.Body>
    </Card>
    </div>
  )
}

export default Card1
