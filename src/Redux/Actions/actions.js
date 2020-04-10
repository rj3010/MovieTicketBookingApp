/** @format */

import axios from "axios";
import {
  GET_DATA,
  FILTER_MOVIE_BY_GENRE,
  FILTER_MOVIE_BY_LANGUAGE,
  FILTER_MOVIE_BY_THEATER,
} from "../ActionTypes/actionTypes";

export const fillDataInRedux = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getData = () => {
  return (dispatch) => {
    return axios
      .get("/MovieDatabase.json")
      .then((res) => {
        // console.log(res);
        dispatch(fillDataInRedux(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const filterMovieByGenre = () => ({
  type: FILTER_MOVIE_BY_GENRE,
});
export const filterMovieByLanguage = () => ({
  type: FILTER_MOVIE_BY_LANGUAGE,
});
export const filterMovieByTheater = () => ({
  type: FILTER_MOVIE_BY_THEATER,
});
