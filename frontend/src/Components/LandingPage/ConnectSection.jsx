import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Empower Agriculture",
    description:
      "Become part of a supportive community dedicated to fostering innovation in agriculture. Engage in discussions, ask questions, and share your experiences with fellow enthusiasts and experts.",
    tags: ["Benefits", "Vintage", "By Artist", "Limited"],
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20240725/pngtree-the-concept-of-new-farming-or-smart-farming-agricultural-technology-image_15917909.jpg",
    weather: {
      location: "Jakarta, Indonesia",
      temp: "+18°C",
      high: "23°C",
      low: "16°C",
      humidity: "40%",
      precipitation: "5.1 ml",
      pressure: "450 hPa",
      wind: "23 m/s",
      icon: "☁️",
    },
  },
  {
    title: "Sustainable Growth",
    description:
      "Support sustainable farming practices and learn how technology can drive efficiency in agriculture.",
    tags: ["Eco", "Smart", "Future"],
    image:
      "https://static.vecteezy.com/system/resources/previews/023/060/798/non_2x/farming-tractor-spraying-plants-in-a-field-photo.jpg",
    weather: {
      location: "Delhi, India",
      temp: "+29°C",
      high: "33°C",
      low: "25°C",
      humidity: "52%",
      precipitation: "1.5 ml",
      pressure: "420 hPa",
      wind: "15 m/s",
      icon: "🌤️",
    },
  },
  {
    title: "Innovation in Farming",
    description:
      "Discover the latest innovations transforming agriculture and connecting farmers to global opportunities.",
    tags: ["Tech", "Innovation", "Global"],
    image:
      "https://media.gettyimages.com/id/1306713348/photo/drone-in-soybean-crop.jpg?s=612x612&w=gi&k=20&c=KrkYaucI1NAdgUjvQVC6DUImPl2RhzzyA4mGDcWlZcc=",
    weather: {
      location: "Nairobi, Kenya",
      temp: "+21°C",
      high: "25°C",
      low: "18°C",
      humidity: "48%",
      precipitation: "3.2 ml",
      pressure: "460 hPa",
      wind: "10 m/s",
      icon: "🌦️",
    },
  },
];

const AgricultureSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const { title, description, tags, image, weather } = slides[current];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`px-4 py-1 rounded-full text-sm font-medium border transition-colors duration-300 ${
                  i === 0
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-gray-600 hover:bg-green-100"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
            {description}
          </p>

          {/* Pagination dots */}
          <div className="flex justify-center md:justify-start gap-2 mt-6">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-green-600 scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="relative md:w-1/2 w-full">
          <img
            src={image}
            alt={title}
            className="rounded-2xl shadow-xl object-cover w-full h-[300px] sm:h-[400px] lg:h-[450px] transition-transform duration-500 hover:scale-[1.02]"
          />

          {/* Weather Card */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 w-64 sm:w-72 animate-fadeIn">
            <p className="text-sm text-gray-700 mb-2">{weather.location}</p>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {weather.temp}
                </h3>
                <p className="text-xs text-gray-500">
                  H: {weather.high} &nbsp; L: {weather.low}
                </p>
              </div>
              <span className="text-3xl">{weather.icon}</span>
            </div>

            <div className="grid grid-cols-2 gap-y-2 text-xs mt-3 text-gray-600">
              <p>Humidity</p>
              <p className="font-semibold">{weather.humidity}</p>
              <p>Precipitation</p>
              <p className="font-semibold">{weather.precipitation}</p>
              <p>Pressure</p>
              <p className="font-semibold">{weather.pressure}</p>
              <p>Wind</p>
              <p className="font-semibold">{weather.wind}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-green-600 bg-green-600 text-white hover:bg-green-700 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureSection;
