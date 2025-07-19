import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {
  Home,
  Activity, 
  CreditCard, 
  Database, 
  Phone,
  User as UserIcon, 
  HelpCircle,
  Bell,
  LogOut,
  MessageSquare,
  Mail,
  Calendar,
  Settings,
  Shield,
  Star,
  Check,
  AlertTriangle,
  Info,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loadingNotifications, setLoadingNotifications] = useState(false);
  const navigate = useNavigate();

  // Mock data for frontend testing
  const userData = {
    profile: {
      firstName: 'Jihane',
      lastName: 'Smith',
      email: 'jihane@example.com',
      phone: '+212 612-345678',
      joinDate: '2022-05-15',
      profilePicture: null,
      currentPlan: 'Premium Unlimited',
      planExpiry: '2023-12-31',
      balance: 125.50,
    },
    activities: [
      {
        type: 'call',
        description: 'Call to Morocco',
        date: '2023-06-20',
        duration: '12 min 34 sec',
        cost: 5.75
      },
      {
        type: 'data',
        description: 'Mobile data usage',
        date: '2023-06-19',
        usage: '1.2 GB',
        location: 'Casablanca'
      },
      {
        type: 'payment',
        description: 'Payment received',
        date: '2023-06-15',
        amount: 150.00,
        method: 'Credit Card'
      },
      {
        type: 'sms',
        description: 'SMS bundle usage',
        date: '2023-06-14',
        count: 15,
        remaining: 85
      }
    ],
    consumption: {
      dataUsed: 8.7,
      dataLimit: 10,
      minutesUsed: 120,
      minutesLimit: 300,
      smsUsed: 45,
      smsLimit: 100,
      resetDate: '2023-07-01'
    },
    bills: [
      {
        reference: 'INV-2023-06',
        issueDate: '2023-06-01',
        dueDate: '2023-06-15',
        amount: 99.99,
        paid: true
      },
      {
        reference: 'INV-2023-07',
        issueDate: '2023-07-01',
        dueDate: '2023-07-15',
        amount: 99.99,
        paid: false
      }
    ],
    recommendedOffers: [
      {
        id: 1,
        name: "Data Booster",
        description: "Extra 5GB data for your current month",
        price: 25.00,
        validFor: "30 days"
      },
      {
        id: 2,
        name: "International Pack",
        description: "100 mins international calls + 50 SMS",
        price: 49.99,
        validFor: "1 month"
      },
      {
        id: 3,
        name: "Family Plan",
        description: "Share your data with 3 family members",
        price: 129.99,
        validFor: "Monthly"
      }
    ]
  };

  useEffect(() => {
    // Simulate loading notifications
    if (showNotifications && notifications.length === 0) {
      setLoadingNotifications(true);
      setTimeout(() => {
        setNotifications([
          {
            id: 1,
            type: 'success',
            title: 'Payment Received',
            message: 'Your payment of 99.99 MAD has been processed successfully.',
            time: '2 minutes ago',
            read: false
          },
          {
            id: 2,
            type: 'warning',
            title: 'Data Usage Alert',
            message: 'You have used 85% of your monthly data allowance.',
            time: '1 hour ago',
            read: false
          },
          {
            id: 3,
            type: 'info',
            title: 'New Feature Available',
            message: 'Check out our new family plan options in the My Plan section.',
            time: '3 hours ago',
            read: true
          },
          {
            id: 4,
            type: 'alert',
            title: 'Bill Due Soon',
            message: 'Your next bill of 99.99 MAD is due in 3 days.',
            time: '1 day ago',
            read: true
          },
          {
            id: 5,
            type: 'success',
            title: 'Account Verified',
            message: 'Your email address has been successfully verified.',
            time: '2 days ago',
            read: true
          }
        ]);
        setLoadingNotifications(false);
      }, 800);
    }
  }, [showNotifications]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const navItems = [
    { key: 'dashboard', icon: <Home size={20} />, label: 'Dashboard' },
    { key: 'consumption', icon: <Database size={20} />, label: 'Usage' },
    { key: 'bills', icon: <CreditCard size={20} />, label: 'Bills' },
    { key: 'plan', icon: <Phone size={20} />, label: 'My Plan' },
    { key: 'activity', icon: <Activity size={20} />, label: 'Activity' },
    { key: 'support', icon: <HelpCircle size={20} />, label: 'Support' },
    { key: 'profile', icon: <UserIcon size={20} />, label: 'Profile' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab userData={userData} />;
      case 'consumption':
        return <ConsumptionTab data={userData.consumption} />;
      case 'bills':
        return <BillsTab bills={userData.bills} />;
      case 'plan':
        return <PlanTab plan={userData.profile.currentPlan} />;
      case 'activity':
        return <ActivityTab activities={userData.activities} />;
      case 'support':
        return <SupportTab />;
      case 'profile':
        return <ProfileTab profile={userData.profile} offers={userData.recommendedOffers} />;
      default:
        return <DashboardTab userData={userData} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header with hidden login button */}
      <Header hideLogin={true} onLoginClick={() => {}} />
      
      {/* Main content with proper spacing */}
      <div className="flex flex-1 pt-20 overflow-hidden">
        {/* Sidebar - Desktop */}
        <div className="hidden md:flex md:flex-col w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-teal-700">TelCom Dashboard</h1>
            <p className="text-sm text-gray-500">{userData.profile.email}</p>
          </div>
          <nav className="flex-1 p-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                  activeTab === item.key
                    ? 'bg-teal-100 text-teal-700'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100 mt-4"
            >
              <LogOut size={20} className="mr-3" />
              Sign Out
            </button>
          </nav>
        </div>

        {/* Main Content - Scrollable area */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-end items-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 rounded-full hover:bg-gray-100 relative transition-colors"
                  >
                    <Bell size={20} className="text-gray-600" />
                    {notifications.some(n => !n.read) && (
                      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                    )}
                  </button>
                  
                  {/* Notifications Dropdown */}
                  <AnimatePresence>
                    {showNotifications && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden"
                      >
                        <div className="p-3 border-b border-gray-200 bg-teal-600 text-white flex justify-between items-center">
                          <h3 className="font-semibold">Notifications</h3>
                          <div className="flex space-x-2">
                            <button 
                              onClick={markAllAsRead}
                              className="text-xs hover:bg-teal-700 p-1 rounded"
                              title="Mark all as read"
                            >
                              <Check size={14} />
                            </button>
                            <button 
                              onClick={clearAllNotifications}
                              className="text-xs hover:bg-teal-700 p-1 rounded"
                              title="Clear all"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                        
                        <div className="max-h-96 overflow-y-auto">
                          {loadingNotifications ? (
                            <div className="p-4 flex justify-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-500"></div>
                            </div>
                          ) : notifications.length === 0 ? (
                            <div className="p-4 text-center text-gray-500">
                              No new notifications
                            </div>
                          ) : (
                            <ul>
                              <AnimatePresence>
                                {notifications.map((notification) => (
                                  <motion.li
                                    key={notification.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className={`border-b border-gray-100 last:border-0 ${!notification.read ? 'bg-blue-50' : ''}`}
                                  >
                                    <div className="p-3 hover:bg-gray-50 transition-colors">
                                      <div className="flex justify-between items-start">
                                        <div className="flex items-start">
                                          <div className={`p-2 rounded-full mr-3 mt-1 ${
                                            notification.type === 'success' ? 'bg-green-100 text-green-600' :
                                            notification.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                                            notification.type === 'info' ? 'bg-blue-100 text-blue-600' :
                                            'bg-red-100 text-red-600'
                                          }`}>
                                            {notification.type === 'success' ? <Check size={16} /> :
                                             notification.type === 'warning' ? <AlertTriangle size={16} /> :
                                             notification.type === 'info' ? <Info size={16} /> :
                                             <AlertTriangle size={16} />}
                                          </div>
                                          <div>
                                            <h4 className="font-medium">{notification.title}</h4>
                                            <p className="text-sm text-gray-600">{notification.message}</p>
                                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                          </div>
                                        </div>
                                        <div className="flex space-x-1">
                                          {!notification.read && (
                                            <button 
                                              onClick={() => markAsRead(notification.id)}
                                              className="text-gray-400 hover:text-teal-600"
                                              title="Mark as read"
                                            >
                                              <Check size={16} />
                                            </button>
                                          )}
                                          <button 
                                            onClick={() => deleteNotification(notification.id)}
                                            className="text-gray-400 hover:text-red-600"
                                            title="Delete"
                                          >
                                            <X size={16} />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.li>
                                ))}
                              </AnimatePresence>
                            </ul>
                          )}
                        </div>
                        <div className="p-2 border-t border-gray-200 text-center bg-gray-50">
                          <button 
                            onClick={() => {
                              setActiveTab('activity');
                              setShowNotifications(false);
                            }}
                            className="text-sm text-teal-600 hover:text-teal-800"
                          >
                            View All Activity
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                    <UserIcon size={16} className="text-teal-600" />
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {userData.profile.firstName}
                  </span>
                </div>
              </div>
            </div>
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Footer with added spacing */}
      <div className="mt-35">
        <Footer />
      </div>
    </div>
  );
};

// Tab Components
const DashboardTab = ({ userData }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <DashboardCard
        title="Your Plan"
        value={userData.profile.currentPlan || "No active plan"}
        subtitle={`Valid until ${userData.profile.planExpiry || "--/--/----"}`}
        icon={<Phone size={20} className="text-teal-600" />}
      />
      <DashboardCard
        title="Balance"
        value={`${userData.profile.balance?.toFixed(2) || "0.00"} MAD`}
        subtitle="Available"
        icon={<CreditCard size={20} className="text-teal-600" />}
      />
      <DashboardCard
        title="Next Bill"
        value={`${userData.bills[0]?.amount?.toFixed(2) || "0.00"} MAD`}
        subtitle={`Due on ${userData.bills[0]?.dueDate || "--/--/----"}`}
        icon={<Activity size={20} className="text-teal-600" />}
      />
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Your Usage</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ConsumptionMeter
          title="Data"
          used={userData.consumption.dataUsed}
          total={userData.consumption.dataLimit}
          unit="GB"
        />
        <ConsumptionMeter
          title="Calls"
          used={userData.consumption.minutesUsed}
          total={userData.consumption.minutesLimit}
          unit="min"
        />
        <ConsumptionMeter
          title="SMS"
          used={userData.consumption.smsUsed}
          total={userData.consumption.smsLimit}
          unit="SMS"
        />
      </div>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ActivityList activities={userData.activities.slice(0, 3)} />
    </div>
  </div>
);

const ConsumptionTab = ({ data }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-lg font-semibold mb-6">Usage Details</h2>
    <div className="space-y-6">
      <ConsumptionDetail
        title="Mobile Data"
        used={data.dataUsed}
        total={data.dataLimit}
        unit="GB"
        resetDate={data.resetDate}
      />
      <ConsumptionDetail
        title="Call Minutes"
        used={data.minutesUsed}
        total={data.minutesLimit}
        unit="minutes"
        resetDate={data.resetDate}
      />
      <ConsumptionDetail
        title="SMS Sent"
        used={data.smsUsed}
        total={data.smsLimit}
        unit="SMS"
        resetDate={data.resetDate}
      />
    </div>
  </div>
);

const BillsTab = ({ bills }) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-6">Billing History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bills.map((bill) => (
              <tr key={bill.reference}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bill.reference}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(bill.issueDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bill.amount.toFixed(2)} MAD
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    bill.paid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {bill.paid ? 'Paid' : 'Pending'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-3">Download</button>
                  {!bill.paid && (
                    <button className="text-teal-600 hover:text-teal-900">Pay Now</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const PlanTab = ({ plan }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-lg font-semibold mb-6">Your Current Plan</h2>
    {plan ? (
      <div className="border border-teal-100 rounded-lg p-6 bg-teal-50">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-teal-800">{plan}</h3>
            <p className="text-gray-600 mt-2">Premium plan with unlimited calls and 10GB data</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <Database size={16} className="text-teal-600 mr-2" />
                <span>10 GB data</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-teal-600 mr-2" />
                <span>Unlimited call minutes</span>
              </div>
              <div className="flex items-center">
                <MessageSquare size={16} className="text-teal-600 mr-2" />
                <span>100 SMS</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-teal-800">99.99 MAD/month</p>
            <p className="text-sm text-gray-500 mt-1">Next billing: 2023-07-15</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-teal-200 flex justify-end">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
            Change Plan
          </button>
        </div>
      </div>
    ) : (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">You don't have an active plan</p>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
          Subscribe to a Plan
        </button>
      </div>
    )}
  </div>
);

const ActivityTab = ({ activities }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-lg font-semibold mb-6">Recent Activities</h2>
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-start">
            <div className={`p-2 rounded-full mr-3 ${
              activity.type === 'payment' ? 'bg-green-100 text-green-600' : 
              activity.type === 'call' ? 'bg-blue-100 text-blue-600' :
              activity.type === 'data' ? 'bg-purple-100 text-purple-600' :
              'bg-yellow-100 text-yellow-600'
            }`}>
              {activity.type === 'payment' ? <CreditCard size={16} /> : 
               activity.type === 'call' ? <Phone size={16} /> :
               activity.type === 'data' ? <Database size={16} /> :
               <MessageSquare size={16} />}
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{activity.description}</h3>
              <p className="text-sm text-gray-500">{activity.date}</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                {activity.duration && <span><strong>Duration:</strong> {activity.duration}</span>}
                {activity.usage && <span><strong>Usage:</strong> {activity.usage}</span>}
                {activity.location && <span><strong>Location:</strong> {activity.location}</span>}
                {activity.cost && <span><strong>Cost:</strong> {activity.cost} MAD</span>}
                {activity.count && <span><strong>SMS Count:</strong> {activity.count}</span>}
                {activity.remaining && <span><strong>Remaining:</strong> {activity.remaining}</span>}
                {activity.method && <span><strong>Method:</strong> {activity.method}</span>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SupportTab = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-lg font-semibold mb-6">Support Center</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-gray-200 rounded-lg p-6 hover:border-teal-500 transition-colors">
        <div className="flex items-center mb-4">
          <Phone size={24} className="text-teal-600 mr-3" />
          <h3 className="text-lg font-medium">Call Support</h3>
        </div>
        <p className="text-gray-600 mb-4">Speak directly with our customer service team</p>
        <p className="text-sm text-gray-500 mb-2"><strong>Phone:</strong> +212 522-123456</p>
        <p className="text-sm text-gray-500"><strong>Hours:</strong> 8AM - 8PM, 7 days a week</p>
        <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
          Call Now
        </button>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-6 hover:border-teal-500 transition-colors">
        <div className="flex items-center mb-4">
          <Mail size={24} className="text-teal-600 mr-3" />
          <h3 className="text-lg font-medium">Email Support</h3>
        </div>
        <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
        <p className="text-sm text-gray-500 mb-2"><strong>Email:</strong> support@telcom.ma</p>
        <p className="text-sm text-gray-500"><strong>Response time:</strong> Within 24 hours</p>
        <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
          Send Email
        </button>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-6 hover:border-teal-500 transition-colors">
        <div className="flex items-center mb-4">
          <HelpCircle size={24} className="text-teal-600 mr-3" />
          <h3 className="text-lg font-medium">FAQs</h3>
        </div>
        <p className="text-gray-600 mb-4">Find answers to common questions</p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-teal-600 cursor-pointer">• How do I change my plan?</li>
          <li className="hover:text-teal-600 cursor-pointer">• What should I do if I lose my SIM?</li>
          <li className="hover:text-teal-600 cursor-pointer">• How can I check my data usage?</li>
          <li className="hover:text-teal-600 cursor-pointer">• Payment methods accepted</li>
        </ul>
        <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
          View All FAQs
        </button>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-6 hover:border-teal-500 transition-colors">
        <div className="flex items-center mb-4">
          <MessageSquare size={24} className="text-teal-600 mr-3" />
          <h3 className="text-lg font-medium">Live Chat</h3>
        </div>
        <p className="text-gray-600 mb-4">Chat with our support agents in real-time</p>
        <p className="text-sm text-gray-500 mb-2"><strong>Hours:</strong> 9AM - 6PM, Monday to Friday</p>
        <p className="text-sm text-gray-500"><strong>Status:</strong> <span className="text-green-600">Available now</span></p>
        <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
          Start Chat
        </button>
      </div>
    </div>
  </div>
);

const ProfileTab = ({ profile, offers }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-6">Personal Information</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center mb-4">
            {profile.profilePicture ? (
              <img src={profile.profilePicture} alt="Profile" className="w-full h-full rounded-full object-cover" />
            ) : (
              <UserIcon size={40} className="text-teal-600" />
            )}
          </div>
          <button className="px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
            Upload Photo
          </button>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-b border-gray-100 pb-3">
            <p className="text-sm text-gray-500">First Name</p>
            <p className="font-medium">{profile.firstName}</p>
          </div>
          <div className="border-b border-gray-100 pb-3">
            <p className="text-sm text-gray-500">Last Name</p>
            <p className="font-medium">{profile.lastName}</p>
          </div>
          <div className="border-b border-gray-100 pb-3">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{profile.email}</p>
          </div>
          <div className="border-b border-gray-100 pb-3">
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="font-medium">{profile.phone}</p>
          </div>
          <div className="border-b border-gray-100 pb-3">
            <p className="text-sm text-gray-500">Member Since</p>
            <p className="font-medium">{new Date(profile.joinDate).toLocaleDateString()}</p>
          </div>
          <div className="border-b border-gray-100 pb-3">
            <p className="text-sm text-gray-500">Account Status</p>
            <p className="font-medium text-green-600">Active</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end space-x-3">
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Edit Profile
        </button>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-6">Security</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <Shield size={20} className="text-teal-600 mr-3" />
            <div>
              <h3 className="font-medium">Password</h3>
              <p className="text-sm text-gray-500">Last changed 3 months ago</p>
            </div>
          </div>
          <button className="px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
            Change Password
          </button>
        </div>
        
        <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <Settings size={20} className="text-teal-600 mr-3" />
            <div>
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500">Add an extra layer of security</p>
            </div>
          </div>
          <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Enable 2FA
          </button>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-6">Offers You Might Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map(offer => (
          <motion.div 
            key={offer.id}
            whileHover={{ y: -5 }}
            className="border border-teal-100 rounded-lg p-4 hover:border-teal-300 transition-colors"
          >
            <div className="flex items-center mb-3">
              <Star size={18} className="text-yellow-500 mr-2" />
              <h3 className="font-medium">{offer.name}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">{offer.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-teal-700">{offer.price} MAD</span>
              <button className="px-3 py-1 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                Get Offer
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Valid for: {offer.validFor}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// Helper Components
const DashboardCard = ({ title, value, subtitle, icon }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-lg shadow p-6"
  >
    <div className="flex justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
        {React.cloneElement(icon, { size: 18 })}
      </div>
    </div>
  </motion.div>
);

const ConsumptionMeter = ({ title, used, total, unit }) => {
  const percentage = Math.min(100, (used / total) * 100);
  const statusColor = percentage > 80 ? 'bg-red-500' : percentage > 50 ? 'bg-yellow-500' : 'bg-teal-500';
  
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-sm">
          {used} / {total} {unit}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          className={`h-2.5 rounded-full ${statusColor}`}
        ></motion.div>
      </div>
    </div>
  );
};

const ActivityList = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <p className="text-gray-500 text-center py-4">No recent activity</p>;
  }
  
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start pb-4 border-b border-gray-100 last:border-0"
        >
          <div
            className={`p-2 rounded-full mr-3 ${
              activity.type === 'payment' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
            }`}
          >
            {activity.type === 'payment' ? <CreditCard size={16} /> : <Phone size={16} />}
          </div>
          <div className="flex-1">
            <p className="font-medium">{activity.description}</p>
            <p className="text-sm text-gray-500">{activity.date}</p>
          </div>
          {activity.amount && (
            <div
              className={`font-medium ${
                activity.amount >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {activity.amount >= 0 ? '+' : ''}
              {activity.amount} MAD
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const ConsumptionDetail = ({ title, used, total, unit, resetDate }) => (
  <div className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
    <h3 className="font-medium mb-4">{title}</h3>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-gray-500">Used</span>
      <span className="font-medium">
        {used} {unit} ({Math.round((used / total) * 100)}%)
      </span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, (used / total) * 100)}%` }}
        transition={{ duration: 1 }}
        className="h-2.5 rounded-full bg-teal-500"
      ></motion.div>
    </div>
    <div className="flex justify-between text-sm text-gray-500">
      <span>0 {unit}</span>
      <span>{total} {unit}</span>
    </div>
    <p className="text-xs text-gray-500 mt-2">
      Resets on {new Date(resetDate).toLocaleDateString()}
    </p>
  </div>
);

export default UserDashboard;