import { SHOW_TOAST, HIDE_TOAST } from "../actions/types";

const initialState = {
    show: false,
    delay: 2000,
    headerText: '',
    bodyText: ''
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SHOW_TOAST:
            return {
                ...state,
                ...payload,
                show: true
            }
        case HIDE_TOAST:
            return {
                ...state,
                show: false,
                headerText: '',
                bodyText: ''
            }
        default:
            return state;
    }
}