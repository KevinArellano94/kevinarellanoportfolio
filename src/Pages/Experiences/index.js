import data from "./data.json";

data.sort(( a, b ) => {
    return b.id - a.id;
});

var i = 0;

function Experiences() {
    return (
        <div className = "content">
            <div className = "experience-text">
                <h1>Experience</h1>
                {
                    data.map( ( post, key ) =>
                    <div key = { key }>
                        <h2>{ post.position }</h2>
                        <h4>{ post.company }</h4>
                        <p>{ post.date }</p>
                        <p>{ post.description[i].a }</p>
                        <p>{ post.description[i].b }</p>
                        <p>{ post.description[i].c }</p>
                        <p>{ post.description[i].d }</p>
                        <p>{ post.description[i].e }</p>
                        <p>{ post.description[i].f }</p>
                        <p>{ post.description[i].g }</p>
                        <p>{ post.description[i].h }</p>
                        <p>{ post.description[i].i }</p>
                        <p>{ post.description[i].j }</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
  }
  
  export default Experiences;