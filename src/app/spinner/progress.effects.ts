import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, switchMap, mergeMap, map, delay, catchError } from 'rxjs/operators';

import { ActionTypes, Loaded } from './progress.actions';


@Injectable()
export class ProgressEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    startProgress$ = this.actions$
    .pipe(
      ofType(ActionTypes.Loading),
      mergeMap(() => this.getAllItems()
        .pipe(
          delay(3000),
          map(value => new Loaded())
        ))
    );

    getAllItems() {
        return of(12345);
    }
}
