import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCounterActions from './counter.actions';
import * as fromCounterReducer from './counter.reducer';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
    count$: Observable<number>;

    constructor(private store: Store<fromCounterReducer.State>) {
        this.count$ = store.pipe(select(fromCounterReducer.getCounterCount));
    }

    ngOnInit() {
        this.store.dispatch(fromCounterActions.Initialise({id: 55}));
    }

    increment() {
        this.store.dispatch(fromCounterActions.Increment());
    }

    decrement() {
        this.store.dispatch(fromCounterActions.Decrement());
    }

    reset() {
        this.store.dispatch(fromCounterActions.Reset());
    }

    resetToOne() {
        this.store.dispatch(fromCounterActions.ResetToOne());
    }
}
