import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaPhone, FaUser } from 'react-icons/fa';
import { FiMail, FiLock, FiKey } from 'react-icons/fi';
import { BsSimFill } from 'react-icons/bs';
import { X } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AuthForm = ({ onClose }) => {
  const navigate = useNavigate();  
  const [isActive, setIsActive] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [simNumber, setSimNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneOrEmail: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});

  const validateSignUp = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!simNumber) newErrors.simNumber = 'SIM number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!verificationCode) newErrors.verificationCode = 'Verification code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignIn = () => {
    const newErrors = {};
    if (!formData.phoneOrEmail) newErrors.phoneOrEmail = 'Phone or email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendVerification = async () => {
    if (!phoneNumber) {
      setErrors({ ...errors, phoneNumber: 'Phone number is required' });
      return;
    }
  
    try {
      await axios.post('http://localhost:8080/api/verify/send', null, {
        params: { phone: phoneNumber }
      });
      alert(`📩 Verification code sent to ${phoneNumber}`);
    } catch (error) {
      console.error("Erreur lors de l'envoi du code :", error);
      alert('❌ Échec de l’envoi du code');
    }
  };
  

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateSignUp()) return;
  
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,  // si tu veux vérifier côté backend aussi
        phoneNumber: phoneNumber,
        verificationCode: verificationCode,
        simNumber: simNumber
      });      
      alert('Registration successful');
      setIsActive(false);
    } catch (error) {
      alert('Registration failed: ' + (error.response?.data || error.message));
    }
  };
  

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateSignIn()) return;
  
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        phoneOrEmail: formData.phoneOrEmail,
        password: formData.password,
      });
  
      const { token, role } = response.data;
      localStorage.setItem('token', token);
  
      onClose();
  
      // Redirect based on role
      if (role === 'ADMIN') {
        navigate('/admin-dashboard');
      } else if (role === 'USER') {
        navigate('/user-dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert(error.response?.data || 'Login failed');
    }
  };


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="font-['Montserrat'] relative bg-white rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.1)] w-full max-w-5xl max-h-[90vh] min-h-[700px] overflow-hidden">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {/* Sign Up Form */}
      <div 
        className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-0 z-[1] ${isActive ? 'translate-x-full opacity-100 z-[5]' : ''}`}
        aria-hidden={!isActive}
      >
          <div className="h-full overflow-y-auto px-4 sm:px-16 py-8">
        <form onSubmit={handleSignUp} className="flex items-center justify-center flex-col px-4 sm:px-16 py-8 h-auto text-center space-y-3">
          <h1 className="font-bold m-0 text-2xl">Join Our Network</h1>
          <div className="my-4">
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12 hover:bg-gray-100 transition-colors">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12 hover:bg-gray-100 transition-colors">
              <FaGoogle className="text-lg" />
            </a>
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12 hover:bg-gray-100 transition-colors">
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>
          <span className="text-sm">or register with your details</span>
          
          <div className="relative w-full">
            <input 
              type="text" 
              name="fullName"
              placeholder="Full Name" 
              value={formData.fullName}
              onChange={handleInputChange}
              className={`bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base ${errors.fullName ? 'border-red-500' : ''}`} 
            />
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {errors.fullName && <p className="text-red-500 text-xs text-left mt-1">{errors.fullName}</p>}
          </div>
          
          <div className="relative w-full">
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleInputChange}
              className={`bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base ${errors.email ? 'border-red-500' : ''}`} 
            />
            <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {errors.email && <p className="text-red-500 text-xs text-left mt-1">{errors.email}</p>}
          </div>
          
          <div className="relative w-full">
            <input 
              type="tel" 
              name="phoneNumber"
              placeholder="Phone Number" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={`bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base ${errors.phoneNumber ? 'border-red-500' : ''}`} 
            />
            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {errors.phoneNumber && <p className="text-red-500 text-xs text-left mt-1">{errors.phoneNumber}</p>}
          </div>
          
          <div className="relative w-full">
            <input 
              type="text" 
              name="simNumber"
              placeholder="SIM Card Number" 
              value={simNumber}
              onChange={(e) => setSimNumber(e.target.value)}
              className={`bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base ${errors.simNumber ? 'border-red-500' : ''}`} 
            />
            <BsSimFill className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {errors.simNumber && <p className="text-red-500 text-xs text-left mt-1">{errors.simNumber}</p>}
          </div>
          
          <div className="relative w-full">
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleInputChange}
              className={`bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base ${errors.password ? 'border-red-500' : ''}`} 
            />
            <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {errors.password && <p className="text-red-500 text-xs text-left mt-1">{errors.password}</p>}
          </div>
          
          <div className="relative w-full">
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base ${errors.confirmPassword ? 'border-red-500' : ''}`} 
            />
            <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {errors.confirmPassword && <p className="text-red-500 text-xs text-left mt-1">{errors.confirmPassword}</p>}
          </div>
          
          <div className="w-full flex items-center space-x-2">
            <div className="relative flex-grow">
              <input 
                type="text" 
                name="verificationCode"
                placeholder="Verification Code" 
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className={`bg-[#eee] border-none py-3 px-5 pl-12 w-full text-base ${errors.verificationCode ? 'border-red-500' : ''}`} 
              />
              <FiKey className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              {errors.verificationCode && <p className="text-red-500 text-xs text-left mt-1">{errors.verificationCode}</p>}
            </div>
            <button 
              type="button"
              onClick={handleSendVerification}
              className="bg-teal-600 text-white py-3 px-4 rounded-md text-sm whitespace-nowrap hover:bg-teal-700 transition-colors"
            >
              Send Code
            </button>
          </div>
          
          <div className="flex items-center mt-2">
            <input 
              type="checkbox" 
              id="terms" 
              className="mr-2" 
              required 
            />
            <label htmlFor="terms" className="text-xs">
              I agree to the <a href="#" className="text-teal-700 hover:underline">Terms of Service</a> and <a href="#" className="text-teal-700 hover:underline">Privacy Policy</a>
            </label>
          </div>
          
          <button 
            type="submit"
            className="rounded-2xl border border-[#92ff2b] bg-teal-700 text-white text-sm font-bold py-3 px-14 uppercase tracking-wider mt-4 transition-transform duration-80 ease-in focus:outline-none active:scale-95 hover:bg-teal-800 disabled:opacity-50"
          >
            Activate My Account
          </button>
        </form>
        </div>
      </div>

      {/* Sign In Form */}
      <div 
  className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 ${isActive ? 'opacity-0 pointer-events-none z-[1]' : 'opacity-100 z-[5]'}`}
  aria-hidden={isActive}
>
<div className="h-full overflow-y-auto px-4 sm:px-16 py-8">
        <form onSubmit={handleSignIn} className="flex items-center justify-center flex-col px-4 sm:px-16 py-8 h-auto text-center space-y-4">
          <h1 className="font-bold m-0 text-2xl">Welcome Back</h1>
          <p className="text-sm text-gray-600">Sign in to manage your telecom account</p>
          
          <div className="my-4">
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12 hover:bg-gray-100 transition-colors">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12 hover:bg-gray-100 transition-colors">
              <FaGoogle className="text-lg" />
            </a>
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-12 w-12 hover:bg-gray-100 transition-colors">
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
              className={`bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base ${errors.phoneOrEmail ? 'border-red-500' : ''}`} 
            />
            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {errors.phoneOrEmail && <p className="text-red-500 text-xs text-left mt-1">{errors.phoneOrEmail}</p>}
          </div>
          
          <div className="relative w-full">
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleInputChange}
              className={`bg-[#eee] border-none py-3 px-5 pl-12 my-2 w-full text-base ${errors.password ? 'border-red-500' : ''}`} 
            />
            <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {errors.password && <p className="text-red-500 text-xs text-left mt-1">{errors.password}</p>}
          </div>
          
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="mr-2" 
              />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>
            <a href="#" className="text-sm text-teal-700 hover:underline">Forgot password?</a>
          </div>
          
          <button 
            type="submit"
            className="rounded-2xl border bg-teal-700 text-white text-sm font-bold py-3 px-14 uppercase tracking-wider mt-4 transition-transform duration-80 ease-in focus:outline-none active:scale-95 hover:bg-teal-800"
          >
            Sign In
          </button>
          
          <p className="text-sm mt-4">
            Need help? <a href="#" className="text-teal-700 hover:underline">Contact Support</a>
          </p>
        </form>
        </div>
      </div>

      {/* Overlay Container */}
      <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-[100] ${isActive ? '-translate-x-full' : ''}`}>
        <div className={`bg-gradient-to-r from-teal-700/70 to-teal-700/90 bg-no-repeat bg-cover text-white relative -left-full h-full w-[200%] transition-transform duration-600 ease-in-out ${isActive ? 'translate-x-1/2' : 'translate-x-0'}`}>
          <div className={`absolute flex items-center justify-center flex-col py-0 px-4 sm:px-12 text-center top-0 h-full w-1/2 transition-transform duration-600 ease-in-out ${isActive ? 'translate-x-0' : '-translate-x-[20%]'}`}>
            <h1 className="font-bold m-0 text-2xl">Existing Customer?</h1>
            <p className="text-base font-thin leading-6 tracking-wider my-6">
              Sign in to check your data usage, pay bills, and manage your telecom services
            </p>
            <button 
              onClick={() => setIsActive(false)}
              className="bg-transparent border-2 border-white rounded-2xl text-white text-sm font-bold py-3 px-14 uppercase tracking-wider mt-4 transition-transform duration-80 ease-in focus:outline-none active:scale-95 hover:bg-white hover:bg-opacity-10"
            >
              Sign In
            </button>
          </div>
          <div className={`absolute flex items-center justify-center flex-col py-0 px-4 sm:px-12 text-center top-0 h-full w-1/2 right-0 transition-transform duration-600 ease-in-out ${isActive ? 'translate-x-[20%]' : 'translate-x-0'}`}>
            <h1 className="font-bold m-0 text-2xl">New Customer?</h1>
            <p className="text-base font-thin leading-6 tracking-wider my-6">
              Join our network today and enjoy premium telecom services with exclusive benefits
            </p>
            <button 
              onClick={() => setIsActive(true)}
              className="bg-transparent border-2 border-white rounded-2xl text-white text-sm font-bold py-3 px-14 uppercase tracking-wider mt-4 transition-transform duration-80 ease-in focus:outline-none active:scale-95 hover:bg-white hover:bg-opacity-10"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;