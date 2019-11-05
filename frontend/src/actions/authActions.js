import axios from "axios";
import { SET_CURRENT_USER, SET_ERRORS } from "./types";
import jwt_decode from "jwt-decode";
import setAuthToken from "utils/setAuthToken";

// Login User
export const loginUser = userData => dispatch => {
  axios
    .post("/api/auth/user/login", userData)
    .then(res => {
      const { token } = res.data;
      // save to local storage
      localStorage.setItem("jwtToken", token);
      // set token to Auth Header
      setAuthToken(token);
      // decode token
      const decoded = jwt_decode(token);
      // set current user
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

// Login Restaurant Admin
export const loginRestAdmin = userData => dispatch => {
  axios
    .post("/api/auth/restadmin/login", userData)
    .then(res => {
      const { token } = res.data;
      // save to local storage
      localStorage.setItem("jwtToken", token);
      // set token to Auth Header
      setAuthToken(token);
      // decode token
      const decoded = jwt_decode(token);
      // set current user
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

// logout User
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove Auth Header for future request
  setAuthToken(false);
  // Set Current User to {} which will set isAuthenticate to false
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};
