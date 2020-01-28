import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';



const middleware = [thunk];

// STORE 
// create store that holds globalized state (core reduce functionality) 
const initialState = {};
const store = createStore(

    /* Each entry in the state list has a "reducer" function that accepts
       the current state and an "action" and returns the updated state.
       These reducers are combined into a single rootReducer function */
    rootReducer,  

    /* The initialState (optional) is the starting state of the UX.
       Alternatively you can initialize state inside each reducer. */      
    initialState,

    /* Various middleware components (optional) */
    composeWithDevTools(applyMiddleware(...middleware))      

    // Quick DevTools
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ACTIONS & DISPATCHES
// to update state, invoke store.dispatch(action(optionally args)). 
// Action is a function that returns a key-value list to describe
// what changed. For example, an action may produce the list 
// {type: "increment", payload: 5}.  The store sends this to the
// reducer (via rootreducer) to address the action and update state.

/* 

Consider a simple state variable, count. 

This state variable will be mapped to a reducer, e.g., countReducer.
Then multiple actions can feed that single reducer:

    ACTIONS     |   REDUCER     |   STATE
    Increment --|
    Decrement --|
    ...       --|  
                |-- countReducer -> count

The reducer you write must handle all actions passed to it.

*/

// instantiate DOM with Redux:
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);