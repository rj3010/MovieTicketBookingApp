/** @format */

import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Bookings from "../Components/bookings";
import Confirmation from "../Components/confirmation";
import SeatSelector from "../Components/seatSelector";

const ProtectedRoute = (props) => {
  const { isLoaded } = props;
  console.log(isLoaded);
  return isLoaded ? (
    <div>
      <Route exact path="/home/bookings" render={() => <Bookings />} />
      <Route
        exact
        path="/home/bookings/movies/:id"
        render={(props) => <SeatSelector {...props} />}
      />
      <Route
        exact
        path="/home/bookings/confirmation"
        render={() => <Confirmation />}
      />
    </div>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = (state) => ({
  isLoaded: state.isLoaded,
});
export default connect(mapStateToProps)(ProtectedRoute);
