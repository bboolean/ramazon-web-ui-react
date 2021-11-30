import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of, tap } from 'rxjs';
import store from './store';
import action from '~/src/lib/action';

export default () =>
  // of(JSON.parse(a))
  ajax
    .getJSON(`https://api-v0.ramazon.snowfox.dev/products`)
    .pipe(
      map((object) => object?.d),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      }),

      tap(console.log)
    )
    .subscribe((o) => action((s) => ({ ...s, products: o })));
