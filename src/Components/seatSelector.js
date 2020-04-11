/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";

export class SeatSelector extends Component {
  constructor() {
    super();
    this.state = {
      currentlybookedSeats: [],
      bookedSeats: [],
    };
  }
  componentDidMount() {
    console.log(this.props);
    let seats = [];
    const { theaters, match } = this.props;
    for (let i = 0; i < theaters.length; i++) {
      if (match.params.id === theaters[i].theaterName) {
        seats = [...theaters[i].seats];
      }
    }

    let bookedSeats = [],
      availableSeats = [];
    bookedSeats = seats.filter((ele) => ele.isAvailable === false);
    availableSeats = seats.filter((ele) => ele.isAvailable === true);

    this.setState({
      availableSeats: availableSeats,
      bookedSeats: bookedSeats,
    });
  }
  handleChange = (e) => {
    console.log(e.target.value);
    const { availableSeats } = this.state;
    let temp = [...availableSeats];
    temp.forEach((ele) => {
      if (ele.value === e.target.value) {
        ele.isChecked = e.target.checked;
      }
    });
    this.setState({ availableSeats: temp }, () => console.log(temp));
  };

  render() {
    const { bookedSeats, availableSeats } = this.state;
    return (
      <div className="container">
        <div className="row">
          <h3 className="col-12">Available Seats</h3>
          <div className="col-sm-6 col-md-6 col-lg-12 d-flex flex-row flex-wrap">
            {availableSeats &&
              availableSeats.map((ele) => {
                return (
                  <div className="form-check m-2" key={ele.seatNo}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck1"
                      value={ele.seatNo}
                      checked={ele.isChecked}
                      onClick={this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      {ele.seatNo}
                    </label>
                  </div>
                );
              })}
          </div>
          <button type="button" className="btn btn-danger">
            Book
          </button>

          <div className="col-12 mt-4">
            <h3>Booked Seats</h3>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-12 d-flex flex-row flex-wrap">
            {bookedSeats &&
              bookedSeats.map((ele) => {
                return (
                  <div className="form-check m-2" key={ele.seatNo}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck2"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      {ele.seatNo}
                    </label>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theaters: state.theaters,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelector);
