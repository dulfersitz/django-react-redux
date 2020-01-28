import React, { Component, Fragment } from 'react';
//import Header from './layout/Header';
//import Dashboard from './leads/Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

//class App extends Component {
function App() {
    const counter = useSelector(state => state.a);
    const dispatch = useDispatch();
    //render() {
        return (
            <div className="App">
                <h1> Counter {counter} </h1>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        );
    //}  render
}

export default App;