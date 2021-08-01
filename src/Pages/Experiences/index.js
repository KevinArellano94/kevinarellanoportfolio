import data from "./data.json";

data.sort(( a, b ) => {
    return b.id - a.id;
});

function Experiences() {
    return (
        <div className = "content">
            <div className = "main-text">
                <h1>Experience</h1>
              {
                data.map((post, index) =>
                    <div key={index}>
                        <h2>{ post.position }</h2>
                        <h4>{ post.company }</h4>
                        <p>{ post.date }</p>
                        <p>{ post.description }</p>
                    </div>
                    )
              }
            </div>
        </div>
    );
  }
  
  export default Experiences;