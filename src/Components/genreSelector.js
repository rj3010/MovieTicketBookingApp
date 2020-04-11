/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { filterMovieByGenre } from "../Redux/Actions/actions";

class GenreSelector extends Component {
  filterMovie = (e) => {
    const { filterMovieByGenre } = this.props;
    filterMovieByGenre(e.target.value);
  };

  render() {
    const { genres } = this.props;
    let genreOption = genres.map((ele) => {
      return (
        <option key={ele.genreId} value={ele.genre}>
          {ele.genre}
        </option>
      );
    });

    return (
      <>
        <div className="col-sm-9 col-md-4 col-lg-3 mx-1">
          <div className="form-group">
            {/*dropdown to filter movies by genre */}

            <h4 className=" text-primary">Filter by genre</h4>
            <select
              id="genre"
              name="genre"
              className="form-control"
              onChange={this.filterMovie}
            >
              <option value="all">All</option>
              {genreOption.map((ele) => {
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
  genres: state.tempGenres,
});

const mapDispatchToProps = (dispatch) => ({
  filterMovieByGenre: (payload) => dispatch(filterMovieByGenre(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreSelector);
