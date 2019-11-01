import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import * as ducks from './ducks';

const middleware = [
  thunk,
  createLogger(),
] as any[];

const reducers = combineReducers({
  ...ducks,
});

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);
