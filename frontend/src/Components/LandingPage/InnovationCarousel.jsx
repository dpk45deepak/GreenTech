import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Knock Knock! You've Stepped Into Our Zone!",
    subtitle: "By New Block",
    points: [
      "Ideas that turn into results",
      "The future built here",
      "Sustainable solutions",
    ],
    button: "Explore everything",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIFQ0toOZjOl9UlgAXmmANAq-0EE6uW3Aeg&s",
  },
  {
    id: 2,
    title: "Smart Farming for the Future",
    subtitle: "By AgriTech",
    points: ["IoT-powered solutions", "Drone monitoring", "Precision farming"],
    button: "Discover More",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPB8gfmtDtdl-dY_MPW9k9_TJiBFD2uIKZow&s",
  },
  {
    id: 3,
    title: "Growing Innovation Everyday",
    subtitle: "By Green Future",
    points: [
      "AI-driven crop insights",
      "Better yield forecasting",
      "Sustainable practices",
    ],
    button: "Learn More",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv4iBSsQ2QPBQQ7dqSvqPNqa0HMb4x9ONcQ&s",
  },
];

export default function InnovationCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16 md:mb-16 md:px-10 md:py-20">
      {/* Slider Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left: Image + Card */}
        <div className="relative group">
          <img
            src={slides[current].image}
            alt="Slide"
            className="w-full h-56 sm:h-72 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay Card */}
          <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg animate-fadeIn">
            <h2 className="font-bold text-base sm:text-lg md:text-xl">
              {slides[current].title}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">
              {slides[current].subtitle}
            </p>
            <ul className="list-disc ml-4 sm:ml-5 mt-2 text-gray-700 text-xs sm:text-sm space-y-1">
              {slides[current].points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <button className="mt-3 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              {slides[current].button}
            </button>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="p-5 sm:p-6 md:p-8">
          <h3 className="text-green-700 font-bold text-xs sm:text-sm md:text-base">
            Growing Innovation
          </h3>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2 leading-snug">
            {slides[current].title}
          </h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base lg:text-lg">
            We are all about enhancing agriculture with tech and sustainable
            solutions to make the industry more efficient and prepare for the
            future.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-5 sm:mt-6">
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">
                60%
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                More Sustainable Practices
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">
                45%
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Improved Logistics
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-6">
            {slides.map((s, i) => (
              <img
                key={s.id}
                src={s.image}
                alt={`Thumb ${i}`}
                onClick={() => setCurrent(i)}
                className={`w-14 sm:w-16 md:w-20 h-10 sm:h-12 md:h-14 object-cover rounded-lg cursor-pointer transition ${
                  i === current
                    ? "ring-2 sm:ring-4 ring-green-500"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-2 -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>
      <div className="absolute top-1/2 right-2 -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronRight size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}
