import axios from 'axios';
import { GET_TRIPS } from './types';

export const addTrip = (tripData) => async dispatch => {
    try {
        const formData = new FormData();
        formData.set('from_place', tripData.from_place);
        formData.set('to_place', tripData.to_place);
        formData.set('date', tripData.date);
        formData.set('price', tripData.price);
        formData.set('comment', tripData.comment);

        const result = await axios.post('/add', formData);

        return typeof result.data === 'object';
    } catch (error) {
        console.log(error);
    }
};

export const getAllTrips = () => async dispatch => {
    try {
        const result = await axios.get('/search');

        dispatch({
            type: GET_TRIPS,
            payload: result.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const searchTrips = (searchData, history) => async dispatch => {
    try {
        const formData = new FormData();
        formData.set('departure', searchData.departure);
        formData.set('destination', searchData.destination);
        formData.set('date', searchData.date);

        const result = await axios.post('/search', formData);

        dispatch({
            type: GET_TRIPS,
            payload: result.data
        });

        history.push('/search');
    } catch (error) {
        console.log(error);
    }
};

export const reserveTrip = (tripData) => async dispatch => {
    try {
        const formData = new FormData();
        // formData.set('departure', searchData.departure);
        // formData.set('destination', searchData.destination);

        const result = await axios.post('/search/', formData);
        console.log('result', result)
    } catch (error) {
        console.log(error);
    }
};