import React from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../LocationCard/locatincard.scss";
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
            <LocationCard
              name="alexandria branch"
              address="6th floor somoha street"
              phone="0345648697"
            ></LocationCard>
            <LocationCard
              name="cairo branch"
              address="6th nile street"
              phone="024657879"
            ></LocationCard>
            <LocationCard
              name="tanta branch"
              address="1st floor kafr street"
              phone="0487985413"
            ></LocationCard>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center my-3">
            <LocationCard
              name="alexandria branch"
              address="6th floor somoha street"
              phone="0345648697"
            ></LocationCard>
            <LocationCard
              name="cairo branch"
              address="6th nile street"
              phone="024657879"
            ></LocationCard>
            <LocationCard
              name="tanta branch"
              address="1st floor kafr street"
              phone="0487985413"
            ></LocationCard>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center my-3">
            <LocationCard
              name="tanta branch"
              address="1st floor kafr street"
              phone="0487985413"
            ></LocationCard>
            <LocationCard
              name="cairo branch"
              address="6th nile street"
              phone="024657879"
            ></LocationCard>
            <LocationCard
              name="alexandria branch"
              address="6th floor somoha street"
              phone="0345648697"
            ></LocationCard>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default LocationSection;
