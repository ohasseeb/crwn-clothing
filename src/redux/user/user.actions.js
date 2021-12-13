export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',// got to make sure the action creators type iwth the reducers type expectation;
    payload: user
});