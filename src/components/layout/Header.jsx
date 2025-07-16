import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import Button from "../common/Button";
import NavLink from "../common/NavLink";
import { clinicInfo } from "../../data";
import { handleMobileNavigation } from "../../utils/scrollUtils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Handle navigation for both internal sections and external routes
  const handleNavClick = (e, href) => {
    e.preventDefault();

    // Close mobile menu
    setIsMobileMenuOpen(false);

    // Handle external routes
    if (href === "/services") {
      navigate("/services");
      return;
    }

    // Handle home navigation from services page
    if (href === "/" || href === "#home") {
      if (location.pathname !== "/") {
        navigate("/");
        return;
      }
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Handle internal section navigation (only on home page)
    if (href && href.startsWith("#")) {
      if (location.pathname !== "/") {
        // If not on home page, navigate to home first then scroll
        navigate("/");
        setTimeout(() => {
          const sectionId = href.substring(1);
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
        return;
      }

      // If on home page, use smooth scrolling
      const sectionId = href.substring(1);
      handleMobileNavigation(sectionId, () => {}, {
        delay: 50,
        offset: -80,
      });
    }
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "/services", label: "Services" },
    // { href: "#transformations", label: "Gallery" },
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
            href="/"
            className={`flex items-center gap-2 text-xl sm:text-2xl font-bold transition-colors ${
              isScrolled ? "text-primary-600" : "text-white"
            }`}
            aria-label={clinicInfo.name}
            onClick={(e) => handleNavClick(e, "/")}>
            <img
              src="/images/dental-logo.png"
              alt="Manifest Dental Clinic Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white shadow-md border border-primary-100 transition-all duration-300"
              loading="eager"
              decoding="async"
            />
            <span className="hidden sm:inline">Dr. Manasi's Manifest Dental Studio</span>
            <span className="sm:hidden text-sm">Dr. Manasi's Manifest Dental Studio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                className={`${
                  isScrolled
                    ? "text-gray-700 hover:text-primary-600 focus:text-primary-600"
                    : "text-white hover:text-primary-200 focus:text-primary-200"
                } ${
                  (link.href === "/services" &&
                    location.pathname === "/services") ||
                  (link.href === "#home" && location.pathname === "/")
                    ? "text-primary-600 font-semibold"
                    : ""
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              />
            ))}
            <Button
              as="a"
              href="#contact"
              size="sm"
              className={`${
                isScrolled
                  ? "bg-primary-600 text-white hover:bg-primary-700"
                  : "bg-white !text-primary-800 hover:bg-primary-100 hover:!text-white"
              } hover:shadow-lg font-medium px-6`}
              onClick={(e) => handleNavClick(e, "#contact")}>
              Book Appointment
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md focus:outline-none transition-all duration-300 ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20"
            }`}
            onClick={handleMobileMenuToggle}
            onKeyDown={handleKeyDown}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4">
            <motion.a
              href={`tel:${clinicInfo.phone}`}
              className="flex items-center space-x-2 text-white hover:text-primary-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-1 shadow-lg">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium hidden sm:inline">
                {clinicInfo.phone}
              </span>
            </motion.a>

            <motion.a
              href={`mailto:${clinicInfo.email}`}
              className="flex items-center space-x-2 text-white hover:text-primary-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-1 shadow-lg">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium hidden lg:inline">
                {clinicInfo.email}
              </span>
            </motion.a>
          </motion.div> */}
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 mt-2 bg-white rounded-lg shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  className={`text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 py-2 text-sm font-medium ${
                    (link.href === "/services" &&
                      location.pathname === "/services") ||
                    (link.href === "#home" && location.pathname === "/")
                      ? "text-primary-600 font-semibold bg-primary-50"
                      : ""
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                />
              ))}
              <div className="px-4 pt-2 pb-3">
                <Button
                  as="a"
                  href="#contact"
                  size="sm"
                  className="w-full bg-primary-600 text-white hover:bg-primary-700"
                  onClick={(e) => handleNavClick(e, "#contact")}>
                  Book Appointment
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
