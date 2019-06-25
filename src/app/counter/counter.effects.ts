import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, mergeMap, map } from 'rxjs/operators';

import * as fromCounterActions from './counter.actions';
import * as fromSpinner from './../spinner/progress.actions';


@Injectable()
export class CounterEffects {

    constructor(private actions$: Actions) { }


    @Effect({dispatch: false})
    loadAllArticles$: Observable<Action> = this.actions$.pipe(
        ofType(fromCounterActions.Initialise),
        tap(x => {
            console.log('My Effects ' + x.type);
        })
    );

    @Effect()
    incrementArticles$: Observable<Action> = this.actions$.pipe(
        ofType(fromCounterActions.Increment),
        map(() => fromSpinner.Loading())
    );

    @Effect()
    decrementArticles$: Observable<Action> = this.actions$.pipe(
        ofType(fromCounterActions.Decrement),
        map(() => fromSpinner.Loading())
    );

    @Effect()
    loadMovies$ = this.actions$
    .pipe(
      ofType(fromCounterActions.Reset),
      mergeMap(() => this.getAllItems()
        .pipe(
          map(value => fromCounterActions.Initialise({id: value}))
        ))
    );

    getAllItems() {
        return of(12345);
    }
}
