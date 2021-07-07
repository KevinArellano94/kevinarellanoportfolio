//import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavBar";
import Home from "./Pages/Home";
//import About from "./Pages/About";
//import Resume from "./Pages/Resume"

import pdf_Resume from "./components/Arellano Kevin - Resume.pdf"

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <NavigationBar />
          
          <Switch>
            <Route path = "/" exact component = {Home} />
            
            
          </Switch>
        </Router>
      </header>

      <body>
        
      </body>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;
