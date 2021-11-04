import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { cardsReducer } from './cardsReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  authentication: loginReducer,
  cards: cardsReducer,
  loading: loadingReducer,
});
