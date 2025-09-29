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

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 xs:h-18 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 xs:space-x-3 sm:space-x-6 min-w-0 flex-shrink">
            <img
              src="/image/logo.png"
              alt="Nosa Igiebor Sports Academy"
              className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain rounded-full flex-shrink-0"
            />
            <div className="hidden sm:block min-w-0">
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 leading-tight truncate">
                Nosa Igiebor Sports Academy
              </h1>
              <p className="hidden md:block text-xs sm:text-sm text-gray-600">Excellence in Training</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === item.path
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Live Date and Time */}
            <div className="hidden lg:flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
              <Clock className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <div className="text-xs">
                <div className="font-semibold text-gray-900 whitespace-nowrap">{time}</div>
                <div className="text-gray-600 whitespace-nowrap">{date}</div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 xs:w-6 xs:h-6" />
              ) : (
                <Menu className="w-5 h-5 xs:w-6 xs:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 xs:px-3 py-2 xs:py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 xs:px-4 py-2.5 xs:py-3 rounded-md text-sm xs:text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Date and Time */}
            <div className="px-3 xs:px-4 py-2.5 xs:py-3 border-t border-gray-200 mt-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <div className="text-xs xs:text-sm">
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