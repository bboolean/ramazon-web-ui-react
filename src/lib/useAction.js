import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();

  return (a, b) =>
    b
      ? // This is a name, key, and value set
        dispatch({ type: a, object: b })
      : // This is when the first arg is a function
        dispatch({ type: a.name || '*update*', fn: a });
};
