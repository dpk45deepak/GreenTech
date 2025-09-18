import React, { useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiTrendingUp,
  FiAlertCircle,
  FiCloudRain,
  FiShoppingCart,
  FiBookOpen,
  FiUsers,
  FiPackage,
  FiArrowUp,
  FiArrowDown,
  FiSun,
  FiMenu,
  FiX,
  FiBarChart2,
  FiDroplet,
  FiThermometer
} from "react-icons/fi";

const FarmerDashboard = () => {
  const [activeSection, setActiveSection] = useState("prices");
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRefs = useRef({});

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    if (sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId].scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Set section refs
  const setRef = (sectionId) => (el) => {
    sectionRefs.current[sectionId] = el;
  };

  // Sample data
  const marketPrices = [
    {
      id: 1,
      crop: "Wheat",
      mandi: "Delhi",
      minPrice: 2150,
      maxPrice: 2250,
      trend: "up",
      change: 2.5,
    },
    {
      id: 2,
      crop: "Rice Basmati",
      mandi: "Punjab",
      minPrice: 3500,
      maxPrice: 3800,
      trend: "up",
      change: 1.2,
    },
    {
      id: 3,
      crop: "Tomato",
      mandi: "Bangalore",
      minPrice: 800,
      maxPrice: 1200,
      trend: "down",
      change: 4.3,
    },
    {
      id: 4,
      crop: "Potato",
      mandi: "Uttar Pradesh",
      minPrice: 700,
      maxPrice: 900,
      trend: "up",
      change: 0.8,
    },
    {
      id: 5,
      crop: "Cotton",
      mandi: "Gujarat",
      minPrice: 5800,
      maxPrice: 6200,
      trend: "up",
      change: 3.1,
    },
  ];

  const highDemandCrops = [
    { id: 1, name: "Organic Turmeric", demand: 38, growth: 12 },
    { id: 2, name: "Basmati Rice", demand: 25, growth: 5 },
    { id: 3, name: "Soybean", demand: 18, growth: 8 },
    { id: 4, name: "Almonds", demand: 15, growth: -3 },
    { id: 5, name: "Pulses", demand: 12, growth: 10 },
  ];

  const governmentSchemes = [
    {
      id: 1,
      title: "MSP Updates",
      description: "Minimum Support Prices for Kharif Season 2023 announced",
      deadline: "2023-09-30",
    },
    {
      id: 2,
      title: "Subsidy Schemes",
      description: "75% subsidy on agricultural equipment",
      deadline: "2023-12-15",
    },
    {
      id: 3,
      title: "Crop Insurance",
      description: "Pradhan Mantri Fasal Bima Yojana extended",
      deadline: "2023-10-20",
    },
  ];

  const weatherData = {
    current: {
      temp: 32,
      condition: "Sunny",
      humidity: 65,
      rainfall: 10,
    },
    forecast: [
      { day: "Mon", temp: 32, condition: "Sunny", rain: 10 },
      { day: "Tue", temp: 31, condition: "Partly Cloudy", rain: 20 },
      { day: "Wed", temp: 29, condition: "Rainy", rain: 80 },
      { day: "Thu", temp: 30, condition: "Cloudy", rain: 30 },
      { day: "Fri", temp: 31, condition: "Sunny", rain: 5 },
      { day: "Sat", temp: 32, condition: "Sunny", rain: 0 },
      { day: "Sun", temp: 33, condition: "Sunny", rain: 0 },
    ],
  };

  const statsData = [
    { title: "Active Farmers", value: "2.5M", change: "+5.2%", trend: "up" },
    { title: "Crop Varieties", value: "120+", change: "+8", trend: "up" },
    { title: "Avg Yield Increase", value: "18%", change: "+2.4%", trend: "up" },
    { title: "Transaction Volume", value: "₹4.2B", change: "+12.7%", trend: "up" },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center">
          <div className="animate-pulse mb-4">
            <div className="w-20 h-20 bg-green-200 rounded-full mx-auto flex items-center justify-center">
              <FiSun className="text-4xl text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Krishi Bazaar
          </h2>
          <p className="text-green-600">Loading market information...</p>
          <div className="mt-6 w-64 h-2 bg-green-200 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-green-600 rounded-full animate-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <FiSun className="text-white text-xl" />
              </div>
              <h1 className="text-xl font-bold text-green-800">Krishi Bazaar</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {[
                { id: "prices", label: "Prices", icon: <FiTrendingUp className="mr-1" /> },
                { id: "trends", label: "Trends", icon: <FiBarChart2 className="mr-1" /> },
                { id: "government", label: "Schemes", icon: <FiAlertCircle className="mr-1" /> },
                { id: "weather", label: "Weather", icon: <FiCloudRain className="mr-1" /> },
                { id: "marketplace", label: "Marketplace", icon: <FiShoppingCart className="mr-1" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-green-100 text-green-800 font-medium"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition duration-300">
                Login
              </button>
              <button 
                className="md:hidden text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-2">
                {[
                  { id: "prices", label: "Market Prices", icon: <FiTrendingUp className="mr-2" /> },
                  { id: "trends", label: "Market Trends", icon: <FiBarChart2 className="mr-2" /> },
                  { id: "government", label: "Govt Schemes", icon: <FiAlertCircle className="mr-2" /> },
                  { id: "weather", label: "Weather Updates", icon: <FiCloudRain className="mr-2" /> },
                  { id: "marketplace", label: "Marketplace", icon: <FiShoppingCart className="mr-2" /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center px-4 py-3 rounded-lg text-left transition duration-300 ${
                      activeSection === item.id
                        ? "bg-green-100 text-green-800 font-medium"
                        : "text-gray-600 hover:bg-green-50"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
                <button className="bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg text-white transition duration-300 mt-2">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-teal-800 text-white py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Empowering <span className="text-green-300">Indian Farmers</span> with Market Intelligence
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get real-time market prices, weather updates, expert advice, and connect directly with buyers
          </p>

          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for crop prices, news, or advice..."
              className="w-full py-4 px-6 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg"
            />
            <button className="absolute right-2 top-2 bg-green-600 hover:bg-green-700 p-3 rounded-xl transition duration-300">
              <FiSearch className="text-white text-xl" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-green-800">{stat.value}</div>
                <div className="text-sm text-green-600 mt-1">{stat.title}</div>
                <div className={`flex items-center justify-center text-xs mt-2 ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.trend === "up" ? <FiArrowUp className="mr-1" /> : <FiArrowDown className="mr-1" />}
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Market Prices Section */}
        <section id="prices" ref={setRef("prices")} className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
            <FiTrendingUp className="mr-3 text-green-600" /> Daily Market Prices
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold text-green-800">Crop</th>
                    <th className="py-4 px-6 text-left font-semibold text-green-800">Mandi</th>
                    <th className="py-4 px-6 text-left font-semibold text-green-800">Min Price (₹/q)</th>
                    <th className="py-4 px-6 text-left font-semibold text-green-800">Max Price (₹/q)</th>
                    <th className="py-4 px-6 text-left font-semibold text-green-800">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {marketPrices.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-green-50 transition duration-150"
                    >
                      <td className="py-4 px-6 font-medium">{item.crop}</td>
                      <td className="py-4 px-6">{item.mandi}</td>
                      <td className="py-4 px-6">
                        {item.minPrice.toLocaleString()}
                      </td>
                      <td className="py-4 px-6">
                        {item.maxPrice.toLocaleString()}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          {item.trend === "up" ? (
                            <FiArrowUp className="text-green-500 mr-1" />
                          ) : (
                            <FiArrowDown className="text-red-500 mr-1" />
                          )}
                          <span
                            className={
                              item.trend === "up"
                                ? "text-green-500 font-medium"
                                : "text-red-500 font-medium"
                            }
                          >
                            {item.change}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Market Trends Section */}
        <section id="trends" ref={setRef("trends")} className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
            <FiBarChart2 className="mr-3 text-green-600" /> Market Trends & Demand
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Price Trends (Last 30 Days)</h3>
              <div className="h-64 bg-gray-50 rounded-xl flex items-end justify-between p-4">
                {[70, 90, 40, 60, 85, 75, 50, 65, 80, 70, 85, 90].map((height, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-4 bg-gradient-to-t from-green-400 to-green-600 rounded-t-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ₹{2000 + index * 200}
                      </div>
                    </div>
                    <span className="mt-2 text-xs text-gray-500">{index + 1}d</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">High Demand Crops</h3>
              <div className="space-y-4">
                {highDemandCrops.map((crop) => (
                  <div key={crop.id} className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                    <div>
                      <span className="font-medium">{crop.name}</span>
                      <div className="text-sm text-gray-500 mt-1">
                        <span className={`flex items-center ${crop.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {crop.growth > 0 ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
                          {Math.abs(crop.growth)}% from last month
                        </span>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {crop.demand}% demand
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Government Schemes Section */}
        <section id="government" ref={setRef("government")} className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
            <FiAlertCircle className="mr-3 text-green-600" /> Government Schemes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentSchemes.map((scheme) => {
              const daysUntilDeadline = Math.ceil((new Date(scheme.deadline) - new Date()) / (1000 * 60 * 60 * 24));
              return (
                <div
                  key={scheme.id}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-green-500"
                >
                  <h3 className="text-xl font-semibold mb-3 text-green-800">
                    {scheme.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Deadline: {new Date(scheme.deadline).toLocaleDateString()}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      daysUntilDeadline < 7 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {daysUntilDeadline > 0 ? `${daysUntilDeadline} days left` : 'Expired'}
                    </div>
                  </div>
                  <button className="mt-4 text-green-600 font-medium flex items-center hover:text-green-800 transition duration-300">
                    Learn more <span className="ml-1">→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Weather Section */}
        <section id="weather" ref={setRef("weather")} className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
            <FiCloudRain className="mr-3 text-green-600" /> Weather Updates
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <FiThermometer className="text-3xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Maharashtra Forecast</h3>
                  <p className="text-gray-600">Next 7 days weather outlook</p>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mt-6">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="font-medium text-sm">{day.day}</p>
                    <div className="my-2">
                      {day.condition.includes("Sunny") ? (
                        <FiSun className="text-yellow-500 mx-auto" />
                      ) : day.condition.includes("Cloudy") ? (
                        <FiCloudRain className="text-gray-500 mx-auto" />
                      ) : (
                        <FiDroplet className="text-blue-500 mx-auto" />
                      )}
                    </div>
                    <p className="text-lg font-semibold">{day.temp}°C</p>
                    <p className="text-xs text-gray-500 mt-1">{day.rain}%</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Current Conditions & Alerts</h3>
              
              <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <FiThermometer className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Current Weather</h4>
                    <p className="text-2xl font-bold">{weatherData.current.temp}°C</p>
                    <p className="text-gray-600">{weatherData.current.condition}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center">
                    <FiDroplet className="text-blue-500 mr-2" />
                    <span>Humidity: {weatherData.current.humidity}%</span>
                  </div>
                  <div className="flex items-center">
                    <FiCloudRain className="text-blue-500 mr-2" />
                    <span>Rainfall: {weatherData.current.rainfall}mm</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-4">
                <div className="flex">
                  <FiAlertCircle className="text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-yellow-700">
                      <strong>Heavy Rainfall Warning</strong> for coastal regions in next 48 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <div className="flex">
                  <FiAlertCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-700">
                      <strong>Wind Advisory</strong> for northern districts tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace Section */}
        <section id="marketplace" ref={setRef("marketplace")} className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
            <FiShoppingCart className="mr-3 text-green-600" /> Buy & Sell Marketplace
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="h-40 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                  <FiPackage className="text-5xl text-green-700" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">Organic Wheat</h3>
                  <p className="text-green-600 font-medium mt-1">
                    ₹2,200 / quintal
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    500 quintals available
                  </p>
                  <p className="text-gray-500 text-sm">
                    From: Satara, Maharashtra
                  </p>
                  <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition duration-300">
                    Contact Seller
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-xl transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              List Your Produce for Free
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-green-900 to-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-green-700 p-2 rounded-lg mr-2">
                  <FiSun className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Krishi Bazaar</h3>
              </div>
              <p className="text-green-200">
                Empowering Indian farmers with real-time market intelligence and
                direct buyer connections.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {["prices", "trends", "government", "weather", "marketplace"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-green-200 hover:text-white transition duration-300 capitalize"
                    >
                      {item === "government" ? "Govt Schemes" : item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-green-200 hover:text-white transition duration-300">
                    Farming Techniques
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-200 hover:text-white transition duration-300">
                    Crop Advisory
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-200 hover:text-white transition duration-300">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-200 hover:text-white transition duration-300">
                    Community Forum
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-green-200">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +91 1800-123-4567
                </li>
                <li className="flex items-center text-green-200">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  support@krishibazaar.com
                </li>
                <li className="flex items-center text-green-200">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Mumbai, Maharashtra
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-800 mt-10 pt-8 text-center text-green-200">
            <p>© 2023 Krishi Bazaar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition duration-300 z-40"
        aria-label="Back to top"
      >
        <FiArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default FarmerDashboard;