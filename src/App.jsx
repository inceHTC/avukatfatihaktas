// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";  // 👈 ekledik
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkinda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmetler/:slug" element={<ServiceDetail />} /> {/* 👈 yeni detay route */}
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/makaleler" element={<Articles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
