import { LOGIN_SUCCESS, LOG_OUT } from "./actionTypes";

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
