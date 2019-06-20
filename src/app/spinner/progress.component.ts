import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from '../counter/counter.reducer';
import { Store, select } from '@ngrx/store';
import { Loading } from './progress.actions';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(private store: Store<CounterState>) {
    this.loading$ = store.pipe(select('progress'));
  }

  ngOnInit() {
    // this.store.dispatch(new Initialise(55));
    this.store.dispatch(new Loading());
  }
}
