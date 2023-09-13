import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    mode: 'dark',
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setMode: (state, action) => {
            if(state.mode == 'dark'){
                state.mode = 'light';
            }else{
                state.mode = 'dark';
            }
        }
    }
});

export default globalSlice;
export const {setMode} = globalSlice.actions;