import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer.js";


console.log("line 6 inside reducer.js");
const store = createStore(
    reducer,
    composeWithDevTools()
);
console.log("line 11 inside reducer.js");

export default store;

