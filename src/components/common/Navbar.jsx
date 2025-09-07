import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Clock } from "lucide-react";
import { useDateTime } from "../../hooks/useDateTime";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { date, time } = useDateTime();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Register", path: "/register" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav
      // ✅ FIX: Corrected Tailwind syntax from `fixed-top-0` to `fixed top-0`
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-6">
            <img
              src="image\logo.png"
              alt="Nosa Igiebor Sports Academy Logo"
              className="w-20 h-20 object-contain rounded-full"
            />
           
            {/* ✅ FIX: Corrected typo `hodden` → `hidden` */}
            <div className="hidden sm:block">
              <h1 className="text-l font-bold text-grey-900">
                Nosa Igiebor Sports Academy
              </h1>
              {/* <p className="text-sm text-gray-600">Excellence in Training</p> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Live Date and Time */}
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg">
              <Clock className="w-4 h-4 text-primary-600" />
              <div className="text-xs">
                <div className="font-semibold text-gray-900">{time}</div>
                <div className="text-gray-600">{date}</div>
              </div>
            </div>
          </div>

          {/* ✅ FIX: Moved mobile menu button OUTSIDE `.hidden md:flex` so it is visible on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pb-3 space-y-1">
            {navItems.map((item) => (
              // ✅ FIX: Added `return` to map function so mobile links actually render
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Date and Time */}
            <div className="px-3 py-2 border-t border-gray-200 mt-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary-600" />
                <div className="text-sm">
                  {/* ✅ FIX: Corrected wrong variable `{item}` → `{time}` */}
                  <div className="font-semibold text-gray-900">{time}</div>
                  <div className="text-gray-600">{date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
