import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from "../action"

function Counter (){
    const dispatch = useDispatch();
    const count = useSelector(state=>state.counter.count);
    const handleClick =(event)=>{
        console.log("EVENT::", event.target.name)
        if(event.target.name === "increment"){
             dispatch(increment())
        }
        else{
            dispatch(decrement());
        }

    }

    return(
        <div>
            <h1>Counter</h1>
            <button onClick={(event)=>handleClick(event)} name="increment">+</button>
            <div>{count}</div>
            <button name="decrement" onClick={(event)=>handleClick(event)} >-</button>
        </div>
    );
}
export default Counter;