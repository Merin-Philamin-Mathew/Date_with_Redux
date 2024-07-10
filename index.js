const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE'
const STOCK_CAKE = 'STOCK_CAKE'

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

const initialState = {
    numOfCakes : 10,
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
        default : return state
    }
}


// Responsibilities of Redux
// 1 Holds state of the application
const store = redux.legacy_createStore(reducer)
// 2 Allows access to the state
console.log('Intial State', store.getState())
// 3 Registers listners via subscribe(listner)
const unsubscibe = store.subscribe(()=>console.log('Updated State', store.getState()))
// 4 Allows state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(stockCake())
// 5 Handles unregistering of listners via the function returned by subscribe(listnsers)
unsubscibe()
