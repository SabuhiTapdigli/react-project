import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT_USER } from './types';

export const registerUser = (userData) => async dispatch => {
    try {
        const formData = new FormData();
        formData.set('name', userData.name);
        formData.set('surname', userData.surname);
        formData.set('email', userData.email);
        formData.set('password', userData.password);
        formData.set('gender', userData.gender);
        formData.set('phoneNum', userData.phoneNum);
        formData.set('radiobox', userData.userType);

        if (userData.userType === 'driver') {
            formData.set('vehcile', userData.vehicle);
            formData.set('seats', userData.seats);
        }

        const result = await axios.post('/register', formData);

        if (typeof result.data !== 'object') return false;

        dispatch({
            type: REGISTER_SUCCESS,
            payload: result.data
        });

        return true;
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = (userData) => async dispatch => {
    try {
        const formData = new FormData();
        formData.set('email', userData.email);
        formData.set('password', userData.password);
        formData.set('radiobox', userData.userType);

        const result = await axios.post('/login', formData);

        if (typeof result.data !== 'object') return false;

        dispatch({
            type: LOGIN_SUCCESS,
            payload: result.data
        });

        return true;
    } catch (error) {
        console.log(error);
    }
}

export const logoutUser = () => dispatch => {
    dispatch({
        type: LOGOUT_USER,
        payload: {}
    });
};