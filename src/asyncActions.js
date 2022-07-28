import axios from "axios";

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

function fetchUsersRequest() {
    return {
        type: FETCH_USER_REQUESTED
    };
}

function fetchUsersSuccess(users) {
    return {
        type: FETCH_USER_SUCCEEDED,
        payload: users
    };
}

function fetchUsersFailed(error) {
    return {
        type: FETCH_USER_FAILED,
        payload: error
    };
}

function fetchUsers() {
    return function (dispatch) {
        dispatch(fetchUsersRequest())

        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            const users = response.data.map((user) => user.id);
            dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
            dispatch(fetchUsersFailed(error.message));
        })
    }
}

export { 
    fetchUsers, 
    fetchUsersRequest, 
    fetchUsersSuccess, 
    fetchUsersFailed, 
    FETCH_USER_REQUESTED, 
    FETCH_USER_SUCCEEDED, 
    FETCH_USER_FAILED 
};