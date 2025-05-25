import { Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import MainPage from "./pages/MainPage";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const showLayout =
    location.pathname === "/" || location.pathname === "/services";

  return (
    <div className="min-h-screen flex flex-col">
      {showLayout && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showLayout && <Footer />}
    </div>
  );
}

export default App;
