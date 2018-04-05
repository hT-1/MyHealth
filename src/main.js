import React from 'react';
import ReactDOM from "react-dom"; 
import {Provider} from "react-redux";  
import App from "./app.jsx";
import store from "./store.js"; 


ReactDOM.render(
    // wrap the App in the Provider and pass in the store
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('contents')
  );