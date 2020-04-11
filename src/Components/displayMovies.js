/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DisplayMovies extends Component {
  render() {
    return (
      <>
        {this.props.movies.map((ele) => {
          return (
            <div
              key={ele.id}
              className="card"
              style={{ width: "18rem", margin: "10px" }}
            >
              <img
                className="card-img-top"
                src={ele.image}
                alt="movie desc"
                style={{ height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-title">Actor : {ele.actors}</p>
                <p className="card-title">Language : {ele.language}</p>
                <p className="card-title">Price : Rs {ele.price}</p>
                <Link
                  to={`/home/bookings/movies/${ele.theaterName}`}
                  className="btn btn-danger"
                >
                  Book Seats
                </Link>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.filteredMovies,
});


export default connect(mapStateToProps)(DisplayMovies);
