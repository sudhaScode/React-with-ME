import React,{useState, useRef, useEffect} from 'react';


function ReactRef(){
    const [inpuT, setInput ] = useState('');
    const inputRef = useRef("");
    const handlChange =(event)=>{
        setInput(event.target.value)
    } 
    useEffect(()=>{
        inputRef?.current?.focus(); 
    },[])

    return (
        <div>
            <p>Google</p>
            <input ref={inputRef} type="text" value ={inpuT} onChange={handlChange} />
        </div>
    );
}
export default ReactRef;