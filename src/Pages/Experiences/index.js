import data from "./data.json";

function Experiences() {
    return (
      <div className="content">
        <div className = "main-text">
          <h1>Experiences</h1>

          <p>Experiences experiences experiences experiences.</p>

          <div>
              {
                data.map((post, index) =>
                    <div key={index}>
                        <ul>
                            <li>
                                { post.id }
                            </li>
                            <li>
                                { post.position }
                            </li>
                            <li>
                                { post.company }
                            </li>
                            <li>
                                { post.date }
                            </li>
                            <li>
                                { post.description }
                            </li>
                        </ul>
                    </div>
                    )
              }
            </div>
            <div className="row">
                <div className="col">
                    <h4>ONE</h4>
                    <ul className="list-unstyled">
                        <li>List 1</li>
                        <li>List 2</li>
                        <li>List 3</li>
                    </ul>
                    <p className="col-sm">1</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Experiences;