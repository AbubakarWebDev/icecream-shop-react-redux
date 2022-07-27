import { createStore } from "redux";
import { cakeReducer } from "./reducers";

const store = createStore(cakeReducer);

export { store };
