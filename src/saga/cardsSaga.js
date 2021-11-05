import { takeEvery, put, call } from 'redux-saga/effects';
// import { fetchCardsWithSaga } from '../reducers/cardsReducer';
import { FETCH_CARDS_WITH_SAGA } from '../reducers/cardsReducer';

async function fetchCards() {
  // eslint-disable-next-line
  const cardsSet = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=2S,2D,2C,2H,3S,3D,3C,3H,4S,4D,4C,4H,5S,5D,5C,5H,6S,6D,6S,6H,7S,7D,7C,7H,8S,8D,8C,8H,9S,9D,9C,9H');
  const jsonCardsSet = await cardsSet.json();
  // eslint-disable-next-line
  const twoCardsSet = await fetch(`https://deckofcardsapi.com/api/deck/${jsonCardsSet.deck_id}/draw/?count=2`);
  return twoCardsSet.json();
}

function* sagaWorker() {
  yield put({ type: 'SHOW_LOADER' });
  const jsonTwoCardsSet = yield call(fetchCards);
  yield put({ type: 'FETCH_CARDS', payload: jsonTwoCardsSet.cards });
  yield put({ type: 'HIDE_LOADER' });
}

export function* sagaWatcher() {
  yield takeEvery(FETCH_CARDS_WITH_SAGA, sagaWorker);
}
