import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <h1>Welcome to Miree's portfolio</h1>
        <Link className="welcome-btn" to="/about">
          Click to Enter
        </Link>
      </div>
    </div>
  );
}

export default Home;
