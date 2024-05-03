import { createSlice,} from "@reduxjs/toolkit"; 

const initialState = {
access_token:  null,
refresh_token: null,
userLogin: null,
userPass: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action 
      ) => {
      state.access_token = action.payload.access_token;
          state.refresh_token = action.payload.refresh_token;
          state.userLogin = action.payload.userLogin;
          state.userPass = action.payload.userPass;
    },
    logout: (state) => {
      state.access_token = null;
        state.refresh_token = null;
        state.userLogin = null;
        state.userPass = null;
    },
  },
  extraReducers: (builder) => {
  },
});

export const selectAuth = (state) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;