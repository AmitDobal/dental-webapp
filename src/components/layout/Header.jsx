import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleMenuToggle();
    }
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-teal-800 text-white fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold"
          aria-label="Manifest Dental Clinic">
          Manifest Dental Clinic
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="p-2"
            onClick={handleMenuToggle}
            onKeyDown={handleKeyDown}
            tabIndex={0}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-teal-200 transition-colors ${
                  isActive ? "font-bold" : ""
                }`
              }
              aria-label={link.label}
              tabIndex={0}>
              {link.label}
            </NavLink>
          ))}
          <a
            href="tel:+1234567890"
            className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded"
            aria-label="Call now"
            tabIndex={0}>
            Call Now
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-teal-700">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 hover:text-teal-200 transition-colors ${
                      isActive ? "font-bold" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={link.label}
                  tabIndex={0}>
                  {link.label}
                </NavLink>
              ))}
              <a
                href="tel:+1234567890"
                className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded inline-block w-max"
                aria-label="Call now"
                tabIndex={0}>
                Call Now
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
