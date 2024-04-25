
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
  - const history = useHistory();
    - history.push('/new-route');

- useHistory()
### Navigation with React Router DOM library
- Link
  - Link to="/new-route">Go to New Route /Link>
- NavLink
  - NavLink to="/new-route">Go to New Route /NavLink>
- Navigate
  - Navigate to="/login" replace /> 
## Get started with Notistack
  https://notistack.com/getting-started
  Snackbar, Toast, Alert, Flag or Notification are all different names that refer to the same concept. They are used to display confirmation, alert or acknowledgement about a task carried out by the app. These event-driven messages, usually appear on the corner of center of the screen over the app content, and require minimal user interaction to disappear.
  ### installation
  - npm install notistack

### Usage
import { SnackbarProvider, enqueueSnackbar } from 'notistack'<br>
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




