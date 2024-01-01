import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isHistoryOpen: false
}


const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleHistoryOpen: (state) => {
            state.isHistoryOpen = !state.isHistoryOpen;
        }
    }
})

export default settingsSlice.reducer;
export const { toggleHistoryOpen } = settingsSlice.actions;