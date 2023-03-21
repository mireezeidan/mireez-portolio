import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Miree Zeidan Porfolio</h1>
      <nav>
        <Link className="m-1 border-2 p-1" to="/about">
          About
        </Link>
        <Link className="m-1 border-2 p-1" to="/project">
          Projects
        </Link>
        <Link className="m-1 border-2 p-1" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
