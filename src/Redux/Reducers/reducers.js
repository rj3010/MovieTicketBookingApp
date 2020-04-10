/** @format */

import { GET_DATA } from "../ActionTypes/actionTypes";
const initialState = {
  isLoaded: false,
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        ...action.payload,
        isLoaded: true
      };
    default: {
      return state;
    }
  }
};
export default MovieReducer;
