import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const style = {
  background: "black",
  color: "lawngreen",
};

function App() {
  return (
    <Router>
      <div style={style}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
