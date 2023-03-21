import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="typed-wrapper">
          <h1 className="typed">Miree Zeidan Porfolio</h1>
        </div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/project">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
