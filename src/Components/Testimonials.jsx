import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import testemonial1 from "../assets/test1.png";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="Testimonials py-5">
      <div className="container py-4">
        <div className="Testimonials__header pb-2 text-center">
          <h2>What Our Patients Are Saying</h2>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} data-interval='false' >
          <Carousel.Item className="Testimonials__item text-center">
            <div className="w-75 m-auto pb-5">
              <p className="pb-3 text-muted">
              I work hard to stay slim and yet cellulite has been my curse for years.  I have wasted so much money on useless treatments. I know that many factors can contribute to cellulite formation, but ZWave has worked for me, smoothening the back of my thighs like nothing else I’ve ever tried. There’s no downtime, no pain. I’m now on a maintenance plan that’s sensible and affordable.
              </p>
              <img src={testemonial1} alt="" />
              <p className="mt-3 font-italic">Hashem Mohamed</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="Testimonials__item text-center">
            <div className="w-75 m-auto pb-5">
              <p className="pb-3 text-muted">
              Nobody ever explained the difference between botox and fillers until I came to Novomed Aesthetica.  Although they complement each other, they are not interchangeable. After an excellent consultation, I was given Botox to relax muscles that cause facial wrinkles, while fillers restored volume to my cheeks and around my mouth. I look better and am also better informed.
              </p>
              <img src={testemonial1} alt="" />
              <p className="mt-3 font-italic">Mahmoud Taha</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="Testimonials__item text-center">
            <div className="w-75 m-auto pb-5">
              <p className="pb-3 text-muted">
              I work hard to stay slim and yet cellulite has been my curse for years. I have wasted so much money on useless treatments. I know that many factors can contribute to cellulite formation, but ZWave has worked for me, smoothening the back of my thighs like nothing else I’ve ever tried. There’s no downtime, no pain. I’m now on a maintenance plan that’s sensible and affordable.
              </p>
              <img src={testemonial1} alt="" />
              <p className="mt-3 font-italic">Mohamed Ahmed</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
