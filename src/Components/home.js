/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../Redux/Actions/actions";
import LanguageSelector from "../Components/languageSelector";
import GenreSelector from "../Components/genreSelector";
import TheaterSelector from "../Components/theaterSelector";
import LocationSelector from "../Components/locationSelector";

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
    const { isLoaded } = this.props;
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
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
