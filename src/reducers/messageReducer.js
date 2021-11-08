import {
  CLEAR_MESSAGE,
  SET_LOADING_ERROR,
  SET_LOSE_MESSAGE,
  SET_WON_MESSAGE,
} from '../actions/actionTypes';

const defaultState = {
  info: '',
};

const vonMessage = 'YOU WON!!!';
const loseMessage = 'YOU LOSE ;(';
export const errorMessage = 'SOMETHING WENT WRONG, PLEASE TRY AGAIN';

export const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING_ERROR:
      return { ...state, info: errorMessage };
    case SET_WON_MESSAGE:
      return { ...state, info: vonMessage };
    case SET_LOSE_MESSAGE:
      return { ...state, info: loseMessage };
    case CLEAR_MESSAGE:
      return { ...state, info: defaultState.info };
    default:
      return state;
  }
};
