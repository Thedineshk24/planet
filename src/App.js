import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// header
import Header from "./components/Header";
// Home
import Home from "./Pages/Home";
// Fav
import Fav from "./Pages/Fav";
// Notfound
import Notfound from "./Pages/Notfound";

import "./App.css";

const App = () => {
  const [planet, setPlanet] = useState([]); // i used array because api main entery point is Array

  const fetchPlanet = async () => {
    const {data} = await Axios.get("https://assignment-machstatz.herokuapp.com/planet");
    setPlanet(data);
    // console.log(planet);
  }

  useEffect(() => {
    fetchPlanet();
  },[])
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home planet={planet} />
          </Route>
          <Route path="/fav" component={Fav} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
