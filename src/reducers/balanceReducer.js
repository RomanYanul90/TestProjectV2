import { ADD_POINTS, TAKE_POINTS } from '../actions/actionTypes';

const initialState = {
  points: 100,
};

export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINTS:
      return { ...state, points: state.points + action.payload };
    case TAKE_POINTS:
      return { ...state, points: state.points - action.payload };
    default:
      return state;
  }
};
