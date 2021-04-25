import React from "react";
import AwarenessHeader from "./AwarenessSections/AwarenessHeader";
import './Awareness.scss';
import AwarenessAffects from "./AwarenessSections/AwarenessAffects";
import AwarenessAbout from "./AwarenessSections/AwarenessAbout";
import AwarenessCases from "./AwarenessSections/AwarenessCases";
import AwarenessSymptoms from "./AwarenessSections/AwarenessSymptoms";
import AwarenessPrevent from "./AwarenessSections/AwarenessPrevent";

function Awareness() {
  return <div className="Awareness">
    <AwarenessHeader/>
    <AwarenessAffects/>
    <AwarenessAbout/>
    <AwarenessCases/>
    <AwarenessSymptoms/>
    <AwarenessPrevent/>
  </div>;
}

export default Awareness;
