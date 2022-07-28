import thunkMiddleware from "redux-thunk"
import { createStore, combineReducers, bindActionCreators, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchUsers } from "./asyncActions";
import { userReducer } from "./asyncReducer";
import { cakeReducer, iceCreamReducer } from "./reducers";
import { orderCake, restokeCake, orderIceCream, restokeIceCream } from "./actions";

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    users: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware),
));

const actions = bindActionCreators({
    orderCake,
    restokeCake,
    orderIceCream,
    restokeIceCream,
    fetchUsers
}, store.dispatch);

export { store, actions };