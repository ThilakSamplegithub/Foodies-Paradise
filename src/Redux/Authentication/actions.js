import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  LOGOUT,
} from "./actionTypes";

// Signup Actions
export const signupRequest = (userData) => {
  return async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
      await axios.post(
        "https://gorgeous-flight-api1.onrender.com/users",
        userData
      );
      dispatch({ type: SIGNUP_SUCCESS });
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, payload: error.message });
    }
  };
};

// Signin Actions
export const signinRequest = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: SIGNIN_REQUEST });
    try {
      const response = await axios.get(
        "https://gorgeous-flight-api1.onrender.com/users"
      );
      const users = response.data;
      const user = users.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (user) {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: { username: user.username, email: user.email },
        });
        console.log(user);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      dispatch({ type: SIGNIN_FAILURE, payload: error.message });
    }
  };
};
// Logout Action
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
