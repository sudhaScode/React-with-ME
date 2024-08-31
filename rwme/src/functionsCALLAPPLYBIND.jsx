/***
 typically calling some object function with different object context, where the fucntion act like the different function behaviour.


Different ways of  Binding fucntions with Object


explicit calling - directly calling a fucntion without context of object called/ default context is window

implicit calling 
call : with context of another object 
Apply- calling a fucntion which bahaiour of an object, so it's holds the context about that holder

Bind - when nesting context need to have from one object to another object while callig function (mainly in callback fucntions)
 */



/**
Call
Directly invokes a function.
Explicitly sets the this value within the function.
Passes arguments individually.
*/
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "Alice" };
greet.call(person, "Hello"); // Output: Hello, Alice

/**
 Apply
Similar to call but passes arguments as an array.
Useful when you have arguments in an array format.
*/

function greet1(greeting, timeOfDay) {
  console.log(greeting + ", " + this.name + "! It's " + timeOfDay);
}

const person1 = { name: "Bob" };
greet1.apply(person1, ["Good morning", "8 AM"]); // Output: Good morning, Bob! It's 8 AM
 
/*
Bind
Creates a new function with a pre-set this value.
Returns a new function that can be called later.
*/
function greet2(greeting) {
  console.log(greeting + ", " + this.name);
}

const person2 = { name: "Charlie" };
const boundGreet = greet2.bind(person2, "Hi");
boundGreet(); // Output: Hi, Charlie