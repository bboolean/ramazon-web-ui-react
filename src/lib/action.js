import store from '../redux/store';

export default (fn) =>
  store.dispatch({ type: 'UPDATE', fn, fn2: fn.toString() });
