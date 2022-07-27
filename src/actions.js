const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: {
            quantity: 1,
        }
    };
}

export { CAKE_ORDERED, orderCake };