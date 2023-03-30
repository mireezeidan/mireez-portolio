import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./Contact.css";
import Github from "../images/github-logo.png";
import Linkedin from "../images/linkedin-logo.png";
import Resume from "../images/resume.png";

function Contact() {
  return (
    <div className="all">
      <Header />
      <h1>Contact</h1>
      <div className="contact-div">
        <div className="single-contact">
          <Link to="https://github.com/mireezeidan">
            <img className="contact-img" src={Github} alt="Github Logo" />
          </Link>
        </div>
        <div className="resume-link">
          <Link to="https://docs.google.com/document/d/1jP70hO0EyeLBYo_QQunGvu-jvXgVbKuPAPo0LaSPN_g/edit?usp=sharing">
            <img className="contact-img" src={Resume} alt="Resume" />
          </Link>
          <p className="resume-text">Miree's Resume</p>
        </div>
        <div className="single-contact">
          <Link to="https:www.linkedin.com/in/miree-zeidan">
            <img className="contact-img" src={Linkedin} alt="LinkedIn Logo" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
