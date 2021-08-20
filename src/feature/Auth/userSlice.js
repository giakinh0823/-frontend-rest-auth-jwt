import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi';
import StorageKeys from '../../constants/storage-keys';


export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
        //call api to register
        const response = await userApi.register(payload);
        //save data to local storage
        const user = response.data.user
        localStorage.setItem(StorageKeys.TOKEN, response.data.access);
        localStorage.setItem(StorageKeys.REFRESH, response.data.refresh);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(user.username));
        return user;
    }
)


export const login = createAsyncThunk(
    'users/login',
    async (payload) => {
        //call api to register
        const response = await userApi.login(payload);
        //save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, response.data.access);
        localStorage.setItem(StorageKeys.REFRESH, response.data.refresh);
        const responseUser = await userApi.getUser({ username: payload.username })
        localStorage.setItem(StorageKeys.USER, JSON.stringify(responseUser.data[0]));
        return  responseUser.data[0];
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
        logout(state){
            state.current = {}
        }
    },
    extraReducers: {
        //'user/register/fulfilled': () => {}
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    }
})

const { actions, reducer } = userSlice
export const { logout } = actions
export default reducer