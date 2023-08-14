import { ADD_USER, CLEAR_USERS } from './actions';

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, { ...action.payload, id: Math.random() }],
      };
    case CLEAR_USERS:
      return initialState;
    default:
      return state;
  }
};
