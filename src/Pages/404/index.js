import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
      <div className="content">
        <div className = "main-text">
          <h1>Page Not Found</h1>

          <div class = "flex-container">
            <Link to = "/">
              <a href = "/" target = "_blank" class = "portfolio-btn">Go back to Home</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default PageNotFound ;