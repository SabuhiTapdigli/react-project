import { combineReducers } from 'redux';
import auth from './auth';
import trip from './trip';
import toast from './toast';

export default combineReducers({
    auth,
    trip,
    toast
});