import { useSelector, useDispatch } from 'react-redux';
import mkAction from './mkAction';

export default () => {
  const dispatch = useDispatch();

  return (...args) => dispatch(mkAction(...args));
};
