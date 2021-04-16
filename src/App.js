import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Specialties from "./components/Specialties";
import Doctors from "./components/Doctors";
import Contactus from "./components/Contactus";
import Awareness from "./components/Awareness";
import Insurance from "./components/Insurance";
import MedicalExamination from "./components/MedicalExamination";
import MedicalXrays from "./components/MedicalXrays";
import MedicalTests from "./components/MedicalTests";
import Appointment from "./components/Appointment";
import IconBreadcrumbs from "./components/IconBreadcrumbs";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/signUp/SignUp";

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
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
