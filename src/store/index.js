import { createReducer, configureStore, createAction } from '@reduxjs/toolkit';
export const addUser = createAction('add_user');
export const deleteUser = createAction('delete_user');

const initialState = {
  users: [],
  count: 0
};
    
const reducer = createReducer(initialState, (builder) => {
  builder

  .addCase(addUser, (state, action) => {
    return {...state, users: [...state.users, action.payload]}
  })

  .addCase(deleteUser, (state) => {
    const newUsers = state.users.slice(0, state.users.length - 1)
    return {...state, users: newUsers}
  })

});

const store = configureStore({
  reducer: reducer,
});

export default store;