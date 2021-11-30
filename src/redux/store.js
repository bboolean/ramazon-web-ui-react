import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  (state, action) => {
    if (action?.object) {
      return { ...state, ...action?.object };
    } else if (action?.fn) {
      return action.fn(state);
    } else {
      return state;
    }
  },
  {},
  composeWithDevTools()
);
