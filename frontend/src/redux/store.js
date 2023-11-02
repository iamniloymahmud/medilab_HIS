import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./Slices/Global";
import api from './Api/api';

const store = configureStore({
    reducer: {
        [globalSlice.name]: globalSlice.reducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (deftaulMiddleWares) => {
        return deftaulMiddleWares().concat(api.middleware);
    },
    devTools: !import.meta.env.PROD,
});

export default store;