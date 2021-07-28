import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavBar";

// Pages
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Experiences from "./Pages/Experiences/index.js";
import PageNotFound from "./Pages/PageNotFound";

function App()
{
  return (
    <div className="App">
      
        <Router>
            <NavigationBar />
            
            <Switch>
              <Route path = "/" exact component = {Home} />
              <Route path = "/projects" component = {Projects} />
              <Route path = "/experiences" component = {Experiences} />
              <Route component = {PageNotFound} />
            </Switch>
          </Router>
      
    </div>
  );
}

export default App;