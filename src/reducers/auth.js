import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT_USER } from "../actions/types";

const initialState = {
    isAuthenticated: false,
    user: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            };
        case LOGOUT_USER: 
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        default:
            return state;
    }
}