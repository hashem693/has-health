import { Button } from "react-bootstrap";
import Card1 from "../Card/Card1";

function Doctorsection() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center">Doctors</h2>
        <div className="row justify-content-center">
          <Card1></Card1>
          <Card1></Card1>
          <Card1></Card1>
        </div>
        <div className="text-center">
          <Button className="px-4 py-2" style={{ backgroundColor: "#22a7f0" }}>
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Doctorsection;
