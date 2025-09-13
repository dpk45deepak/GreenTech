import React from 'react'

const WeatherInfo = () => {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">@ Jakarta, Indonesia</div>
          <div className="text-right">
            <div className="text-lg font-semibold">H: 23°C</div>
            <div className="text-sm text-gray-600">L: 16°C</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Humidity</div>
            <div className="text-xl font-bold">40%</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Precipitation</div>
            <div className="text-xl font-bold">5.1 ml</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Pressure</div>
            <div className="text-xl font-bold">450 hPa</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Wind</div>
            <div className="text-xl font-bold">23 m/s</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherInfo;