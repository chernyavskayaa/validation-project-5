import { userReducer } from '../reducer';
import { ADD_USER } from '../actions';

describe('userReducer', () => {
  it('should handle ADD_USER correctly', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    const initialState = {
      users: [],
    };
    const newUser = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      message: 'Hello World',
      id: 0.5,
    };
    const action = {
      type: ADD_USER,
      payload: newUser,
    };
    const expectedState = {
      users: [newUser],
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });
});
