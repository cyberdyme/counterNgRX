import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, interval } from 'rxjs';
import { mergeMap, map, delay, switchMap, take, tap, finalize } from 'rxjs/operators';

import { Loaded, Loading, Progress } from './progress.actions';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';


@Injectable()
export class ProgressEffects {

  constructor(private actions$: Actions) { }

  @Effect()
  startProgress$ = this.actions$
    .pipe(
      ofType(Loading),
      mergeMap(() => this.getAllItems()
        .pipe(
          delay(1000),
          map(() => Loaded())
        ))
    );

  @Effect()
  showProgress$ = this.actions$
    .pipe(
      ofType(Loading),
      switchMap(() => interval(10, animationFrame).pipe(
        take(10),
        map(x => Progress({ progress: 10 })))
      ));


  /*
  @Effect()
  completeProgress$ = this.showProgress$.pipe(finalize(() => Loaded()));
  */

  getAllItems() {
    return of(12345);
  }
}
