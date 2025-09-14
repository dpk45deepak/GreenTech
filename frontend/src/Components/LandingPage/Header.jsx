import React, { useState } from "react";
import { ArrowRight, Calendar, User, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Market", path: "/market" },
    { name: "Recommendation", path: "/recommendation" },
    { name: "Service Center", path: "/service-center" },
    { name: "Storages", path: "/storages" },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="flex items-center justify-center pt-2 w-full">
        <header className="w-[95%] sm:w-[90%] md:max-w-6xl bg-white backdrop-blur-lg shadow-md z-50 rounded-xl sm:rounded-full">
          <div className="mx-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <span className="text-lg sm:text-xl font-bold text-green-700">
              <span className="text-lg sm:text-xl font-bold text-green-700"> </span>
                KRISHIBANDHU 🍃
              </span>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => navigate(item.path)}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-green-100 hover:border-green-500 transition-all duration-300 text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <Calendar className="w-5 h-5 text-gray-600" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => navigate("/profile")}
              >
                <User className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={() => navigate("/signin")}
                className="hidden md:flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition font-medium"
              >
                Sign In <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white rounded-xl shadow-md z-50 mt-2 mx-2">
          <nav className="flex flex-col space-y-3 px-5 py-4">
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className="px-4 py-3 rounded-full text-gray-700 hover:bg-green-100 transition text-center font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                navigate("/signin");
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition mt-2 font-medium"
            >
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
