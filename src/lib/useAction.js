import { useSelector, useDispatch } from 'react-redux';
import action from './action';

export default () => {
  const dispatch = useDispatch();

  return (...args) => dispatch(action(...args));
};
