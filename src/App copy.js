import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationBar from "./Components/NavBar";

// Pages
import Home from "./Pages/Home/index.js";
import Experiences from "./Pages/Experiences/index.js";
import PageNotFound from "./Pages/404/index.js";

function App()
{
  return (
    <div className="App">
      
        <Router>
            <NavigationBar />
            
            <Switch>
              <Route path = "/" exact component = {Home} />
              <Route path = "/experiences" component = {Experiences} />
              <Route component = {PageNotFound} />
            </Switch>
          </Router>
      
    </div>
  );
}

export default App;