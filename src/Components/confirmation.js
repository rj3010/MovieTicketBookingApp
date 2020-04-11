/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        bill: this.props.ticketMoney,
      });
    }, 3000);
  }
  render() {
    console.log(this.state.bill);
    return this.state.bill > 0 ? (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-5 text-primary">
            <h1>Total Price: Rs {this.state.bill}</h1>
          </div>
        </div>
      </div>
    ) : (
      <div className="text-center text-danger display-4">
        Calculating Your Bill
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ticketMoney: state.totalTicketMoney,
});

export default connect(mapStateToProps)(Confirmation);
