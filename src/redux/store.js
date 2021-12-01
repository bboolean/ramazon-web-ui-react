import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';

const epicMiddleware = createEpicMiddleware();

export default createStore(
  (state, action) => {
    if (action?.object) {
      return { ...state, ...R.omit(['type'], action) };
    } else if (action?.fn) {
      return action.fn(state);
    } else {
      return state;
    }
  },
  {},
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epics);
