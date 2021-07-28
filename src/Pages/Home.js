import pdf_Resume from "../components/Resume.pdf"

function Home() {
    return (
      <div className="content">
        <div className = "main-text">
          <h1>Kevin Arellano</h1>

          <p>Fullstacks developer with broad experience.  Eager to learn new languages and platforms.</p>

          <div class = "flex-container">
            <a href = { pdf_Resume } target = "_blank" class = "portfolio-btn">See My Resume</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;