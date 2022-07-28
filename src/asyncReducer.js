import produce from "immer";
import { FETCH_USER_REQUESTED, FETCH_USER_SUCCEEDED, FETCH_USER_FAILED } from "./asyncActions";

const initialUserState = {
    loading: false,
    users: null,
    error: ""
}

const userReducer = (state = initialUserState, { type, payload }) => {
    switch (type) {
        case FETCH_USER_REQUESTED:
            return produce(state, (draft) => {
                draft.loading = true;
            });
            break;

        case FETCH_USER_FAILED:
            return produce(state, (draft) => {
                draft.error = payload;
                draft.loading = false;
            });
            break;

        case FETCH_USER_SUCCEEDED:
            return produce(state, (draft) => {
                draft.users = payload;
                draft.loading = false;
            });
            break;

        default:
            return state;
            break;
    }
}

export { userReducer };