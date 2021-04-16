import { Button } from "react-bootstrap";
import Card1 from "../Card/Card1";
import '../Card/Card1.scss';

function Doctorsection() {
  return (
    <section className="py-5 doctorsec">
            <h2 className="text-center">Doctors</h2>
      <div className="container">
  
        <div className="row">
          <Card1></Card1>
          <Card1></Card1>
          <Card1></Card1>
        </div>
        <div className="text-center">
          <Button className="px-4 py-2 viewbtn">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Doctorsection;
