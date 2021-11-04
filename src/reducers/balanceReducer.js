const initialState = {
  points: 100,
};

const ADD_POINTS = 'ADD_POINTS';
const TAKE_POINTS = 'TAKE_POINTS';

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
