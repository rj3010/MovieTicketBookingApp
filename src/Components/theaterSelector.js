/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterMovieByTheater,
  filterMovieByLocation,
} from "../Redux/Actions/actions";

class TheaterSelector extends Component {
  filterMovie = (e) => {
    const { filterMovieByTheater } = this.props;
    filterMovieByTheater(e.target.value);
  };

  render() {
    const { theaters } = this.props;
    let theaterOption = [];

    theaterOption = theaters.map((ele) => {
      return (
        <option key={ele.theaterId} value={ele.theaterName}>
          {ele.theaterName}
        </option>
      );
    });

    return (
      <>
        <div className="col-sm-9 col-md-3 col-lg-3 mx-1">
          <div className="form-group">
            {/*dropdown to filter movies by theater */}

            <h4 className=" text-primary">Filter by theater</h4>
            <select
              id="theater"
              name="theater"
              className="form-control"
              onChange={this.filterMovie}
            >
              <option value="all">All</option>
              {theaterOption.map((ele) => {
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
  theaters: state.tempTheaters,
});

const mapDispatchToProps = (dispatch) => ({
  filterMovieByTheater: (payload) => dispatch(filterMovieByTheater(payload)),
  filterMovieByLocation: (payload) => dispatch(filterMovieByLocation(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheaterSelector);
