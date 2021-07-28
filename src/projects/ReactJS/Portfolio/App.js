import data from "./data.json";

function Portfolio() {

  return (
    <div>
      { data.map((post, index) =>
        <div key={index}>
          { post.id } | 
          { post.title } | 
          { post.content }
        </div>
        )
      }
    </div>
  );
}
  
  export default Portfolio;