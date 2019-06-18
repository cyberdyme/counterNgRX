import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, switchMap, mergeMap, map, catchError } from 'rxjs/operators';

import { ActionTypes, Initialise } from './counter.actions';

@Injectable()
export class CounterEffects {

    constructor(private actions$: Actions) { }


    @Effect({dispatch: false})
    loadAllArticles$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.Initialise),
        tap(x => {
            console.log('My Effects ' + x.type);
        })
    );

    @Effect()
    loadMovies$ = this.actions$
    .pipe(
      ofType(ActionTypes.Reset),
      mergeMap(() => this.getAllItems()
        .pipe(
          map(value => new Initialise(value))
        ))
    );

    getAllItems() {
        return of(12345);
    }
}
