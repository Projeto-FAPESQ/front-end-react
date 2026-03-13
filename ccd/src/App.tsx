import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Metrics from "./pages/metrics/Metrics";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import GlobalMetrics from "./pages/globalMetrics/GlobalMetrics";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/global-metrics" element={<GlobalMetrics />} />
      </Routes>
    </Router>
  );
};

export default App;