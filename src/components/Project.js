import Header from "./Header";
import Footer from "./Footer";
import Cocktail from "../images/cocktail-wizard.jpeg";
import Weather from "../images/weather-dashboard.png";
import Quiz from "../images/coding-quiz.png";
import Future from "../images/future-finder.png";
import Github from "../images/github-mark.png";
import "./Project.css";
function Project() {
  return (
    <div>
      <Header />
      <h1>Project</h1>
      <div className="all-projects grid-cols-1 md:grid-cols-3">
        <div className="single-project">
          <h3>Future Finder</h3>
          <a href="https://future-finder.herokuapp.com/">
            <img className="project-img" src={Future} alt="Future Finder" />
          </a>
          <p>Future Finder is a user friendly job board used to find, create, apply to, and bookmark various jobs. The user can register as a candidate or employer in order to view, apply, create, or bookmark a job. </p>
          <div className="icon-div">
            <a href="https://github.com/4-non-non-dorks/future-finder">
              <img className="icon-img" src={Github} alt="Github Link" />
            </a>
          </div>
        </div>
        <div className="single-project">
          <h3>Cocktail Wizard</h3>
          <a href="https://high-fivez.github.io/project1/">
            <img className="project-img" src={Cocktail} alt="cocktail wizard" />
          </a>
          <p>This website will allow you to input two ingredients and receive back a cocktail containing those ingredients. It will also display the recipe as well as the ingredients and their measurements.</p>
          <div className="icon-div">
            <a href="https://github.com/high-fivez/project1">
              <img className="icon-img" src={Github} alt="Github Link" />
            </a>
          </div>
        </div>
        <div className="single-project">
          <h3>Weather Dasboard</h3>
          <a href="https://mireezeidan.github.io/weatherdashboard/">
            <img className="project-img" src={Weather} alt="Weather Dashboard" />
          </a>
          <p>This website allows the user to input any city and what returns is the current forecast for that day, as well as a five day forecast.</p>
          <div className="icon-div">
            <a href="https://github.com/mireezeidan/weatherdashboard">
              <img className="icon-img" src={Github} alt="Github Link" />
            </a>
          </div>
        </div>
        <div className="single-project">
          <h3>Coding Quiz</h3>
          <a href="https://mireezeidan.github.io/codingquiz/">
            <img className="project-img" src={Quiz} alt="Coding Quiz" />
          </a>
          <p>This website is a quiz game that allows the user to take a short quiz. The score is determined by the time remaining, for each incorrect answer 10 seconds are removed. At the end the user will be asked to enter their intials to save their score.</p>
          <div className="icon-div">
            <a href="https://github.com/mireezeidan/codingquiz">
              <img className="icon-img" src={Github} alt="Github Link" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
