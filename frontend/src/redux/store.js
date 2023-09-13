import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./Slices/Global";

const store = configureStore({
    reducer: {
        [globalSlice.name]: globalSlice.reducer,
    },
    devTools: !import.meta.env.PROD,
});

export default store;