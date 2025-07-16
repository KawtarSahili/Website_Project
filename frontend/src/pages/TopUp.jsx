import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Smartphone, ChevronRight } from 'lucide-react';
import popupbg2 from '../assets/popupbg4.jpg'; 
const presetAmounts = [10, 20, 50, 100, 200];

const TopUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    const amount = selectedAmount || Number(customAmount);
    if (!phoneNumber || !amount || isNaN(amount) || amount <= 0) return;
    // Save to localStorage (or use context or backend later)
    localStorage.setItem('topup', JSON.stringify({ phoneNumber, amount }));
    navigate('/payment');
  };

  return (
    <div className="min-h-screen flex flex-col " style={{ 
                    backgroundImage: `url(${popupbg2})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    margin:0,
                   }}>
      <Header />

      <main className="flex-grow container mx-auto px-4 p-30 ">
        <div className="max-w-xl  mx-auto  rounded-2xl shadow-lg p-8 bg-teal-50/70 backdrop-blur-md border border-white">
          <div className="flex items-center space-x-2 mb-6 ">
            <Smartphone className="text-teal-600" />
            <h1 className="text-2xl font-bold text-teal-800">Mobile Top-Up</h1>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-teal-800 mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. +212 6XX XXX XXX"
              className="w-full px-4 py-3 border border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-teal-800/90"
            />
          </div>

          <div className="mb-6 ">
            <label className="block text-sm font-medium text-teal-800 mb-2">Select Amount</label>
            <div className="grid grid-cols-3 gap-4  mb-4">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`py-3 px-4 rounded-lg border text-center font-semibold transition ${
                    selectedAmount === amount
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'bg-transparent text-teal-700 border-teal-500 hover:border-teal-500'
                  }`}
                >
                  {amount} MAD
                </button>
              ))}
            </div>
            <input
              type="number"
              min="1"
              placeholder="Or enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setSelectedAmount(null);
                setCustomAmount(e.target.value);
              }}
              className="w-full px-4 py-3 border border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-teal-800/90"
            />
          </div>

          <div className="flex items-center justify-between border-t border-teal-600 pt-4">
            <div>
              <p className="text-sm text-teal-600">Top-Up Total:</p>
              <p className="text-xl font-bold text-teal-800">
                {(selectedAmount || customAmount || 0)} MAD
              </p>
            </div>
            <button
              onClick={handleContinue}
              className="flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Continue
              <ChevronRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopUp;
