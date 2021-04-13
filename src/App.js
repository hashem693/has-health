import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import "./App.scss";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Specialties from "./Components/Specialties";
import Doctors from "./Components/Doctors";
import Contactus from "./Components/Contactus"
import Awareness from "./Components/Awareness";
import Insurance from "./Components/Insurance";
import MedicalExamination from "./Components/MedicalExamination";
import MedicalXrays from "./Components/MedicalXrays";
import MedicalTests from "./Components/MedicalTests";
import Appointment from "./Components/Appointment";
import IconBreadcrumbs from "./Components/IconBreadcrumbs";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <IconBreadcrumbs />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/specialties" component={Specialties} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/awareness" component={Awareness} />
          <Route path="/insurance" component={Insurance} />
          <Route path="/examination" component={MedicalExamination} />
          <Route path="/X-rays" component={MedicalXrays} />
          <Route path="/tests" component={MedicalTests} />
          <Route path="/appointment" component={Appointment} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
