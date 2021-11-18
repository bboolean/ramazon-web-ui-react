import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  (state, action) => {
    return action.fn ? action.fn(state) : state;
  },
  {},
  composeWithDevTools()
);
