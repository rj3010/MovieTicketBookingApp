/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../Redux/Actions/actions";

export class Home extends Component {
  async componentDidMount() {
    await this.props.getData();
    let flag = this.props.isLoaded;
    console.log(flag);
    if (flag === true) {
      console.log("hello");
      this.fill(this.props);
    }
  }
  fill = (t) => {
    console.log(t);
  };
  render() {
    return (
      <div>
        <div className="row d-flex justify-content-center p-1">
          <div className="col-sm-9 col-md-3 col-lg-3 ">
            <div className="form-group">
              {/*dropdown to filter movies by language */}

              <h3 className=" text-primary">Filter by language</h3>
              <label htmlFor="#lang">Select Language</label>
              <select id="lang" name="lang" className="form-control">
                <option value="all">All</option>
                {language.map((ele) => {
                  return ele;
                })}
              </select>
            </div>
          </div>

          <div className="col-sm-9 col-md-3 col-lg-3 mx-1">
          <div className="form-group">
              {/*dropdown to filter movies by genre */}

              <h3 className=" text-primary">Filter movies by genre</h3>
              <label htmlFor="#genre">Select genre</label>
              <select id="genre" name="genre" className="form-control">
                <option value="all">All</option>
                {genre.map((ele) => {
                  return ele;
                })}
              </select>
            </div>

          </div>
          <div className="col-sm-9 col-md-3 col-lg-3 mx-1">
          <div className="form-group">
              {/*dropdown to filter movies by theater */}

              <h3 className=" text-primary">Filter movies by theater</h3>
              <label htmlFor="#theater">Select theater</label>
              <select id="theater" name="theater" className="form-control">
                <option value="all">All</option>
                {theater.map((ele) => {
                  return ele;
                })}
              </select>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  theaters: state.theaters,
  bookings: state.bookings,
  isLoaded: state.isLoaded,
  genre: state.genre,
  language:state.language
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
