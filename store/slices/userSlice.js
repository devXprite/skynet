import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    access_token: localStorage.getItem('access_token') || null
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetUserState: (state) => {
            return initialState;
        },
        logout: (state) => {
            state.access_token = null;
            localStorage.removeItem('access_token');
            axios.get('auth/logout')
            axios.defaults.headers.common['Authorization'] = null;
        },
        setNewToken: (state, action) => {
            const access_token = action.payload;
            state.access_token = access_token;
            localStorage.setItem('access_token', access_token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        }

    }
});

export const { logout, setNewToken } = userSlice.actions;
export default userSlice.reducer;