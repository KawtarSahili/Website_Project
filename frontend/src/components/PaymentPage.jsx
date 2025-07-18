import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Building, Shield, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    // Card details
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing address
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Morocco',
    
    // Mobile payment
    phoneNumber: '',
    
    // Bank transfer
    bankAccount: '',
    
    // Terms
    acceptTerms: false,
    savePaymentMethod: false
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Mock cart data - in real app this would come from context/state
  const cartSummary = {
    items: [
      { name: "Premium 5G Plan", price: 199, quantity: 1 },
      { name: "Standard Plan", price: 99, quantity: 2 }
    ],
    subtotal: 298,
    discount: 0, // 20% discount applied
    shipping: 0,
    tax: 176,
    total: 298
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const validateForm = () => {
    const newErrors = {};

    // Common validations
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';

    // Payment method specific validations
    if (paymentMethod === 'card') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
    } else if (paymentMethod === 'mobile') {
      if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    } else if (paymentMethod === 'bank') {
      if (!formData.bankAccount) newErrors.bankAccount = 'Bank account is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setPaymentSuccess(true);
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
              <p className="text-gray-600 mb-8">
                Thank you for your purchase. Your order has been confirmed and you will receive an email confirmation shortly.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-800 mb-2">Order Summary</h3>
                <p className="text-gray-600">Total Paid: <span className="font-bold text-green-600">{cartSummary.total.toLocaleString()}Dhs</span></p>
                <p className="text-sm text-gray-500">Order ID: #TLC-{Date.now()}</p>
              </div>
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full transition"
                >
                  Continue Shopping
                </Link>
                <button className="block w-full text-teal-600 hover:text-teal-700 font-medium transition">
                  View Order Details
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-24">
        {/* Header */}
        <div className="mb-8">
          <Link to="/cart" className="flex items-center text-teal-600 hover:text-teal-700 mb-4 transition">
            <ArrowLeft size={20} className="mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-4xl font-bold text-teal-800 mb-2">Secure Checkout</h1>
          <p className="text-teal-600">Complete your purchase securely</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Payment Method Selection */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100">
                <h3 className="text-xl font-bold text-teal-800 mb-6">Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border-2 rounded-xl transition ${
                      paymentMethod === 'card'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                  >
                    <CreditCard className="h-8 w-8 mx-auto mb-2 text-teal-600" />
                    <div className="text-sm font-medium">Credit Card</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mobile')}
                    className={`p-4 border-2 rounded-xl transition ${
                      paymentMethod === 'mobile'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                  >
                    <Smartphone className="h-8 w-8 mx-auto mb-2 text-teal-600" />
                    <div className="text-sm font-medium">Mobile Payment</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-4 border-2 rounded-xl transition ${
                      paymentMethod === 'bank'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                  >
                    <Building className="h-8 w-8 mx-auto mb-2 text-teal-600" />
                    <div className="text-sm font-medium">Bank Transfer</div>
                  </button>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100">
                <h3 className="text-xl font-bold text-teal-800 mb-6">Payment Details</h3>
                
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formatCardNumber(formData.cardNumber)}
                        onChange={(e) => handleInputChange({
                          target: { name: 'cardNumber', value: e.target.value }
                        })}
                        placeholder="1234 5678 9012 3456"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                          errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                        }`}
                        maxLength="19"
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formatExpiryDate(formData.expiryDate)}
                          onChange={(e) => handleInputChange({
                            target: { name: 'expiryDate', value: e.target.value }
                          })}
                          placeholder="MM/YY"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                            errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                          }`}
                          maxLength="5"
                        />
                        {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                            errors.cvv ? 'border-red-500' : 'border-gray-300'
                          }`}
                          maxLength="4"
                        />
                        {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                          errors.cardName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
                    </div>
                  </div>
                )}

                {paymentMethod === 'mobile' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+212 6XX XXX XXX"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                          errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <AlertCircle className="text-blue-600 mr-2" size={18} />
                        <span className="text-blue-800 font-medium">Mobile Payment Info</span>
                      </div>
                      <p className="text-blue-600 text-sm mt-1">
                        You will receive an SMS with payment instructions after clicking "Complete Payment"
                      </p>
                    </div>
                  </div>
                )}

                {paymentMethod === 'bank' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Account Number
                      </label>
                      <input
                        type="text"
                        name="bankAccount"
                        value={formData.bankAccount}
                        onChange={handleInputChange}
                        placeholder="Enter your bank account number"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                          errors.bankAccount ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.bankAccount && <p className="text-red-500 text-sm mt-1">{errors.bankAccount}</p>}
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <AlertCircle className="text-yellow-600 mr-2" size={18} />
                        <span className="text-yellow-800 font-medium">Bank Transfer Info</span>
                      </div>
                      <p className="text-yellow-600 text-sm mt-1">
                        Bank transfer may take 1-3 business days to process
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Billing Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100">
                <h3 className="text-xl font-bold text-teal-800 mb-6">Billing Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Casablanca"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="20000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="mt-1 mr-3"
                    />
                    <label className="text-sm text-gray-700">
                      I accept the <a href="#" className="text-teal-600 hover:text-teal-700">Terms and Conditions</a> and <a href="#" className="text-teal-600 hover:text-teal-700">Privacy Policy</a>
                    </label>
                  </div>
                  {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="savePaymentMethod"
                      checked={formData.savePaymentMethod}
                      onChange={handleInputChange}
                      className="mt-1 mr-3"
                    />
                    <label className="text-sm text-gray-700">
                      Save payment method for future purchases
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100 sticky top-24">
              <h3 className="text-xl font-bold text-teal-800 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {cartSummary.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-gray-800">
                      {(item.price * item.quantity).toLocaleString()}Dhs
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 mb-6 border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-semibold">{cartSummary.subtotal.toLocaleString()}Dhs</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount (SAVE20)</span>
                  <span>-{cartSummary.discount.toLocaleString()}Dhs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Tax</span>
                  <span className="font-semibold">{cartSummary.tax}Dhs</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-gray-800">Total</span>
                    <span className="font-bold text-teal-800">{cartSummary.total.toLocaleString()}Dhs</span>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-teal-50 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-3">
                  <Shield className="text-teal-600 mr-2" size={18} />
                  <span className="font-semibold text-teal-800">Secure Payment</span>
                </div>
                <div className="space-y-2 text-sm text-teal-600">
                  <div className="flex items-center">
                    <Lock className="mr-2" size={14} />
                    256-bit SSL encryption
                  </div>
                  <div className="flex items-center">
                    <Shield className="mr-2" size={14} />
                    PCI DSS compliant
                  </div>
                </div>
              </div>

              {/* Complete Payment Button */}
              <button
                onClick={handleSubmit}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2" size={20} />
                    Complete Payment
                  </>
                )}
              </button>

              <div className="text-center mt-4">
                <p className="text-xs text-gray-500">
                  Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentPage;