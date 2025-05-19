// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Main Page
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
