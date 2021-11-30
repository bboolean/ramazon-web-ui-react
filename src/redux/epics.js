import { catchError } from 'rxjs/operators';
import { merge } from 'rxjs';
import * as R from 'ramda';
import * as try0 from './epics/try';

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

const epics = combineEpics(...R.values(try0));

export default epics;
