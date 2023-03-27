import Header from "./Header";
import Footer from "./Footer";
import Me from "../images/me.jpeg";
import "./About.css";
function About() {
  return (
    <div>
      <Header />
      <h2>About</h2>
      <div className="about-container">
        <div className="single-div">
          <img className="about-img" src={Me} alt="Avatar" />
        </div>
        <div className="single-div">
          <p>My name is Miree Zeidan and I am currently in the Northwestern Coding Bootcamp. I'm 24 years old born in Chicago, Illinois. I created this portfolio to house the projects that I will create throughout my coding career. I decided to begin learning how to develop code because I enjoy learning new skills, tackling new challenges, and soliving difficult problems. I also took an interest in web development because it is everchanging, the possibilities are endless in this field.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
