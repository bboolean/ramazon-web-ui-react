import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();

  return (fn) => dispatch({ type: 'UPDATE', fn });
};
