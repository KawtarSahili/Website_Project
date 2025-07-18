import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MobilePlansPage from './pages/MobilePlansPage';
import TelecomFAQ from './pages/TelcomFAQ';
import ContactUs from './pages/ContactUs'; // Assuming you have a ContactUs component
import CartPage from './pages/CartPage'; 
import PaymentPage from './pages/PaymentPage';
import TopUp from './pages/TopUp'; // Importing the TopUp component
import CardPopUp from './pages/CardPopUp'; // Importing the CardPopUp component

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
        <Route path="/recharge/:offer" element={<TopUp />} />
        <Route path="/offers" element={<CardPopUp />} />
        </Routes>
    </Router>
  );
}

export default App;