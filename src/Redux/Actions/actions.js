/** @format */

import axios from "axios";
import { GET_DATA } from "../ActionTypes/actionTypes";

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
