import React from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import '../LocationCard/locatincard.scss' ;

import LocationCard from "../LocationCard/LocationCard";
function LocationSection() {
  return (
    <section className="py-5 mt-3 locationsec">
      <h2 className="text-center">Locations</h2>
      <Carousel
        prevIcon={<FaArrowLeft className="text-dark" />}
        nextIcon={<FaArrowRight className="text-dark" />}
      >
        <Carousel.Item>
          <div className="d-flex justify-content-center my-3">
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center my-3">
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center my-3">
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default LocationSection;
