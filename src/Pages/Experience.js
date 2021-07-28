//import pdf_Resume from "../components/Resume.pdf"
import component from "react";
import { Link } from "react-router-dom";

//import Portfolio from "../projects/ReactJS/Portfolio/App";

function Projects() {
    return (
      <div className="content">
        <div className = "main-text">
          <h1>Projects</h1>

          <p>10 years of software development.</p>

          <div class = "flex-container">
            <Link to = "/reactjs-projects">
              <a href = "/" target = "_blank" class = "portfolio-btn">See My Resume</a>
            </Link>

            <Portfolio />
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;