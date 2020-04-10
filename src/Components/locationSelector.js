/** @format */

import React from "react";
import { connect } from "react-redux";
// import { filterMovieByLocation } from "../Redux/Actions/actions";

const LocationSelector = (props) => {
  const { locations } = props;
  let locationOption = locations.map((ele) => {
    return (
      <option key={ele.locationId} value={ele.location}>
        {ele.location}
      </option>
    );
  });
  const filterMovie = () => {
    // const { filterMovieByLocation } = props;
    // filterMovieByLocation();
  };

  return (
    <>
      <div className="col-sm-9 col-md-4 col-lg-3">
        <div className="form-group">
          {/*dropdown to filter movies by theater location */}

          <label htmlFor="#location"  className=" text-primary">Select location</label>
          <select id="location" name="location" className="form-control">
            <option value="all">All</option>
            {locationOption.map((ele) => {
              return ele;
            })}
          </select>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  locations: state.locations,
});

const mapDispatchToProps = (dispatch) => ({
//   filterMovieByLocation: () => dispatch(filterMovieByLocation()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LocationSelector);
