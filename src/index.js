import { store, actions } from "./store";

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// actions.orderCake();
// actions.orderCake();
// actions.orderCake();
// actions.restokeCake(3);

// actions.orderIceCream();
// actions.orderIceCream();
// actions.orderIceCream();
// actions.restokeIceCream(3);

actions.fetchUsers();

// unsubscribe();