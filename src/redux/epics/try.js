import * as r from 'rxjs';
import * as o from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import action from '~/src/lib/action';

import * as R from 'ramda';

export const updatePath = (action$, state$) =>
  action$.pipe(
    ofType('updatePath'),
    o.filter((action) => R.equals(['search'], action?.object?.path)),
    o.switchMap(() =>
      ajax.getJSON(`https://api-v0.ramazon.snowfox.dev/products`).pipe(
        o.map((object) => object?.d),
        o.catchError((error) => {
          console.log('error: ', error);
          return of(error);
        })
      )
    ),
    o.map((data) => action('getProducts', { products: data }))
  );