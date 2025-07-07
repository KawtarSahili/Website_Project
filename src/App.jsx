import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import AuthForm from './components/AuthForm'; // 👈 Import the AuthForm

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthForm />} /> {/* 👈 New route */}
      </Routes>
    </Router>
  );
}

export default App;