import { useState, useEffect } from "react";
import Button from "../common/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleMobileMenuToggle();
    }
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-teal-600" : "text-white"
            }`}
            aria-label="Manifest Dental Clinic">
            Manifest Dental
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-teal-600"
                    : "text-white hover:text-teal-200"
                }`}>
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href="#contact"
              size="sm"
              className={`${
                isScrolled ? "bg-teal-600 text-white" : "bg-white text-teal-600"
              }`}>
              Schedule Appointment
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md focus:outline-none ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={handleMobileMenuToggle}
            onKeyDown={handleKeyDown}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 mt-2 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-teal-600 px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  as="a"
                  href="#contact"
                  size="sm"
                  className="w-full bg-teal-600 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Schedule Appointment
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
