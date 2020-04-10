/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Components/navbar";
import ProtectedRoute from "../Routes/protectedRoute";
import NoMatch from "../Components/noMatch";
import Home from '../Components/home'

const Routes = () => {
  return (
    <div>
      <Route path="/" component={Navbar} />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/home" render={() => <ProtectedRoute />} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default Routes;
