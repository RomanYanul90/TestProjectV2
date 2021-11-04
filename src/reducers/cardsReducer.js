// const initialState = {
//   cards: [
//     { code: '00', image: 'https://static7.depositphotos.com/1257959/746/v/600/depositphotos_7461846-stock-illustration-playing-card-back-side-60x90.jpg' },
//     { code: '00', image: 'https://static7.depositphotos.com/1257959/746/v/600/depositphotos_7461846-stock-illustration-playing-card-back-side-60x90.jpg' },
//   ],
// };

const initialState = {
  cards: [],
};

const FETCH_CARDS = 'FETCH_CARDS';

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
