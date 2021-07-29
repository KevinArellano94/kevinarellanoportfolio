import pdf_Resume from "../../Assets/Files/Resume.pdf";
import data from "./data.json";

function Home() {
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
                          <a href = { pdf_Resume } target = "_blank" rel="noopener noreferrer" class = "portfolio-btn">See My Resume</a>
                        </div>
                    </div>
                    )
              }
            </div>
        </div>
    );
  }
  
  export default Home;