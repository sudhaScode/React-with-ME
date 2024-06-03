import React,{useState} from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Debounce (){
 // capturing the change in input filed for every chnage event is not a optimized way of handling it
 // keep the delay when capturing the event to make it efficient and reduce api calls - this approach is called Debounce
 const [searchInput, setSearchInput] = useState('');
 
 function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
const debounceRef = useRef(debounce((e)=>{console.log("Input::" , e)},500)).current;// useRef holds the fucntion return and restrict to recreating it
const inputHanlder = (event)=>{
    console.log("causing rerender")
    setSearchInput(event.target.value);
 };
 useEffect(()=>{
    if(searchInput){
        debounceRef(searchInput);
    }
 },[searchInput])   
    return(
        <input type="text" onChange={inputHanlder} value={searchInput}/>
    );
}
export default Debounce