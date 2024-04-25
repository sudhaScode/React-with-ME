import React,{useState} from "react";

function Debounce (){
 // capturing the change in input filed for every chnage event is not a optimized way of handling it
 // keep the delay when capturing the event to make it efficient and reduce api calls - this approach is called Debounce
 const [searchInput, setSearchInput] = useState('')
 function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
 inputHanlder = debounce((event)=>{
    setSearchInput(event.target.value);
 }, 1000);
    return(
        <input type="text" onChange={inputHanlder} value={searchInput}/>
    );
}