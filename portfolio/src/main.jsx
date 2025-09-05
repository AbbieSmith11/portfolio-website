import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/projects" index element={<Projects />} />
        <Route path="/contact" index element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
