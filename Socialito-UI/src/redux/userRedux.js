import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser:{"_id":"61ba7afe370a01a17d6e4148","username":"ahmed","email":"ahmed@gmail.com","profilePic":"","coverPic":"","followers":[],"following":[],},
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    follow:(state,action)=>{
      state.user={...state.user,following:[...state.user.following,action.payload]}
    },

    unfollow:(state,action)=>{
      state.user={...state.user,
      following:state.user.following.filter((follow)=>follow!==action.payload)}
    }
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;