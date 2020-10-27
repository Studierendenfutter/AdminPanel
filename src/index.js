import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Cities from "./pages/Cities";

import "semantic-ui-css/semantic.min.css";
import "./index.css";
import Stats from "./pages/Stats";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/stats">
            <Stats />
          </Route>
          <Route exact path="/cities">
            <Cities />
          </Route>
        </Switch>
      </Navbar>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
