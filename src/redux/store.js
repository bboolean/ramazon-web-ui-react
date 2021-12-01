import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';
import * as R from 'ramda';

const epicMiddleware = createEpicMiddleware();

export default createStore(
  (state, action) => {
    if ('@@INIT' === action?.type) {
      return state;
    } else if (action?.fn) {
      return action.fn(state);
    } else {
      return { ...state, ...R.omit(['type'], action) };
    }
  },
  {},
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epics);
