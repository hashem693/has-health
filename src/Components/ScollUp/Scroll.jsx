import React from "react";
import { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import "./Scroll.scss";

function Scroll() {
  const [showScroll, setShowScroll] = useState(false);
  
const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <BiArrowToTop
        className="scrollTop h2 "
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      />
    </div>
  );
}

export default Scroll;
