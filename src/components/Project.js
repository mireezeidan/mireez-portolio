import Cocktail from "../images/cocktail-wizard.jpeg";
import Weather from "../images/weather-dashboard.png";
import "./Project.css";
function Project() {
  return (
    <div>
      <h1>Project</h1>
      <div className="all-projects">
        <div className="single-project">
          <h3>Cocktail Wizard</h3>
          <a href="https://high-fivez.github.io/project1/">
            <img src={Cocktail} alt="cocktail wizard" />
          </a>
          <p>This website will allow you to input two ingredients and receive back a cocktail containing those ingredients. It will also display the recipe as well as the ingredients and their measurements.</p>
        </div>
        <div class="single-project">
          <h3>Weather Dasboard</h3>
          <a href="https://mireezeidan.github.io/weatherdashboard/">
            <img src={Weather} alt="Weather Dashboard" />
          </a>
          <p>This website allows the user to input any city and what returns is the current forecast for that day, as well as a five day forecast.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
