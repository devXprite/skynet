import { configureStore } from "@reduxjs/toolkit";
import filesSlice from "./slices/filesSlice";
import userSlice from "./slices/userSlice";
import chatSlice from "./slices/chatSlice";
import settingsSlice from "./slices/settingsSlice";

const store = configureStore({
    // preloadedState: JSON.parse(localStorage.getItem('reduxState')) || {},
    reducer: {
        user: userSlice,
        files: filesSlice,
        chats: chatSlice,
        settings: settingsSlice
    },
    devTools: true
});

// store.subscribe(() => {
//     localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

export default store;