import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import MobilePlansPage from './components/MobilePlansPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mobile-plans" element={<MobilePlansPage />} />
        </Routes>
    </Router>
  );
}

export default App;