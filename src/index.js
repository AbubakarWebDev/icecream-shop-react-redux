import { store } from "./store";
import { orderCake } from "./actions";

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(orderCake());

unsubscribe();