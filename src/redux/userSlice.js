import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        uuid: null,
        username: null,
        name: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.uuid = action.payload.uuid;
            state.username = action.payload.username;
            state.name = action.payload.name;
        },
        clearUser: (state) => {
            state.uuid = null;
            state.username = null;
            state.name = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
