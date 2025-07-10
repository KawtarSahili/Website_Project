import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, Shield, Truck, ArrowLeft, Gift, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium 5G Plan",
      price: 199,
      quantity: 1,
      data: "Unlimited",
      speed: "5G",
      contract: "12 months",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Unlimited Data", "5G Speed", "EU Roaming", "Streaming Services"]
    },
   
    {
      id: 3,
      name: "Standard Plan",
      price: 99,
      quantity: 2,
      data: "20GB",
      speed: "4G+",
      contract: "No contract",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["20GB Data", "4G+ Speed", "EU Roaming"]
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save20') {
      setAppliedPromo({ code: 'SAVE20', discount: 0.2, description: '20% off your order' });
    } else if (promoCode.toLowerCase() === 'student') {
      setAppliedPromo({ code: 'STUDENT', discount: 0.15, description: '15% student discount' });
    } else {
      alert('Invalid promo code');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode('');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = (subtotal - discount) * 0.05; // 5% tax
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onLoginClick={() => console.log("Login clicked")} />
      
      <main className="flex-grow container mx-auto px-4 py-24">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="flex items-center text-teal-600 hover:text-teal-700 mb-4 transition">
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-4xl font-bold text-teal-800 mb-2">Shopping Cart</h1>
          <p className="text-teal-600">Review your items and proceed to checkout</p>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="text-center py-16">
            <div className="bg-teal-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={48} className="text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Your cart is empty</h2>
            <p className="text-teal-600 mb-8">Add some amazing plans and devices to get started!</p>
            <Link to="/" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition inline-block">
              Browse Plans
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full md:w-32 h-32 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-teal-800 mb-2">{item.name}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.data && (
                              <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-medium">
                                {item.data} Data
                              </span>
                            )}
                            {item.speed && (
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                                {item.speed}
                              </span>
                            )}
                            {item.storage && (
                              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                                {item.storage}
                              </span>
                            )}
                            {item.color && (
                              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                                {item.color}
                              </span>
                            )}
                          </div>
                          <ul className="text-sm text-teal-600 space-y-1">
                            {item.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-teal-50 rounded-full p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-teal-100 rounded-full transition"
                          >
                            <Minus size={16} className="text-teal-600" />
                          </button>
                          <span className="px-4 py-2 font-semibold text-teal-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-teal-100 rounded-full transition"
                          >
                            <Plus size={16} className="text-teal-600" />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-teal-800">
                            {(item.price * item.quantity).toLocaleString()}Dhs
                          </div>
                          {item.quantity > 1 && (
                            <div className="text-sm text-teal-600">
                              {item.price}Dhs each
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo Code Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100">
                <div className="flex items-center mb-4">
                  <Gift className="text-teal-600 mr-2" size={20} />
                  <h3 className="text-lg font-semibold text-teal-800">Promo Code</h3>
                </div>
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <Tag className="text-green-600 mr-2" size={18} />
                      <div>
                        <div className="font-semibold text-green-800">{appliedPromo.code}</div>
                        <div className="text-sm text-green-600">{appliedPromo.description}</div>
                      </div>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-green-600 hover:text-green-800 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-grow px-4 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100 sticky top-24">
                <h3 className="text-xl font-bold text-teal-800 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-teal-700">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span className="font-semibold text-teal-800">{subtotal.toLocaleString()}Dhs</span>
                  </div>
                  
                  {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedPromo.code})</span>
                      <span>-{discount.toLocaleString()}Dhs</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-teal-700">Shipping</span>
                    <span className="font-semibold text-teal-800">
                      {shipping === 0 ? 'Free' : `${shipping}Dhs`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-teal-700">Tax (5%)</span>
                    <span className="font-semibold text-teal-800">{tax.toFixed(0)}Dhs</span>
                  </div>
                  
                  <div className="border-t border-teal-200 pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold text-teal-800">Total</span>
                      <span className="font-bold text-teal-800">{total.toLocaleString()}Dhs</span>
                    </div>
                  </div>
                </div>

                {/* Security Features */}
                <div className="bg-teal-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-3">
                    <Shield className="text-teal-600 mr-2" size={18} />
                    <span className="font-semibold text-teal-800">Secure Checkout</span>
                  </div>
                  <div className="space-y-2 text-sm text-teal-600">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                      SSL encrypted payment
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                      30-day money back guarantee
                    </div>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                      24/7 customer support
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                {shipping === 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <Truck className="text-green-600 mr-2" size={18} />
                      <span className="font-semibold text-green-800">Free Shipping!</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">
                      Your order qualifies for free shipping
                    </p>
                  </div>
                )}

                {/* Checkout Button */}
                <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 mb-4">
                  <CreditCard className="mr-2" size={20} />
                  Proceed to Checkout
                </button>

                <div className="text-center">
                  <p className="text-xs text-teal-600">
                    By proceeding, you agree to our Terms & Conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;