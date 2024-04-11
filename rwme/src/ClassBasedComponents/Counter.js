import './Counter.css';
import React from "react";
import ReactDOM from "react-dom";
import App from './App'

// //const header = React.createElement('h1', null, 'React Element');
// //const counterDisplayElement = React.createElement("h1", {className:"counter-display"}, 2)
// const counterDisplayElementJSX = <h1 className="counter-display">{2*5}  </h1>
// //console.log(counterDisplayElementJSX)
// //const incrementButtonElement = React.createElement("button", "", "+");
// const incrementButtonElementJSX = (<button>+</button>);
// //const decrementButtonElement =  React.createElement("button", '', '-');
// const decrementButtonElementJSX = (<button>-</button>)
// /*const containerDivElement = React.createElement("div",null,[counterDisplayElement, 
// incrementButtonElement, decrementButtonElement] );*/
// const containerDivElementJSX = (<div>{
//     [counterDisplayElementJSX,
//     incrementButtonElementJSX, decrementButtonElementJSX]

//     }</div>)
// ReactDOM.render(containerDivElementJSX, document.getElementById("root"))

/**Component 

const Counter = ()=>{
   return (
       <div>
           <h1 className='counter-dispaly'>0</h1>
           <button>+</button>
           <button>-</button>
       </div>

   );
}*/
class Counter extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           count:0
       }
   
   }
   increaseCount = ()=>{
       this.setState((state, props)=>{
           return {count: state.count+props.diff}
       });}
   decreaseCount = ()=>{
       this.setState((state, props)=>{
           return {count: state.count-props.diff}
       });
   }
   render(){
       return (
           <div>
               <h1 className='counter-dispaly'>{this.state.count}</h1>
               <button onClick={this.increaseCount}>+{this.props.diff}</button>
               <button onClick={this.decreaseCount}>-{this.props.diff}</button>
           </div>
   
       );

   }
}

export default Counter;

ReactDOM.render(<App/>, document.getElementById("root"))



