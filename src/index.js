// import React from 'react';
// import ReactDOM from 'react-dom';
// import './css/style.css';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// import React from "react";
// import { render } from "react-dom";
// import Router from "./components/Router";
// import "./css/style.css";

// render(<Router />, document.querySelector("#main"));

import React from 'react';
import { render } from 'react-dom';
import Router from "./components/Router"
import './css/style.css';
// import App from './components/App';
import * as serviceWorker from './serviceWorker';

render(<Router />, document.getElementById('root'));
serviceWorker.unregister();