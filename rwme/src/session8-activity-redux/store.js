import { combineReducers, createStore } from "redux";
import counter from './reducer'



// group reducers
const rootReducer = combineReducers({counter})
// create a store
export const store = createStore(rootReducer)