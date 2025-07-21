import { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';
import { Search, Zap, Wifi, Tv, Phone, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

const FiberPlansPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [speedFilter, setSpeedFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      id: 1,
      title: "Ultra-Fast Fiber Internet",
      description: "Experience lightning-fast speeds with our premium fiber optic network",
      image: "bg-gradient-to-r from-indigo-600 to-purple-600",
      features: ["Up to 2 Gbps speeds", "Symmetrical upload/download", "99.9% reliability"]
    },
    {
      id: 2,
      title: "4K TV & Unlimited Calls",
      description: "Bundle your internet with premium TV and phone services",
      image: "bg-gradient-to-r from-teal-600 to-blue-600",
      features: ["200+ HD channels", "Unlimited worldwide calls", "Cloud DVR included"]
    },
    {
      id: 3,
      title: "Whole-Home WiFi Coverage",
      description: "Advanced mesh WiFi system included with all plans",
      image: "bg-gradient-to-r from-orange-600 to-pink-600",
      features: ["Seamless roaming", "Parental controls", "Guest network"]
    }
  ];

  const plans = [
    {
      id: 1,
      name: "Fiber Starter",
      price: 199,
      speed: "100 Mbps",
      tv: "Basic (50 channels)",
      phone: "Included",
      devices: "Up to 5 devices",
      contract: "12 months",
      features: ["100 Mbps symmetric", "Basic TV package", "Unlimited calls", "Free installation", "WiFi router included"],
      description: "Ideal for small households with moderate internet usage."
    },
    {
      id: 2,
      name: "Fiber Plus",
      price: 299,
      speed: "500 Mbps",
      tv: "Premium (120 channels)",
      phone: "Included + International",
      devices: "Up to 10 devices",
      contract: "12 months",
      features: ["500 Mbps symmetric", "Premium TV package", "International calls", "4K streaming", "Advanced WiFi router"],
      description: "Perfect for families with multiple connected devices."
    },
    {
      id: 3,
      name: "Fiber Pro",
      price: 499,
      speed: "1 Gbps",
      tv: "Ultra (200+ channels)",
      phone: "Unlimited worldwide",
      devices: "Unlimited",
      contract: "24 months",
      features: ["1 Gbps symmetric", "Ultra HD TV", "Unlimited worldwide calls", "Gaming optimized", "Mesh WiFi system"],
      description: "For power users who demand the ultimate connectivity."
    },
    {
      id: 4,
      name: "Fiber Business",
      price: 799,
      speed: "2 Gbps",
      tv: "Business Package",
      phone: "Unlimited + PBX features",
      devices: "Unlimited + Priority",
      contract: "24 months",
      features: ["2 Gbps symmetric", "Business TV", "Advanced phone features", "24/7 priority support", "Static IP available"],
      description: "Professional solution for businesses and teleworkers."
    }
  ];

  const filteredPlans = plans.filter(plan => {
    const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plan.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpeed = speedFilter === 'all' || 
                        (speedFilter === 'basic' && plan.speed.includes("100 Mbps")) ||
                        (speedFilter === 'fast' && (plan.speed.includes("500 Mbps") || plan.speed.includes("1 Gbps"))) ||
                        (speedFilter === 'ultra' && plan.speed.includes("2 Gbps"));
    
    return matchesSearch && matchesSpeed;
  });

  const addToCart = (plan) => {
    console.log(`Added ${plan.name} to cart`);
    alert(`${plan.name} added to cart!`);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onLoginClick={() => console.log("Login clicked")} />
      
      {/* Carousel Section */}
      <div className="relative w-full h-96 overflow-hidden mt-30 mx-30  ">
        {carouselItems.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute p-30 inset-0 rounded-lg transition-opacity duration-500 flex items-center ${item.image} text-white ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="container mx-auto px-6 z-10">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h1>
              <p className="text-xl md:text-xl mb-6 max-w-2xl">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Zap className="mr-2" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">Fiber Internet Plans</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Ultra-fast fiber optic internet with TV and phone packages
          </p>
        </div>
        
        {/* Fiber Advantages Section - Added before search bar */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-teal-200 mb-8">
          <h3 className="text-2xl font-bold text-teal-800 mb-6">Why Choose Fiber Optic?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <Zap className="text-teal-600" size={20} />
                </div>
                <h4 className="font-bold text-teal-700 text-lg">Lightning Speed</h4>
              </div>
              <p className="text-stone-600">Experience symmetrical upload and download speeds perfect for video calls, cloud backups, and streaming.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <Wifi className="text-teal-600" size={20} />
                </div>
                <h4 className="font-bold text-teal-700 text-lg">Reliable Connection</h4>
              </div>
              <p className="text-stone-600">99.9% uptime with weather-resistant fiber cables that won't slow down during peak hours.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <Tv className="text-teal-600" size={20} />
                </div>
                <h4 className="font-bold text-teal-700 text-lg">Future Ready</h4>
              </div>
              <p className="text-stone-600">Our infrastructure scales effortlessly to meet tomorrow's bandwidth demands and smart home needs.</p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section - Identical to MobilePlansPage */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl mb-8 shadow-lg border border-teal-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search fiber plans..."
                  className="w-full bg-white border border-teal-300 rounded-full px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 text-teal-500" size={20} />
              </div>
            </div>
            <select
              className="bg-white border border-teal-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-teal-700 min-w-[200px]"
              value={speedFilter}
              onChange={(e) => setSpeedFilter(e.target.value)}
            >
              <option value="all">All Speeds</option>
              <option value="basic">100 Mbps</option>
              <option value="fast">500 Mbps - 1 Gbps</option>
              <option value="ultra">2 Gbps</option>
            </select>
          </div>
        </div>

        {/* Plans Grid - Identical structure to MobilePlansPage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 pb-16 ${
              plan.speed.includes("2 Gbps") ? "border-teal-500 border-2" : "border-teal-200"
            }`}>
              {plan.speed.includes("2 Gbps") && (
                <div className="absolute top-0 right-0 bg-teal-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  RECOMMENDED
                </div>
              )}
              
              <div className={`p-6 ${
                plan.speed.includes("2 Gbps") ? "bg-teal-50" : "bg-gradient-to-r from-teal-50 to-blue-50"
              } border-b border-teal-200`}>
                <h3 className="text-xl font-bold text-teal-800 mb-2">{plan.name}</h3>
                <p className="text-teal-600">{plan.description}</p>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-4xl font-bold text-teal-700">
                    {plan.price}
                    <span className="text-lg font-normal text-teal-600">Dhs/mo</span>
                  </div>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    {plan.contract}
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-teal-50 p-3 rounded-lg flex items-center">
                      <Zap className="text-teal-500 mr-2" size={18} />
                      <div>
                        <p className="text-sm text-teal-600">Speed</p>
                        <p className="font-semibold text-teal-800">{plan.speed}</p>
                      </div>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg flex items-center">
                      <Tv className="text-teal-500 mr-2" size={18} />
                      <div>
                        <p className="text-sm text-teal-600">TV</p>
                        <p className="font-semibold text-teal-800">{plan.tv}</p>
                      </div>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg flex items-center">
                      <Phone className="text-teal-500 mr-2" size={18} />
                      <div>
                        <p className="text-sm text-teal-600">Phone</p>
                        <p className="font-semibold text-teal-800">{plan.phone}</p>
                      </div>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg flex items-center">
                      <Wifi className="text-teal-500 mr-2" size={18} />
                      <div>
                        <p className="text-sm text-teal-600">Devices</p>
                        <p className="font-semibold text-teal-800">{plan.devices}</p>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-teal-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-stone-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
                <button
                  onClick={() => addToCart(plan)}
                  className={`w-full font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 ${
                    plan.speed.includes("2 Gbps") 
                      ? "bg-gradient-to-r from-teal-700 to-teal-800 text-white hover:from-teal-800 hover:to-teal-900"
                      : "bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800"
                  }`}
                >
                  <Zap className="mr-2" size={20} />
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FiberPlansPage;