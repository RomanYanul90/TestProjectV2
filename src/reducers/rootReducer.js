import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { cardsReducer } from './cardsReducer';
import { loadingReducer } from './loadingReducer';
import { balanceReducer } from './balanceReducer';

export const rootReducer = combineReducers({
  authentication: loginReducer,
  cards: cardsReducer,
  loading: loadingReducer,
  balance: balanceReducer,
});
