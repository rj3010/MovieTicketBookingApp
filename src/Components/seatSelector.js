/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { calculatePrice, updateSeatStatus } from "../Redux/Actions/actions";

export class SeatSelector extends Component {
  constructor() {
    super();
    this.state = {
      currentlybookedSeats: [],
      bookedSeats: [],
      price: 0,
      ticketMoney: 0,
    };
  }
  componentDidMount() {
    let seats = [];
    let price = 0;
    const { theaters, match, movies } = this.props;
    for (let i = 0; i < theaters.length; i++) {
      if (match.params.id === theaters[i].theaterName) {
        seats = [...theaters[i].seats];
      }
    }
    for (let i = 0; i < movies.length; i++) {
      if (match.params.id === movies[i].theaterName) {
        price = movies[i].price;
      }
    }

    let bookedSeats = [],
      availableSeats = [];
    bookedSeats = seats.filter((ele) => ele.isAvailable === false);
    availableSeats = seats.filter((ele) => ele.isAvailable === true);

    this.setState({
      availableSeats: availableSeats,
      bookedSeats: bookedSeats,
      price: price,
    });
  }
  handleChange = (e) => {
    if (e.target.checked) {
      this.setState({
        ticketMoney: this.state.ticketMoney + this.state.price,
      });
    } else {
      this.setState({
        ticketMoney: this.state.ticketMoney - this.state.price,
      });
    }

    const { availableSeats } = this.state;
    let temp = [...availableSeats];
    console.log(temp, e.target.checked);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].seatNo == e.target.value) {
        temp[i].isChecked = e.target.checked;
        temp[i].isAvailable = !temp[i].isAvailable;
      }
    }
    this.setState({ availableSeats: temp }, () => console.log(availableSeats));
  };

  calculatePrice = async () => {
    const { availableSeats } = this.state;
    const { match } = this.props;
    await this.props.updateSeatStatus(availableSeats, match.params.id);
    await this.props.calculatePrice(this.state.ticketMoney);
    this.props.history.push("/home/bookings/confirmation");
  };

  render() {
    const { bookedSeats, availableSeats, ticketMoney } = this.state;
    console.log(availableSeats, ticketMoney);
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
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      {ele.seatNo}
                    </label>
                  </div>
                );
              })}
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.calculatePrice}
          >
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
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  calculatePrice: (payload) => dispatch(calculatePrice(payload)),
  updateSeatStatus: (payload1, payload2) =>
    dispatch(updateSeatStatus(payload1, payload2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelector);
