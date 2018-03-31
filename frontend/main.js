import App from "./react/app.jsx";
import React from 'react';
import ReactDOM from "react-dom"; 
import {browserRouter} from "react-router-dom";
import {Provider} from "react-redux";  
import store from "./redux/store.js"; 

console.log("line 7 inside main.js")

ReactDOM.render(
    // wrap the App in the Provider and pass in the store
    <Provider store={store}>
      <App />
    </Provider>
    ,document.getElementById('contents')
  );