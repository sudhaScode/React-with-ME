import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Counter from "./index";

class App extends React.Component{

    render(){
        return (
           <div>
             <Counter diff={1}/>
            <Counter diff= {10}/>
           </div>
        );
    }
}
export default App
