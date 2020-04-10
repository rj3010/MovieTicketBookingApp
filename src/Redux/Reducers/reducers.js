/** @format */

import {
  GET_DATA,
  FILTER_MOVIE_BY_GENRE,
  FILTER_MOVIE_BY_LANGUAGE,
  FILTER_MOVIE_BY_THEATER,
} from "../ActionTypes/actionTypes";
const initialState = {
  isLoaded: false,
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        ...action.payload,
        isLoaded: true,
      };
    case FILTER_MOVIE_BY_GENRE:
      return {
        ...state,
      };
    case FILTER_MOVIE_BY_LANGUAGE:
      return {
        ...state,
      };
    case FILTER_MOVIE_BY_THEATER:
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};
export default MovieReducer;
