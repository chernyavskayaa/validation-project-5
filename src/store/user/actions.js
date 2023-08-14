export const ADD_USER = 'ADD_USER';
export const CLEAR_USERS = 'CLEAR_USERS';

export const addUser = (userData) => ({
  type: ADD_USER,
  payload: userData,
});

export const clearUsers = () => ({
  type: CLEAR_USERS,
});
