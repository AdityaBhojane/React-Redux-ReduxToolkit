import { createStore } from "redux";
import todoReducer from "./todoReducer.js";


export const store = createStore(todoReducer);

store.subscribe(()=> console.log(store.getState()))
