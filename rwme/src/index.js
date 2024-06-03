import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './session3-takehome/App';
import App from './App';
//import App from './session4-takehome/App';
//import App from './Session7-activity/App'
//import App from './session8-activity/components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './session8-activity/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
   </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
