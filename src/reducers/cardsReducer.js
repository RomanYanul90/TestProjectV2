const initialState = {
  cards: [],
};

const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARDS_WITH_SAGA = 'FETCH_CARDS_WITH_SAGA';

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, cards: action.payload };
    case 'CLEAR_CARDS_SET':
      return { ...state, cards: initialState.cards };
    default:
      return state;
  }
};

export const fetchCardsWithSaga = () => ({
  action: FETCH_CARDS_WITH_SAGA,
});
