/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { filterMovieByLocation } from "../Redux/Actions/actions";

class LocationSelector extends Component {

  filterMovie = (e) => {
    const { filterMovieByLocation } = this.props;
    filterMovieByLocation(e.target.value);
  };

  render() {
    const { locations } = this.props;
    let locationOption = locations.map((ele) => {
      return (
        <option key={ele.locationId} value={ele.location}>
          {ele.location}
        </option>
      );
    });

    return (
      <>
        <div className="col-sm-9 col-md-4 col-lg-3">
          <div className="form-group">
            {/*dropdown to filter movies by theater location */}

            <label htmlFor="#location" className=" text-primary">
              Select location
            </label>
            <select
              id="location"
              name="location"
              className="form-control"
              onChange={this.filterMovie}
            >
              <option value="all">All</option>
              {locationOption.map((ele) => {
                return ele;
              })}
            </select>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  locations: state.locations,
});

const mapDispatchToProps = (dispatch) => ({
  filterMovieByLocation: (payload) => dispatch(filterMovieByLocation(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelector);
