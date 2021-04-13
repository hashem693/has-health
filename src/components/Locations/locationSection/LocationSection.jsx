import React from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import LocationCard from "../LocationCard/LocationCard";
function LocationSection() {
  return (
    <section className="py-5">
      <h2>Locations</h2>
      <Carousel
        prevIcon={<FaArrowLeft className="text-dark" />}
        nextIcon={<FaArrowRight className="text-dark" />}
      >
        <Carousel.Item>
          <div className="d-flex justify-content-center my-5">
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center my-5">
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
            <LocationCard></LocationCard>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center my-5">
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
