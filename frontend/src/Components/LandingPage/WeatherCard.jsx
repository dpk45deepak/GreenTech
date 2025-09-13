import React from 'react';

const WeatherGrowthCard = () => {
  return (
    <div className="flex items-center justify-center p-4 w-full backdrop-blur-sm">
      <div className="rounded-2xl shadow-lg p-6 w-full max-w-md backdrop-blur-md bg-white/10 border border-white/20">
        {/* Location Header */}
        <div className="mb-6">
          <p className="text-gray-200 text-sm font-medium tracking-wide">
            🌍 Jakarta, Green GC 98765, Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Weather Information */}
          <div>
            <div className="flex items-start mb-4">
              <div className="flex items-center">
                <span className="text-red-500 mr-2 text-lg"></span>
                <h2 className="text-lg font-semibold text-white drop-shadow-sm">
                  Jakarta, Indonesia
                </h2>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-4xl font-extrabold text-yellow-300 drop-shadow-md">+18°C</p>
              <div className="flex space-x-4 mt-1">
                <p className="text-sm font-medium text-gray-200">H: 23°C</p>
                <p className="text-sm font-medium text-gray-200">L: 16°C</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-300 font-medium">Humidity</p>
                <p className="text-lg font-bold text-green-400">40%</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-300 font-medium">Precipitation</p>
                <p className="text-lg font-bold text-sky-400">51 ml</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-300 font-medium">Pressure</p>
                <p className="text-lg font-bold text-violet-400">450 hPa</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-300 font-medium">Wind</p>
                <p className="text-lg font-bold text-cyan-400">23 m/s</p>
              </div>
            </div>
          </div>

          {/* Right Column - Growth Metrics */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <h3 className="text-sm text-gray-300 font-medium">Growth rate</h3>
                <p className="text-2xl font-bold text-emerald-400">
                  0.80 <span className="text-green-300">↑</span>
                </p>
              </div>

              <div className="flex justify-between mb-4">
                <p className="text-xs text-gray-300">January, 01</p>
                <p className="text-xs text-gray-300">July, 01</p>
              </div>

              <div className="mb-4 flex space-x-2">
                {['W', 'M', 'Y'].map((item) => (
                  <button
                    key={item}
                    className="px-3 py-1 text-xs rounded-md bg-gray-800/70 text-gray-200 hover:bg-emerald-500 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="bg-gray-700/60 h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-xl shadow-md">
              <p className="text-lg font-bold text-white">12k + Membership</p>
              <p className="text-sm text-emerald-100">Enjoy our facilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherGrowthCard;
