import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import Preloader from "../src/components/Pre";
import Navbar from "./components/navs/Navbar";
import Home from "./components/home/Home";
import About from "./components/about";
import Footer from "./components/navs/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;