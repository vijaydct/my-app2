import React from "react";
import ReactDOM from "react-dom";
// es6 Module Loader - front end - react, angular
// import varName from 'package'

import App from "./App";
// ./ look from the current folder

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,  rootElement);

// common js module loader - backend - node, express js
// const varName = require('package')
