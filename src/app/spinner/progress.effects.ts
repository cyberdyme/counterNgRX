import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, delay } from 'rxjs/operators';

import { Loaded, Loading } from './progress.actions';


@Injectable()
export class ProgressEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    startProgress$ = this.actions$
    .pipe(
      ofType(Loading),
      mergeMap(() => this.getAllItems()
        .pipe(
          delay(500),
          map(() => Loaded())
        ))
    );

    getAllItems() {
        return of(12345);
    }
}
