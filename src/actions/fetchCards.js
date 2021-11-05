export const fetchCards = () => async (dispatch) => {
  dispatch({ type: 'SHOW_LOADER' });
  // eslint-disable-next-line
  const cardsSet = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=2S,2D,2C,2H,3S,3D,3C,3H,4S,4D,4C,4H,5S,5D,5C,5H,6S,6D,6S,6H,7S,7D,7C,7H,8S,8D,8C,8H,9S,9D,9C,9H');
  const jsonCardsSet = await cardsSet.json();
  // eslint-disable-next-line no-undef
  const twoCardsSet = await fetch(`https://deckofcardsapi.com/api/deck/${jsonCardsSet.deck_id}/draw/?count=2`);
  const jsonTwoCardsSet = await twoCardsSet.json();
  dispatch({ type: 'HIDE_LOADER' });
  dispatch({ type: 'FETCH_CARDS', payload: jsonTwoCardsSet.cards });
};
