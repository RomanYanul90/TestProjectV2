import { LOG_IN, LOG_OUT } from '../actions/actionTypes';

const defaultState = {
  isAuth: false,
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isAuth: true };
    case LOG_OUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
