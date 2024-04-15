
# Mitigated problems with React JS
- DOM manipulation directly with browser document is expensive and slow - `react intorduced the virtual DOM with React reconciliation. React updates only part of the page which needs to be changed.`
- well known web technology i.e. HTML won't offer reusability of it's container/elements - `react introduced reusable componenets, can be export and import for later uses with ES6 modularity feature of Java Script`
- redirecting experinece in web page - `react itroduced a SPA with router package where it offers the rendering, loading and manipulating all components within same html page ` <br>
React is a popular JavaScript frontend library open-sourced by Facebook. React was born out of the need to solve the problem of the browser DOM being slow.
React is component-based meaning that components are the building blocks of a React UI. 
Another important thing about React is that it’s a Single Page Application (SPA). This means React doesn’t fetch a completely new web page when the user has to be shown a different view, it just re-writes the current web page with any new data fetched from the backend server.

# React Props
Poperties are passed to component as atribute and can be used later in the child component.
props can't be changed.
# React States
which makes dynamic rendering of a component , function component uses hooks to achieve it where calss component achieve the same by getting properties from parent component of React.
<br>
Component state update may be Asynchronous, so best practice is to use function rather direct updating the state.
`Statefull components`<br>
- mostly called class components
- it has own state, life cycle management [componetDidMount(), componentDidUpdate(), componentWillUnmount(), componentDidCatch()]
-  Best for Complex UI for tracking changes.
`Stateless Components` <br>
- mostly referred as functional componets
- these components don't have own state and to track the changes in component hooks are used.
- Best for simple UI and using functional components with hooks for complex UI. 
# Key points
React makes it easier to create UI components and re-use them

React uses the idea of "Components" as reusable UI entities

Elements are the building blocks of Components

JSX notation is used to simplify specifying elements in React

State is used to manage state for a Component and is managed internally within that component only

Props are used to pass data from a parent component to its children (uni-directional)

The children prop (accessed as this.props.children) is a special prop which contains any child elements to the component


# React Events:
called Synthetic events, to handle event first define a function and pass it to a JSX tag as prop.
Handling events  with React elements is very similar to handling events on DOM elements.
> React events are named using camelCase, rather than lowercase.
> With JSX you pass a function as the event handler, rather than a string.
- Eventlistener function is passed as string to event in react element
## diffrent ways of invoking event listners  - Class Based Components
1. Define a default function and bind it to the constructor.
   -  this.handleClick = this.handleClick.bind(this);
2. Define a refernece variable with callback function
3. Define a function and invoke it as prop by callback function
   - onClick={() => this.handleClick()}

## Function Based Components
1. Define a event listener  and pass it to eh event tag as prop

- Remember pass the function to thje event handler not invocation

# Introduction Axios
Axio is a very powerfull JS library to perfrom HTTP requests.
- Promise based request serve
Using Axios has quite a few advantages over the native Fetch API:
- supports older browsers (Fetch needs a polyfill)
- has a way to abort a request
- has a way to set a response timeout
- has built-in CSRF protection
- supports upload progress
- performs automatic JSON data transformation
- works in Node.js
`npm install axios`<br>
`import axios from 'axios';`
## HTTP requests
- axios.get() <br>
const getBreeds = async () => {<br>
  try {<br>
    return await axios.get('https://dog.ceo/api/breeds/list/all')<br>
  } catch (error) {<br>
    console.error(error)<br>
  }<br>
}<br>
- axios.post()<br>
axios.post('https://site.com/', {<br>
  name: 'Flavio'
})<br>
- axios.put()
- axios.delete()
- axios.put()
- axios.patch()
- axios.options()
    