import React from "react";
import "./factnumber.scss";

function FactNumbers({ num, fact }) {
  return (
    <div className="py-3 text-center px-5 mx-4">
      <h3>{num}</h3>
      <h5>{fact}</h5>
    </div>
  );
}

export default FactNumbers;
