import './App.scss';
import Doctorsection from './components/Doctorsection/Doctorsection';
import FactsSections from './components/FactNumbers/FactsSections';
import LocationSection from './components/Locations/locationSection/LocationSection'

function App() {
  return (
    <div className="App">
      <Doctorsection></Doctorsection>
      <LocationSection></LocationSection>
      <FactsSections />
    </div>
  );
}

export default App;
