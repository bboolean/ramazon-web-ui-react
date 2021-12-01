import * as r from 'rxjs';
import * as o from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import mkAction from '~/src/lib/action';
import * as R from 'ramda';

export default (action$, state$) =>
  action$.pipe(
    ofType('updatePath'),
    o.filter((action) => R.not(R.test(/^\/products\/\w+$/, action?.uri))),
    o.mapTo(mkAction('clearProduct', { product: {} }))
  );
