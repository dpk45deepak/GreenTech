import React from 'react';
import Header from '../LandingPage/Header';
import WeatherCard from '../LandingPage/WeatherCard';

const HeroSection = () => {
  return (
    <div 
      className="min-h-screen pb-8 px-4 sm:px-6 lg:px-8 relative py-0"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/09/30/45/71/360_F_930457194_oDUJwbkSJizjB8qsXEkZbsONv8S5fWiQ.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 pt-2">
        <Header />
        
        <div className="w-full flex flex-col lg:flex-row items-center px-4 md:px-24 gap-28 lg:gap-24 md:pt-20">
          <div className='hidden md:block md:w-2/3'>
          <WeatherCard />
          </div>
          {/* Main Content */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 text-white backdrop:blur-md">
            <div>
              <p className="text-gray-200 text-sm mb-2">WELCOME TO <span className='text-green-400 font-semibold'>KRISHIBANDHU</span></p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bring Growth<br />
                <span className="text-green-200">Fresh Agricultural</span>
              </h1>
              <p className="text-gray-100 text-lg mb-8">
                Experience the ultimate golfing journey with expert tips, premium gear, and professional insights.
              </p>
            </div>

            <div className="flex flex-col justify-center items-start space-y-6">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors flex items-center">
                Join Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="text-white hover:text-green-300 font-medium py-3 px-8 rounded-full transition-colors flex items-center border border-white hover:border-green-300">
                Learn Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;