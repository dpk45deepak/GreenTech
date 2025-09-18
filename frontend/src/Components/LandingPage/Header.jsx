import React, { useState } from "react";
import {
  ArrowRight,
  User,
  Menu,
  X,
  Mic,
  BarChart3,
  Lightbulb,
  Warehouse,
  HeadphonesIcon,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (path) => {
    window.location.href = path;
    console.log(`Navigating to: ${path}`);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Market", path: "/market", icon: BarChart3 },
    { name: "Recommendation", path: "/recommendation", icon: Lightbulb },
    { name: "Service Center", path: "/service-center", icon: HeadphonesIcon },
    { name: "Storages", path: "/storages", icon: Warehouse },
    { name: "Voice Assistant", path: "/assistant", icon: Mic },
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-lg shadow-md z-50 rounded-3xl">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-lg font-extrabold text-green-800 tracking-wide">
            KRISHIBANDHU
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-2 px-5 py-2 border border-gray-300 
                rounded-full text-gray-700 bg-white hover:bg-green-50 hover:border-green-400 
                hover:text-green-700 hover:shadow-md transition-all duration-300 text-sm font-medium"
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Voice Assistant (mobile only) */}
          <button
            onClick={() => navigate("/assistant")}
            className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-all duration-300 md:hidden"
            aria-label="Voice Assistant"
          >
            <Mic size={20} />
          </button>

          {/* Profile */}
          <button
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => navigate("/profile")}
          >
            <User size={20} className="text-gray-700" />
          </button>

          {/* Sign In */}
          <button
            onClick={() => navigate("/signin")}
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-green-600 text-white 
            rounded-full hover:bg-green-700 shadow-sm hover:shadow-md transition font-medium"
          >
            Sign In <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-xl shadow-xl z-50 mt-2 mx-4 overflow-hidden">
          <nav className="flex flex-col space-y-2 p-3">
            {navItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  onClick={() => navigate(item.path)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 
                  text-gray-700 hover:bg-green-50 hover:text-green-700 transition text-left font-medium"
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </button>
              );
            })}
            <div className="border-t border-gray-200 pt-3 mt-2">
              <button
                onClick={() => navigate("/signin")}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 
                text-white rounded-lg hover:bg-green-700 transition font-medium"
              >
                Sign In <ArrowRight size={16} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
