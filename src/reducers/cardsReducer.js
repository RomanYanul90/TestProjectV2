import { CLEAR_CARDS_SET, FETCH_CARDS } from '../actions/actionTypes';

const initialState = {
  cards: [],
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, cards: action.payload };
    case CLEAR_CARDS_SET:
      return { ...state, cards: initialState.cards };
    default:
      return state;
  }
};
