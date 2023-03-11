import {
    GET_DATA_REQUEST,
    GET_DATA_FAILURE,
    GET_DATA_SUCCESS
} from "./actionTypes";
import axios from 'axios';

export const getDataSuccess = (payload) => ({
    type: GET_DATA_SUCCESS,
    payload
})

export const getDataFailure = (payload) => ({
    type: GET_DATA_FAILURE,
    payload
})

export const getDataRequest = (payload) => ({
    type: GET_DATA_REQUEST,
    payload
})

export const getData = () => dispatch => {
    dispatch(getDataRequest());
    return axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
        .then(res => {
            if (res.status === 200) {
                return dispatch(getDataSuccess({ storeData: res.data }))
            }
            else {
                return dispatch(getDataFailure({ message: "Error" }))
            }
        })
}