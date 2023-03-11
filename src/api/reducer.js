import {
    GET_DATA_REQUEST,
    GET_DATA_FAILURE,
    GET_DATA_SUCCESS
} from "./actionTypes";

const initState = {
    isError: false,
    isLoading: false,
    storeData: []
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_DATA_FAILURE:
            return {
                ...state,
                isError: true
            }
        case GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                storeData: payload
            }
        default:
            return state
    }
}

export default reducer;