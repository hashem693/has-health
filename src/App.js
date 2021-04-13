import './App.scss';
import ContactInfo from './Pages/ContactInfo';
import Appointment from './Pages/Appointment';
import SignIn from './Pages/SignIn';
import VisitorSignUp from './Pages/VisitorSignUp';
import DoctorSignUp from './Pages/DoctorSignUp';
function App() {
  return (
    <div className="App">
      <ContactInfo />
      <Appointment />
      <SignIn />
      <VisitorSignUp />
      <DoctorSignUp />
    </div>
  );
}

export default App;
