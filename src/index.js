import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Cities from "./pages/Cities";
import CityMeals from "./pages/CityMeals";

import "semantic-ui-css/semantic.min.css";
import "./index.css";
import Stats from "./pages/Stats";
import Users from "./pages/Users/Users";
import Canteens from "./pages/Canteens";
import CanteenMeals from "./pages/CanteenMeals";
import CreateMeal from "./pages/Meal/Create/CreateMeal";
import PatchMeal from "./pages/Meal/Patch/PatchMeal";

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
          <Route exact path="/canteens">
            <Canteens />
          </Route>
          <Route exact path="/canteens/:canteenId/meals">
            <CanteenMeals />
          </Route>
          <Route exact path="/cities">
            <Cities />
          </Route>
          <Route exact path="/cities/:cityId/meals">
            <CityMeals />
          </Route>
          <Route exact path="/meals/create">
            <CreateMeal />
          </Route>
          <Route exact path="/meals/:mealId">
            <PatchMeal />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
        </Switch>
      </Navbar>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
