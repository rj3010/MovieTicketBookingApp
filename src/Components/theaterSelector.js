/** @format */

import React from "react";
import { connect } from "react-redux";
// import { filterMovieByTheater } from "../Redux/Actions/actions";

const TheaterSelector = (props) => {
  const { theaters } = props;
  console.log(theaters)
  let theaterOption = theaters.map((ele) => {
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
};
const mapStateToProps = (state) => ({
  theaters: state.theaters,
});

// const mapDispatchToProps = (dispatch) => ({
//   filterMovieByTheater: () => dispatch(filterMovieByTheater()),
// });
export default connect(mapStateToProps)(TheaterSelector);
