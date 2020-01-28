import aReducer from './exampleA';
import bReducer from './exampleB';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    a : aReducer,
    b : bReducer
})

export default rootReducer;