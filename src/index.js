import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/rootReducer';
import App from './App';
import { sagaWatcher } from './saga/cardsSaga';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, saga)));
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

saga.run(sagaWatcher);

ReactDOM.render(
  // eslint-disable-next-line
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root'),
);
