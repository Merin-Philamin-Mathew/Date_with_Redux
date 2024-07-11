const redux = require('redux')
const reduxLogger = require('redux-logger')

// const createStore = redux.legacy_createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



const BUY_CAKE = 'BUY_CAKE'
const STOCK_CAKE = 'STOCK_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// action creator
function buyCake(){
    // action
    return {
        type: BUY_CAKE,
        info: 'First redux aciton'
    }
}
// action creator2
function stockCake(){
    // action2
    return {
        type: STOCK_CAKE,
        info: 'Second redux aciton'
    }
}
// action creator3
function buyIceCream(){
    // action3
    return {
        type: BUY_ICECREAM,
        info: '3rd redux aciton'
    }
}

// ============================= single Reducer =============================================
const initialState = {
    numOfCakes : 10, 
    numOfIceCream : 10, 
    // other properties
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        // we are returning a new state with modified properties
        case BUY_CAKE : return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case STOCK_CAKE : return{
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default : return state
    }
}


// ============================= multiple Reducer =============================================

    const initialCakeState = {
        numOfCakes : 20,
    }
    const initialIceCreamState = {
        numOfIceCreams : 20,
    }

    const cakeReducer = (state=initialCakeState, action) => {
        switch(action.type){
            case BUY_CAKE : return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            case STOCK_CAKE : return{
                ...state,
                numOfCakes: state.numOfCakes + 1
            }
            default : return state
        }
    }

    const icecreamReducer = (state=initialIceCreamState, action) => {
        switch(action.type){
            case BUY_ICECREAM : return{
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            default : return state
        }
    }

    const rootReducer = combineReducers({
        cake: cakeReducer,
        iceCream: icecreamReducer,
    })


// Responsibilities of Redux
// 1 Holds state of the application
// const store = createStore(reducer)
const store = createStore(rootReducer, applyMiddleware(logger)) //passing middleware logger

// 2 Allows access to the state
console.log('Intial State', store.getState())

// 3 Registers listners via subscribe(listner)
// const unsubscibe = store.subscribe(()=>console.log('Updated State', store.getState()))
const unsubscibe = store.subscribe(()=>{}) //logger will do the consoling part with retrieving state

// 4 Allows state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(stockCake())
store.dispatch(buyIceCream())
// 5 Handles unregistering of listners via the function returned by subscribe(listnsers)
unsubscibe()

