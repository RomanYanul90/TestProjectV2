const defaultState = {
  info: '',
};

const SET_WON_MESSAGE = 'SET_WON_MESSAGE';
const SET_LOSE_MESSAGE = 'SET_LOSE_MESSAGE';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
const vonMessage = 'YOU WON!!!';
const loseMessage = 'YOU LOSE ;(';

export const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
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
