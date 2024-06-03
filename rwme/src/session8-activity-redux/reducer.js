import { initialState } from "./initialstate";
import {INCREMENT, DECREMENT} from "./constants";


function counter(state= initialState, action){
    switch(action.type){
        case INCREMENT:
            return {    
                ...state,
                count: state.count +1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count -1
            }
        default:
            return state;
    }
} 

export default counter;

