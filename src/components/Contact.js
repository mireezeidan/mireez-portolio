import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";
import Github from "../images/github-logo.png";
function Contact() {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <a href="https://github.com/mireezeidan">
        <img className="git-img" src={Github} alt="Github Logo" />
      </a>
      <Footer />
    </div>
  );
}

export default Contact;
