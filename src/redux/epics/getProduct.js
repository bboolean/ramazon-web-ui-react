import * as r from 'rxjs';
import * as o from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import mkAction from '~/src/lib/mkAction';
import * as R from 'ramda';

export default (action$, state$) =>
  action$.pipe(
    ofType('updatePath'),
    o.filter((action) => R.test(/^\/products\/\w+$/, action?.uri)),
    o.switchMap((action) =>
      ajax
        .getJSON(
          `https://api-v0.ramazon.snowfox.dev/products/${action?.path?.[1]}`
        )
        .pipe(
          o.map((object) => object?.d?.[0]),
          o.map((data) => mkAction('getProduct', { product: data })),
          o.catchError((error) => {
            console.log('error: ', error);
            return of(error);
          })
        )
    )
  );
