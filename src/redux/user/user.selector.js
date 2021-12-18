import {createSelector} from 'reselect';

const selectUser = state => state.user; 



export const selectCurrentUser = createSelector(
    //first argument can be an array
    [selectUser],
    (user) => user.currentUser
);