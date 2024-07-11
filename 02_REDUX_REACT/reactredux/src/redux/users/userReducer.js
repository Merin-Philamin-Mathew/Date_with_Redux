import { FETCH_USERS_FAILURE, FETCH_USERS_REQUESTS, FETCH_USERS_SUCCESS } from "./userTypes"

const initialState = {
    users : [],
    error : '',
    loading : false,
}

export const userReducer = (state=initialState , action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTS: 
        return {
            ...state,
            loading : true
        }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading : false,
                users : action.payload,
                error : ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading : false,
                users : [],
                error : action.payload
            }
            default : return state
    }
}