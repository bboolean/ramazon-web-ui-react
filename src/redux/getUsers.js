import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import store from './store';
import action from '~/src/lib/action';

export default () =>
  ajax(`https://api.github.com/users?per_page=5`)
    .pipe(
      map((userResponse) => console.log('users: ', userResponse)),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      })
    )
    .subscribe((o) => action((s) => ({ ...s, products: o })));
