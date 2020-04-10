/** @format */

import React from "react";
import { connect } from "react-redux";
import { filterMovieByGenre } from "../Redux/Actions/actions";

const GenreSelector = (props) => {
  const { genres } = props;
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
};
const mapStateToProps = (state) => ({
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  filterMovieByGenre: () => dispatch(filterMovieByGenre()),
});
export default connect(mapStateToProps, mapDispatchToProps)(GenreSelector);
