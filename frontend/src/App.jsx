import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MobilePlansPage from './pages/MobilePlansPage';
import TelecomFAQ from './pages/TelcomFAQ';
import ContactUs from './pages/ContactUs'; 
import CartPage from './pages/CartPage'; 
import PaymentPage from './pages/PaymentPage';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import CardPopUp from './pages/CardPopUp';  
import TopUp from './pages/TopUp';
import FiberPlansPage from './pages/FiberPlansPage';
import ADSLPlansPage from './pages/ADSLPlansPage';
import StudentsOffer from './pages/StudentsOffer';
import NewCustomersOffer from './pages/NewCustomersOffer';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/AuthModal';

function App() {
  return (
    <AuthProvider>
    <Router>
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobile-plans" element={<MobilePlansPage />} />
        <Route path="/fiber" element={<FiberPlansPage />} />
        <Route path="/adsl" element={<ADSLPlansPage />} />
        <Route path="/faq" element={<TelecomFAQ />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/panier" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/recharge/:offer" element={<TopUp />} />
        <Route path="/top-up" element={<CardPopUp />} />
        <Route path="/new-customers" element={<NewCustomersOffer />} />
        <Route path="/students" element={<StudentsOffer />} />
        </Routes>
        <AuthModal />
        </div>
    </Router>
    </AuthProvider>
  );
}

export default App;