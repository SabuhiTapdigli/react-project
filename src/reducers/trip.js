import { GET_TRIPS } from "../actions/types";

const initialState = {
    trips: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_TRIPS:
            return {
                ...state,
                trips: payload
            };
        default:
            return state;
    }
}