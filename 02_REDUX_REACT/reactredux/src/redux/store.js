import {legacy_createStore} from 'redux'
import cakeReducer from './cakes/cakeReducer'

const store = legacy_createStore(cakeReducer)

export default store