import { LOGIN_SUCCESS, LOG_OUT } from "./actionTypes";

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const logOut = (userData) => ({
  type: LOG_OUT,
  payload: userData,
});
