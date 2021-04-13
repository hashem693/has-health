import './App.scss';
import ContactInfo   from './AZPages/ContactInfo';
import Appointment   from './AZPages/Appointment';
import SignIn        from './AZPages/SignIn';
import VisitorSignUp from './AZPages/VisitorSignUp';
import DoctorSignUp  from './AZPages/DoctorSignUp';

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
