import React, { useState } from 'react';
import { FiArrowLeft, FiSun, FiDroplet, FiMap, FiCalendar, FiBarChart2 } from 'react-icons/fi';

const CropRecommendation = ({ onBack }) => {
  const [formData, setFormData] = useState({
    location: '',
    soilType: '',
    season: '',
    waterAvailability: '',
    investmentCapacity: ''
  });
  
  const [recommendations, setRecommendations] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call an API or algorithm
    // For now, we'll use mock data based on inputs
    generateRecommendations();
    setShowResults(true);
  };

  const generateRecommendations = () => {
    // Mock recommendation logic
    const mockCrops = [
      {
        name: 'Basmati Rice',
        profit: '₹42,000 - ₹48,000',
        season: 'Kharif',
        water: 'High',
        risk: 'Medium',
        description: 'High demand in international markets with good government support prices.',
        image: '🌾'
      },
      {
        name: 'Organic Turmeric',
        profit: '₹65,000 - ₹75,000',
        season: 'Both',
        water: 'Medium',
        risk: 'Low',
        description: 'Growing demand for organic spices with premium pricing in export markets.',
        image: '🟨'
      },
      {
        name: 'Soybean',
        profit: '₹32,000 - ₹38,000',
        season: 'Kharif',
        water: 'Medium',
        risk: 'Low',
        description: 'Stable market with consistent demand from oil and food processing industries.',
        image: '🟢'
      }
    ];
    setRecommendations(mockCrops);
  };

  const resetForm = () => {
    setShowResults(false);
    setFormData({
      location: '',
      soilType: '',
      season: '',
      waterAvailability: '',
      investmentCapacity: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="flex items-center text-green-700 hover:text-green-900 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-green-800 text-center">Crop Recommendation</h1>
          <div className="w-24"></div> {/* For spacing */}
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Illustration Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6 text-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-2">Find the Perfect Crop for Your Farm</h2>
              <p className="opacity-90">Get AI-powered recommendations based on your farm's unique conditions</p>
            </div>
          </div>

          {!showResults ? (
            /* Input Form */
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center text-green-700 font-medium mb-2">
                      <FiMap className="mr-2" /> Location/Region
                    </label>
                    <select 
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    >
                      <option value="">Select your region</option>
                      <option value="north">North India</option>
                      <option value="south">South India</option>
                      <option value="east">East India</option>
                      <option value="west">West India</option>
                      <option value="northeast">Northeast India</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center text-green-700 font-medium mb-2">
                      <FiDroplet className="mr-2" /> Soil Type
                    </label>
                    <select 
                      name="soilType"
                      value={formData.soilType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    >
                      <option value="">Select soil type</option>
                      <option value="clay">Clay</option>
                      <option value="sandy">Sandy</option>
                      <option value="loamy">Loamy</option>
                      <option value="black">Black (Regur)</option>
                      <option value="red">Red</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center text-green-700 font-medium mb-2">
                      <FiCalendar className="mr-2" /> Planting Season
                    </label>
                    <select 
                      name="season"
                      value={formData.season}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    >
                      <option value="">Select season</option>
                      <option value="kharif">Kharif (June-October)</option>
                      <option value="rabi">Rabi (November-April)</option>
                      <option value="zaid">Zaid (March-June)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="flex items-center text-green-700 font-medium mb-2">
                      <FiDroplet className="mr-2" /> Water Availability
                    </label>
                    <select 
                      name="waterAvailability"
                      value={formData.waterAvailability}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    >
                      <option value="">Select water availability</option>
                      <option value="low">Low (Rain-fed)</option>
                      <option value="medium">Medium (Limited irrigation)</option>
                      <option value="high">High (Good irrigation)</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center text-green-700 font-medium mb-2">
                      <FiBarChart2 className="mr-2" /> Investment Capacity
                    </label>
                    <select 
                      name="investmentCapacity"
                      value={formData.investmentCapacity}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    >
                      <option value="">Select investment capacity</option>
                      <option value="low">Low (₹0-20,000)</option>
                      <option value="medium">Medium (₹20,000-50,000)</option>
                      <option value="high">High (₹50,000+)</option>
                    </select>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-medium text-green-800 mb-1">Why share this information?</h3>
                    <p className="text-sm text-green-600">We use these details to provide the most accurate crop recommendations tailored to your specific farming conditions.</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  Get Recommendations
                </button>
              </div>
            </form>
          ) : (
            /* Results Display */
            <div className="p-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-green-800 mb-2">Recommended Crops</h2>
                <p className="text-green-600">Based on your farm's profile, here are the best crops for you</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {recommendations.map((crop, index) => (
                  <div key={index} className="bg-gradient-to-b from-green-50 to-white rounded-xl shadow-md border border-green-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-green-600 text-white p-4 text-center">
                      <span className="text-4xl">{crop.image}</span>
                      <h3 className="font-bold text-lg mt-2">{crop.name}</h3>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between mb-3">
                        <span className="text-sm font-medium text-green-700">Expected Profit:</span>
                        <span className="font-bold">{crop.profit}</span>
                      </div>
                      <div className="flex justify-between mb-3">
                        <span className="text-sm font-medium text-green-700">Season:</span>
                        <span>{crop.season}</span>
                      </div>
                      <div className="flex justify-between mb-3">
                        <span className="text-sm font-medium text-green-700">Water Needs:</span>
                        <span>{crop.water}</span>
                      </div>
                      <div className="flex justify-between mb-4">
                        <span className="text-sm font-medium text-green-700">Risk Level:</span>
                        <span>{crop.risk}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{crop.description}</p>
                      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition duration-300 text-sm">
                        View Detailed Analysis
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-amber-800 mb-2">💡 Important Note</h3>
                <p className="text-amber-700 text-sm">These recommendations are based on the information provided. For more accurate suggestions, consider consulting with agricultural experts or using soil testing services.</p>
              </div>

              <div className="flex justify-center gap-4">
                <button 
                  onClick={resetForm}
                  className="bg-white border border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  Modify Criteria
                </button>
                <button 
                  onClick={onBack}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-green-800 mb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-medium text-green-800 mb-2">Soil Testing</h3>
              <p className="text-sm text-green-600 mb-3">Find nearby soil testing facilities to get detailed analysis of your soil nutrients.</p>
              <button className="text-sm text-green-700 font-medium">Find Labs →</button>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-medium text-amber-800 mb-2">Crop Calendar</h3>
              <p className="text-sm text-amber-600 mb-3">View optimal planting and harvesting dates for various crops in your region.</p>
              <button className="text-sm text-amber-700 font-medium">View Calendar →</button>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-medium text-blue-800 mb-2">Expert Consultation</h3>
              <p className="text-sm text-blue-600 mb-3">Schedule a video consultation with agricultural experts for personalized advice.</p>
              <button className="text-sm text-blue-700 font-medium">Book Now →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropRecommendation;