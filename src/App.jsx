import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import MainPage from "./pages/MainPage";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";
import GalleryPage from "./pages/GalleryPage";
import WhatsAppButton from "./components/common/WhatsAppButton";

function App() {
  const location = useLocation();
  const showLayout =
    location.pathname === "/" ||
    location.pathname === "/services" ||
    location.pathname === "/gallery";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {showLayout && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
       {/* WhatsApp Button */}
       <WhatsAppButton />
      {showLayout && <Footer />}
    </div>
  );
}

export default App;
