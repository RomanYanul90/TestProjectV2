const initialState = {
  cards: [],
};

const FETCH_CARDS = 'FETCH_CARDS';

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS: {
      return { ...state, cards: action.payload };
    }
    default: return state;
  }
};
