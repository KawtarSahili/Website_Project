import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {
  Home,
  Users,
  Activity,
  BarChart3,
  Settings,
  Shield,
  Bell,
  LogOut,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  Plus,
  Eye,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Server,
  Database,
  Wifi,
  Globe,
  Monitor,
  FileText,
  Image,
  Video,
  Mail,
  MessageSquare,
  Calendar,
  UserCheck,
  UserX,
  Crown,
  MoreVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const navigate = useNavigate();

  // Mock admin data
  const adminData = {
    profile: {
      firstName: 'Admin',
      lastName: 'TelCom',
      email: 'admin@telcom.ma',
      role: 'Super Administrator'
    },
    stats: {
      totalUsers: 15420,
      activeUsers: 14891,
      totalRevenue: 2456789.50,
      monthlyGrowth: 12.5,
      servicesUptime: 99.8,
      supportTickets: 234,
      newSignups: 567,
      churnRate: 2.3
    },
    users: [
      {
        id: 1,
        name: 'Jihane El Hamdaoui',
        email: 'jihane@example.com',
        phone: '+212 612-345678',
        plan: 'Premium Unlimited',
        status: 'active',
        joinDate: '2022-05-15',
        lastActive: '2023-06-20',
        revenue: 1299.99,
        role: 'customer'
      },
      {
        id: 2,
        name: 'Ahmed Benali',
        email: 'ahmed@example.com',
        phone: '+212 661-234567',
        plan: 'Basic Plan',
        status: 'active',
        joinDate: '2023-01-10',
        lastActive: '2023-06-19',
        revenue: 399.99,
        role: 'customer'
      },
      {
        id: 3,
        name: 'Sarah Martin',
        email: 'sarah@telcom.ma',
        phone: '+212 622-345678',
        plan: 'Staff Account',
        status: 'active',
        joinDate: '2021-03-01',
        lastActive: '2023-06-20',
        revenue: 0,
        role: 'staff'
      },
      {
        id: 4,
        name: 'Omar Ziani',
        email: 'omar@example.com',
        phone: '+212 655-987654',
        plan: 'Premium Business',
        status: 'suspended',
        joinDate: '2022-11-20',
        lastActive: '2023-06-10',
        revenue: 2499.99,
        role: 'customer'
      },
      {
        id: 5,
        name: 'Fatima Alaoui',
        email: 'fatima@example.com',
        phone: '+212 677-123456',
        plan: 'Premium Unlimited',
        status: 'inactive',
        joinDate: '2023-02-14',
        lastActive: '2023-05-15',
        revenue: 799.99,
        role: 'customer'
      }
    ],
    services: [
      {
        name: 'Main API Gateway',
        status: 'healthy',
        uptime: 99.9,
        responseTime: 120,
        requests: 156420,
        errors: 12
      },
      {
        name: 'User Authentication',
        status: 'healthy',
        uptime: 99.8,
        responseTime: 89,
        requests: 89430,
        errors: 3
      },
      {
        name: 'Payment Processing',
        status: 'warning',
        uptime: 98.5,
        responseTime: 340,
        requests: 23450,
        errors: 45
      },
      {
        name: 'SMS Gateway',
        status: 'healthy',
        uptime: 99.7,
        responseTime: 156,
        requests: 67890,
        errors: 8
      },
      {
        name: 'Data Analytics',
        status: 'critical',
        uptime: 95.2,
        responseTime: 890,
        requests: 12340,
        errors: 156
      },
      {
        name: 'Content Delivery',
        status: 'healthy',
        uptime: 99.6,
        responseTime: 78,
        requests: 234560,
        errors: 21
      }
    ],
    content: [
      {
        id: 1,
        title: 'Welcome Banner',
        type: 'image',
        status: 'published',
        lastModified: '2023-06-15',
        author: 'Sarah Martin',
        views: 45670
      },
      {
        id: 2,
        title: 'New Plan Announcement',
        type: 'article',
        status: 'draft',
        lastModified: '2023-06-20',
        author: 'Admin TelCom',
        views: 0
      },
      {
        id: 3,
        title: 'Tutorial Video',
        type: 'video',
        status: 'published',
        lastModified: '2023-06-10',
        author: 'Sarah Martin',
        views: 12340
      },
      {
        id: 4,
        title: 'FAQ Section',
        type: 'article',
        status: 'published',
        lastModified: '2023-06-18',
        author: 'Admin TelCom',
        views: 8920
      },
      {
        id: 5,
        title: 'Promotion Banner',
        type: 'image',
        status: 'scheduled',
        lastModified: '2023-06-19',
        author: 'Sarah Martin',
        views: 0
      }
    ],
    notifications: [
      {
        id: 1,
        type: 'alert',
        title: 'Service Alert',
        message: 'Data Analytics service experiencing high response times',
        time: '5 minutes ago',
        read: false
      },
      {
        id: 2,
        type: 'success',
        title: 'Payment Processed',
        message: '156 payments successfully processed in the last hour',
        time: '1 hour ago',
        read: false
      },
      {
        id: 3,
        type: 'warning',
        title: 'High User Activity',
        message: 'User registrations 300% above normal',
        time: '2 hours ago',
        read: true
      }
    ]
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  const navItems = [
    { key: 'dashboard', icon: <Home size={20} />, label: 'Dashboard' },
    { key: 'users', icon: <Users size={20} />, label: 'User Management' },
    { key: 'services', icon: <Monitor size={20} />, label: 'Services Monitoring' },
    { key: 'reports', icon: <BarChart3 size={20} />, label: 'Reports & Analytics' },
    { key: 'content', icon: <FileText size={20} />, label: 'Content Management' },
    { key: 'settings', icon: <Settings size={20} />, label: 'System Settings' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab data={adminData} />;
      case 'users':
        return <UsersTab users={adminData.users} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;
      case 'services':
        return <ServicesTab services={adminData.services} />;
      case 'reports':
        return <ReportsTab data={adminData} />;
      case 'content':
        return <ContentTab content={adminData.content} />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <DashboardTab data={adminData} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header hideLogin={true} onLoginClick={() => {}} />
      
      <div className="flex flex-1 pt-20 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-col w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center mb-2">
              <Shield size={24} className="text-red-600 mr-2" />
              <h1 className="text-xl font-bold text-red-700">Admin Panel</h1>
            </div>
            <p className="text-sm text-gray-500">{adminData.profile.email}</p>
            <span className="inline-block px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full mt-1">
              {adminData.profile.role}
            </span>
          </div>
          <nav className="flex-1 p-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                  activeTab === item.key
                    ? 'bg-red-100 text-red-700'
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

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {navItems.find(item => item.key === activeTab)?.label || 'Dashboard'}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 rounded-full hover:bg-gray-100 relative transition-colors"
                  >
                    <Bell size={20} className="text-gray-600" />
                    {adminData.notifications.some(n => !n.read) && (
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
                        className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                      >
                        <div className="p-3 border-b border-gray-200 bg-red-600 text-white">
                          <h3 className="font-semibold">Admin Notifications</h3>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                          {adminData.notifications.map((notification) => (
                            <div key={notification.id} className={`p-3 border-b border-gray-100 ${!notification.read ? 'bg-blue-50' : ''}`}>
                              <div className="flex items-start">
                                <div className={`p-2 rounded-full mr-3 ${
                                  notification.type === 'success' ? 'bg-green-100 text-green-600' :
                                  notification.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                                  notification.type === 'alert' ? 'bg-red-100 text-red-600' :
                                  'bg-blue-100 text-blue-600'
                                }`}>
                                  {notification.type === 'success' ? <CheckCircle size={16} /> :
                                   notification.type === 'warning' ? <AlertTriangle size={16} /> :
                                   notification.type === 'alert' ? <XCircle size={16} /> :
                                   <Bell size={16} />}
                                </div>
                                <div>
                                  <h4 className="font-medium">{notification.title}</h4>
                                  <p className="text-sm text-gray-600">{notification.message}</p>
                                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            {renderContent()}
          </div>
        </main>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

// Dashboard Tab Component
const DashboardTab = ({ data }) => (
  <div className="space-y-6">
    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Total Users"
        value={data.stats.totalUsers.toLocaleString()}
        change={`+${data.stats.newSignups}`}
        changeType="positive"
        icon={<Users size={20} className="text-blue-600" />}
      />
      <StatsCard
        title="Monthly Revenue"
        value={`${(data.stats.totalRevenue / 1000000).toFixed(1)}M MAD`}
        change={`+${data.stats.monthlyGrowth}%`}
        changeType="positive"
        icon={<TrendingUp size={20} className="text-green-600" />}
      />
      <StatsCard
        title="Services Uptime"
        value={`${data.stats.servicesUptime}%`}
        change={data.stats.servicesUptime > 99 ? "Excellent" : "Good"}
        changeType={data.stats.servicesUptime > 99 ? "positive" : "neutral"}
        icon={<Server size={20} className="text-purple-600" />}
      />
      <StatsCard
        title="Support Tickets"
        value={data.stats.supportTickets}
        change={`${data.stats.churnRate}% churn`}
        changeType="negative"
        icon={<AlertTriangle size={20} className="text-orange-600" />}
      />
    </div>

    {/* Quick Actions & Services Status */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <QuickActionButton icon={<Plus size={18} />} label="Add User" />
          <QuickActionButton icon={<Mail size={18} />} label="Send Broadcast" />
          <QuickActionButton icon={<Download size={18} />} label="Export Data" />
          <QuickActionButton icon={<Settings size={18} />} label="System Config" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Critical Services Status</h2>
        <div className="space-y-3">
          {data.services.slice(0, 4).map((service, index) => (
            <ServiceStatusItem key={index} service={service} />
          ))}
        </div>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Users Activity</h2>
      <div className="space-y-4">
        {data.users.slice(0, 5).map((user) => (
          <div key={user.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Users size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{user.plan}</p>
              <span className={`px-2 py-1 text-xs rounded-full ${
                user.status === 'active' ? 'bg-green-100 text-green-800' : 
                user.status === 'suspended' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {user.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Users Management Tab
const UsersTab = ({ users, searchTerm, setSearchTerm }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-1 items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              <Plus size={16} className="mr-2 inline" />
              Add User
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download size={16} className="mr-2 inline" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        {user.role === 'staff' ? (
                          <Crown size={16} className="text-yellow-600" />
                        ) : (
                          <Users size={16} className="text-gray-600" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.plan}</div>
                    <div className="text-sm text-gray-500">{user.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' :
                      user.status === 'suspended' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.revenue.toFixed(2)} MAD
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(user.lastActive).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye size={16} />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Services Monitoring Tab
const ServicesTab = ({ services }) => (
  <div className="space-y-6">
    {/* Overview Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Services Online</p>
            <p className="text-2xl font-bold text-green-600">
              {services.filter(s => s.status === 'healthy').length}/{services.length}
            </p>
          </div>
          <CheckCircle size={32} className="text-green-600" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Average Uptime</p>
            <p className="text-2xl font-bold text-blue-600">
              {(services.reduce((acc, s) => acc + s.uptime, 0) / services.length).toFixed(1)}%
            </p>
          </div>
          <TrendingUp size={32} className="text-blue-600" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Requests</p>
            <p className="text-2xl font-bold text-purple-600">
              {(services.reduce((acc, s) => acc + s.requests, 0) / 1000).toFixed(0)}K
            </p>
          </div>
          <Activity size={32} className="text-purple-600" />
        </div>
      </div>
    </div>

    {/* Services List */}
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Services Status</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {services.map((service, index) => (
          <div key={index} className="p-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  service.status === 'healthy' ? 'bg-green-500' :
                  service.status === 'warning' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
                <div>
                  <h3 className="font-medium">{service.name}</h3>
                  <p className="text-sm text-gray-500">
                    {service.requests.toLocaleString()} requests | {service.errors} errors
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{service.uptime}% uptime</p>
                <p className="text-sm text-gray-500">{service.responseTime}ms avg</p>
              </div>
            </div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  service.status === 'healthy' ? 'bg-green-500' :
                  service.status === 'warning' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${service.uptime}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Reports & Analytics Tab
const ReportsTab = ({ data }) => (
  <div className="space-y-6">
    {/* KPI Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ReportCard
        title="Revenue Growth"
        value={`+${data.stats.monthlyGrowth}%`}
        subtitle="vs last month"
        trend="up"
      />
      <ReportCard
        title="User Acquisition"
        value={data.stats.newSignups}
        subtitle="new users this month"
        trend="up"
      />
      <ReportCard
        title="Churn Rate"
        value={`${data.stats.churnRate}%`}
        subtitle="vs 2.8% last month"
        trend="down"
      />
      <ReportCard
        title="Support Tickets"
        value={data.stats.supportTickets}
        subtitle="pending resolution"
        trend="neutral"
      />
    </div>

    {/* Charts Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Revenue Analytics</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">Revenue Chart Placeholder</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">User Growth</h3>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-500">User Growth Chart Placeholder</p>
        </div>
      </div>
    </div>

    {/* Export Options */}
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Export Reports</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
          <FileText size={20} className="text-blue-600 mb-2" />
          <h4 className="font-medium">Monthly Report</h4>
          <p className="text-sm text-gray-500">Complete monthly analytics</p>
        </button>
        <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
          <Users size={20} className="text-green-600 mb-2" />
          <h4 className="font-medium">User Data</h4>
          <p className="text-sm text-gray-500">User statistics and metrics</p>
        </button>
        <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
          <BarChart3 size={20} className="text-purple-600 mb-2" />
          <h4 className="font-medium">Financial Report</h4>
          <p className="text-sm text-gray-500">Revenue and billing data</p>
        </button>
      </div>
    </div>
  </div>
);

// Content Management Tab
const ContentTab = ({ content }) => (
  <div className="space-y-6">
    {/* Content Actions */}
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Content Management</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <Plus size={16} className="mr-2 inline" />
            New Content
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter size={16} className="mr-2 inline" />
            Filter
          </button>
        </div>
      </div>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {content.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ y: -5 }}
          className="bg-white rounded-lg shadow overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                {item.type === 'image' ? (
                  <Image size={20} className="text-blue-600 mr-2" />
                ) : item.type === 'video' ? (
                  <Video size={20} className="text-purple-600 mr-2" />
                ) : (
                  <FileText size={20} className="text-green-600 mr-2" />
                )}
                <span className="text-sm text-gray-500 capitalize">{item.type}</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={16} />
              </button>
            </div>
            
            <h3 className="font-semibold mb-2">{item.title}</h3>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <span>by {item.author}</span>
              <span>{item.views.toLocaleString()} views</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 text-xs rounded-full ${
                item.status === 'published' ? 'bg-green-100 text-green-800' :
                item.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {item.status}
              </span>
              <span className="text-xs text-gray-500">{item.lastModified}</span>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
                <Edit size={14} className="mr-1 inline" />
                Edit
              </button>
              <button className="flex-1 px-3 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700">
                <Eye size={14} className="mr-1 inline" />
                View
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// System Settings Tab
const SettingsTab = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">System Configuration</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Maintenance Mode</span>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex justify-between items-center">
            <span>User Registration</span>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
          <div className="flex justify-between items-center">
            <span>Email Notifications</span>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
        <div className="space-y-4">
          <button className="w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <h4 className="font-medium">Password Policy</h4>
            <p className="text-sm text-gray-500">Configure password requirements</p>
          </button>
          <button className="w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <h4 className="font-medium">Two-Factor Authentication</h4>
            <p className="text-sm text-gray-500">Manage 2FA settings</p>
          </button>
          <button className="w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <h4 className="font-medium">Access Logs</h4>
            <p className="text-sm text-gray-500">View system access logs</p>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Helper Components
const StatsCard = ({ title, value, change, changeType, icon }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-lg shadow p-6"
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className={`text-sm mt-1 ${
          changeType === 'positive' ? 'text-green-600' :
          changeType === 'negative' ? 'text-red-600' :
          'text-gray-500'
        }`}>
          {change}
        </p>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        {icon}
      </div>
    </div>
  </motion.div>
);

const QuickActionButton = ({ icon, label }) => (
  <button className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
    <span className="mr-2 text-red-600">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const ServiceStatusItem = ({ service }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <div className={`w-2 h-2 rounded-full mr-3 ${
        service.status === 'healthy' ? 'bg-green-500' :
        service.status === 'warning' ? 'bg-yellow-500' :
        'bg-red-500'
      }`}></div>
      <span className="text-sm font-medium">{service.name}</span>
    </div>
    <span className="text-sm text-gray-500">{service.uptime}%</span>
  </div>
);

const ReportCard = ({ title, value, subtitle, trend }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
      </div>
      <div className={`p-2 rounded-full ${
        trend === 'up' ? 'bg-green-100 text-green-600' :
        trend === 'down' ? 'bg-red-100 text-red-600' :
        'bg-gray-100 text-gray-600'
      }`}>
        {trend === 'up' ? <TrendingUp size={16} /> :
         trend === 'down' ? <TrendingDown size={16} /> :
         <Activity size={16} />}
      </div>
    </div>
  </div>
);

export default AdminDashboard;