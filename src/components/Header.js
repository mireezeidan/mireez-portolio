import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Miree Zeidan Porfolio</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
