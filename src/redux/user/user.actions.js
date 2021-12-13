import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,// got to make sure the action creators type iwth the reducers type expectation;
    payload: user
});