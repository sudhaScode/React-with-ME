import '../ClassBasedComponents/Counter.css';
import React from "react";


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
class LifeCyle extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           count:0
       }
       this.timerId = null;
   
   }
  
   componentDidMount(){
    console.log("invoke the data fetching when component inserted into DOM", "Mouting phase")
   }
   componentDidUpdate(){
    console.log("when component props or state changed didUpdate lifecycle methods gets invoked", "Update Phase")
    this.timerId = setInterval(()=>{console.log("time interval is activated")}, 1000)
}
   componentWillUnmount(){

    console.log("invoke when component removed from DOM best suitable for conditional rendering and cleaning timers/intervals","Destrying Phase")
    clearInterval(this.timerId);
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

export default LifeCyle;

//ReactDOM.render(<App/>, document.getElementById("root"))



