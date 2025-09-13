import React, { useState, useEffect } from 'react';

const GrowingInnovation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "This platform has revolutionized how we manage our crops. Yield increased by 30% in the first season!",
      author: "Sarah Johnson",
      role: "Organic Farmer",
    },
    {
      id: 2,
      quote:
        "The predictive analytics helped us avoid a devastating frost that would have ruined our harvest.",
      author: "Michael Chen",
      role: "Vineyard Owner",
    },
    {
      id: 3,
      quote:
        "The community knowledge sharing helped us implement sustainable practices that reduced water usage by 40%.",
      author: "Elena Rodriguez",
      role: "Agricultural Engineer",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <div className="relative mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-800 mb-6 leading-snug">
            Growing Innovation
          </h1>
          <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 h-1.5 sm:h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
        </div>

        {/* Subheading */}
        <p className="text-base sm:text-lg lg:text-xl text-green-700 mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          Cultivating the future of agriculture through technology, sustainability, and community.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {[
            {
              title: "Smart Farming",
              description:
                "Leveraging IoT and AI for precision agriculture and optimized yields.",
              icon: "🌱",
            },
            {
              title: "Sustainable Practices",
              description:
                "Implementing eco-friendly methods that protect our planet for future generations.",
              icon: "♻️",
            },
            {
              title: "Community Growth",
              description:
                "Building networks of farmers sharing knowledge and resources for mutual success.",
              icon: "👨‍🌾",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-green-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mb-16 bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-800 mb-6">
            What Our Community Says
          </h2>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="bg-green-50 rounded-xl p-4 sm:p-6">
                    <p className="text-green-700 text-sm sm:text-lg italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-green-800 text-sm sm:text-base">
                        {testimonial.author}
                      </p>
                      <p className="text-green-600 text-xs sm:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2 sm:space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-green-600" : "bg-green-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:bg-green-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:bg-green-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-colors duration-300 flex items-center text-sm sm:text-base">
            Get Started
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-colors duration-300 text-sm sm:text-base">
            Learn More
          </button>
        </div>

        {/* Decorative Pulsing Dots */}
        <div className="mt-16 flex justify-center space-x-3 sm:space-x-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-400 rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: `${item * 0.3}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowingInnovation;
