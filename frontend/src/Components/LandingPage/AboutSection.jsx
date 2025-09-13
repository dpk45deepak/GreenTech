import React, { useState } from "react";

const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      name: "AgriMonitor",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      description:
        "Monitor crop health and growth patterns with advanced sensors",
    },
    {
      name: "StockSure",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      description:
        "Inventory management and stock prediction for agricultural products",
    },
    {
      name: "CapAid",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description:
        "Financial assistance and capital investment for farming initiatives",
    },
    {
      name: "Assistant",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
      description:
        "AI-powered assistant for farming guidance and best practices",
    },
  ];

  const scrollToSection = (sectionId, index) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveFeature(index);
    }
  };

  return (
    <section
      id="about"
      className="bg-white py-8 md:py-16 px-4 sm:px-6 lg:px-8 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 md:flex">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            - About Us
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed md:text-4xl md:text-right">
            Amidst the advancements in agricultural technology, the prevalence
            of traditional farming methods, with their inherent labor-intensive
            characteristics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer transition-all duration-300 hover:transform hover:scale-105 p-3 sm:p-4"
              onClick={() => scrollToSection(`feature-${index}`, index)}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Icon Box */}
              <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-3 sm:mb-4 h-20 sm:h-28 md:h-32 flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                {feature.name}
              </h3>

              {/* Description - visible on hover for mobile */}
              <p
                className={`text-gray-600 text-xs sm:text-sm transition-all duration-300 ${
                  activeFeature === index
                    ? "block"
                    : "hidden sm:block md:hidden"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Feature Indicator */}
        <div className="md:hidden flex justify-center mt-6 mb-8">
          <div className="grid grid-cols-2 gap-2">
            {features.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-md transition-colors ${
                  activeFeature === index
                    ? "bg-green-600 shadow-md"
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 md:mt-16">
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
