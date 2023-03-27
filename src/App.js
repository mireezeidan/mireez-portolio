import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import "./App.css";
import "./Normalize.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("dark");
  // const toggleTheme = () => {
  //   if (theme === "dark") {
  //     setTheme("light");
  //   } else {
  //     setTheme("dark");
  //   }
  // };
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);
  return (
    <Router>
      <div className="all dark">
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
