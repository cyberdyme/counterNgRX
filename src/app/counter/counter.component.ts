import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset, Initialise } from './counter.actions';
import { CounterState } from './counter.reducer';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
    count$: Observable<number>;

    constructor(private store: Store<CounterState>) {
        this.count$ = store.pipe(select('counter'));
    }

    ngOnInit() {
        this.store.dispatch(new Initialise(55));
    }

    increment() {
        this.store.dispatch(new Increment());
    }

    decrement() {
        this.store.dispatch(new Decrement());
    }

    reset() {
        this.store.dispatch(new Reset());
    }
}
