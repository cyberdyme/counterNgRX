import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset, Initialise } from './counter.actions';
import * as fromCounter from './counter.reducer';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
    count$: Observable<number>;

    constructor(private store: Store<fromCounter.State>) {
        this.count$ = store.pipe(select(fromCounter.getCounterCount));
    }

    ngOnInit() {
        this.store.dispatch(Initialise({id: 55}));
    }

    increment() {
        this.store.dispatch(Increment());
    }

    decrement() {
        this.store.dispatch(Decrement());
    }

    reset() {
        this.store.dispatch(Reset());
    }
}
