/** @format */

import React from "react";
import { connect } from "react-redux";
import { filterMovieByLanguage } from "../Redux/Actions/actions";

const LanguageSelector = (props) => {
  const { languages } = props;
  let languageOption = languages.map((ele) => {
    return (
      <option key={ele.languageId} value={ele.language}>
        {ele.language}
      </option>
    );
  });
  const filterMovie = () => {
    const {filterMovieByLanguage} = props;
    filterMovieByLanguage()
  }

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
};
const mapStateToProps = (state) => ({
  languages: state.languages,
});

const mapDispatchToProps = (dispatch) => ({
  filterMovieByLanguage: () => dispatch(filterMovieByLanguage()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
