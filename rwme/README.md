`The JavaScript execution lifecycle refers to the process by which JavaScript code is interpreted and executed by the JavaScript engine. It involves several key stages:`
<br>

1. `Parsing:`<br>

The JavaScript engine starts by parsing the code. This involves breaking down the code into smaller units called tokens (keywords, identifiers, operators, etc.). The engine creates an Abstract Syntax Tree (AST), which is a hierarchical representation of the code's structure.<br>
2. `Code Generation (Optional):`<br>

In some cases, the engine might perform an optional step called code generation. This involves translating the AST into machine code (or bytecode) that can be executed more efficiently by the computer.<br>
3. `Scoping:`<br>

The engine determines the scope of variables and functions within the code. Scoping defines where variables are accessible and how they are resolved. JavaScript has both global scope (accessible throughout the program) and function scope (accessible only within a specific function).<br>
4. `Variable and Function Hoisting:`<br>

JavaScript has a unique behavior called hoisting. Variable declarations (but not assignments) and function declarations are hoisted to the top of their scope. This means you can reference variables or functions before they are declared in the code. However, this can lead to unexpected behavior if not used carefully.<br>
5. `Memory Allocation:`<br>

The engine allocates memory for variables and functions. The type of a variable (e.g., number, string) determines the amount and type of memory allocated.<br>
6. `Execution:`<br>

The engine starts executing the code line by line. It evaluates expressions, calls functions, and performs operations based on the code's instructions.<br>
7. `Call Stack Management:`<br>

When a function is called, its execution context is pushed onto a call stack. This context includes the function's arguments, local variables, and the current state of the program. When the function finishes execution, its context is popped from the call stack.<br>
8. `Event Loop:`<br>

JavaScript is single-threaded, meaning it can only execute one task at a time. The event loop is a mechanism that allows JavaScript to handle asynchronous operations (e.g., network requests, user interactions). When an asynchronous operation is triggered, the event loop queues it for execution later. When the current task finishes (i.e., the call stack is empty), the event loop checks the queue and executes the next asynchronous task.<br>
9. `Garbage Collection:`<br>

JavaScript performs garbage collection automatically. When a variable or object is no longer referenced and cannot be reached by the code, the garbage collector reclaims the memory associated with it for future use.<br>

**In Summary**<br>
By becoming familiar with parsing, scoping, hoisting, memory allocation, execution, call stack management, the event loop, and garbage collection, you can better predict how your code will behave and avoid common pitfalls.

# JavaScript Execution Lifecycle in Browser for React Applications
When it comes to React applications in the browser, the JavaScript execution lifecycle interacts closely with React's component lifecycle. Here's a breakdown of the key stages:

1. `Parsing and Scoping:`

  - The browser receives React code (JSX gets compiled to JavaScript).
  - The code is parsed, creating an AST, and variables/functions are scoped.

2. `Memory Allocation:`

- Memory is allocated for React components, variables, and functions.

3. `Initial Render:`

- React parses the JSX code and creates a virtual DOM (a lightweight representation of the UI).
- React compares the virtual DOM with the actual DOM (if a component is already mounted) and identifies necessary changes.

4. `Event Loop and User Interaction:`

- The browser's event loop waits for user interactions or asynchronous tasks.
- When a user interacts with the UI (clicks a button, types in a form), an event is triggered.

5. `React Component Lifecycle:`
The appropriate React component lifecycle methods are invoked based on the event or state change:
- `constructor (optional):` Runs once before rendering (typically for initialization).
- `getDerivedStateFromProps (optional): Updates component state based on changes in props (rarely used).
- `componentDidMount (optional):` Runs after the component is first rendered in the DOM. Often used for data fetching, subscriptions, etc.
- `shouldComponentUpdate (optional):` Controls whether a component should re-render based on state or props changes (used for performance optimization).
- `getSnapshotBeforeUpdate (optional):` Captures a snapshot of the DOM before updates (used for DOM manipulation after updates).
- `render (required):` Returns the JSX code representing the component's UI.
- `componentDidUpdate (optional):` Runs after the component updates in the DOM (can be used to update side effects based on state changes).
- `componentWillUnmount (optional):` Runs before the component is removed from the DOM (used for cleanup tasks like clearing subscriptions).

6. `Virtual DOM Diffing and Updates:`
-React efficiently updates the actual DOM based on the differences identified between the virtual DOM and the previous state. This minimizes unnecessary DOM manipulation, improving performance.
- Diffing algorithm (`optimizing UI updates`) differentiates the real dom and virtual dom ,  if any changes react updates the real dom with updated changes only. 
- Reconciliation ensures the real DOM reflects the current state of the application based on the virtual DOM. Reconcilation syncs the real dom
   - **Diffing Algorithm:**
      - `Virtual DOM Comparison:` After a state or prop change, React creates a new virtual DOM representing the updated UI.
      - `Efficient Diffing:` React's diffing algorithm intelligently compares the new virtual DOM with the previous virtual DOM. It identifies the minimal set of changes needed to update the actual DOM.
      - `Minimized DOM Updates:` Based on the diffing results, React only updates the specific parts of the real DOM that have actually changed. This avoids unnecessary re-rendering of the entire DOM, leading to performance improvements.
   - **Reconciliation:**

      - `Synchronization:` Reconciliation is the process where React takes the minimal set of changes identified by the diffing algorithm and synchronizes the real DOM with the updated virtual DOM.
      - `Correctness:` The reconciliation process in React is generally considered correct as long as the virtual DOM accurately reflects the component's state and props. The diffing algorithm is designed to be efficient and reliable in identifying necessary DOM updates.
7. `Garbage Collection:`

JavaScript's garbage collector reclaims unused memory associated with components that are no longer needed.<br>
**Key Points:**<br>

- React's component lifecycle methods are tightly coupled with the browser's event loop and JavaScript execution.
- The virtual DOM diffing mechanism helps React optimize updates to the actual DOM, enhancing performance.
- Understanding these stages helps you write efficient and well-structured React applications.

### render: [Blueprint of UI]

- `Function within a Component:` The render function is a required method within a React component.
-  `Returns JSX:` It returns JSX code that defines the component's UI structure. The JSX is transpiled into JavaScript that describes the UI elements.
- `Instructions, not Actions:` It acts as a declarative instruction, specifying what the UI should look like based on the component's state and props.
- `No Direct DOM Manipulation:` It doesn't directly manipulate the DOM itself.
### renderer: [constructor of actual DOM]

- `Responsible for DOM Creation:` The renderer is responsible for taking the output from the render function (the JSX description) and translating it into actual DOM elements in the browser.
- `Can Be Different Implementations:` There are different renderer implementations available in React.
      - `React DOM (Default):` The default renderer for web applications, responsible for creating and manipulating DOM elements in the browser.
      - `React Native:` A renderer for building mobile apps, translating the UI description into native UI elements for iOS and Android.
- `Handles DOM Updates:` The renderer also handles updating the DOM when the component's state or props change. It leverages React's virtual DOM diffing algorithm to identify the minimal set of DOM changes needed for efficiency.
- `In Summary:`

  - The render function specifies the UI using declarative JSX.
  -  The renderer acts on those instructions, translating them into actual DOM elements or native UI elements (depending on the renderer) and updating the DOM efficiently.

- **Analogy:**
Think of render as the architect's blueprint for a building. It defines the structure and layout. The renderer is like the construction crew that takes the blueprint and builds the actual building (the DOM or native UI).

# Mitigated problems with React JS
- DOM manipulation directly with browser document is expensive and slow - `react intorduced the virtual DOM with React reconciliation. React updates only part of the page which needs to be changed.`
- well known web technology i.e. HTML won't offer reusability of it's container/elements - `react introduced reusable componenets, can be export and import for later uses with ES6 modularity feature of Java Script`
- redirecting experinece in web page - `react itroduced a SPA with router package where it offers the rendering, loading and manipulating all components within same html page ` <br>
React is a popular JavaScript frontend library open-sourced by Facebook. React was born out of the need to solve the problem of the browser DOM being slow.
React is component-based meaning that components are the building blocks of a React UI. 
Another important thing about React is that it’s a Single Page Application (SPA). This means React doesn’t fetch a completely new web page when the user has to be shown a different view, it just re-writes the current web page with any new data fetched from the backend server.

Two types of logic inside the React Components:
- `Rendering code` (introduced in Describing the UI) lives at the top level of your component. This is where you take the props and state, transform them, and return the JSX you want to see on the screen.
- `Event handlers` (introduced in Adding Interactivity) are nested functions inside your functional components that do things rather than just calculate them. An event handler might update an input field, submit an HTTP POST request to buy a product, or navigate the user to another screen. Event handlers contain “side effects” (they change the program’s state) caused by a specific user action (for example, a button click or typing).

## StrictMode  in React
StrictMode currently helps with:
- Identifying components with unsafe lifecycles
- Warning about legacy string ref API usage
- Warning about deprecated findDOMNode usage
- Detecting unexpected side effects
- Detecting legacy context API
- Ensuring reusable state
https://legacy.reactjs.org/docs/strict-mode.html
# React Props
Poperties are passed to component as atribute and can be used later in the child component.
props can't be changed.
# React States
which makes dynamic rendering of a component , function component uses hooks to achieve it where calss component achieve the same by getting properties from parent component of React.
<br>

Component state update may be Asynchronous, so best practice is to use function rather direct updating the state.
`Statefull components`<br>
- mostly called class components
- it has own state, life cycle management [constuctor, render(), componetDidMount(), componentDidUpdate(), componentWillUnmount(), componentDidCatch()]
- `render`  which instructs the browser to show component UI
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
Axios vs Fecth : https://dev.to/kpiteng/axios-vs-fetch-1eh5
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

## Function Based Components
1. Define a event listener  and pass it to eh event tag as prop

- Remember pass the function to thje event handler not invocation
<br>
As in class based components `componetWillUnmount()` function is used to cleanup any resources created by the component, in function useEffect with return hook is used to cleanup the resouces when component  gets removed

## Hooks
React Hooks provide a powerful way to manage state and other features in functional components.
Hooks are functions used to work with React API like React.DOM, React.render
Hooks let you use state and other React features(rendering  lifecycle methods, fetching data, and more) in functional components without writing a class.<br>
Few essential rules to ensure proper functionality and maintainability of Hooks:
1. Only Call Hooks at the Top Level:
- Hooks must be called at the top level of your functional component. This means they should be placed outside of conditional statements, loops, or nested functions.
- The reason for this rule is that React needs to know the order in which Hooks are called to ensure consistent state updates and behavior across renders. Calling Hooks within nested functions or conditionals can disrupt this order.
2. Only Call Hooks from React Functional Components or Custom Hooks:
- Hooks can only be called from React functional components or custom Hooks (which are functions that use Hooks themselves and can be reused across components).
- Regular JavaScript functions or class components cannot utilize Hooks directly.
3. Don't Use Hooks During Conditional Rendering:
- Avoid calling Hooks conditionally. Since Hooks rely on the order they're called in to manage state, conditionally calling them can lead to unpredictable behavior.
- If you need conditional logic for state updates, consider using the useEffect Hook with a dependency array that controls when the effect runs based on certain conditions.
1. useState()
- useState is function which returns the array with `state` and `setState`. offered by `React` to manage state in functional components.
- updates the state asynchronously so state is  not used immidiately after updating.
- the new state is available only after the component next rerender, use the second arguments as callback function to the setState function
2. useEffect() - allows to perform side effects of functional component.
useEffect is a React Hook that lets you synchronize a component with an external system.
- used for component update acording to the lifecycle of component.
- it accepts two arguments, one is a function  and another is dependecy array.
- without second parameter, useEffect gets triggered every time , when ever the components state or props changes.
- passing empty dependency array to the useEffect function, it gets executes when the component gets rendered first time - like componentDidMount();
- passing state variables to dependecy array, whenever those states gets change useEffect method gets triggered.
- passing empty dependecy and returning a cleanup function in callback function of useEffect, executed when component gets unmount from DOM.
3. useContext()
4. useReducer()
5. useMemo()
6. useRef()
used to refference a variable or a entire tag in the JSX.
- if the useRef using the refference of any tag, it allows to manipulate the DOM without direclty working on dom. 
- The primary purpose of useRef is to create references to DOM elements within React components.
Use useRef for DOM element references that you need to interact with directly in your component's code (e.g., focusing an input element).
<strong>Important Notes:<strong><br>
The useRef hook returns an object with a single property, current. Initially, current is set to null.
When you assign the ref to an element using ref={myRef}, the actual DOM element is assigned to myRef.current after the component mounts.
You can only access the DOM element through myRef.current. Don't try to modify myRef.current directly, as it might lead to unexpected behavior.

7. useCallback()
8. useParams()
it is provided by the `react-router-dom`
- it helps to capture the parameter from the URL
- returns the parameter object

## Object iterating
React can't handle the array objects to render directly on DOM, to mount all objects in an array iterate thought it and rentun the items with JSX tags to det render on DOM.

## Condional Rendering
React allows to JSX to use java Script control statements like if(only to return the component, JSX can't allow to use if), && and ternary operator to render components based on the logic and state of component.
- inside of `{}` curly brackets keeo the rendering logic and wrap with the `React Fragments` or emmpty tag <></> or any other non-semantic tag
- `&&` act as a inline if inside the JSX
-  ` ? : ` act as a inline if else inside the JSX
## React Fragments
Fragments let you group a list of children without adding extra nodes to the DOM.
- can be declare by empty tags <></> with out any attributes and keys
- React Fragments won't create any instance in virtualDOM, it wraps the the componnent as children of component from where the curret compomnent called. 

## Building Your Own Hooks
Custom Hooks helps to share logic between components
- must follow the naming constaints start with use
## React Routing
As we implementing anchor tag with href to redirecting. But in React application it can't be done as React builds application in way that all code resides in single html file. 
- - in routing also we must initilize and declare (define) a route(for component with path) and then use/configure
- Best suitable and powerfull library is react-router-dom to define links(route helps to define components to path) and configure routing(path with common `BrowserRouter or createBrowserRouter`)
- or else use state and conditional management - (suitable for smallar applications)
- Another aproach is using state management with shared state by Application context 
lets dive into Routing:
[Link](https://reactrouter.com/en/main)<br>
Configuring paths to render different component within same html file.
- npm instsall react-router-dom , it provides {`createBrowserRouter[used for nav routes required links/Navlinks]`, `BrowserRouter`, `Routes`, `Route`}
- React application is a SPA, all code resides at ine signle html page.
- it synchronizes the browser history with the react application
1. <strong>Simple Routing</strong> - suitable for manual updation of url path
  1. Simple Rounting with `Link` or `NavLink`
  - it accepts the `to` atribute with path value
<strong>Dynamic routing:</strong> prefer other navigate components rather directly use of Link or NavLink components<br>

- use the colon in value of `to` atribute
- use the `useParams` hook to ge the query parameter from URL to pass value to atribute `to`
Navigate and useNavigate:

- `Navigate` is component used to navigate to diffent path by logic, accepts `to` atribute with path value 
- `useNavigate` is a hook used to navigate to specfic location by invoking `useNavigate` - React Router v6
 - Using `useHistory` Hook - allows to use browser route history.
2. <strong>Advance Routing</strong>
  1. Way 1: Defining Routing using `BrowseRouter` - Suitable for simple Routing
  - -  Wrap the `BrowseRouter` in index.js 
  - - Provides the necessary routing context for all child components
  - - `Routes` allows to group the route and sychronizes the application with route
  - - `Route` it helps to define the path. accepts two atributes `path` and `element`
  - - In src/index.js, the BrowserRouter> component should become the parent of all components nested within React.StrictMode>
  2. Way 2: Define path and navigation with `createBrowserRouter`  - suitable for navigation with `navbar`
  - -  it accepts `Routes` array aas parameter with collection `route objects`.
  - - define path, element and childrens path when root configuring
  - - wrap with defined router  inside App.js 

  ## Client-side Routing:
  React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.<br>
  When not using React Router, App is often the highest parent component in React apps. With React Router, however, the Router component needs to be the highest parent. <br>
  The Router component functions like a control center, and connects the route path (link) with the React component that should appear on the page.
  - React Router `Link`<br>
  Using Link functions similarly to using an a tag, but, as mentioned above, prevents a page refresh, and looks like a React component

  ## Programatic Navigation
  Sometimes we want a different action: We only want to navigate to a different route when a particular event happens or when a user performs an action like submitting a form that leads you to a new page. We refer to this kind of action as programmatic navigation.
  ### Using Redirect Component
  The primary way you programmatically navigate using React Router v4+ is by using a <Redirect /> component, and it’s a recommended method that helps the user navigate between routes.
  - import { Redirect } from 'react-router-dom';
  -  <Redirect to='/profile' />
  ### Using history.push() Method
  history.push() is another approach where we make use of the history props React Router provides while rendering a component.<br>
  For a component to have access props.history.push it must have been rendered with React Router.
  - if (success) props.history.push("/profile");
  ### Using withRouter Method
  We mentioned earlier that for a component to have access props.history.push it must have been rendered with React Router. There are cases where this might not be the case. Thus, we render a component ourselves. To make the history property available to the component, the React Router team created the Higher Order Component (HOC) withRouter. Wrapping a component with this HOC exposes the properties as well.
  - import { withRouter } from 'react-router-dom';
  - export default withRouter(Login);
  - if(success) props.history.push('/profile');
  ### Using useHistory Hook
  a new method called the useHistory hook which embraces the power of React Hooks. This is used for programmatic navigation purposes within a functional component. The useHistory hook gives you access to the history instance that we can use to navigate between pages, whether the component has been rendered by React Router or not, and this eliminates the need for using withRouter.
  - import { useHistory } from "react-router-dom";
  - let history = useHistory();
  - history.push("/home");

### Navigation with React Router DOM library hooks
- useNavigate()
  - const navigate = useNavigate();
    - navigate('/new-route');
- useHistory() (depreceated with useNavigate)
  - const history = useHistory();
    - history.push('/new-route');
### Navigation with React Router DOM library
- Link
  - Link to="/new-route">Go to New Route /Link>
- NavLink
  - NavLink to="/new-route">Go to New Route /NavLink>
- Navigate replaced for Redirect(v5)
  - Navigate to="/login" replace /> 
## Get started with Notistack
  https://notistack.com/getting-started
  Snackbar, Toast, Alert, Flag or Notification are all different names that refer to the same concept. They are used to display confirmation, alert or acknowledgement about a task carried out by the app. These event-driven messages, usually appear on the corner of center of the screen over the app content, and require minimal user interaction to disappear.
  ### installation
  - npm install notistack

### Usage
import { SnackbarProvider, enqueueSnackb  ar } from 'notistack'<br>
- SnackbarProvider is component ans implement required logic to it.
- or can be wrpped to the react application , then can be use `useSnackbar` hook at required componenet to display snack bar<br>
const MyButton = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();<br>
  return (
    <Button onClick={() => enqueueSnackbar('I love hooks')}><br>
      Show snackbar
    </Button>
  )<br>
} 
# Material -UI React UI framework
https://mui.com/material-ui/getting-started/
npm install @mui/material @emotion/react @emotion/styled<br>
`or` 
npm install @mui/material @mui/styled-engine-sc styled-components<br>
Emotion library is helps us to write css props in js file as js props to  component.

## Box Material-UI Reactjs
Box component is used as a wrapper component in Material-UI react. You can include any other components inside a Box component. By default, it creates a div component. We can also change it. 
- import { Box } from "@material-ui/core";

## Progress
Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.

Here the points to checkout for grid and card components. And Styling material UI components using styles library- -makeStyles  

# Handling of Asynchrnous operations in Java Script
Problem Statement: Java Script is single threaded, when dealing with operations like fecthing data, sending sata to server the main thread of project gets freezes until the long running get executes. In order to make the main thread to continue running while long running tasks get executing. to achieve this JS offers well defined techniques.
<br>
Java Script offers a fundametal aproach of Promises to handle the Aysnchronous operations. And ES6 version of JS introduced another two advanced techniques to deal with async operation.

# Debounce
Debounce is technique to reduce the unnecessary event calls/fetchng call which usally makes the component to rerender on browser (rerender can decrease the performance by repainting), reduceing utilization of  runtime resources.<br>
the debounce technique helps prevent excessive API calls or computations on every keystroke<br>
Debouncing is a technique that delays the execution of a function until a certain amount of time has passed since the last time it was triggered. This is often used to improve performance and prevent excessive function calls, especially for user input events like typing.
<br>
this logic is achieved by keeping some delay to act for a event.
- it returns a closure function with setTimeout operation <br>
A debounce is a cousin of the throttle, and they both improve the performance of web applications. However, they are used in different cases. A debounce is utilized when you only care about the final state. For example, waiting until a user stops typing to fetch typeahead search results. A throttle is best used when you want to handle all intermediate states but at a controlled rate. For example, track the screen width as a user resizes the window and rearrange page content while it changes instead of waiting until the user has finished.

# Notification
## toast library by react
- import { toast } from "react-toastify";
## notistack
https://notistack.com/getting-started
React library for notification 

# context API
1. Purpose and Benefits:

- Sharing Data: Context API allows you to share data between components without prop drilling, which can become cumbersome in deeply nested component hierarchies.
- Global State: It provides a way to manage global state within a specific part of your application, making it easier to access and update shared data.
- Improved Code Structure: By avoiding prop drilling, your code becomes cleaner, more maintainable, and easier to reason about.
2. Key Concepts:
- createContext(): This function creates a context object that holds the shared data and provides access methods.
- Provider: A component that wraps other components and provides the context value to its descendants.
- useContext() Hook: Used within components to access the context value provided by a parent Provider.

# Redux
- Redux is predictable state container for javaScript apps
<strong>Problem statement: <strong> when a state of a component is need to share to ancestor components it can be done by prop lifting/props drilling this approach causes rerendering of components in the prop flow. to mitigate the prop lifting Redux helps developing a global state management for an application.

**Resposibilities**
- Holds application state `store = createStore(reducer)`
- Allows access to state via `store.getState() or useSelector()`
- Allows state to be updated via `store.dispatch(actiontype)`
- Register listners via `store.subscribe(listener)` returns unsubscribe() function
React Context also provides GSM but suitable for simple applications

- global state management
- flux architecture
 - `State` -{}
   - A store that holds the state of your application.

 - `Action` - () - triggers the reducer function
   - An action  that decribes the changes in the state of the application
   - intract with the store
   - Plain javaScript objects
   - Have a type property that indicates the type of action being performed
   - Action types (which are constants through out the store) and action creators (which are fucntions returns the object with action type and data(optional))
 - `Reducer` - (state, action) -updater with bussiness logic - to define actual state
   - A Reducer which actually carries out the state transition depending an action -ties the store and actions together
   - incharge to the store - a pure function
   - accepts the statte and action, returns the new state based on the action type
- Sychronous in nature, can't be merge any asynchronous operations
- connect is used to establish a connection to store to manage state.
Create store with reducers using redux toolkit <br>
const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth:authSlice.reducer},<br>
  // Other store configuration options if needed
});<br>
export const quanityActions = quantitySlice.actions;
export const cartActions = mainCartSlice.actions;
export default store;

### React-Redux library is used to bind the react application to redux store
- it provides the Provider component
Wrap the react parent components with Provider and store as prop
  <Provider store ={store}><br>
    <App />
  </Provider><br>
below hooks are used to bind:
 - useDispatch()  used to call update action - returns the dispath function 
 - useSelector() used to retreive the data from state - returns the state 

 ### Async Actions in Redux
 States are updated sychronosly to the store, So Redux won't encourage the asynchronous operations inside it components.
 - redux-thunk
 - applyMiddleware()
## Redux with `reduxjs/toolkit` library
**Redux**
- `More Manual:` Requires you to write and configure reducers, actions, and middleware yourself.
- `Boilerplate Code:` Can involve more boilerplate code, especially for common tasks.
- `Immutability Management:` You need to be careful to avoid accidentally mutating the state.
- thirdparty libraries like redux-thunk, redux-devtools, logger for async/ debugging 
**Redux Toolkit**
- `Simplified Setup:` Provides tools like configureStore and createSlice to streamline store setup and reducer creation.
- `Reduced Boilerplate:` Less code needed for common Redux patterns.
- `Built-in Features:` Includes Redux Thunk (for async logic) and Immer (for safer state updates) by default.
- `Automatic DevTools:` Configures the Redux DevTools extension automatically for easier debugging.

**createSlice**
The createSlice function in Redux Toolkit is a powerful tool for managing a specific part of your Redux state (a "slice"). Here's how it works and what it returns:

*What it Takes:* <br>
`Slice Name:` A string to identify the slice within your Redux store.
`Initial State:` The initial value of the state for this slice.
`Reducers:` An object containing functions that define how to update the state based on dispatched actions.<br>
*What it Does:* <br>
`Action Creators:`
- It automatically generates action creators for each reducer function.
- These action creators allow you to dispatch actions that trigger the corresponding state updates.
`Action Types:`
- It generates unique action type strings based on the slice name and reducer function names.
- These types are used by Redux to identify which reducer to call for each action.
`Reducer:`
- It creates a single reducer function that combines all the individual reducers in the object you provided.
- This reducer handles all actions related to this slice of the state.<br>
*What it Returns:* <br
`An Object:` It returns an object containing:
Action Creators: Functions you can use to dispatch actions.
Reducer: The combined reducer function for the slice.


**How createAction Works:**

`Purpose:` createAction is a utility function in Redux Toolkit that simplifies the creation of action creators.<br>
`Input:`
- actionType: A string representing the type of the action. This type is used by reducers to determine how to update the state based on the action.
- prepareAction?: An optional callback function that can be used to customize the payload of the action.<br>
`Output:`<br>
An action creator function that, when called, returns an action object. This action object has *the following properties:*<br>
- type: The action type string provided as input.
- payload: The payload value, either:<br>
If prepareAction is not provided, the payload is undefined.<br>
If prepareAction is provided, the payload is the value returned by the callback.<br>
- meta (optional): Additional information about the action.
- error (optional): An error object if the action represents a failure.
*Example:*
```
import { createAction } from '@reduxjs/toolkit';

const incrementCounter = createAction('counter/increment');
const decrementCounter = createAction('counter/decrement', payload => ({ amount: payload || 1 }));

// Usage:
import { useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "./counterActions";

const MyComponent = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button> // { type: 'counter/increment', payload: undefined }
      <button onClick={() => dispatch(decrementCounter(2))}>Decrement</button>
```
```
createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Handle actions defined earlier
    handleIncrement: (state, action) => {
      state.value += 1;
    },
    handleDecrement: (state, action) => {
      state.value -= 1;
    },
  },
});

export default counterSlice.reducer;

```
**createAsyncThunk**
`createAsyncThunk` is a powerful tool in Redux Toolkit that simplifies handling asynchronous operations like fetching data from an API. Here's how it works:<br>

*What it Takes:*

`Action Type String:` A string representing the overall action type. This forms the base for generating lifecycle action types.
`Callback Function:` A function that performs the asynchronous operation. This function should return a promise that resolves with the result or rejects with an error.

*What it Returns:*

`Thunk Action Creator:` A function that can be dispatched from your components. When dispatched, this function triggers the asynchronous operation and dispatches lifecycle actions based on the promise's outcome.

*How it Works:*

1. `Lifecycle Action Types:` createAsyncThunk generates three additional action types based on the provided action type string:
- `Pending:` Dispatched when the asynchronous operation starts.
- `Fulfilled:` Dispatched when the promise resolves successfully, with the result as the payload.
- `Rejected:` Dispatched when the promise rejects, with the error as the payload.
2. `Thunk Function Execution:` When the thunk action creator is dispatched:
The provided callback function is executed.
- *Based on the promise's outcome:* <br>
  - If successful, the fulfilled action type is dispatched with the result.
  - If an error occurs, the rejected action type is dispatched with the error.
3. `Reducer Handling:` Your reducers can handle these lifecycle actions to update the state accordingly. You can use the extraReducers section in createSlice or the builder callback in createReducer to handle these actions.

```
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetch('https://api.example.com/posts');
    return response.json();
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
```
```
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsList;

```
*Key Points*
- createAsyncThunk simplifies asynchronous logic by automatically handling promise lifecycle actions.
- It improves code organization and maintainability by separating async logic from reducers.
- You can access the loading and error states in your components based on the dispatched lifecycle actions.