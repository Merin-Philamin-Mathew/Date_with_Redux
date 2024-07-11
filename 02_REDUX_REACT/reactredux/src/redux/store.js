import {applyMiddleware, legacy_createStore} from 'redux'
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'
import rootReducer from './rootReducer'


const store = legacy_createStore(rootReducer,applyMiddleware(logger,thunk))

export default store