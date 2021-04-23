import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
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
import PrivateRoute from "./context/PrivateRoute";
import Profile from "./context/Profile";
import { AuthContext } from "./context/Auth";
import { useContext } from "react";
import Scroll from "./components/ScollUp/Scroll";
import Patientpro from "./context/Patientpro";

function App() {
  const { user } = useContext(AuthContext);
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
          <Route
            path="/login"
            render={() => {
              return user ? <Redirect to="/" /> : <Login />;
            }}
          />
          <Route
            path="/signup"
            render={() => {
              return user ? <Redirect to="/" /> : <SignUp />;
            }}
          />
          {/* {user?.email == "has@gmail.com" && (
            <PrivateRoute path="/profile" component={Profile} />
          )} */}
          <Route path="/profile" component={Profile} />
          {user && user.email != "has@gmail.com" && (
            <Route path="/:id" component={Patientpro} />
          )}
        </Switch>
        <Scroll />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
