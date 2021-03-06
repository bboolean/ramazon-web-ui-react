import { catchError } from 'rxjs/operators';
import { merge } from 'rxjs';
import * as R from 'ramda';
import getProducts from './epics/getProducts';
import getProduct from './epics/getProduct';
import clearProduct from './epics/clearProduct';

const combineEpics =
  (...epics) =>
  (...args) =>
    merge(
      ...epics.map((epic) =>
        epic(...args).pipe(
          catchError((error, source) => {
            setTimeout(() => {
              throw error;
            }, 0);
            return source;
          })
        )
      )
    );

const epics = combineEpics(getProducts, getProduct, clearProduct);

export default epics;
