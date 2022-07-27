import { CAKE_ORDERED } from "./actions";

const initialState = {
    numberOfCakes: 10,
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload.quantity
            }
            break;

        default: 
            return state;
            break;
    }
}

export { cakeReducer };