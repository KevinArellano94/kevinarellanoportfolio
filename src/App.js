// React, useEffect
import React, { useEffect } from "react";

// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Styling
import './App.css';

// Navigation
import NavigationBar from "./Components/Navigation/index.js";

// Footer
import Footer from "./Components/Footer/index.js"

// Pages
import Home from "./Pages/Home/index.js";
import Experiences from "./Pages/Experiences/index.js";
import PageNotFound from "./Pages/404/index.js";

import ReactGa from "react-ga";

function App()
{
  useEffect(() =>
  {
    ReactGa.initialize("G-VL66B4FF55")

    ReactGa.pageview("/")
  }, [])
  
  return (
    <div>
        <Router>
            <NavigationBar />
            
            <Switch>
              <Route path = "/" exact component = {Home} />
              <Route path = "/experiences" component = {Experiences} />
              <Route component = {PageNotFound} />
            </Switch>

            <Footer />
          </Router>
    </div>
  );
}

export default App;