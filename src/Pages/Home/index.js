import pdf_Resume from "../../Assets/Files/Resume.pdf";
import data from "./data.json";

import ReactGa from "react-ga";

function Home()
{
  const ClickHandler = () =>
  {
    ReactGa.event(
      {
        category: "Button",
        action: "Resume download"
      }
    )
  }
    return (
      <div className = "content">
        <div className = "main-text">
              {
                data.map((post, index) =>
                    <div key={index}>
                        <h1>{ post.name }</h1>
                        <h2>{ post.jobTitle }</h2>
                        <p>{ post.description }</p>
                        <div className = "flex-container">
                          <a href = { pdf_Resume } onClick = { ClickHandler } target = "_blank" rel="noopener noreferrer" class = "portfolio-btn">See My Resume</a>
                        </div>
                    </div>
                    )
              }
            </div>
        </div>
    );
  }
  
  export default Home;