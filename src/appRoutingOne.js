import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './pages/Home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage';

function AppRoutingOne() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoutingOne;