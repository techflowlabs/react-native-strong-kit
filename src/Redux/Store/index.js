import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';

// Reducers
import { reducer } from '../Reducers'

// const middleware = applyMiddleware(logger)

const reducers = combineReducers({ reducer })

const store = createStore(reducers, applyMiddleware(thunk))


store.subscribe(() =>{
    console.log("Store Changed", store.getState());
});



export { store }