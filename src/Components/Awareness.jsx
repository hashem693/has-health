import React from "react";
import AwarenessHeader from "./AwarenessSections/AwarenessHeader";
import './Awareness.scss';
import AwarenessAffects from "./AwarenessSections/AwarenessAffects";
import AwarenessAbout from "./AwarenessSections/AwarenessAbout";
import AwarenessCases from "./AwarenessSections/AwarenessCases";
import AwarenessSymptoms from "./AwarenessSections/AwarenessSymptoms";

function Awareness() {
  return <div className="Awareness">
    <AwarenessHeader/>
    <AwarenessAffects/>
    <AwarenessAbout/>
    <AwarenessCases/>
    <AwarenessSymptoms/>
  </div>;
}

export default Awareness;
