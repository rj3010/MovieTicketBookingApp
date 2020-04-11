/** @format */

import axios from "axios";
import {
  GET_DATA,
  FILTER_MOVIE_BY_GENRE,
  FILTER_MOVIE_BY_LANGUAGE,
  FILTER_MOVIE_BY_THEATER,
  FILTER_MOVIE_BY_LOCATION,
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

export const filterMovieByGenre = (payload) => ({
  type: FILTER_MOVIE_BY_GENRE,
  payload,
});

export const filterMovieByLanguage = (payload) => ({
  type: FILTER_MOVIE_BY_LANGUAGE,
  payload,
});

export const filterMovieByTheater = (payload) => ({
  type: FILTER_MOVIE_BY_THEATER,
  payload,
});

export const filterMovieByLocation = (payload) => ({
  type: FILTER_MOVIE_BY_LOCATION,
  payload,
});
