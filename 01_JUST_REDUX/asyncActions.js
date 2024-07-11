const redux = require("redux")
const axios = require('axios')
const reduxLogger = require('redux-logger')

const createStore = redux.legacy_createStore
const applyMiddleware = redux.applyMiddleware   
const thunkMiddleware = require('redux-thunk').default
const loggerMiddleware = reduxLogger.createLogger

const initialState = {  
    loading : false,
    users : [],
    error : '',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = ()=>{
    return {
         type : FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users =>{
    return {
         type : FETCH_USERS_SUCCESS,
         payload : users
    }
}
const fetchUsersFailure = error =>{
    return {
         type : FETCH_USERS_FAILURE,
         payload : error
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
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
            default:
                state
    }
}

const store = createStore(reducer , applyMiddleware(thunkMiddleware))


const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.org/users/')
        .then(response => {
            // response.data is the array of users 
            const users = response.data.map(user => users.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            // error.message is the error message
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const unsubscibe = store.subscribe(()=>{
    console.log(store.getState());

})

store.dispatch(fetchUsers)
