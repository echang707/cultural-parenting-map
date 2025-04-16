import { Routes, Route } from 'react-router-dom';
import CountryValues from './components/CountryValues';
import CulturalMap from './components/CulturalMap';
import CulturalMapUI from './components/CulturalMapUI';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CulturalMapUI />} />
    </Routes>
  );
}

export default App;
