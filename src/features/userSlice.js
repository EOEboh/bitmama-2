import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        // 'state' is to update the initial state
        // 'action' is the data that is gonna be passed, yeah
        login: ( state, action) => {
            state.user = action.payload;
        },
        // we wont be needing a payload on this logout, i think
        logout: (state) => {
            state.user = null;
        },
    },
});

export const {login, logout} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;