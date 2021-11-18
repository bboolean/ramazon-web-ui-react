import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useAction from '~/src/lib/useAction.js';
import getUsers from './redux/getUsers';

export default function Counter() {
  const count = useSelector((state) => state?.value ?? 0);
  const action = useAction();

  const upCounter = (state) => ({ ...state, value: (state?.value ?? 0) + 1 });

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => action(upCounter)}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => action(upCounter)}>
          Decrement
        </button>

        <button aria-label="Decrement value" onClick={() => getUsers()}>
          Decrement1
        </button>
      </div>
    </div>
  );
}
