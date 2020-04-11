/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, filterMovieByLocation } from "../Redux/Actions/actions";
import LanguageSelector from "../Components/languageSelector";
import GenreSelector from "../Components/genreSelector";
import TheaterSelector from "../Components/theaterSelector";
import LocationSelector from "../Components/locationSelector";
import DisplayMovies from "../Components/displayMovies";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    };
  }
  async componentDidMount() {
    const { getData } = this.props;
    await getData();
    const { isLoaded, filterMovie } = this.props;
    filterMovie("all");
    this.setState({
      isLoaded: isLoaded,
    });
  }
  render() {
    return this.state.isLoaded ? (
      <div>
        <div className="row d-flex justify-content-center p-1">
          <LocationSelector />
        </div>
        <div className="row d-flex justify-content-center p-1">
          <LanguageSelector />
          <TheaterSelector />
          <GenreSelector />
        </div>
        <div className="container ">
          <div className="row d-flex justify-content-center p-1">
            <DisplayMovies />
          </div>
        </div>
      </div>
    ) : (
      <div>Data is Loading</div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  bookings: state.bookings,
  isLoaded: state.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
  filterMovie: (payload) => dispatch(filterMovieByLocation(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
