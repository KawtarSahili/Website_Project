import React, { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPhone, FaUser } from 'react-icons/fa';
import { FiMail, FiLock, FiKey } from 'react-icons/fi';
import { BsSimFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [simNumber, setSimNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phoneOrEmail: ''
  });
  const navigate = useNavigate();

  // Mock function to simulate API call
  const mockApiLogin = async (credentials) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, this would come from your backend
        const mockUser = {
          id: 123,
          email: credentials.email || credentials.phoneOrEmail,
          phone: credentials.phoneNumber,
          role: 'user'
        };
        
        // Mock JWT token - in reality this comes from your backend
        const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMywicm9sZSI6InVzZXIifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        
        resolve({ token: mockToken, user: mockUser });
      }, 1000);
    });
  };

  const handleSendVerification = () => {
    alert(`Verification code sent to ${phoneNumber}`);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Here you would normally call your real API:
      // const response = await axios.post('/api/register', { phoneNumber, simNumber, ... });
      
      // For now, we'll mock the response
      const { token, user } = await mockApiLogin({ 
        email: formData.email, 
        phoneNumber 
      });
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } catch (error) {
      alert('Registration failed: ' + error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Here you would normally call your real API:
      // const response = await axios.post('/api/login', { 
      //   phoneOrEmail: formData.phoneOrEmail,
      //   password: formData.password 
      // });
      
      // For now, we'll mock the response
      const { token, user } = await mockApiLogin({ 
        phoneOrEmail: formData.phoneOrEmail 
      });
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex justify-center items-center font-['Montserrat'] min-h-screen bg-[#f6f5f7] m-0 p-4 overflow-y-auto">
      <div className={`bg-white rounded-xl shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden w-full max-w-5xl min-h-[700px] ${isActive ? 'right-panel-active' : ''}`}>
        
        {/* Sign Up Form */}
        <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-0 z-[1] ${isActive ? 'translate-x-full opacity-100 z-[5]' : ''}`}>
          <div className="h-full overflow-y-auto">
            <form onSubmit={handleSignUp} className="bg-white flex items-center justify-center flex-col px-4 sm:px-16 py-8 h-auto text-center space-y-3">
              <h1 className="font-bold m-0 text-2xl">Join Our Network</h1>
              <div className="my-4">
                <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12">
                  <FaFacebookF className="text-lg" />
                </a>
                <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12">
                  <FaGooglePlusG className="text-lg" />
                </a>
                <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12">
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>
              <span className="text-sm">or register with your details</span>
              
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base" 
                />
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              
              <div className="relative w-full">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base" 
                />
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              
              <div className="relative w-full">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base" 
                />
                <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="SIM Card Number" 
                  value={simNumber}
                  onChange={(e) => setSimNumber(e.target.value)}
                  className="bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base" 
                />
                <BsSimFill className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              
              <div className="relative w-full">
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base" 
                />
                <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              
              <div className="relative w-full">
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  className="bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base" 
                />
                <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              
              <div className="w-full flex items-center space-x-2">
                <div className="relative flex-grow">
                  <input 
                    type="text" 
                    placeholder="Verification Code" 
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="bg-[#eee] border-none py-3 px-5 pl-12 w-full text-base" 
                  />
                  <FiKey className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <button 
                  type="button"
                  onClick={handleSendVerification}
                  className="bg-teal-600 text-white py-3 px-4 rounded-md text-sm whitespace-nowrap"
                >
                  Send Code
                </button>
              </div>
              
              <div className="flex items-center mt-2">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-xs">
                  I agree to the <a href="#" className="text-teal-700">Terms of Service</a> and <a href="#" className="text-teal-700">Privacy Policy</a>
                </label>
              </div>
              
              <button 
                type="submit"
                className="rounded-2xl border border-[#92ff2b] bg-teal-700 text-white text-sm font-bold py-3 px-14 uppercase tracking-wider mt-4 transition-transform duration-80 ease-in focus:outline-none active:scale-95"
              >
                Activate My Account
              </button>
            </form>
          </div>
        </div>

        {/* Sign In Form */}
        <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-[2] ${isActive ? 'translate-x-full' : ''}`}>
          <div className="h-full overflow-y-auto">
            <form onSubmit={handleSignIn} className="bg-white flex items-center justify-center flex-col px-4 sm:px-16 py-8 h-auto text-center space-y-4">
              <h1 className="font-bold m-0 text-2xl">Welcome Back</h1>
              <p className="text-sm text-gray-600">Sign in to manage your telecom account</p>
              
              <div className="my-4">
                <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12">
                  <FaFacebookF className="text-lg" />
                </a>
                <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12">
                  <FaGooglePlusG className="text-lg" />
                </a>
                <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12">
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>
              <span className="text-sm">or use your account</span>
              
              <div className="relative w-full">
                <input 
                  type="text" 
                  name="phoneOrEmail"
                  placeholder="Phone Number or Email" 
                  value={formData.phoneOrEmail}
                  onChange={handleInputChange}
                  className="bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base" 
                />
                <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              
              <div className="relative w-full">
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base" 
                />
                <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-sm">Remember me</label>
                </div>
                <a href="#" className="text-sm text-teal-700">Forgot password?</a>
              </div>
              
              <button 
                type="submit"
                className="rounded-2xl border bg-teal-700 text-white text-sm font-bold py-3 px-14 uppercase tracking-wider mt-4 transition-transform duration-80 ease-in focus:outline-none active:scale-95"
              >
                Sign In
              </button>
              
              <p className="text-sm mt-4">
                Need help? <a href="#" className="text-teal-700">Contact Support</a>
              </p>
            </form>
          </div>
        </div>

        {/* Overlay Container */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-[100] ${isActive ? '-translate-x-full' : ''}`}>
          <div className={`bg-gradient-to-r from-teal-700 to-[#51945a] bg-no-repeat bg-cover text-white relative -left-full h-full w-[200%] transition-transform duration-600 ease-in-out ${isActive ? 'translate-x-1/2' : 'translate-x-0'}`}>
            <div className={`absolute flex items-center justify-center flex-col py-0 px-4 sm:px-12 text-center top-0 h-full w-1/2 transition-transform duration-600 ease-in-out ${isActive ? 'translate-x-0' : '-translate-x-1/5'}`}>
              <h1 className="font-bold m-0 text-2xl">Existing Customer?</h1>
              <p className="text-base font-thin leading-6 tracking-wider my-6">
                Sign in to check your data usage, pay bills, and manage your telecom services
              </p>
              <button 
                onClick={() => setIsActive(false)}
                className="bg-transparent border-2 border-white rounded-2xl text-white text-sm font-bold py-3 px-14 uppercase tracking-wider mt-4 transition-transform duration-80 ease-in focus:outline-none active:scale-95"
              >
                Sign In
              </button>
            </div>
            <div className={`absolute flex items-center justify-center flex-col py-0 px-4 sm:px-12 text-center top-0 h-full w-1/2 right-0 transition-transform duration-600 ease-in-out ${isActive ? 'translate-x-1/5' : 'translate-x-0'}`}>
              <h1 className="font-bold m-0 text-2xl">New Customer?</h1>
              <p className="text-base font-thin leading-6 tracking-wider my-6">
                Join our network today and enjoy premium telecom services with exclusive benefits
              </p>
              <button 
                onClick={() => setIsActive(true)}
                className="bg-transparent border-2 border-white rounded-2xl text-white text-sm font-bold py-3 px-14 uppercase tracking-wider mt-4 transition-transform duration-80 ease-in focus:outline-none active:scale-95"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;