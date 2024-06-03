import { INCREMENT, DECREMENT } from "./constants";

// fucntion for increment returns the obj with type prop

export const increment =()=>{
    return {type:INCREMENT}
}


//function decrement which returns the obj
export const decrement =()=>{
    return {
        type:DECREMENT  
    }
};