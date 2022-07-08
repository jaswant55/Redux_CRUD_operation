import { createStore } from "redux";
import rootreducer from "./redux/reducers.js/main";


const store= createStore(
    rootreducer
)

export default store;   