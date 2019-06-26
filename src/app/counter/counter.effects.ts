import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, mergeMap, map, switchMap } from 'rxjs/operators';

import * as fromCounterActions from './counter.actions';
import * as fromSpinner from './../spinner/progress.actions';


@Injectable()
export class CounterEffects {

    constructor(private actions$: Actions) { }

    @Effect({ dispatch: false })
    initialiseCounter$: Observable<Action> = this.actions$.pipe(
        ofType(fromCounterActions.Initialise),
        tap(x => {
            console.log('My Effects ' + x.type);
        })
    );

    @Effect()
    incrementCounter$: Observable<Action> = this.actions$.pipe(
        ofType(fromCounterActions.Increment),
        map(() => fromSpinner.Loading())
    );

    @Effect()
    decrementCounter$: Observable<Action> = this.actions$.pipe(
        ofType(fromCounterActions.Decrement),
        map(() => fromSpinner.Loading())
    );

    @Effect()
    resetCounter$ = this.actions$
        .pipe(
            ofType(fromCounterActions.Reset),
            mergeMap(() => this.getAllItems()
                .pipe(
                    switchMap(value => [
                        fromSpinner.Loading(),
                        fromCounterActions.Initialise({ id: value })])
                ))
        );

    @Effect()
    resetToZeroCounter$: Observable<Action> = this.actions$.pipe(
        ofType(fromCounterActions.ResetToZero),
        map(() => fromSpinner.Loading())
    );

    getAllItems() {
        const min = -128;
        const max = 128;
        const random =  Math.trunc(Math.random() * (+max - +min) + +min);
        return of(random);
    }
}
