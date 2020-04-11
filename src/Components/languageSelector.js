/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { filterMovieByLanguage } from "../Redux/Actions/actions";

class LanguageSelector extends Component {
  
  filterMovie = (e) => {
    const { filterMovieByLanguage } = this.props;
    filterMovieByLanguage(e.target.value);
  };

  render() {
    const { languages } = this.props;
    let languageOption = languages.map((ele) => {
      return (
        <option key={ele.languageId} value={ele.language}>
          {ele.language}
        </option>
      );
    });

    return (
      <>
        <div className="col-sm-9 col-md-4 col-lg-3 mx-1">
          <div className="form-group">
            {/*dropdown to filter movies by language */}

            <h4 className=" text-primary">Filter by language</h4>
            <select
              id="language"
              name="language"
              className="form-control"
              onChange={this.filterMovie}
            >
              <option value="all">All</option>
              {languageOption.map((ele) => {
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
  languages: state.tempLanguages,
});

const mapDispatchToProps = (dispatch) => ({
  filterMovieByLanguage: (payload) => dispatch(filterMovieByLanguage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
