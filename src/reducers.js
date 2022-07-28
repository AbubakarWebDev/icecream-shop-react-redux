import produce from "immer";
import { CAKE_ORDERED, CAKE_RESTOCKED, ICECREAM_ORDERED, ICECREAM_RESTOCKED } from "./actions";

const initialCakeState = {
    numberOfCakes: 10,
}

const cakeReducer = (state = initialCakeState, { type, payload }) => {
    switch (type) {
        case CAKE_ORDERED:
            return produce(state, (draft) => {
                draft.numberOfCakes = draft.numberOfCakes - payload.qty
            })
            break;

        case CAKE_RESTOCKED:
            return produce(state, (draft) => {
                draft.numberOfCakes = draft.numberOfCakes + payload.qty
            })
            break;

        default:
            return state;
            break;
    }
}

const initialIceCreamState = {
    numberOfIceCream: 10,
}

const iceCreamReducer = (state = initialIceCreamState, { type, payload }) => {
    switch (type) {
        case ICECREAM_ORDERED:
            return produce(state, (draft) => {
                draft.numberOfIceCream = draft.numberOfIceCream - payload.qty
            })
            break;

        case ICECREAM_RESTOCKED:
            return produce(state, (draft) => {
                draft.numberOfIceCream = draft.numberOfIceCream + payload.qty
            })
            break;

        default:
            return state;
            break;
    }
}

export {
    cakeReducer,
    iceCreamReducer
};