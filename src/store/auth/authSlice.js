import { createSlice } from '@reduxjs/toolkit';
import { Status } from '@api';

const initialState = {
    /**
     * If sessionStatus === Status.DEFAULT  => User is not logged in
     * If sessionStatus === Status.SUCCESS  => User is logged in
     * If sessionStatus === Status.ERROR    => session token of logged in user has expired
     */
    sessionStatus: Status.DEFAULT,
    token: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveToken: (state, action) => {
            state.token = action.payload;
            state.sessionStatus = Status.SUCCESS;
        },
        clearToken: (state, action) => {
            state.token = '';
            state.sessionStatus = Status.DEFAULT;
        },
        sessionExpired: (state, action) => {
            state.sessionStatus = Status.ERROR;
        },
    },
});

export const {
    saveToken,
    clearToken,
    sessionExpired,
} = authSlice.actions;

export default authSlice.reducer;