import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MobilePlansPage from './components/MobilePlansPage';
import TelecomFAQ from './components/TelcomFAQ';
import ContactUs from './components/ContactUs'; // Assuming you have a ContactUs component
import CartPage from './components/CartPage'; 
import PaymentPage from './components/PaymentPage';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobile-plans" element={<MobilePlansPage />} />
        <Route path="/faq" element={<TelecomFAQ />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/panier" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        </Routes>
    </Router>
  );
}

export default App;