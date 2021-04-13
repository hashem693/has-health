import React from "react";
import Doctorsection from "./Doctorsection/Doctorsection";
import FactsSections from "./FactNumbers/FactsSections";
import Headersec from "./Headersec/Headersec";
import LocationSection from "./Locations/locationSection/LocationSection";
import SpecialistSection from "./Specialist/SpecialistSection";

const Home = () => {
  return (
    <div>
      <Headersec />
      <Doctorsection />
      <SpecialistSection />
      <FactsSections />
      <LocationSection />
    </div>
  );
};

export default Home;
